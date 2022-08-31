//TODO: unknown
//Es similar a any, con la diferencia que para usar la variable de tipo unknown primero
//se debe hacer una validacion de tipo con el if o una asersion con AS
//Sirve para manejar mejor any, es la evolucion de any

let nombre2: unknown;

//antes de usar esa variable requiere validacion de tipo
if(typeof nombre2 === "string"){
    const long = nombre2.length
}