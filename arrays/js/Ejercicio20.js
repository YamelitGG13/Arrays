function productoDeElementos(arr) {
    return arr.reduce((acumulador, valorActual) => acumulador * valorActual, 1);
  }
  
  let miArreglo = [1, 2, 3, 4, 5];
  console.log(productoDeElementos(miArreglo)); 
  
  