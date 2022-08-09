//TODO: VOID, es lo opuesto a any, significa que no es de ningun tipo de dato
//por tanto, si no es ningun tipo, es null o undefined
//por eso se suele usar en funciones, para indicarle que no retorna un tipo
//sino que solo hace logica "set"

//EXPLICITO
function setInfo(user: string): void{
    console.log(user);
    //NO PASA NADA EN CUALQUIERA DE ESOS 2 RETORNOS en el explicito
    // return undefined -> si no se retorna algo, es undefined por defecto
}

//Como reasignamos entre null o undefined, se debe desactivar stric=false en el tsconfig
let unusable: void = null
unusable = undefined

//INFERIDO
function setInfo2(user: string){
    console.log(user);
    //SI NO ES EXPLICITO Y RETORNAMOS DIRA QUELA FN ES ANY
    // return  null
    // return  undefined
}

setInfo('MARIO')