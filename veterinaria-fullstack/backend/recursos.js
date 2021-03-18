module.exports = {
    mascotas: [
        {tipo: "Perro", nombre: "Trosky0" , dueno: "Camilo"},
        {tipo: "Perro", nombre: "Trosky1" , dueno: "Camilo"},
        {tipo: "Perro", nombre: "Trosky2" , dueno: "Camilo"},
        {tipo: "Perro", nombre: "Trosky3" , dueno: "Camilo"},
        {tipo: "Perro", nombre: "Trosky4" , dueno: "Camilo"},
    ],
    veterinarias: [
        {nombre: "Alexandra", apellido: "Perez" , documento: "1234567890"},
        {nombre: "Alexander", apellido: "Gomez" , documento: "4234569999"},
        {nombre: "Julian", apellido: "Madrid" , documento: "555556666677"},
        {nombre: "Naryie", apellido: "Vazquez" , documento: "11114567890"},
    ],
    duenos: [
        {nombre: "Alejandra", apellido: "Ramirez" , documento: "12345333333"},
        {nombre: "Alexandra", apellido: "Fernandez" , documento: "1111169999"},
        {nombre: "Julia", apellido: "Tamayo" , documento: "999997776677"},
        {nombre: "Natalia", apellido: "Gonzalez" , documento: "1111222890"},
    ],
    consultas: [
        {
          mascota: 0,
          veterinaria: 0, 
          fechaCreacion: new Date(),
          fechaEdicion: new Date(), 
          historia: '',
          diagnostico: '',
        },
    ],
};