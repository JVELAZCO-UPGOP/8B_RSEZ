import React from "react";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import "./Modal.css";


function Modal({
    cambiarModal = () => {}, 
    manejarInput = () => {}, 
    crearEntidad = () => {},
    objeto = {},
    children = [],
    }){
    return (
        <>
        <div className="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <ModalHeader cambiarModal = {cambiarModal}/>
                  <div className="modal-body">
                    <form id="form">
                    <div className="form-row">{children}</div>
                    </form>
                  </div>
                  <ModalFooter cambiarModal = {cambiarModal} crearEntidad={crearEntidad}/>
                </div>
              </div>
        </div>
        <div className="modal-backdrop fade show"></div>
            </>
    );
}

export default Modal; 