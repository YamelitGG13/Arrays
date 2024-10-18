function reemplazarNegativos(arr) {
    return arr.map(num => Math.abs(num));
  }
  
  let miArreglo = [-1, 2, -3, 4, -5];
  console.log(reemplazarNegativos(miArreglo)); 
  