//Suma de los elementos de un arreglo

let Numeros = [1, 2, 3, 4, 5]; // <-- [] eso lo vuelve un array o arreglo , se define como una lista 
let suma = 0;

for (let numi = 0; numi < Numeros.length; numi++) { // for para devolver los numeros sin utilizar Funcion 
    suma += Numeros[numi];
}

console.log("la suma de los numeros es : ",suma); // Resultado: 15

