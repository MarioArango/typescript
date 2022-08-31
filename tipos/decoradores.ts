//DAN FUNCIONALIDAD EXTRA
//POR EJM: SON USADOS PARA VALIDAR ATRIBUTOS EN CONSULTAS POST
//como son experimentales se debe habilitarlos 
// "experimentalDecorators": true

import { IsEmail, IsUrl } from "class-validator";

class User {
    @IsEmail()
    private email!: string; //! lo hace opcional

    @IsUrl()
    private url!: string;

    //esos decoradores validan lo que necesitamos, es decir
    //ejecutan logica interna, son funcionaidad extra
}