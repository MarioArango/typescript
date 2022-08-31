//cuando el stric = true, se debe inicializar el valor del atributo, 
//en la definicion o en el constructor
var MyDate = /** @class */ (function () {
    //Metodo para inicializar la instancia y recibe los parametros que seran necesarios para 
    //que exista
    function MyDate(data) {
        this._year = data.year;
        this._month = data.month;
        this._day = data.day;
    }
    Object.defineProperty(MyDate.prototype, "year", {
        //Otra forma de crear el constructor, poner public si no hay nada, no recomendable
        // constructor(private year: number, private month: number, private day: number){}
        //METODOS ACCESORES, proxys de los atributos
        //GETTERS: formas controladas de acceder a atributos, lectura, se llama como atributo
        get: function () {
            //code restriction
            return this._year;
        },
        set: function (year) {
            this._year = year;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyDate.prototype, "month", {
        get: function () {
            //code restriction
            return this._month;
        },
        set: function (month) {
            this._month = month;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyDate.prototype, "day", {
        get: function () {
            //code restriction
            return this._day;
        },
        //SETTERS: formas controladas de establecer valores a atributos, modificarlos
        set: function (day) {
            this._day = day;
        },
        enumerable: false,
        configurable: true
    });
    //METODOS DINAMICOS
    MyDate.prototype.printFormat = function () {
        return "".concat(this._day, "/").concat(this._month, "/").concat(this._year);
    };
    return MyDate;
}());
var date = new MyDate({ year: 2022, month: 8, day: 18 });
console.log(date.day, "date");
date.day = 20;
console.log(date.day, "date new");
