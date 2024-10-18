function calculapromedio(arreglo){
    const suama=  arreglo.reducte((acumulador, valroactual) => acumulador + valroactual,0);
    return suma/ arreglo.length;
}

const numeros=[50,60,70]
console.log(calcularpromedio(numeros)); 