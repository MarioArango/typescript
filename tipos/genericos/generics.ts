//Los genericos envian un TIPO como parametro
//Sirve para evitar hacer acersiones de tipo post 
//ejecucion de la funcion, porque este tipo de dato
//sera el que retorna y se envia como parametro
//se pordia decir que ayuda a no usar la composicion de funciones
//y tener autocompletado en funciones que no tenemos el control
//como los fetch, y decirles que tipo de datos devulve
const myFn = <myType1, myType2>(value: myType1) => {
    const data: myType1 = value;
}
//parametros dinamicos T = type generic
//Por convencion se le llama T