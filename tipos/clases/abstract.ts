//HAY VECES EN QUE QUEREMOS TENER UNA CLASE CON FUNCIONALIDADES
//GENERALES, QUE QUEREMOS QUE TODAS LAS DEMAS LA HEREDEN, Y NO SOLO 
//LA ESTRUCTURA Y DEFINICION (INTERFACES) SINO LA FUNCIONALIDAD EN SI, 
//ES EN ESTE CASO QUE USAMOS LAS CLASES ABSTRACTAS, ESTAS NO SE INSTANCIAM
//Y SOLO SIRVEN DE CLASES DE HERENCIA FUNCIONAL
export abstract class Persona {

    constructor(nombre: string, edad: number){

    }

    saludar(){
        return "Hola"
    }
}

export class Peruanos extends Persona {
    constructor(nacionalidad: string, nombre: string, edad: number){
        super(nombre, edad);
    }
} 

const mario = new Peruanos("PE", "Mario", 27)