/*Cree un programa que calcule el promedio de 10 números.*/

let suma=0;
let numero=0;
for (let contador = 0; contador < 10; contador++) {
    numero = parseFloat(prompt("Digite los numeros para el promedio"))
    suma = suma+numero
}
console.log("El promedio de los numero digitados es",suma/10);