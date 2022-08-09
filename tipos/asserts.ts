//TODO: ASERCIONES DE TIPO, es decirle al compilador que confie en mi
//que yo se que tipo de dato es la variable en ese momento
//por tanto puedo usar sus metodos

//Suelen usarse cuando no sabemos el tipo de dato que llegara, como en peticiones
//fetch, entonces asignamos any, ahora como any es una mala practica, en algun 
//momento usaremos alguna propiedad de esa variable, pero como es any, ts no 
//sabe si es number, string, etc, por lo que no sabe que metodo ponerte de ayuda
//por eso hacemos la asercion de tipo, afirmamos y le decimos a ts que tipo de dato
//sera nuestra variable en ese momento
let dataPerson: any;

dataPerson = "mario";
//sabemos que aca sera tipo string, entonces le decimos a TS eso
//1ra notacion, Angle Bracket syntax, en TS puro suele usarse más, pero no en tsx o jsx
//porque entra en conflicto con un componente - nodo
(<string>dataPerson).length;

//2da notacion, es mas usada en jsx, syntas AS
(dataPerson as string).length;
dataPerson = 2.21;
//Sabemos q sera number, TS confia en mi,sera de este tipo asi que muestrame sus metodos
(dataPerson as number).toFixed(2);

