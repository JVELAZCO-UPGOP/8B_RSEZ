import React from "react";
import ModalHeader from "./ModalHeader";
import Select from "../Select";

function Modal(){
    return (
        <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <ModalHeader/>
                  <div className="modal-body">
                    <form id="form">
                        <Select/>
                      <div className="form-row">
                        <div className="col">
                          <input type="text" id="nombre" name = "nombre" className="form-control" placeholder="Nombre"/>
                        </div>
                        <div className="col">
                          <select id="dueno" className="form-control" >
                            <option>Dueño</option>
                            <option>Maria</option>
                            <option>Ester</option>
                            <option>Julian</option>
                            <option>Mauricio</option>
                            <option>Blanca</option>
                            <option>Camilo</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="button" id="btn-guardar" className="btn btn-primary" data-dismiss="modal">Guardar</button>
                  </div>
                </div>
              </div>
            </div>
    );
}

export default Modal; 