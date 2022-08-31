import axios from 'axios';

interface Category {
    id: number,
    name: string,
    image: string
}

interface DAOProducts {
    id: number,
    title: string,
    price: number,
    description: string,
    category: Category,
    images: string[]
}

//tipado de funcion, ayuda que cuando llamemos a la funcion nos diga que retorna
//tipa de retorna "data", nos ayuda a crear en codigo con la respuesta de la peticion,
//este autocompletado se traduce en una buena practica, NOTA: se debe poner el emtodo de acceso
//porque es este el que recibe el generico
const getData = async () => {
    try {
        //INFERIDO: axios retorna un AxiosPromise<any> === Promise<any>, porque la estructura de retorno
        //tiene datos de la consulta y la estructura de datos del back en data
        //por lo que data tambien es any, porque no se sabe de que tipado sera
        //SOLUCION: EN EL GENERICO SE PONE EL DAO DE LA DATA QUE SE OBTENDRA DEL BACK, como tipado de respuesta de la peticion
        const { data } = await axios.get<DAOProducts[]>("https://api.escuelajs.co/api/v1/products");
        return data;


        //EL GENERICO EN EL METODO DE PETICION LO SOPORTA LA MISMA LIBRERIA AXIOS, ASI ESTA EN SU CORE,
        //SIN EMBARGO, SI LA LIBRERIA NO SOPORTA GENERICOS, PARA TIPAR LA RESPUESTA Y POR ENDE EL RETORNO DE 
        //LA PROMESA, LA FUNCION, SE HACE UNA ASERCION DE TIPOS
        
        //supongamos que axios no soporta el tipado generico para la respuesta
        // const { data } = await axios.get("https://api.escuelajs.co/api/v1/products");
        // const d = data as DAOProducts[];
        // return d;     
        
    } catch (error) {
        // console.log(error, "error")
    }
}

getData().then(data => {
    //Como el tipado es en el try, en then da autocompletado
    console.log(data, "Data")
}).catch(error => {
    //Como no hay tipado es en el catch, no da autocompletado
})