//Combina varios arreglos y ordena

function combinarYOrdenar(...arreglos) {
    return arreglos.flat().sort((a, b) => a - b);
  }
  
  const arreglo1 = [5, 3, 8];
  const arreglo2 = [2, 7];
  const arreglo3 = [4, 6, 1];
  
  const resultado = combinarYOrdenar(arreglo1, arreglo2, arreglo3);
  console.log(resultado); 
  