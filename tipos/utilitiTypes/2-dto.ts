import { Product } from './1-model';
//DATA TRANSFER OBJECT 
//Objetos para transferir datos a la BD
//Son la estructura para la transferencia de dato, representan a la tabla de la bd

//2do -> a partir de este generar otros types con los utilitis types, para crear dtos
//creamos un type a partir de la entidad general expresada como una interface
// type CreateProduct = Omit<Product, 'id'|'createdAt'|'updatedAt'|'userUpdated'>;

//tambien se puede hacer una interfas, mejor para mantener un estandar "las inerfaces"
//Omit, copia la interface y omite ciertos campos especificados
export interface CreateProductDto extends Omit<Product, 'id'| 'category'|'createdAt'|'updatedAt'|'userUpdated'> {
    //si queremos que este tenga mas campos extras de forma particulas, solo se lo agrega, por eso es mejor
    //usar una interfas, es mas escalable
    categoryId: number
}

//OTRO UTILITY TYPES
interface ProductSpecificDto extends Pick<Product, 'id' | 'userUpdated'> {
    //si deseo le agrego algun campos extra
} 

//Para actualizar creamos otra interfas basada en el creador de producto, porque
//este ya restringe que datos no se pueden editar y sera seteados en la directamente em la bd
//Partial, vuelve todos los atributos opcionales
export interface UpdateProductDto extends Partial<CreateProductDto> {

}

//Required
//Vuelve todo obligatorio
interface ProductUpdateSpecific extends Required<Product>{

}

//Podemos usar los dos, el primero es para un filtro inmenso, el pick para un filtro especifico
export interface FindProductDto1 extends Partial<Omit<Product, "tags">>{
    //Previene generar efectos de lado en el campo tags, haciendolo de solo lectura, previniendo METODOS DE MUTACION
    //Sin embargo aun puede reasignarse tags = [], por eso tambien vale poner readonly, para evitar la reasignacion
    //CONCLUSION: ReadonlyArray evita METODOS DE MUTACION, readonly evita reasignacion
    readonly tags: ReadonlyArray<string>
}
//Readonly
//Genera parametros de solo lectura, para que no se puedan modificar, esto sirve
//para previnir efectos de lado que alteren los valores reales de filtro
export interface FindProductDto2 extends Readonly<Pick<Product, 'description'>>{
    
}