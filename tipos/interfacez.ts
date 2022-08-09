//TODO: INTERFAZ, SIRVA PARA elaborar la estructura de un OBJETO LITERAL,
//en consecuencia mejora el patron RORO en funciones

enum PhotoOrientation {
    horizontal = "x",
    vertical = "y"
}

//Tambien tienen parametros opcionales
interface Picture {
    title?: string,
    date?: string
}

interface PictureConfig {
    title: string,
    date: string,
    orientation: PhotoOrientation // puede tomar solo 2 valores, tmb podria ser un TIPO LITERAL
}

//De este modo es mas legible y usamos y patron RORO
//define la estructura de un objeto literal, por lo tanto tmb podemos retornar un tipo asi
//TIPO RORO, RECIBE OBJ RETORNA OBJ
function myPhoto(picture: Picture): Picture {
    return picture
}

myPhoto({})

//READONLY 
//HAY casos en que alguna propiedad del objeto literal no debe ser modificado, sin embargo
//en la practica aveces suele ocurrir, por eso si declaramos un objeto del tipo interfaz y esta
//tiene su propiedad tipo "readonly", esta propiedad no podra ser modificada en todos los objetos literales
//que usan la interfaz, suele usarse en IDS

interface User {
    readonly id: number,
    nombre: string,
    edad?: number
}

let myUser: User = {id: 1, nombre: "Mario", edad: 26}
//No se puede cambiar el valor de id porque la variable myUser es de tipo User que tiene la propiedad id como solo
//lectura
// myUser.id = 2

console.log(myUser)

//EXTENDS, sirve para no sobreescribir codigo y hacerlo verboso
interface Entity {
    id: number,
    title: string
}

interface Album extends Entity {
    description: string
}

interface Photo extends Entity{
    orientation: PhotoOrientation
}

let myAlbum: Album = {id: 1, title: "Mi album", description: "De recuerdos"}
console.log(myAlbum)

let album = {} as Photo;// tmb se podria hacer asi, USANDO ASERCION DE TIPOS
album.id = 1
album.title = "mi album"
album.orientation = PhotoOrientation.horizontal
console.log(album);
