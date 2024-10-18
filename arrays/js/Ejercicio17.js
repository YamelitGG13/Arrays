function todosMayoresQue(arr, n) {
    return arr.every(num => num > n);
  }
  
  let miArreglo = [10, 20, 30, 40, 50];
  console.log(todosMayoresQue(miArreglo, 15)); 
  console.log(todosMayoresQue(miArreglo, 5));  
  