//TODO: ENUM, permiten definir un grupo de constantes con nombre
//es una forma mas ordenada de declarar constantes, ya que se adaptan al contexto
//porque se pueden encapsular segun al tipo de constante de pertenesca

//CONSTANTES DEL MODULO, esta bien pero se ven desordenado
const Peru = "pe"
const Argentina = "Ar"
const Chile = "Ch"
const Colombia = "Co"
const Horizontal = "x"
const Vertical = "y"

//Enum, peromite agruparlos segun el contexto,
//constantes de paises
enum Lenguajes {
    Peru = "pe",
    Argentina = "Ar",
    Chile = "Ch",
    Colombia = "Co"
}

//constantes de cordenadas
enum Ejes {
    Horizontal = "x",
    Vertical = "y"
}

//Ayuda con el autocompletado, brindando las opciones correspondientes al contexto de constantes
const pais: Lenguajes = Lenguajes.Peru;
const eje: Ejes = Ejes.Horizontal;




