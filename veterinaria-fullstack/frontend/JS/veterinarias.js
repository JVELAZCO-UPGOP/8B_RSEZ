const listaVeterinarias = document.getElementById('lista-veterinarias');
const tipo = document.getElementById('pais');
const nombre = document.getElementById('nombre');
const identificacion = document.getElementById('identificacion');
const apellido = document.getElementById('apellido');
const indice =document.getElementById('indice');
const form = document.getElementById('form');
const btnguardar = document.getElementById('btn-guardar');
const modalh5 = document.getElementById('exampleModalLongTitle');

let veterinarias =[
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

function listarVeterinarias() {
    let htmlVeterinarias = veterinarias.map((veterinaria, index)=>` <tr>
    <th scope="row">${index}</th>
    <td>${veterinaria.identificacion}</td>
    <td>${veterinaria.pais}</td>
    <td>${veterinaria.nombre}</td>
    <td>${veterinaria.apellido}</td>
    <td>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-info editar"><i class="fas fa-edit"></i></button>
        <button type="button" class="btn btn-danger eliminar"><i class="fas fa-trash-alt"></i></button>
      </div>
    </td>
  </tr>`).join("");
  listaVeterinarias.innerHTML= htmlVeterinarias;
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
      veterinarias[indice.value] = datos;
     break;
      default:
        veterinarias.push(datos);
      break;
  }
  listarVeterinarias();
    resetModal();
}

function resetModal(){
    indice.value = '';
    nombre.value = '';
    apellido.value= '';
    pais.value= '';
    identificacion.value = '';
    btnguardar.innerHTML='Crear';
    modalh5.innerHTML='Nuevo Veterinario';
}

function eliminar(index){
  return function clicEnEliminar(){
    veterinarias = veterinarias.filter((veterinaria, indiceVeterinaria)=>indiceVeterinaria !== index);
    listarVeterinarias();
  }
}

function editar(index){
  return function handler(){
      btnguardar.innerHTML = "Editar"
      modalh5.innerHTML="Editar Veterinari@"
    $('#exampleModalCenter').modal('toggle')
    const veterinaria = veterinarias[index];
    indice.value = index;
    nombre.value = veterinaria.nombre;
    apellido.value= veterinaria.apellido;
    pais.value= veterinaria.pais;
    identificacion.value = veterinaria.identificacion;
  }
}






 listarVeterinarias();

 form.onsubmit = enviarDatos;
 btnguardar.onclick = enviarDatos;