const listaConsultas = document.getElementById('lista-consultas');
const url = 'http://localhost:5000/consultas'

let consulta = [];

async function listarConsultas(){
    try {
        const respuesta = await fetch(url);
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
                    <button type="button" class="btn btn-info editar"><i class="fas fa-edit"></i></button>
                </div>
                </td>
                </tr>`).join("");
            listaConsultas.innerHTML = htmlConsultas;
        }
    } catch (error) {
        throw error; 
    }
}

listarConsultas();

