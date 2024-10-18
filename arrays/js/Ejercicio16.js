function encontrarObjeto(arr, propiedad, valor) {
    return arr.find(objeto => objeto[propiedad] === valor);
  }
  
  let arregloDeObjetos = [
    {nombre: "Juan", edad: 30},
    {nombre: "Ana", edad: 25},
    {nombre: "Pedro", edad: 40}
  ];
  
  let resultado = encontrarObjeto(arregloDeObjetos, "nombre", "Ana");
  console.log(resultado); 