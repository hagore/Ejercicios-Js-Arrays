//Suma acumulada

function sumaAcumulada(arr) {
    return arr.reduce((acumulador, num) => acumulador + num, 0);
  }
  const numeros = [1, 2, 3, 4, 5];
  const resultado = sumaAcumulada(numeros);
  console.log(resultado);  
  