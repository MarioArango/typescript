//TODO: NEVER, representa un valor que nunca se da en el codigo
//Cuando una funcion no retorna nada, o retorna un null o undefined por defecto
//es de tipo void, ya que el no retornar es igual a retornar null o undefined
//Sin embargo, never quiere decir que nunca retornara nada, ni null ni undefined
//entonces si por aove aca ejecutamos codigo que retorne un error o sea un bucle
//infinito es de tipo never, porque este nunca acaba de ejecutarse o se interrumpe
//por el error en el hilo de ejecucion
//por eso se suele usar cuando una fn lanza un error 
//poniendo "try catchs" se soluciona al ejecutar la fn se soluciona
//ENTONCES TIP, SI ES DE TIPO NEVER SIEMPRE ENVOLVERLO EN UN TRYCATCH
/**
 * try{
 * mifnnever()
 * }catch{}
 */

//POR DEFECTO ES VOID
function saludar(msn: string){
    console.log(msn)
    // return null -> si retorna null es tipo void, null es un objeto
    // return undefined -> si no retorna nada, retorna por defecto undefined
}

const sal = saludar('hola')
// console.log(sal, "sal")

//SI NO QUEREMOS QUE RETORNE NADA
//NEVER NUNCA FINALIZA SU EJECUCION, SCOPE DE FUNCION INFINITO, CUELLO DE BOTELLA
//SOLO TIENE DOS CASOS DE USO 1. ERROR "porque finaliza obligatoriamente, cerrando
//el hilo de ejecucion" y 2. BUCLE INFINITO, porque su scope nunca acaba
function saludar2(msn: string): never {
    throw new Error(msn)
}

try {
    saludar2('error')
} catch (error) {
    console.log('Corriegiendo error del never');
}

function saludar3(msn: string): never {
    while(true){
        console.log(msn)
    }
}
    
saludar3('hola')



