///////////////////////////////////////////////
///////// EXPERIMENTO # 1 - Functions /////////
///////////////////////////////////////////////
/* La siguiente fórmula va a agregar a un numero dado (number) + 2. Primero se escribe la formula y luego se agrega el valor de la variable number. El input sería "function addTwo" y el output es el "return" */ 
function addTwo (number) {
    return number + 2;
}

const finalAnswer = addTwo(5);
console.log(finalAnswer);
/* Como ya se creó la función arriba, se puede seguir utilizando más adelante, por ejemplo: */
const finalAnswer2 = addTwo(10);
console.log(finalAnswer2);

///////////////////////////////////////////////
///////// EXPERIMENTO # 2 - Functions /////////
///////////////////////////////////////////////
/* No es necesario que la función tenga un argumento, en el ejemplo siguiente no hay ningún arumento (paréntesis vacío). Lo que si se debe hacer es SIEMPRE LLAMAR EL PARÁMETRO, es decir, dentro de console.log, llamar el parámetro devuelvemeCinco en este caso */
function devuelvemeCinco() {
    return 5;
}
console.log(devuelvemeCinco());

///////////////////////////////////////////////
///////// EXPERIMENTO # 3 - Functions /////////
///////////////////////////////////////////////
/* También se pueden crear funciones con dos o más argumentos, por ejemplo el siguiente experimento con 2 funciones */
function sumar(num1, num2) {
    return num1 + num2;
}
console.log(sumar(5,10));
/* Otra forma de hacer lo anterior, sino se quiere llamar la función dentro del console.log, es la siguiente: */
const sumar2 = sumar(5,10);
console.log(sumar2);

///////////////////////////////////////////////
///////// EXPERIMENTO # 4 - Functions /////////
///////////////////////////////////////////////
function saludo(primerNombre, Apellido, Distintivo, textoSaludo) {
    return `${textoSaludo} ${Distintivo} ${Apellido}! Estoy muy emocionado de que esté con nosotros, ${primerNombre}, espero disfrute su estadía ${Distintivo} ${Apellido}.`;
}

console.log(saludo("Dario", "Ospina", "Sr." ,"Bienvenido"));
/* Como ya se creó la función, se pueden modificar las variables todas las veces que se quiera, ej: */
console.log(saludo("Pepito", "Perez","Dr.","Hola!"))

///////////////////////////////////////////////
///////// EXPERIMENTO # 5 - Functions /////////
///////////////////////////////////////////////
/* Se puede también poner el resultado (console.log) e incluir ahí el return y luego llamar los parámetros, ej: */
const myHomeCity = "Salt Lake City";
const myHomeState = "Utah";
const myHomeCountry = "USA";

function logOutYourHome(city, state, country) {
  console.log(`You are from ${city}, ${state} ${country}.`);
}

logOutYourHome(myHomeCity, myHomeState, myHomeCountry);