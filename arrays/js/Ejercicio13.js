function palabrasMasLargasQue(arr, n) {
    return arr.filter(palabra => palabra.length > n);
  }
  
  let miArreglo = ["perro", "elefante", "gato", "hipopótamo"];
  console.log(palabrasMasLargasQue(miArreglo, 4)); 
  