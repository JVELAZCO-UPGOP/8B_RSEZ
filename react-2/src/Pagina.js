import React, {Component} from 'react';
import ActionsMenu from './componentes/ActionsMenu';
import Nav from './componentes/Nav';
import Tabla from "./componentes/Tabla";
import Modal from "./componentes/Modal"
import {listarEntidad} from "./servicio";

class Pagina extends Component{
    constructor(props){
      super(props);
    this.state={
      mostrarModal: false, 
      entidades: [],
    };
  }

  cambiarModal = () => {
    this.setState({mostrarModal: !this.state.mostrarModal});
  };

  listar = async ()=> {
    const {entidad} = this.props;
    const entidades = await listarEntidad({entidad});
    this.setState({entidades});
  };

  componentDidMount(){
    this.listar();
  }

  render(){
    const {titulo = "Pagina sin titulo"} = this.props;
    return(
      <div classNameName="container">
        <Nav/>
        <ActionsMenu cambiarModal = {this.cambiarModal} titulo={titulo}/>
        <Tabla entidades ={this.state.entidades} />
        {this.state.mostrarModal && <Modal cambiarModal = {this.cambiarModal}/>}
      </div>
      );
  }
    
}

export default Pagina; 