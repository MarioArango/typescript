//podriamos tener una clase de PRODUCTS Y CATEGORYS
//Cada uno con los mismos metodos crud, mismo codigo, pero
//retorno de DAO distinto, ya que cada uno retorna una estructura
//distinta segun la bd, como solo cambia el tipo de retorno "interface DAO"
//entonces podriamos pasar esa interfas como un generico
//y tener solo una clase que haga el crud para ambos, la url la 

import axios from "axios";

//pasariamos por el constructor
interface DAOProduct {
    id: number
}

interface DTOProduct {
    id: number
}

interface DAOCategory {
    id: number
}

// class ServiceProduct {
//     //aca trabajamos con DAOProduct
//     getAll(){}
//     getById(){}
//     findOne(){}
//     create(){}
//     update(){}
// }

// class ServiceCategory {
//     //aca trabajamos con DAOCategory
//     getAll(){}
//     getById(){}
//     findOne(){}
//     create(){}
//     update(){}
// }

//PODEMOS RESUMIRLO A UNA CLASE USANDO TIPOS GENERICOS, 
//"CLASE GENERAL" DE FUNCIONALIDAD COMPARTIDA = ABSTRACT, el abstrac es opcional, su uso dependera de lo que queramos
//pero vale recordarlo
//En atributos: generalmente debe ser un array de T, para poder iniciar el valor
//TIPADO EN LA CLASE, GENERICOS EN LA CLASE
class HttpService<T> {
    protected _url: string = "";

    constructor(url: string){
        this._url = url;
    }
    // private data: T[] = [];
    getAll(): T[] | Promise<T[]>{
        return []
    }
    getById(){}
    findOne(){}
    create(){}
    //Tipado en el metodo, GENERICOS EN LOS METODOS
    async update<TypeP, TypeDTO, TypeDAO>(id: TypeP, formData: TypeDTO){
        try {
            const { data } = await axios.put<TypeDAO>(`/${id}`, formData);
            return data;
        } catch (error) {
          //  
        }
    }
}

const service = new HttpService<DAOProduct>("http/products");
service.getAll()
//usare el primero como tipo del parametro y el segundo como tipo de envio, el tercero el tipo de retorno
service.update<DAOProduct["id"], DTOProduct, DAOProduct>(1, {id: 1})

const service2 = new HttpService<DAOCategory>("http/categorys");
service2.getAll()

//HASTA ACA TODO OK, SIN EMBARGO NUESTRA CLASE ES GENERAL EN FUNCIONALIDAD, Y TAL VEZ 
//NUESTRO PRODUCT O CATEGORY COMO SIEMPRE SUCEDE DEBA TENER ALGUNOS METODOS ESPECIFICOS
//POR ESO, ESTA CLASE QUEDA COMO CRUD GENERAL PARA TODOS Y PARA CADA MODELO SE HACE COMO
//SIEMPRE SU CONJUNTO DE METODOS
class ServiceProduct extends HttpService<DAOProduct>{
    constructor(url: string){
        super(url)
    }
    //CONTINUAMOS CON SUS METODS PROPIOS
}

class ServiceCategory extends HttpService<DAOCategory>{
    constructor(url: string){
        super(url)
    }
    //CONTINUAMOS CON SUS METODS PROPIOS
}

const product = new ServiceProduct("http/product");