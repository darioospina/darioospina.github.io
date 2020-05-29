// const = constant -> This is gonna be the value of the variable forever
// En JS los números pueden ser positivos, negativos, enteros o decimales
const monthlyRent = 500;

// let = This let to reassign the value of the variable later
let yearlyRent = monthlyRent * 12;
// console.log(nombre de la variable) = arroja un resultado
// Se pueden agregar varias variables separadas por coma, de esta manera se van a mostrar dos resultados en la consola
console.log(monthlyRent, yearlyRent);

// JavaScript va en orden descentente, lo que significa que primero va a arrojar el resultado de arriba, si se modifican las variables después de un console.log, el nuevo resultado va a aparecer cuando se ponga de nuevo otro console.log
yearlyRent = 1;
console.log(yearlyRent);
