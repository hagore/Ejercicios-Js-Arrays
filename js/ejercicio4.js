//Invertir un arreglo
//Escribe una función que tome un arreglo y lo devuelva invertido (sin usar reverse()).
function invertido(arreglo){
    let arr =[];
    for (let x = arreglo.length; x--;) arr.push(arreglo[x]);
    return arr;
}
let arinvert = [1,2,3,4,5];
console.log(invertido(arinvert));