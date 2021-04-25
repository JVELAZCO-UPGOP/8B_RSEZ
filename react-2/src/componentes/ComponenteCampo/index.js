import React, { useState, useEffect } from "react";
import Input from "../Input";
import Select from "../Select";




function ComponenteCampo({
  manejarInput = () => {},
  objeto = {},
  nombreCampo = "",
  options = {},
}) {
  
  console.log(options);
  switch (nombreCampo) {
    case "tipo":
    case "mascota":
    case "veterinaria":
    case "diagnostico":
    case "dueno":
      return (
        <div className="col">
          {options[nombreCampo].length > 0 ? (
            <Select
              nombreCampo={nombreCampo}
              options={options[nombreCampo]}
              onChange={manejarInput}
              placeholder={nombreCampo}
              defaultValue={objeto[nombreCampo]} 
              selectedValue={objeto[nombreCampo]} 
              value={objeto[nombreCampo]} 
            />
          ) : (
            "cargando opciones..."
          )}
        </div>
      );

    case "nombre":
    case "apellido":
    case "documento":
    case "historia":
      return (
        <div className="col">
          <Input
            nombreCampo={nombreCampo}
            tipo="text"
            onInput={manejarInput}
            placeholder={nombreCampo}
            value={objeto[nombreCampo]}
          />
        </div>
      );
    default:
      return false;
  }
}

export default ComponenteCampo;