//Buscar el índice de un elemento

function buscarIndice(arr, valor) {
  return arr.indexOf(valor);
}

// Ejemplo de uso:
const numeros = [34, 7, 23, 32, 5, 62];
const indice = buscarIndice(numeros, 23);
console.log(indice);  // Imprimirá: 2

const indiceNoExistente = buscarIndice(numeros, 100);
console.log(indiceNoExistente);  // Imprimirá: -1

  