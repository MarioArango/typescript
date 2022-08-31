class Animal {
    _nombre: string;
    private _tipo: string;

    constructor(nombre: string, tipo: string){
        this._nombre = nombre;
        this._tipo = tipo;
    }

    //METODOS
    saludar(){
        console.log('Hola')
        this.saludar2()
    }

    //PERMITE QUE ESTE METODO SEA USADA DENTRO DEL PADRE Y DENTRO DEL HIJO
    //COMO SI ESTE EXISTIERA EN AMBOS Y FUERA PRIVATE EN AMBOS
    //ESA ES LA DIFERENCIA CON PUBLIC, FUERA DEL PADRE O HIJO NO HAY ACCESO
    protected saludar2(){
        console.log('Hola')
    }
}

class Perro extends Animal{
    _raza: string;
    constructor(raza: string, nombre: string, tipo: string){
        super(nombre, tipo);
        this._raza = raza;
    }

    //METODOS
    ladrar(){
        //SE HEREDAN LOS METODOS DE ACCESO PUBLIC Y PROTECTED
        console.log(this.saludar());
    }
}
const doki = new Perro("casa", "doki", "peluche")
doki.ladrar()