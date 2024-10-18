function contarOcurrencias(arr, valor) {
    return arr.reduce((contador, elemento) => (elemento === valor ? contador + 1 : contador), 0);
  }
  
  let miArreglo = [1, 2, 3, 4, 3, 2, 1, 3, 3];
  console.log(contarOcurrencias(miArreglo, 3)); 
  