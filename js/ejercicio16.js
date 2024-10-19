//Encontrar un elemento específico

const personas = [
  { nombre: 'Juan', edad: 30 },
  { nombre: 'Ana', edad: 25 },
  { nombre: 'Luis', edad: 35 },
  { nombre: 'Maria', edad: 28 }
];

function encontrarPorNombre(arr, nombreBuscado) {
  return arr.find(persona => persona.nombre === nombreBuscado);
}

const resultado = encontrarPorNombre(personas, 'Ana');
console.log(resultado);  

const resultadoNoExistente = encontrarPorNombre(personas, 'Carlos');
console.log(resultadoNoExistente); 
