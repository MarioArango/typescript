//1ero -> crear un obejeto mediante una interfaz que represente a toda la entidad de la bd
export interface Product {
    id: number,
    createdAt: string,
    updatedAt: string,
    userCreated: string,
    userUpdated: string,
    title: string,
    image: string,
    description: string,
    stock: number,
    size: string,
    color: string,
    price: number,
    category: string,
    isNew: boolean,
    tags: string[]
}