//TODO: UNION DE TIPOS
//Podemos asignar que una variable pueda pertenecer a varios tipos
//sin embargo en algunos casos es verboso
//mejor practica, porque podemos usar mas de uno sin tener el stric false

let idUser: number | string;
idUser = 1
idUser = "1"

function findById(id: number | string) {
    return "mario"
}

findById(1)
findById("1")

//TODO: ALIAS DE TIPOS, es crear un nuevo nombre para un conjunto de tipos
//Ayudan a evitar la redundancia de tipos, menos verboso
type IdUsername = number | string

let idUsername: IdUsername;
idUsername = 1
idUsername = "1"

function findByIdUsername(id: IdUsername) {
    return "mario"
}

findByIdUsername(1)
findByIdUsername("1")

//TODO: TIPOS LITERALES, solo puede contener un conjunto de cadenas
//Tambien podemos hacer esto en un enum, opcional
type Roles = "administrador" | "cajero" | "operario";
type Size = "100x100" | "500x500" | "1000x1000";

let persona: Roles = "cajero";
let sizePhoto: Size = "1000x1000";




