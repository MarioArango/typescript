//Se da cuaod el valor de retorno es de tipo variable, es decir 
//dependiendo del dato de entrada, puede retorna un string, number, etc
//se puede poder que return any de modo explicito, pero una mejor practica definir
//todos los tipos de retorno, para que desdetro del scope el analizador
//de tipos nos ayude con una mini documentacion como simpre.

const parsefn = (input: string | string[]): string | string[] => {
    if(Array.isArray(input)){
        return input.join("")
    }else {
        return input.split("")
    }
}

//En ambos resultados, el tipo de datos es string o array, el analizador de tipos
//no sabe exactamente cual es y no puede ayudarte con el autocompletado, eso se traduce
//en una mala practica
const result = parsefn("Mario")
const result2 = parsefn(["M", "A", "R", "I", "O"])

console.log(result, "result");
console.log(result2, "result2");

//eso podemos solucionarlo de dos formas, 1ra con un validador de tipos y la 2da
//con sobrecarga de funciones en ts

//1era
if(Array.isArray(result)){
    //al escribir result, ts con ayuda con los metodos y propiedad eso se traduce
    //en una buena practica
    const r = result.filter(p => p)
}

//2da, solo valida en funciones del tipo FUNCTION
//Definimos su firma "parametros" y "TIPOS de retornos"
function parsefn2(input: string): string[];
function parsefn2(input: string[]): string;

function parsefn2(input: string | string[]): string | string[] {
    if(Array.isArray(input)){
        return input.join("")
    }else {
        return input.split("")
    }
}

const resultv2 = parsefn2("Mario")
const rv2 = resultv2.map(p => p)//ts da autocomletado, lo que significa es buena practica
const resultv22 = parsefn2(["M", "A", "R", "I", "O"])
const rvv22 = resultv22.length//ts da autocomletado, lo que significa es buena practica

console.log(resultv2, "resultv2");
console.log(resultv22, "resultv22");
//OBS: si tenemos sobregar y uno de ellos retorna unknown, este va al final
