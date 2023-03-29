/*Cree un programa que calcule la suma de los cuadrados de los números entre 1 y n.*/

let numero = parseInt(prompt("Ingrese un número"));
let contador = 1;
let suma =0;
    while (contador <= numero) {
        suma += contador*contador;
        contador++;
    }
console.log("la suma de los cuadrados desde 1 al",numero,"es",suma);


