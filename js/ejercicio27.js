//Contar ocurrencias de un valor

function contarOcurrencias(arr, valor) {
    return arr.reduce((contador, item) => {
      return item === valor ? contador + 1 : contador;
    }, 0);
  }
  
  const arreglo = [1, 2, 3, 1, 4, 1, 5];
  const valorBuscado = 1;
  const resultado = contarOcurrencias(arreglo, valorBuscado);
  console.log(resultado); 
  