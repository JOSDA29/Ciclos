/*Programe un algoritmo que dado un número entero devuelva su factorial.
Revuelva el problema usando el ciclo mientras.*/

let numero = parseInt(prompt("Digite cualquier numero"));
let contador = 1
let factorial= 1
while (contador <= numero) {
    factorial *= contador;
    contador++
}
console.log("El factorial de",numero,"numero es",factorial);