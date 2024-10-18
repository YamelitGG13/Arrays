function combinarObjetos(arr1, arr2) {
    return arr1.map((objeto, indice) => {
      return {...objeto, ...arr2[indice]};
    });
  }
  
  let arreglo1 = [{nombre: "Juan", edad: 30}, {nombre: "Ana", edad: 25}];
  let arreglo2 = [{ciudad: "Madrid"}, {ciudad: "Barcelona"}];
  
  let combinado = combinarObjetos(arreglo1, arreglo2);
  console.log(combinado);
  