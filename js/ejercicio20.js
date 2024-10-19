//Producto de todos los elementos

function productoDeElementos(arr) {
    return arr.reduce((producto, num) => producto * num, 1);
  }
  const numeros = [1, 2, 3, 4, 5];
  const resultado = productoDeElementos(numeros);
  console.log(resultado); 
  