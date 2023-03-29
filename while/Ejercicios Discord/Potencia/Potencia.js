/* Escriba un algoritmo que calcule la potencia de a b potencial = a * a * a * ... * a (b veces)*/

let base = parseFloat(prompt("Ingrese la base de su potencia, recuerde esta es el numero que se multiplica"));
let exponente = parseFloat(prompt("Ingrese el exponente de su potencia, recuerde este es el que indica las veces que se multiplicara la base"));
let contador = 1;
let acumulador = 1;
 while (contador <= exponente) {
    acumulador = acumulador*base;
    contador++;
 }
 console.log("la potencia de",base,"elevado a la",exponente,"es igual a",acumulador);