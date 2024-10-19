//Promedio de números

// function PromNum (Ays){

// return Ays.length === 0 ? null : Ays.reduce((suma, num) => suma + num, 0) / Ays.length;
// }

// // Ejemplo de uso
// let numeros = [10, 20, 30, 40, 50];
// let resultado = calcularPromedio(numeros);
// console.log(resultado); // Resultado: 30

function calcularPromedioCinco(a, b, c, d, e) {
    return (a + b + c + d + e) / 5; // Suma los cinco números y divide entre 5
}

// Ejemplo de uso
let resultado = calcularPromedioCinco(10, 8, 9, 10, 7);
console.log(resultado); // Resultado: 30
