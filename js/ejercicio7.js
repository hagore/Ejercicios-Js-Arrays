//Eliminar duplicados

function eliDupli(arr) {
    return [...new Set(arr)];
  }
  
  // Ejemplo de uso
  const numeros = [1, 2, 3, 4, 2, 3, 5, 6, 7, 5];
  const numerosUnicos = eliDupli(numeros);
  console.log(numerosUnicos);  // Resultado: [1, 2, 3, 4, 5, 6, 7]
  