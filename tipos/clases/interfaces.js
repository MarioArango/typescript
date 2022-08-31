//CUANDO SE IMPLEMENTA UNA INTERFAZ, SE DEBE TENER ESOS ATRIBUTOS Y ESTOS SON PUBLICOS
//ES LO MISMO QUE IMPLEMENTAR EN UN OBJETO LITERAL, CON LA DIFERENCIA, QUE NE LA CLASE 
//PUEDES AUMENTAR ATRIBUTOS
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this._nombre = "";
        this._edad = 0;
        this._apellido = "";
        this._nombre = nombre;
        this._edad = edad;
    }
    Object.defineProperty(Persona.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.saludar = function () {
    };
    return Persona;
}());
var mario = new Persona("Mario", 27);
console.log(mario.nombre, "mario");
