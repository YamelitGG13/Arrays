function eliminarFalsy(arr) {
    return arr.filter(Boolean);
  }
  
  let miArreglo = [0, "hola", false, "", 42, null, undefined, "mundo"];
  console.log(eliminarFalsy(miArreglo));
  