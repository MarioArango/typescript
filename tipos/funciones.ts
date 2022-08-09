//TODO: FUNCIONES, por defecto retornan void "undefined", si retornas algo
//por defecto es del tipo de dato que retornas, los demas casos son explicitos

function myfn(msn: string): string{
    return msn
}
//parametros opcionales, deben ir al ultimo
function myfn2(msn: string, edad?: number, nombre?: string): string{
    return msn + " - " + edad
}

 //SIN EMBARGO EL PATRON RORO, ES MEJOR PRACTICA
 function myfnroro(data: {msn: string, edad?: number, nombre?: string}): string{
    return data.msn
 }

 //SIN EMBARGO ES MUY VERBOSO, POR ESO SE USAN INTERFACEZ EN EL PATRON RORO
 //por ser objetos literales de ingreso
 