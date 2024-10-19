//Encuentra el mayor número

function enMayNum(array) { // por que entre parentesis array? simplemente por que el nombre de la variable para que mas a delante pueda pponer el codigo y me duvuela resultados
    return array.length > 0 ? Math.max(...array) : null; //encuentra el número máximo en el array.
}                                                        //El operador de propagación (...) descompone el array 
                                                        //en argumentos individuales que Math.max puede recibir.

let N1 = [3, 52, 7, 20, 8, 1]; //numeros al lazar de igual forma dara el resultado 
let resultadoX = enMayNum(N1);
console.log("El numero mayor fue: ",resultadoX); // Resultado sera el numero mas grande 
