"use strict";
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
exports.__esModule = true;
exports.Peruanos = exports.Persona = void 0;
//HAY VECES EN QUE QUEREMOS TENER UNA CLASE CON FUNCIONALIDADES
//GENERALES, QUE QUEREMOS QUE TODAS LAS DEMAS LA HEREDEN, Y NO SOLO 
//LA ESTRUCTURA Y DEFINICION (INTERFACES) SINO LA FUNCIONALIDAD EN SI, 
//ES EN ESTE CASO QUE USAMOS LAS CLASES ABSTRACTAS, ESTAS NO SE INSTANCIAM
//Y SOLO SIRVEN DE CLASES DE HERENCIA FUNCIONAL
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
    }
    Persona.prototype.saludar = function () {
        return "Hola";
    };
    return Persona;
}());
exports.Persona = Persona;
var Peruanos = /** @class */ (function (_super) {
    __extends(Peruanos, _super);
    function Peruanos(nacionalidad, nombre, edad) {
        return _super.call(this, nombre, edad) || this;
    }
    return Peruanos;
}(Persona));
exports.Peruanos = Peruanos;
var mario = new Peruanos("PE", "Mario", 27);
console.log(mario);
