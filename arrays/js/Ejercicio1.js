function sumarElementos(arreglo) {
    let suma = 0;
    let i = 0;
    while (i < arreglo.length) {
        suma += arreglo[i];
        i++;
    }
    return suma;
}

const numeros = [1, 2, 3, 4, 5];
console.log(sumarElementos(numeros)); 