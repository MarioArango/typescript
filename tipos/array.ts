//TODO: Array

//EXPLICITO

//1era notacion
let lista: string[] = ['mario', 'clara', 'diego']
let edades: number[] = [26,24,23]

let combinado: (string | number)[] = ['mario', 26]

//elemento[] -> elemento string, number, string[], tupla
let arraynumeroInmerso: number[][] = [[1,2,3], [1,2]]
let arraystringInmerso: string[][] = [["mario", "arango"], ["diego", "paredes"]]
let tuplaInmerso: [string, number, boolean][] = [["mario", 26, true], ['clara', 24, true]]


//2do notacion
let lista2: Array<string> = ['mario', 'clara', 'diego']
let edades2: Array<number> = [26,24,23]

let combinado2: Array<string | number> = ['mario', 26]

let arraynumeroInmerso2: Array<number[]> = [[26,24,23], [1,2,3]]
// let arraystringInmerso2: Array<Array<string>> = [["mario", "arango"], ["clara", "rivera"]]
let arraystringInmerso2: Array<string[]> = [["mario", "arango"], ["clara", "rivera"]]
let tuplaInmerso2: Array<[string, number, boolean]> = [["mario", 26, true], ["clara", 24, true]]

//RECOMIENDO USAR LA PRIMERA NOTACION


//IMPLICITO, any[]
let list = [1, "mario"]