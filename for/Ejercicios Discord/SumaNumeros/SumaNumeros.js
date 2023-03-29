/*Cree un programa que calcula la suma de los primeros n números naturales.*/

let limite = parseFloat(prompt("¿Hasta que numero desea sumar los numeros naturales positivos?"));
let contador=1;
let suma=0;
for (let contador = 1; contador <= limite; contador++) {
    suma=suma+contador
}
console.log("La suma de los numeros naturales hasta",limite,"es",suma);