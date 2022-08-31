//En una funcion el parametro desestructurado hace referencia a un array
var myfnfruits = function () {
    var fruits = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fruits[_i] = arguments[_i];
    }
    console.log(fruits);
};
myfnfruits("piña", "platano", "fresa");
