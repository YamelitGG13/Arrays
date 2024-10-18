function sumaAcumulada(arr) {
    return arr.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
  }
  
  let miArreglo = [1, 2, 3, 4, 5];
  console.log(sumaAcumulada(miArreglo)); 