//ReadonlyArray<>
//Para evitar efectos de lado en el array original, como por metodos (push, pop, ..)
//Recordar que forEach,map,filter no generan efecto de lado porque crean un spred interno

// const verduras: string[] = ["Lechuga", "Col"] -> editable

//previene efectos de lado
const verduras: ReadonlyArray<string> = ["Lechuga", "Col"]