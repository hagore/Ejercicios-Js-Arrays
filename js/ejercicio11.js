//Ordenar alfabéticamente

const ordenarAlfabeticamente = (arr) => {
    return arr.sort((a, b) => a.localeCompare(b));
  }

  const palabras = ['banana', 'manzana', 'pera', 'naranja'];
  const palabrasOrdenadas = ordenarAlfabeticamente(palabras);
  
  console.log(palabrasOrdenadas);
 
  