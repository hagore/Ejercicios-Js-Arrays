//Multiplicar por 2

function multiplicarPorDos(arr) {
    return arr.map(function(num) {
      return num * 2;
    });
  }
  
  // Ejemplo de uso:
  const numeros = [1, 2, 3, 4, 5];
  console.log(multiplicarPorDos(numeros)); // [2, 4, 6, 8, 10]
  