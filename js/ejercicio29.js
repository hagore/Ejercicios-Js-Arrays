//Agrupar por edades

function agruparPorDecadas(arr) {
    return arr.reduce((acumulador, persona) => {
      const decada = Math.floor(persona.edad / 10) * 10;

      if (!acumulador[decada]) {
        acumulador[decada] = []; 
      }
      acumulador[decada].push(persona);
      return acumulador; 
    }, {});
  }
  
  const personas = [
    { nombre: "marie", edad: 25 },
    { nombre: "Ana", edad: 32 },
    { nombre: "yuri", edad: 29 },
    { nombre: "alex", edad: 41 },
    { nombre: "jose", edad: 10 },
    { nombre: "elish", edad: 12 },
    { nombre: "miriam", edad: 54 },
   
  ];
  
  const gruposPorDecadas = agruparPorDecadas(personas);
  console.log(gruposPorDecadas);
  