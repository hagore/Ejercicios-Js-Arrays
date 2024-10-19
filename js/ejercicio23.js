//Plana un arreglo anidado

function aplanarArreglo(arr) {
    return arr.flat();
  }
  
  const arregloAnidado = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];
  const resultado = aplanarArreglo(arregloAnidado);
  console.log(resultado);  
  