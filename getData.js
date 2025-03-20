import api from "./url.js";

async function obtener() {
    try {
        const data = await fetch(api);
        if(!data.ok){
            throw new Error('Lo sentimos, hubo un error',data.status)
        }
        const result = await data.json()
        console.log(result)
        return result
    } catch (error) {
        console.log("El error es: " , error)
    }
}

export default obtener 