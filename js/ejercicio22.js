//Eliminar falsy values

function eliminarFalsy(arr) {
    return arr.filter(Boolean);
  }
  
  // Ejemplo de uso:
  const arregloConFalsos = [0, 1, false, 2, '', 3, null, 4, undefined, 5, NaN];
  const resultado = eliminarFalsy(arregloConFalsos);
  console.log(resultado);  
  