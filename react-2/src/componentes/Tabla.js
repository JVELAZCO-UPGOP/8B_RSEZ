import React from 'react';

function Tabla(){
    return (
        <table class="table table-hover">
            <thead class ="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tipo</th>
                <th scope="col">Nombre</th>
                <th scope="col">Dueño</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody id="lista-mascotas">
              
            </tbody>
          </table>
    );
}

export default Tabla;