//En una funcion el parametro desestructurado hace referencia a un array
const myfnfruits = (...fruits: string[]) => {
    console.log(fruits)
}

myfnfruits("piña", "platano", "fresa")
