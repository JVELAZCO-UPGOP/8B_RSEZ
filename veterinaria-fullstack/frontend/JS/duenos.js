const listaDuenos = document.getElementById('lista-duenos');
const nombre = document.getElementById('nombre');
const documento = document.getElementById('documento');
const apellido = document.getElementById('apellido');
const indice =document.getElementById('indice');
const form = document.getElementById('form');
const btnguardar = document.getElementById('btn-guardar');
const modalh5 = document.getElementById('exampleModalLongTitle');
const url = 'http://localhost:5000/duenos';

let duenos = [];

async function listarDuenos() {
  try {
    const respuesta = await fetch(url);
  const duenosDelServer = await respuesta.json();
  if (Array.isArray(duenosDelServer)){
    duenos = duenosDelServer;
  }
  if(duenos.length > 0){
  const htmlDuenos = duenos.map((dueno, index)=>` <tr>
    <th scope="row">${index}</th>
    <td>${dueno.documento}</td>
    <td>${dueno.nombre}</td>
    <td>${dueno.apellido}</td>
    <td>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-info editar"><i class="fas fa-edit"></i></button>
        <button type="button" class="btn btn-danger eliminar"><i class="fas fa-trash-alt"></i></button>
      </div>
    </td>
  </tr>`).join("");
  listaDuenos.innerHTML= htmlDuenos;
  Array.from(document.getElementsByClassName('editar')).forEach(
    (botonEditar,index)=>(botonEditar.onclick = editar(index))
  );
  Array.from(document.getElementsByClassName('eliminar')).forEach(
    (botonEliminar,index)=>(botonEliminar.onclick = eliminar(index))
  );
  return;
  }
  listaDuenos.innerHTML= `<tr>
    <td colspan="5">No hay dueñ@s</td>
  </tr>`;
  } catch (error) {
    console.log({error});
    $(".alert").show();
  }
}

async function enviarDatos(evento) {
  evento.preventDefault();
  try {
    const datos = {
      nombre: nombre.value,
      apellido: apellido.value,
      documento: documento.value
    };
    const accion = btnguardar.innerHTML;
    let urlEnvio = url;
    let method = "POST";
    if(accion == "Editar"){
      urlEnvio +=  `/${indice.value}`;
      method = "PUT";
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
        listarDuenos();
        resetModal();
      }
  } catch (error) {
    console.log({error});
    $(".alert").show();
  }
}

function resetModal(){
    indice.value = '';
    nombre.value = '';
    apellido.value= '';
    documento.value = '';
    btnguardar.innerHTML='Crear';
    modalh5.innerHTML='Nuevo Dueño';
}

function eliminar(index){
  const urlEnvio = `${url}/${index}`;
  return async function clicEnEliminar(){
    try {
      const respuesta = await fetch(urlEnvio, {
        method: 'DELETE',
        mode: "cors",
      });
        if(respuesta.ok){
          listarDuenos();
        }
    } catch (error) {
      console.log({error});
      $(".alert").show();
    }
  }
}

function editar(index){
  return function handler(){
      btnguardar.innerHTML = "Editar"
      modalh5.innerHTML="Editar Dueños"
    $('#exampleModalCenter').modal('toggle')
    const dueno = duenos[index];
    indice.value = index;
    nombre.value = dueno.nombre;
    apellido.value= dueno.apellido;
    documento.value = dueno.documento;
  }
}






listarDuenos();

 form.onsubmit = enviarDatos;
 btnguardar.onclick = enviarDatos;