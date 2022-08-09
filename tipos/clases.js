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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Album_picture, _Person_nombre, _Person_edad, _Person_dni, _Profesor_nombre, _Profesor_edad, _Profesor_dni, _Profesor_curso;
exports.__esModule = true;
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var Picture = /** @class */ (function () {
    //parametros obligatorios para crear nuestro objeto, luego se puedo asignar a otros
    function Picture(id, title, orientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    return Picture;
}());
var Album = /** @class */ (function () {
    function Album(id, title) {
        _Album_picture.set(this, void 0);
        this.id = id;
        this.title = title;
        __classPrivateFieldSet(this, _Album_picture, [], "f");
    }
    Album.prototype.addPicture = function (picture) {
        __classPrivateFieldGet(this, _Album_picture, "f").push(picture);
    };
    return Album;
}());
_Album_picture = new WeakMap();
var album = new Album(1, 'Mi primer album');
var picture = new Picture(1, 'Mi primer picture', PhotoOrientation.Square);
album.addPicture(picture);
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
var Person = /** @class */ (function () {
    function Person(dni) {
        _Person_nombre.set(this, void 0);
        _Person_edad.set(this, void 0);
        _Person_dni.set(this, void 0);
        __classPrivateFieldSet(this, _Person_dni, dni, "f");
    }
    Object.defineProperty(Person.prototype, "nombre", {
        //METODOS ACCESORES, PROXYS DE LAS PROPIEDADES, SIMILAR A UN OBJETO LITERAL,
        //EL OBJETO LITERAL TLB TIENE SU PROXY DE PROPIEDADES CPN GET Y SET
        get: function () {
            return __classPrivateFieldGet(this, _Person_nombre, "f");
        },
        set: function (nombre) {
            __classPrivateFieldSet(this, _Person_nombre, nombre, "f");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "edad", {
        get: function () {
            return __classPrivateFieldGet(this, _Person_edad, "f");
        },
        set: function (edad) {
            __classPrivateFieldSet(this, _Person_edad, edad, "f");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "dni", {
        get: function () {
            return __classPrivateFieldGet(this, _Person_dni, "f");
        },
        set: function (dni) {
            __classPrivateFieldSet(this, _Person_dni, dni, "f");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "telefono", {
        get: function () {
            return this._telefono;
        },
        set: function (telefono) {
            this._telefono = telefono;
        },
        enumerable: false,
        configurable: true
    });
    //METODOS DINAMICOS
    Person.prototype.saludar = function (msn) {
        return msn;
    };
    return Person;
}());
_Person_nombre = new WeakMap(), _Person_edad = new WeakMap(), _Person_dni = new WeakMap();
//mODIFICADORES DE ACCESO GET Y SET -> TS, interceptan el acceso, como lo defini antes
//es un proxy 
var mario = new Person(72935585);
mario.dni = 72935584;
console.log(mario.dni);
console.log(mario.saludar('Hola como estan'));
var Profesor = /** @class */ (function (_super) {
    __extends(Profesor, _super);
    function Profesor(nombre, dni) {
        var _this = _super.call(this, dni) //COMO EL PADRE EXISTE INICIALMENTE CON LA DEFINICION DEL CONSTRUCTOR
         || this;
        _Profesor_nombre.set(_this, void 0);
        _Profesor_edad.set(_this, void 0);
        _Profesor_dni.set(_this, void 0);
        _Profesor_curso.set(_this, void 0);
        //DEBEMOS CREAR ESE CONSTRUCTOR, PARA TENER ACCESO A LAS FUNCIONALIDADES DEL PADRE
        //DEBEMOS INSTANCIAR EL PADRE PARA TENER ACCESO A LO QUE HEREDA
        __classPrivateFieldSet(_this, _Profesor_nombre, nombre, "f");
        __classPrivateFieldSet(_this, _Profesor_dni, dni, "f");
        return _this;
    }
    return Profesor;
}(Person));
_Profesor_nombre = new WeakMap(), _Profesor_edad = new WeakMap(), _Profesor_dni = new WeakMap(), _Profesor_curso = new WeakMap();
var profesor = new Profesor("mario", 72935585);
profesor.telefono = 123456789;
console.log(profesor);
//CLASES ABSTRACTAS, son necesarias cuando las clases no necesitaran ser instanciadas
//solo se usaran su funcionalidad, estan encapsulan logica de un contexto en una "instancia"
var Entity = /** @class */ (function () {
    function Entity() {
    }
    Entity.saludar = function (msn) {
        return msn;
    };
    return Entity;
}());
Entity._nombre = 'mario';
console.log(Entity._nombre);
console.log(Entity.saludar('hola abstract'));
