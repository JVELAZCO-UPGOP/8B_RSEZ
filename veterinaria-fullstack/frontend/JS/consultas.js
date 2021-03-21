const listaConsultas = document.getElementById('lista-consultas');
const url = 'http://localhost:5000';
const mascota = document.getElementById("mascota");
const veterinaria = document.getElementById("veterinaria");
const hsitoria = document.getElementById("historia");
const diagnostico = document.getElementById("diagnostico");
const btnguardar = document.getElementById('btn-guardar');
const indice = document.getElementById('indice');
const modalh5 = document.getElementById('exampleModalLongTitle');

let consulta = [];
let mascotas = [];
let veterinarias = [];

async function listarConsultas(){
    const entidad = "consultas";
    try {
        const respuesta = await fetch(`${url}/${entidad}`);
        const consultaDelServidor = await respuesta.json();
        if (Array.isArray(consultaDelServidor)) {
            consultas = consultaDelServidor;    
        }
        if(respuesta.ok){
            const htmlConsultas = consultas.map((consulta, index)=>` <tr>
                <th scope="row">${index}</th>
                <td>${consulta.mascota.nombre}</td>
                <td>${consulta.veterinaria.nombre} ${consulta.veterinaria.apellido}</td>
                <td>${consulta.diagnostico}</td>
                <td>${consulta.fechaCreacion}</td>
                <td>${consulta.fechaEdicion}</td>
                <td>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button class"editar" type="button" class="btn btn-info editar"><i class="fas fa-edit"></i></button>
                </div>
                </td>
                </tr>`).join("");
            listaConsultas.innerHTML = htmlConsultas;
            Array.from(document.getElementsByClassName('editar')).forEach(
                (botonEditar,index)=>(botonEditar.onclick = editar(index))
            );
        }
    } catch (error) {
        throw error; 
    }
}

listarConsultas();

async function listarMascotas(){
    const entidad = "mascotas";
    try {
        const respuesta = await fetch(`${url}/${entidad}`);
        const mascotasDelServidor = await respuesta.json();
        if (Array.isArray(mascotasDelServidor)) {
            mascotas = mascotasDelServidor;    
        }
        if(respuesta.ok){
            mascotas.forEach((_mascota, index)=>{
                const optionActual = document.createElement("option");
                optionActual.innerHTML = _mascota.nombre;
                optionActual.value = index;
                mascota.appendChild(optionActual);
            });
        }
    } catch (error) {
        throw error; 
    }
}

listarMascotas();

async function listarVeterinarias(){
    const entidad = "veterinarias";
    try {
        const respuesta = await fetch(`${url}/${entidad}`);
        const veterinariasDelServidor = await respuesta.json();
        if (Array.isArray(veterinariasDelServidor)) {
            veterinarias = veterinariasDelServidor;    
        }
        if(respuesta.ok){
            veterinarias.forEach((_veterinaria, index)=>{
                const optionActual = document.createElement("option");
                optionActual.innerHTML = `${_veterinaria.nombre} ${_veterinaria.apellido}`;
                optionActual.value = index;
                veterinaria.appendChild(optionActual);
            });
        }
    } catch (error) {
        throw error; 
    }
}

function editar(index){
    return function handler(){
        btnguardar.innerHTML = "Editar";
      $('#exampleModalCenter').modal('toggle')
      const consulta = consultas[index];
      indice.value = index;
      mascota.value = consulta.mascota.id;
      veterinaria.value = consulta.veterinaria.id;
      historia.value = consulta.historia;
      diagnostico.value = consulta.diagnostico;
    }
  }

listarVeterinarias();

