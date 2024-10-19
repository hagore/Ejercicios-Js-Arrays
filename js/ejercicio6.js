//Concatenar arreglos
//Escribe una función que tome dos arreglos y los combine en uno solo.

function concatenarArreglos(arr1, arr2) {
    return [...arr1, ...arr2];
  }
  
  // Ejemplo de uso:
  let arreglo1 = [1, 2, 3];
  let arreglo2 = [4, 5, 6];
  console.log(concatenarArreglos(arreglo1, arreglo2));  // [1, 2, 3, 4, 5, 6]

  