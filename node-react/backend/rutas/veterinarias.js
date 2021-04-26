const { palabraSinAcentos } = require("../util");

module.exports = function veterinariasHandler(veterinarias) {
    return {
        get: (data, callback) => {
            console.log("handler veterinarias ", {data});
            if(typeof data.indice !=="undefined"){
                if(veterinarias[data.indice]){
                    return callback(200,veterinarias[data.indice]);
                }
                return callback(404,
                    {mensaje: `veterinaria con indice ${data.indice} no encontrada`,
                });
            } //aca se empieza a trabajar 
             // verifico que data.query traiga datos
      // en tipo o nombre o dueno, esto significa
      //que el request es una búsqueda
      if (
        data.query &&
        (data.query.nombre  || data.query.apellido || data.query.documento )
      ) {
        // creo un array con las llavees del objeto data query
        const llavesQuery = Object.keys(data.query); //hi

        //clono el array de veterinarias que viene de recursos
        // y este irá guardando los resultados
        let respuestaVeterinarias = [...veterinarias];//hi

        //recorro cada una de las llaves con el fin de filtrar el array de veterinarias
        //según los criterios de búsqueda
       
          // filtro el array de respuestas con el index solamente
          // dejar los objetos de veterinaria que cumplen con los criterios de
          // búsqueda
          respuestaVeterinarias = respuestaVeterinarias.filter((_veterinaria) => {
            let resultado= false;
            for (const llave of llavesQuery) {
                
                if (_veterinaria && _veterinaria[llave]) {
                    const busqueda = palabraSinAcentos(data.query[llave]);
                    const expresionRegular = new RegExp(busqueda, "ig");

                    const campoVeterinariaSinAcentos = palabraSinAcentos(_veterinaria[llave]);
                    resultado = campoVeterinariaSinAcentos.match(expresionRegular);
                }
                if (resultado){
                    break;
                }
            }
              // creo una expresión regular para que
              //la busqueda arroje resultados parciales
              //de lo que se manda como criterio de búsqueda
              // ejemplo si nombre = 'cat' en el query me devuelve todas las
              //veterinarias con nombre = 'catalina'
              

              // resultado guarda la verificación del string del criterio de búsqueda
              // y los objetos de veterinaria, es decir nos dice si el criterio de búsqueda
              // está o no en el objeto de veterinaria que estamos evaluando en el momento
              

              // resultado entrega null cuando no encuentra el criterio de búsqueda
              // null es falsy por lo tanto el filter ignorará resultado === null
              // y los que si tengan el criterio de búsqueda entran al array respuestaVeterinarias
              return resultado;
            }
          );
        
        return callback(200, respuestaVeterinarias);
      }
            callback(200, veterinarias);
        },
        post: (data, callback) => {
            veterinarias.push(data.payload);
            callback(201, data.payload);
        },
        put: (data, callback) => {
            if(typeof data.indice !=="undefined"){
                if(veterinarias[data.indice]){
                    veterinarias[data.indice] =data.payload;
                    return callback(200,veterinarias[data.indice]);
                }
                return callback(404,
                    {mensaje: `veterinaria con indice ${data.indice} no encontrada`,
                });
            }
            callback(400, {mensaje: "indice no enviado"} );
        },
        delete: (data, callback) => {
            if(typeof data.indice !=="undefined"){
                if(veterinarias[data.indice]){
                    veterinarias = veterinarias.filter(
                        (_veterinarias,indice) => indice != data.indice
                    );
                    return callback(204 , {
                        mensaje: `elemento con indice ${data.indice} eliminado`,
                    });
                }
                return callback(404,
                    {mensaje: `veterinaria con indice ${data.indice} no encontrada`,
                });
            }
            callback(400, {mensaje: "indice no enviado"} );
        },
    };
};