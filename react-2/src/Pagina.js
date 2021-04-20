import React from 'react';
import ActionsMenu from './componentes/actions-menu';
import Nav from './componentes/Nav';
import Tabla from "./componentes/Tabla";

function Pagina(){
    return(
    <div classNameName="container">
      <Nav/>
      <ActionsMenu/>
      <Tabla/>
    </div>
    );
}

export default Pagina; 