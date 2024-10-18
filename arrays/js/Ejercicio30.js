function combinarObjetos(arr1, arr2) {
    return arr1.map((objeto, indice) => {
      return {...objeto, ...arr2[indice]};
    });
  }
  
  let arreglo1 = [{nombre: "Carlos", edad: 35}, {nombre: "Sofía", edad: 28}];
  