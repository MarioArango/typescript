//cuando el stric = true, se debe inicializar el valor del atributo, 
//en la definicion o en el constructor
//AL FINAL UNA CLASE ES UNA FABRICA DE OBJETOS LITERALES, DONDE CADA INSTANCIA TIENE
//SU PROPIA REFERENCIA EN MEMORIA
class MyDate {

    // readonly year: number; poner readonly no es la mejor solucion para limitar su edicion
    //porque tambien afectara internamente, por eso es mejor el modificar private, este 
    //restringe el acceso y edicion al atributo, para ello se usaran los get and sets
    // metodos accesor
    //se declaran con _, para tener sus get y set con el nombre limpio, ya que fuera
    //es donde se trabajara más
    private _year: number;
    private _month: number;
    private _day: number;

    //Metodo para inicializar la instancia y recibe los parametros que seran necesarios para 
    //que exista
    constructor(data: {year: number, month: number, day: number}){
        this._year = data.year;
        this._month = data.month;
        this._day = data.day;
    }
    //Otra forma de crear el constructor, poner public si no hay nada, no recomendable
    // constructor(private year: number, private month: number, private day: number){}
    
    //METODOS ACCESORES, proxys de los atributos
    //GETTERS: formas controladas de acceder a atributos, lectura
    //se llama como si fueran atributos de un objeto literal
    get year() {
        //code restriction
        return this._year
    }

    get month(){
        //code restriction
        return this._month
    }

    get day(){
        //code restriction
        return this._day
    }
    //SETTERS: formas controladas de establecer valores a atributos, modificarlos
    //se asigna como si fueran atributos de un objeto literal
    set day(day: number){
        //code restriction
        this._day = day;
    }

    set month(month: number){
        //code restriction
        this._month = month;
    }
    
    set year(year: number){
        //code restriction
        this._year = year;
    }

    //METODOS DINAMICOS
    printFormat(): string{
        return `${this._day}/${this._month}/${this._year}`
    }
}

const date = new MyDate({year: 2022, month: 8, day: 18});
console.log(date.day, "date")
date.day = 20
console.log(date.day, "date new");
