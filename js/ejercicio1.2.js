//Suma de los elementos de un arreglo version forEach
let numeroX = [1, 9, 3, 4, 5]; //<-- si ese es el array  
let sumita = 0;

numeroX.forEach((numeroY) => { // esta recorriendo los numeros 
    sumita += numeroY; // Sumar cada número del array
});

console.log("Resultado : ",sumita); // Resultado: 
