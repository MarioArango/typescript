//TODO: INTERFAZ, SIRVA PARA elaborar la estructura de un OBJETO LITERAL,
//en consecuencia mejora el patron RORO en funciones
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation["horizontal"] = "x";
    PhotoOrientation["vertical"] = "y";
})(PhotoOrientation || (PhotoOrientation = {}));
//De este modo es mas legible y usamos y patron RORO
//define la estructura de un objeto literal, por lo tanto tmb podemos retornar un tipo asi
function myPhoto(picture) {
    return picture;
}
myPhoto({});
var myUser = { id: 1, nombre: "Mario", edad: 26 };
//No se puede canbiar ek valor de id porque la vairable myUser es de tipo User que tiene la propiedad id como solo
//lectura
// myUser.id = 2
console.log(myUser);
var myAlbum = { id: 1, title: "Mi album", description: "De recuerdos" };
console.log(myAlbum);
var album = {}; // tmb se podria hacer asi, USANDO ASERCION DE TIPOS
album.id = 1;
album.title = "mi album";
album.orientation = PhotoOrientation.horizontal;
console.log(album);
