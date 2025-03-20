import obtener from "./getData.js";

async function show() {
    const datos = await obtener();
    const mostrar = document.getElementById("mostrar")
    datos.forEach(e => {
        let casa = document.createElement("h3");
        casa.innerHTML = e.house
        mostrar.appendChild(casa)
        
    });
        
};


export default show