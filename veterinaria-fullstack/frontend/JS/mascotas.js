const listaMascotas = document.getElementById('lista-mascotas');
const tipo = document.getElementById('tipo');
const nombre = document.getElementById('nombre');
const dueno = document.getElementById('dueno');
const indice =document.getElementById('indice');
const form = document.getElementById('form');
const btnguardar = document.getElementById('btn-guardar');
const modalh5 = document.getElementById('exampleModalLongTitle');

let mascotas =[
    {
        tipo: "Gato",
        nombre: "manchas",
        dueno: "Maria"
    },
    {
      tipo: "Perro",
      nombre: "Tom",
      dueno: "Blanca"
  }
];

function listarMascotas() {
    let htmlMascotas = mascotas.map((mascota, index)=>` <tr>
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
  </tr>`).join("");
  listaMascotas.innerHTML= htmlMascotas;
  Array.from(document.getElementsByClassName('editar')).forEach((botonEditar,index)=>botonEditar.onclick = editar(index))
  Array.from(document.getElementsByClassName('eliminar')).forEach((botonEliminar,index)=>botonEliminar.onclick = eliminar(index))
}

function enviarDatos(evento) {
  evento.preventDefault();
  const datos = {
    tipo: tipo.value,
    nombre: nombre.value,
    dueno: dueno.value
};
  const accion = btnguardar.innerHTML;
  switch(accion){
    case 'Editar':
      mascotas[indice.value] = datos;
     break;
      default:
        mascotas.push(datos);
      break;
  }
    listarMascotas();
    resetModal();
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
  return function clicEnEliminar(){
    mascotas = mascotas.filter((mascota, indiceMascota)=>indiceMascota !== index);
    listarMascotas();
  }
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
  }
}






 listarMascotas();

 form.onsubmit = enviarDatos;
 btnguardar.onclick = enviarDatos;