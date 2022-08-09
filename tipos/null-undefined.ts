//TODO: NULL y UNDEFINED SON SUBTIPOS DE VOID, ESTOS PUEDEN ASIGNARSE

//EXPLICITA
let username: undefined = undefined
username = null

let lastname: null = null
lastname = undefined

//UNDEFINED Y NULL SON SUBTIPOS DE VOID, VOID = {NULL, UNDEFINED}
//Es mas usado en funciones, pero en variables tmb se puede
let variable: void = undefined
variable = null

//IMPLICITA
//ACA NO HAY PORQUE POR DEFECTO LE DARA ANY, ODOS
let bla = undefined
let bla2 = null

//A UN TIPO TMB SE LE PUEDE ASIGNAR NULL O UNDEFINED
let minumero: number;
minumero = undefined
minumero = null
minumero = 26

let mistring: string;
mistring = null
mistring = undefined
mistring = "Mario"

//COMO ITERAN ENTRA SU TIPO ORIGINAL Y UN VALOR COMO NULL O UNDEFINED OPCIONA
//EL COMPILADOR DE TS DEBE TENER EL STRIC = FALSE, SI ES TRUE, SOLO ACEPTE UN TIPO NO 3
//PORQUE EL STRIC = TRUE ES UN CHEKEO ESTATICO
//TS DICE QUE ES UNA MALA PRACTICA HACER ESTO, STRIC = FALSE
//POR ESO PARA VER EN TODO EL PROYECTO "TSC", SI NO HAY NULL O UNDEFINED ASIGNADOS AL
//MISMA VARIABLE A EXCEPCION DEL TIPO ANY, SE EJECUTA tsc archivo.ts --strictNullChecks
//verifica que no haya 3 asignaciones original, null, undefined
//tsc --watch miarchivo.ts --strictNullChecks
//si no queremos escribir a cada rato ese --strictNullChecks
//podemos habilitar strictNullChecks = true en el tsconfig y revisara en todo el proyecto

