//Algunos números son pares

function hayAlgunPar(arr) {
  return arr.some(num => num % 2 === 0);
}

const numeros = [1, 3, 5, 7, 8];
const resultado = hayAlgunPar(numeros);
console.log(resultado);  

const numerosSinPares = [1, 3, 5, 7];
const resultadoSinPares = hayAlgunPar(numerosSinPares);
console.log(resultadoSinPares);  
