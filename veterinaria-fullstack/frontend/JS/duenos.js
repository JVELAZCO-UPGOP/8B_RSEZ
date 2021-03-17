const listaDuenos = document.getElementById('lista-duenos');
const tipo = document.getElementById('pais');
const nombre = document.getElementById('nombre');
const identificacion = document.getElementById('identificacion');
const apellido = document.getElementById('apellido');
const indice =document.getElementById('indice');
const form = document.getElementById('form');
const btnguardar = document.getElementById('btn-guardar');
const modalh5 = document.getElementById('exampleModalLongTitle');

let duenos =[
    {
        nombre: "Emiliano",
        apellido: "Soto",
        pais: "Colombia",
        identificacion: "1234567890"
    },
    {
        nombre: "Laura",
        apellido: "Fuentes",
        pais: "Mexico",
        identificacion: "1234567810"
  }
];

function listarDuenos() {
    let htmlDuenos = duenos.map((dueno, index)=>` <tr>
    <th scope="row">${index}</th>
    <td>${dueno.identificacion}</td>
    <td>${dueno.pais}</td>
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
  Array.from(document.getElementsByClassName('editar')).forEach((botonEditar,index)=>botonEditar.onclick = editar(index))
  Array.from(document.getElementsByClassName('eliminar')).forEach((botonEliminar,index)=>botonEliminar.onclick = eliminar(index))
}

function enviarDatos(evento) {
  evento.preventDefault();
  const datos = {
        nombre: nombre.value,
        apellido: apellido.value,
        pais: pais.value,
        identificacion: identificacion.value
};
  const accion = btnguardar.innerHTML;
  switch(accion){
    case 'Editar':
      duenos[indice.value] = datos;
     break;
      default:
        duenos.push(datos);
      break;
  }
  listarDuenos();
    resetModal();
}

function resetModal(){
    indice.value = '';
    nombre.value = '';
    apellido.value= '';
    pais.value= '';
    identificacion.value = '';
    btnguardar.innerHTML='Crear';
    modalh5.innerHTML='Nuevo Dueño';
}

function eliminar(index){
  return function clicEnEliminar(){
    duenos = duenos.filter((dueno, indiceDueno)=>indiceDueno !== index);
    listarDuenos();
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
    pais.value= dueno.pais;
    identificacion.value = dueno.identificacion;
  }
}






listarDuenos();

 form.onsubmit = enviarDatos;
 btnguardar.onclick = enviarDatos;