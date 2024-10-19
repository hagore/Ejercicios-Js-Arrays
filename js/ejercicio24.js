//Reemplazar valores en un arreglo

function reemplazarNegativosConAbsolutos(arr) {
    return arr.map(num => Math.abs(num));
  }
  
  const numeros = [-1, -2, 3, -4, 5];
  const resultado = reemplazarNegativosConAbsolutos(numeros);
  console.log(resultado);  
  