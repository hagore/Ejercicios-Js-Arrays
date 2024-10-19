//Filtrar números pares

function filtrarPares(arr) {
    return arr.filter(function(num) {
      return num % 2 === 0;
    });
  }
  
  // Ejemplo de uso:
  const numeros = [1, 2, 3, 4, 5, 6];
  console.log(filtrarPares(numeros)); // [2, 4, 6]
  