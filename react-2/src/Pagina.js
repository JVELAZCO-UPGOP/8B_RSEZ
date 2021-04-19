import React from 'react';
import Nav from './componentes/Nav';

function Pagina(){
    return(
    <div classNameName="container">
      <Nav/>
        <div className="actions-menu">
            <h1>Mascotas</h1>
            <div className="actions-menu-content">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                    Nueva
                </button>
                <div className="alert alert-danger alert-dismissible" role="alert">
                    <strong>Oops!</strong> Algo hicimos mal, por favor vuelve a intentarlo!.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Nueva Mascota</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form id="form">
                      <input type="hidden" id="indice"/>
                        <div className="form-row">
                          <div className="col">
                            <select id="tipo" className="form-control" >
                              <option>Tipo Animal</option>
                              <option>Perro</option>
                              <option>Gato</option>
                              <option>Pajaro</option>
                              <option>Conejo</option>
                              <option>Otro</option>
                            </select>
                          </div>
                        </div>
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
        </div>
    </div>
    );
}

export default Pagina; 