import React, {Component} from 'react';
import ActionsMenu from './componentes/ActionsMenu';
import Nav from './componentes/Nav';
import Tabla from "./componentes/Tabla";
import Modal from "./componentes/Modal"
import {listarEntidad , crearEditarEntidad} from "./servicio";

class Pagina extends Component{
    constructor(props){
      super(props);
    this.state={
      mostrarModal: false, 
      entidades: [],
      objeto: {},
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

  manejarInput = (evento) =>{
    const {target} = evento;
    console.log({target, evento});
  };

  crearEntidad (){}

  componentDidMount(){
    this.listar();
  }


  render(){
    const {titulo = "Pagina sin titulo"} = this.props;
    return(
      <div className="container">
        <Nav/>
        <ActionsMenu cambiarModal = {this.cambiarModal} titulo={titulo}/>
        <Tabla entidades ={this.state.entidades} />
        {this.state.mostrarModal && <Modal cambiarModal = {this.cambiarModal} manejarInput={this.manejarInput}/>}
      </div>
      );
  }
    
}

export default Pagina; 