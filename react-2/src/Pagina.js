import React, {Component} from 'react';
import ActionsMenu from './componentes/ActionsMenu';
import Nav from './componentes/Nav';
import Tabla from "./componentes/Tabla";
import Modal from "./componentes/Modal"

class Pagina extends Component{
    constructor(props){
      super(props);
    this.state={
      mostrarModal: false, 
    };
  }

  cambiarModal = () => {
    this.setState({mostrarModal: !this.state.mostrarModal});
  };

  render(){
    return(
      <div classNameName="container">
        <Nav/>
        <ActionsMenu cambiarModal = {this.cambiarModal}/>
        <Tabla/>
        {this.state.mostrarModal && <Modal cambiarModal = {this.cambiarModal}/>}
      </div>
      );
  }
    
}

export default Pagina; 