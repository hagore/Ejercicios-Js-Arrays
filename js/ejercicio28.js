//Transforma un arreglo de objetos

function extraerNombres(arr) {
    return arr.map(objeto => objeto.nombre);
  }
  
  // Ejemplo de uso:
  const personas = [
    { nombre: "Alis", edad: 30 },
    { nombre: "declan", edad: 25 },
    { nombre: "ellie", edad: 35 },
    { nombre: "marie", edad: 28 }
  ];
  
  const nombres = extraerNombres(personas);
  console.log(nombres); 
  