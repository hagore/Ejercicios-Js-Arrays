//10. Combinar objetos de dos arreglos

function combinarObjetos(arr1, arr2) {
    return arr1.map((objeto, index) => {
      return { ...objeto, ...arr2[index] };
    });
  }
 
  const arreglo1 = [
    { nombre: "juansho", edad: 25 },
    { nombre: "amelia", edad: 34 },
    { nombre: "florencia", edad: 91 },
 
  ];
  
  const arreglo2 = [
    { ciudad: "Madrid", pais: "España" },
    { ciudad: "Buenos Aires", pais: "Argentina" },
    { ciudad: "Lima", pais: "Perú" }
  ];
  
  const resultado = combinarObjetos(arreglo1, arreglo2);
  console.log(resultado);
  