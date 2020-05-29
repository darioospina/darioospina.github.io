let amigosEnMiFiesta = 0;

amigosEnMiFiesta = amigosEnMiFiesta + 1;
amigosEnMiFiesta = amigosEnMiFiesta + 1;
amigosEnMiFiesta = amigosEnMiFiesta + 1;
amigosEnMiFiesta = amigosEnMiFiesta + 1;

console.log(amigosEnMiFiesta);
// Como se usó "let", la variable amigosEnMiFiesta va a cambiar con cada línea, se va a agregar un número más, en este caso el resultado sería 4 (resultado de 0+1+1+1+1), sin embargo hay una forma más fácil de hacer esto y es con la función while. 
////////////////////////////////////////
// EXPERIMENTO # 1 - While//////////////
////////////////////////////////////////
// En este caso lo quese está diciendo es que mientras amigosEnMiSegundaFiesta sea menor a 4, repita la misma acción hasta que llegue a 4.
let amigosEnMiSegundaFiesta = 0

while (amigosEnMiSegundaFiesta < 4) {
    amigosEnMiSegundaFiesta = amigosEnMiSegundaFiesta + 1;
}

console.log(amigosEnMiSegundaFiesta);

////////////////////////////////////////
// EXPERIMENTO # 2 - While//////////////
////////////////////////////////////////
// En este caso la función lo que va a hacer es preguntar cada vez si la condición se sigue manteniendo, por eso después de while se incluye un console.log. Por lo tanto mientras sea cierto, se va a ir acumulando hasta llegar a 4.
let amigosEnMiTerceraFiesta = 0

while (amigosEnMiTerceraFiesta < 4) {
    amigosEnMiTerceraFiesta = amigosEnMiTerceraFiesta + 1;
    console.log(amigosEnMiTerceraFiesta);
}

console.log(amigosEnMiTerceraFiesta);

////////////////////////////////////////
// EXPERIMENTO # 3 - Incrementos//////////////
////////////////////////////////////////
// Las siguientes cuatro funciones hacen exactamente lo mismo (las cuatro opciones dentro de este mismo experimento)
let unNumeroCualquiera = 0;

while (unNumeroCualquiera < 3) {
    unNumeroCualquiera = unNumeroCualquiera + 1;
    // es lo mismo que: unNumberoCualquiera +=1;
    // es lo mismo que: unNumeroCualquiera++;
    // es lo mismo que: ++unNumeroCualquiera;
    console.log(unNumeroCualquiera);
}

////////////////////////////////////////
// EXPERIMENTO # 4 - Incrementos//////////////
////////////////////////////////////////
// La siguiente fórmula es otra forma de hacer un condicional. Se está diciendo lo siguiente: dada una variable i=0, si esa variable es <4 entonces sumar 1 (=++) hasta llegar a 4
let otroNumeroCualquiera = 0;

for (let i = 0; i < 4; i++) {
    otroNumeroCualquiera++;
}

console.log(otroNumeroCualquiera);

////////////////////////////////////////
// EXPERIMENTO # 5 - Loops//////////////
////////////////////////////////////////
// El mismo experimento anterior pero sumando uno por uno hasta llegar a 4
let otroNumeroMas = 0 

for (let i = 0; i < 4; i++) {
    console.log(i);
    otroNumeroMas++;
}

////////////////////////////////////////
// EJERCICIO # 1//////////////
////////////////////////////////////////
/*
  Write some code that declares two variables, character and timesToRepeact.
  Using a loop, repeat that character that many times and then console.log it.
  Example, if I had character = 'f' and timesToRepeat = 5, it'd console.log
  'fffff'
*/
const caracter = "D";
const numeroDeRepeticiones = 4;
let Resultado = '';

for (let i = 0; i < numeroDeRepeticiones; i++) {
    Resultado = Resultado + caracter;
    // La línea 86 se podría simplificar así: Resultado += caracter;
}
console.log(Resultado);



