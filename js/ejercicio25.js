//Comprobar si un arreglo está vacío

function estaVacio(arr) {
    return Array.isArray(arr) && arr.every(item => item === undefined);
  }
  
  const arregloVacio = [];
  const arregloConElementos = [1, 2, 3];
  
  console.log(estaVacio(arregloVacio));        
  console.log(estaVacio(arregloConElementos)); 
  