//Buscar elemento

function buscarElemento(arr, valor) {
    return arr.includes(valor);
  }
  
  // Ejemplo de uso:
  const arreglo = [1, 2, 3, 4, 5];
  const valorBuscado = 3;
  
  console.log(buscarElemento(arreglo, valorBuscado)); // true
  console.log(buscarElemento(arreglo, 6)); // false
  