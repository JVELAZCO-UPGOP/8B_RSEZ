import React from "react";

function Select(){
    return(
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
    );
}

export default Select;