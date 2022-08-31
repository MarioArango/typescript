//El generico T lo usa para tipar el parametro del resolve, el cual 
//es lo que retorna la promesa
//inferido : unknow
//explicito: generico

//El PROTOTIPO PROMISE, retorna por medio del retorna por medio del resolve
//una promesa  cuyo tipo de dato Inferido pot TS es unknow, osea un any con previo validacion de tipos
//Sin embargo, si le pasamos un generico al Promise, este usa ese generico
//para tipar el pametro del resolve, que es lo que retornara la promesa
//Es asi como se tipan Promise, con genericos que van al resolve
//Conclusion:
//La Funcion padre, asincrona retorna una Promise<T>   T: generico
//La respuesta = la data, es el tipado del resolve, retorna una tipo T
const getPromise = () => {
    return new Promise<string>((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve("Respuesta de la promesa")
            }, 500)
        }
    })
}

//getPromise, retorna una Promise<T>, debido a que debe ir al microtask, y luego ejecutarse
//en el hilo principal, previa ejecucion del codigo sincrono

//data: string -> data es el parametro del resolve, por eso es del tipo generico implementado
const respuesta = getPromise().then(data => {
    //vale reslatar, que las opciones de autocomplemtado de TS es una señal de que la variable
    //tiene UN SOLO TIPO, y estamos en lo correcto de las buenas practicas
    console.log(data.length)
})

const obtenerData = async () => {
    const data = await getPromise();
    console.log(data.includes('m'));
}