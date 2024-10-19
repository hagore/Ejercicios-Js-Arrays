//Palabras más largas que "n" letras

const palabrasLargas = (arr, n) => {
  return arr.filter(palabra => palabra.length > n);
}

const palabras = ['banana', 'manzana', 'pera', 'naranja', 'uva'];
const resultado = palabrasLargas(palabras, 4);

console.log(resultado);

