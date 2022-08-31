//PATRON SINGLETON USA UN CONSTRUCTOR PRIVADO
//GARANTIZA QUE SOLO EXISTA UNA INSTANCIA DE UN OBJETO,
//ES DECIR TENER UN PUNTO DE ACCSO UNICO, UNA UNICA REFERENCIA DE MEMORIA
//UN SOLO OBJETO LITERAL INSTANCIADO DE LA CLASE, ES COMO USARLO EN UN CONTEXT
//UNA SOLA INSTANCIA INMUTABLE
var MyService = /** @class */ (function () {
    //El constructor privado garantiza que solo exista una instancia
    function MyService(url, method, token) {
        this._url = "";
        this._method = "GET";
        this._token = "";
        this._url = url;
        this._method = method;
        this._token = token;
    }
    //permite instanciar solo una vez
    MyService.createService = function (url, method, token) {
        //Si no existe crealo
        if (!MyService._instance) {
            console.log('creo');
            MyService._instance = new MyService(url, method, token);
        }
        //si existe o se creo, retorna esa instancia
        return MyService._instance;
    };
    //atributo para verificar que ya existe una instancia
    //Como es static, su referencia existe fuera del scope de la clase
    //una vez que fue usado, osea asignado una instancia
    MyService._instance = null;
    return MyService;
}());
var myService = MyService.createService("url", "POST", "1#12$");
console.log(myService, "myService");
var myService2 = MyService.createService("url", "POST", "1#12$");
console.log(myService2, "myService2");
//verifica que es la misma instancia, al tener la misma referencia en memoria
console.log(myService === myService2, "igualdad");
