function combinarYOrdenar(...arreglos) {
    let combinado = [].concat(...arreglos);
    return combinado.sort((a, b) => a - b);
}

let arreglo1 = [5, 8, 1];
let arreglo2 = [3, 7, 2];
let arreglo3 = [6, 4, 9];
console.log(combinarYOrdenar(arreglo1, arreglo2, arreglo3)); 