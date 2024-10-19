//-Todos los números son mayores que n

function sonTodosMayoresQue(arr, n) {
  return arr.every(num => num > n);
}

const numeros = [10, 20, 30, 40, 50];
const n = 5;
const resultado = sonTodosMayoresQue(numeros, n);
console.log(resultado);  

const n2 = 25;
const resultado2 = sonTodosMayoresQue(numeros, n2);
console.log(resultado2);  
