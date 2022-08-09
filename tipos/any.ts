//TODO: ANY, usado para capturar valores dinamicos
//Los valores pueden cambiar de tipo, "ejm-apis externas"
//Se espera usarlo como ultimo recurso, como para saber que tipo de dato esta
//retornando tal api y que no nos de error de tipos, ya luego le pones su tipo tal cual
//any es cualquier tipo de dato o todo tipo de dato
//TIPO EXPLICITO
let id: any = 1
id = "1"

//TIPO INFERIDO
let userId;
userId = 1
userId = "hola"
//como es any, y aplicamos metodos nativos del tipo de dato, podemos generar un error
//en tiempo de ejecucion, porque el metodo no existira si el tipo no coincide
//por eso no se recomienda usar any, solo al inicio cuando traemos de un api, para saber
//que estructura tiene, crearle una interfas y darle un tipo a lo que retorna la api
userId.substring(2)
