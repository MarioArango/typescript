import { Product } from './1-model';
import { CreateProductDto, UpdateProductDto, FindProductDto2 } from './2-dto';

const rxAddProduct = (formData: CreateProductDto)/*:Product*/ => {
// return {}
}

const rxUpdateProduct = (idProduct: Product["id"], formData: UpdateProductDto) /*:Product*/ => {
    //Tener idProduct como number esta bien, pero si tenemos muchas apis que piden idPorducto
    //y este cambia el tipo de dato a string, tendremos que actualizar todos las apis
    //por eso, como idPoroduct hace referencia al id del modelo, es mejor ponerlo como
    //un TIPADO POR INDICE, esto significa que copia el tipo de dato del modelo segun el atributo indicado
    //idProduct: Product["id"]
    //ayuda a prevenir la inconsistencia
    // return {}
}

//Filtro de busqueda, pick del modelo o partial del modelo
const rxFindProducts = (formData: FindProductDto2)/*: Product[]*/ => {

}