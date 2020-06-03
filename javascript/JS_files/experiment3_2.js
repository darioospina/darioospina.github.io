/////////////////////////////////////////////
///////////// EXPERIMENT # 1 ////////////////
/////////////////////////////////////////////
const x = 5;
const y = 10;
const z = 11;

const esVerdad = true;

if (x !== y) {
    console.log("El símbolo !== significa diferente")
}

if (x !== y && y !== z && x !== z) {
    console.log("Estos números son todos distintos")
} // El símbolo "&&" significa "y"

if (x !== y || x !== z) {
    console.log("Estos números también son distintos")
} // El símbolo "||" significa "o"

if (esVerdad || (x === z && y === z)) {
    console.log("Esto es una combinación de y & o")
} // También se pueden combinar "y" & "o". La forma de hacerlo es usando paréntesis