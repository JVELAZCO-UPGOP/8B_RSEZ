 const API_URL = "https://veterinaria-backend-orpin.vercel.app";
 
 
 export const listarEntidad = async ({entidad = "mascotas"}) => {
     try {
         const respuesta = await fetch(`${API_URL}/${entidad}`);
         const datos = await respuesta.json();
         return datos;
     } catch (error) {
         console.log({error});
     }
 };

 