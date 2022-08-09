//TODO: CLASES, sirven para encapsular logica y metodos propios a una entidad, son más
//encapsuladas en funcion de lo que represente, a diferencia de las funciones generales.
//como encapsula suele usarse en el patron SOLID
export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    //Propiedades
    id:number;
    title: string;
    orientation: PhotoOrientation;

    //parametros obligatorios para crear nuestro objeto, luego se puedo asignar a otros
    constructor(id: number, title: string, orientation: PhotoOrientation){
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }

    //Comportamiento

}

class Album {
    private id: number;
    private title: string;
    #picture: Picture[];

    constructor(id: number, title: string){
        this.id = id;
        this.title = title;
        this.#picture = [];
    }

    addPicture(picture: Picture){
        this.#picture.push(picture)
    }
}

const album = new Album(1, 'Mi primer album')
const picture = new Picture(1, 'Mi primer picture', PhotoOrientation.Square)

album.addPicture(picture)
//No podemos asignar valores defrente a una propiedad, debe terne un metodo
//que garantice alguna restriccion de veracidad, por eso se le asigna un modificador
//de acceso a los atributos y metodos get y set respectivos, los cuales son como proxy
//Los metodos tambien pueden tener el modificadore de acceso private, esto significaria
//que son metodos que permiten la logica interna de la clase, más no acceso del cliente
// album.id = 2
//PUBLIC -> por defecto, el constructor siempre es public (TS)
//PRIVATE -> atributos de solo lectura y acceso interno en la clase (TS)
//PROTECTED -> solo es accesible a la clase hijo, si es private no lo hereda
//# -> acceso interno en la clase + no lectura (JS)
// console.log(album);

class Person {
    #nombre: string;
    #edad: number;
    #dni: number;
    protected _telefono: number;//necesita set y get para acceder en el hijo

    constructor(dni: number){
        this.#dni = dni; 
    }

    //METODOS ACCESORES, PROXYS DE LAS PROPIEDADES, SIMILAR A UN OBJETO LITERAL,
    //EL OBJETO LITERAL TLB TIENE SU PROXY DE PROPIEDADES CPN GET Y SET
    get nombre() {
        return this.#nombre;
    }

    set nombre(nombre: string) {
        this.#nombre = nombre;
    }

    get edad(){
        return this.#edad;
    }

    set edad(edad: number){
        this.#edad = edad;
    }

    get dni(){
        return this.#dni;
    }

    set dni(dni: number) {
        this.#dni = dni
    }

    get telefono(){
        return this._telefono;
    }

    set telefono(telefono: number) {
        this._telefono = telefono
    }

    //METODOS DINAMICOS
    saludar (msn: string){
        return msn
    }
}

//mODIFICADORES DE ACCESO GET Y SET -> TS, interceptan el acceso, como lo defini antes
//es un proxy 

const mario = new Person(72935585)
mario.dni = 72935584;
console.log(mario.dni)
console.log(mario.saludar('Hola como estan'))

class Profesor extends Person{
    #nombre: string;
    #edad: number;
    #dni: number;
    #curso: string;

    constructor(nombre:string ,dni: number){
        super(dni) //COMO EL PADRE EXISTE INICIALMENTE CON LA DEFINICION DEL CONSTRUCTOR
        //DEBEMOS CREAR ESE CONSTRUCTOR, PARA TENER ACCESO A LAS FUNCIONALIDADES DEL PADRE
        //DEBEMOS INSTANCIAR EL PADRE PARA TENER ACCESO A LO QUE HEREDA
        this.#nombre = nombre;
        this.#dni = dni;
    }
}

const profesor = new Profesor("mario",72935585)
profesor.telefono = 123456789
console.log(profesor);


//CLASES ABSTRACTAS, son necesarias cuando las clases no necesitaran ser instanciadas
//solo se usaran su funcionalidad, estan encapsulan logica de un contexto en una "instancia"
abstract class Entity {
    static _nombre: string;

    static saludar(msn: string){
        return msn
    }
}
Entity._nombre = 'mario'
console.log(Entity._nombre)
console.log(Entity.saludar('hola abstract'))
