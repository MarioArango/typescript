//TODO: Object, se usa para representar en general algun tipo de dato no primitivo
//Es muy general, no es bueno usarlo
//Con este tipo no se puede acceder a las propiedades del objeto
//Podria usarse cuando se quiere que no cambie la estructura de un objecto, porque saldra error
//EXPLICITO
let data: object = {}
data = {
    nombre: "mario",
    apellido: "arango"
}
// let minombre = data.nombre //no se puede acceder
data = []

//TODO: Cabe resaltar que Object !== object
//Object, instancia de la clase Object de JS
//object, tipo general de valores no primitivos

//IMPLICITA
let midata = {} //Por defecto como no es primitivo, sera una instancia Object "literal" de JS