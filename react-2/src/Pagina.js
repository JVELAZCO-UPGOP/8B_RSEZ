import React from 'react';
import ActionsMenu from './componentes/ActionsMenu';
import Nav from './componentes/Nav';
import Tabla from "./componentes/Tabla";
import Modal from "./componentes/Modal";

function Pagina(){
    return(
    <div classNameName="container">
      <Nav/>
      <ActionsMenu/>
      <Tabla/>
      <Modal/>
    </div>
    );
}

export default Pagina; 