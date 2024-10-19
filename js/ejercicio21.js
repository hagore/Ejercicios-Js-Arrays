//Crear un arreglo a partir de un string

function convertirStringAArreglo(texto) {
    return texto.split(' ');
  }
  
  const cadena = "Hola, este es un ejemplo de cadena de texto.";
  const arregloDePalabras = convertirStringAArreglo(cadena);
  console.log(arregloDePalabras);
  