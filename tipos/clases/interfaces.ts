interface IPersona {
    _nombre: string,
    _edad: number,
    saludar(): void
}

//CUANDO SE IMPLEMENTA UNA INTERFAZ, SE DEBE TENER ESOS ATRIBUTOS Y ESTOS SON PUBLICOS
//ES LO MISMO QUE IMPLEMENTAR EN UN OBJETO LITERAL, CON LA DIFERENCIA, QUE EN LA CLASE 
//PUEDES AUMENTAR ATRIBUTOS
//UNA INTERFAS EN UNA CLASE ES UNA ESTRUCTURA, NOMBRE Y DEFINICION QUE DEBERAN
//TENER TODAS LAS QUE LAS IMPLEMENTEN, A DIFERENCIA DE LA CLASE ABSTRACTA QUE ES ESO + FUNCIONALIDAD ESPECIFICA
class Persona implements IPersona {
    _nombre: string = "";
    _edad: number = 0;
    private _apellido: string = "";

    constructor(nombre: string, edad: number){
        this._nombre = nombre;
        this._edad = edad;
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nombre: string){
        this._nombre = nombre;
    }

    saludar(): void {
        
    }
}

const mario = new Persona("Mario", 27)
console.log(mario.nombre, "mario")