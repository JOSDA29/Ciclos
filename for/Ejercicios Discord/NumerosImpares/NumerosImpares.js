/*Cree un programa que muestre los números impares entre 1 y n.*/

let numero = parseFloat(prompt("¿Hasta que numero desea que se digiten los numeros?"))
for (let index = 1; index <= numero; index++) {
    if (index%2 != 0) {
        console.log("Los numeros impares desde 1 al",numero,"son",index);
    };
}