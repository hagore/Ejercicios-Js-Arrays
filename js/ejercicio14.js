//Unir en una cadena

// Función para unir un arreglo de palabras en una cadena separada por comas
const unirPalabras = (arr) => {
  return arr.join(', ');
}
const palabras = ['banana', 'manzana', 'pera', 'naranja'];
const cadenaUnida = unirPalabras(palabras);

console.log(cadenaUnida);
