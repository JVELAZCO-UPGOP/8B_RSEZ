import React from 'react';

function Nav() {
  return (<nav classNameName="navbar navbar-dark bg-dark navbar-expand-lg">
  <a classNameName="navbar-brand" href="#">Veterinaria</a>
  <button classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span classNameName="navbar-toggler-icon"></span>
  </button>
  <div classNameName="collapse navbar-collapse" id="navbarColor03">
      <ul classNameName="navbar-nav mr-auto">
          <li classNameName="nav-item active">
              <a classNameName="nav-link" href="/index.htm">Mascotas <span classNameName="sr-only">(current)</span></a>
          </li>
          <li classNameName="nav-item">
              <a className="nav-link" href="/veterinarias.html">Veterinarios</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="/consultas.html">Consultas</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="/duenos.html">Dueños</a>
          </li>
      </ul>
      <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
      </form>
  </div>  
</nav>)
}

export default Nav;