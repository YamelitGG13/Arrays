function eliminarDuplicados(arr) {
    return [...new Set(arr)];
}

let miArreglo = [1, 2, 2, 3, 4, 4, 5];
console.log(eliminarDuplicados(miArreglo)); 
