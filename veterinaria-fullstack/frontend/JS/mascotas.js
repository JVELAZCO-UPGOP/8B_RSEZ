const listaMascotas = document.getElementById('lista-mascotas');
const tipo = document.getElementById('tipo');
const nombre = document.getElementById('nombre');
const dueno = document.getElementById('dueno');
const indice =document.getElementById('indice');
const form = document.getElementById('form');
const btnguardar = document.getElementById('btn-guardar');
const modalh5 = document.getElementById('exampleModalLongTitle');
const url = "https://veterinaria-backend-orpin.vercel.app/mascotas";

let mascotas =[];

async function listarMascotas() {
  try {
    const respuesta = await fetch(url);
    const mascotasDelServer = await respuesta.json();
    if (Array.isArray(mascotasDelServer)){
      mascotas = mascotasDelServer;
    } 
    if(mascotas.length > 0){
      const htmlMascotas = mascotas.map((mascota, index)=>` <tr>
      <th scope="row">${index}</th>
      <td>${mascota.tipo}</td>
     <td>${mascota.nombre}</td>
      <td>${mascota.dueno}</td>
      <td>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-info editar"><i class="fas fa-edit"></i></button>
          <button type="button" class="btn btn-danger eliminar"><i class="fas fa-trash-alt"></i></button>
        </div>
      </td>
      </tr>`)
      .join("");
      listaMascotas.innerHTML= htmlMascotas;
      Array.from(document.getElementsByClassName('editar')).forEach(
        (botonEditar,index)=>botonEditar.onclick = editar(index)
      );
      Array.from(document.getElementsByClassName('eliminar')).forEach(
        (botonEliminar,index)=>botonEliminar.onclick = eliminar(index)
      );
      return;
    }
    listaMascotas.innerHTML= `<tr>
    <td colspan="5">No hay mascotas</td>
    </tr>`;
  }catch (error) {
    console.log({error});
    $(".alert").show();
  } 
}

async function enviarDatos(evento) {
  evento.preventDefault();
  try {
    const datos = {
      tipo: tipo.value,
      nombre: nombre.value,
      dueno: dueno.value
    };
    let method = "POST";
    let urlEnvio = url;
    const accion = btnguardar.innerHTML;
    if (accion === "Editar") {
      method = "PUT";
      mascotas[indice.value] = datos;
      urlEnvio = `${url}/${indice.value}`;
    }
    const respuesta = await fetch(urlEnvio, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
      mode: "cors",
    });
      if(respuesta.ok){
        listarMascotas();
        resetModal();
      }
  } catch (error) {
    console.log({error});
    $(".alert").show();
  }
}

function resetModal(){
  nombre.value= '';
    dueno.value= '';
    tipo.value = '';
    indice.value= '';
    btnguardar.innerHTML='Crear';
    modalh5.innerHTML='Guardar';
}

function eliminar(index){
  const urlEnvio = `${url}/${index}`;
  return async function clicEnEliminar(){
    try {
      const respuesta = await fetch(urlEnvio, {
        method: 'DELETE',
      });
        if(respuesta.ok){
          listarMascotas();
          resetModal();
        }
    } catch (error) {
      console.log({error});
      $(".alert").show();
    }
  };
}



function editar(index){
  return function handler(){
      btnguardar.innerHTML = "Editar"
      modalh5.innerHTML="Editar Mascota"
    $('#exampleModalCenter').modal('toggle')
    const mascota = mascotas[index];
    nombre.value= mascota.nombre;
    dueno.value= mascota.dueno;
    tipo.value = mascota.tipo;
    indice.value= index;
  };
}






 listarMascotas();



 form.onsubmit = enviarDatos;
 btnguardar.onclick = enviarDatos;