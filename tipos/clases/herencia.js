var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(nombre, tipo) {
        this._nombre = nombre;
        this._tipo = tipo;
    }
    //METODOS
    Animal.prototype.saludar = function () {
        console.log('Hola');
        this.saludar2();
    };
    //PERMITE QUE ESTE METODO SEA USADA DENTRO DEL PADRE Y DENTRO DEL HIJO
    //COMO SI ESTE EXISTIERA EN AMBOS Y FUERA PRIVATE EN AMBOS
    //ESA ES LA DIFERENCIA CON PUBLIC, FUERA DEL PADRE O HIJO NO HAY ACCESO
    Animal.prototype.saludar2 = function () {
        console.log('Hola');
    };
    return Animal;
}());
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(raza, nombre, tipo) {
        var _this = _super.call(this, nombre, tipo) || this;
        _this._raza = raza;
        return _this;
    }
    //METODOS
    Perro.prototype.ladrar = function () {
        //SE HEREDAN LOS METODOS DE ACCESO PUBLIC Y PROTECTED
        console.log(this.saludar());
    };
    return Perro;
}(Animal));
var doki = new Perro("casa", "doki", "peluche");
doki.ladrar();
