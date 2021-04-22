import React from "react";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import Select from "../Select";
import Input from "../Input";
import "./Modal.css";

const tiposMascota = [
  {valor:  "Perro", etiqueta: "Perro"}, 
  {valor:  "Gato ", etiqueta: "Gato"},
  {valor:  "Pajaro", etiqueta: "Pajaro"},
  {valor:  "Conejo", etiqueta: "Conejo"}, 
  {valor:  "Otro", etiqueta: "Otro"},
];

const Duenos = [
  {valor:  "Maria", etiqueta: "Maria"}, 
  {valor:  "Ester ", etiqueta: "Ester"},
  {valor:  "Julian", etiqueta: "Julian"},
  {valor:  "Mauricio", etiqueta: "Mauricio"},
  {valor:  "Blanca", etiqueta: "Blanca"},
  {valor:  "Camilo", etiqueta: "Camilo"}, 
  {valor:  "Otro", etiqueta: "Otro"},
];


function Modal({cambiarModal = () => {} }){
    return (
        <>
        <div className="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <ModalHeader cambiarModal = {cambiarModal}/>
                  <div className="modal-body">
                    <form id="form">
                        <div className="form-row">
                          <div className="col">
                            <Select options={tiposMascota} nombreCampo="Tipo animal"/>
                          </div>
                        </div>
                      <div className="form-row">
                        <div className="col">
                          <Input tipo="text" nombreCampo="nombre"/>
                        </div>
                        <div className="col">
                          <Select options={Duenos} nombreCampo="dueño"/>
                        </div>
                      </div>
                    </form>
                  </div>
                  <ModalFooter cambiarModal = {cambiarModal}/>
                </div>
              </div>
        </div>
        <div class="modal-backdrop fade show"></div>
            </>
    );
}

export default Modal; 