function hayNumerosPares(arr) {
    return arr.some(num => num % 2 === 0);
  }
  
  let miArreglo = [1, 3, 7, 4, 9];
  console.log(hayNumerosPares(miArreglo)); 