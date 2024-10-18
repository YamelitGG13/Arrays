function estaVacio(arr) {
    return !arr.some(() => true);
  }
  
  let miArreglo1 = [];
  let miArreglo2 = [1, 2, 3];
  console.log(estaVacio(miArreglo1)); 
  console.log(estaVacio(miArreglo2)); 