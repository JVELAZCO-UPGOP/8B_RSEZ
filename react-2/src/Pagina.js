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
    const {target : {value, name},} = evento;
    let {objeto} = this.state;
    objeto = {...objeto, [name] : value};
    this.setState({objeto});
  };

  crearEntidad = async() =>{
    const {entidad} = this.props;
    let {objeto} = this.state;
    const method ="POST";
    await crearEditarEntidad({entidad,objeto, method}); 
    this.cambiarModal();
    this.listar();
  };

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
        {this.state.mostrarModal && 
        <Modal cambiarModal = {this.cambiarModal} 
        manejarInput={this.manejarInput} crearEntidad={this.crearEntidad}/>}
      </div>
      );
  }
    
}

export default Pagina; 