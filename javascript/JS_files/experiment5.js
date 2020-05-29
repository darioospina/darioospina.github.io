// Funciona como excel. Lo que va antes de else es el [value_if_true], lo que va dentro de else es el [value_if_false]

// EXPERIMENTO # 1 - IF statement
const elCieloEsAzul = true
if (elCieloEsAzul) {
    console.log ("El cielo es azul");
    console.log ("Además de todo es muy lindo");
} else {
    console.log ("El cielo NO es azul");
}

// EXPERIMENTO # 2 - IF statement
const elCieloEsAzulCeleste = true
let saludo;
if (elCieloEsAzulCeleste) {
    saludo = "Va a ser un día grandioso";
} else {
    saludo = "Va a ser un día muy feo";
}
console.log(saludo);

// EXPERIMENTO # 3 - IF statement
// En JS, === significa pregunta, en este caso el statement sería es 2+2=4?
if (2 + 2 === 4) {
    console.log("Urra!! Las matemáticas sirven");
} else {
    console.log("Oh oh, qué pasa acá?");
}

// EXPERIMENTO # 4 - IF statement
// En JS como en excel se pueden agregar varios condicionales a un IF. En este caso la función está diciendo que si hay 0 amigos ponga un texto, si hay de 1 a 4, ponga otro texto y si hay más de 4 ponga un texto distinto. Como puse que hay 17 amigos, entonces muestra el último condicional. 
const amigosEnLaFiesta = 17
if (amigosEnLaFiesta === 0) {
    console.log("Genial, más comida para mi");
} else if (amigosEnLaFiesta <=4) {
    console.log("Perfecto para jugar un juego de mesa");
} else {
    console.log("Yuhuu!!! enciendan la música");
}