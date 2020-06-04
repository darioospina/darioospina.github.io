/*


CONST & LET


*/ 
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





/*


STRINGS


*/
const firstName = "Dario";
const lastName = "Ospina";

const sentence = `Hello ${firstName} ${lastName}! How are you?`;
console.log(sentence);

// Otra forma de escribir lo mismo es la siguiente
const sentence2 = "Hello " + firstName + " " + lastName + "! How are you?" 

console.log(sentence2);





/*


BOOLEANS


*/
const isTheSkyBlue = true;

console.log(isTheSkyBlue);
// La variable puede ser un número, un texto, o puede ser un Boolean (true or false). En JavaScript no se define un tipo específico de variable, es decir no tiene que ser siempre un texto o un número o true/false, puede ser cualquiera





/*


MATHS


*/
const num = 5.00001

console.log(num + 1.223 / 3)

const num2 = 3

console.log(num2 + 6 - 3 * 4)
// JS usa la misma lógica de las matemáticas, en este caso primero se calcula -3*4 luego se suma 6 y al resultado se le suma num2 que es 3, el resultado final es -3





/*


IF STATEMENTS


*/
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





/*


LOOPS


*/
let amigosEnMiFiesta = 0;

amigosEnMiFiesta = amigosEnMiFiesta + 1;
amigosEnMiFiesta = amigosEnMiFiesta + 1;
amigosEnMiFiesta = amigosEnMiFiesta + 1;
amigosEnMiFiesta = amigosEnMiFiesta + 1;

console.log(amigosEnMiFiesta);
// Como se usó "let", la variable amigosEnMiFiesta va a cambiar con cada línea, se va a agregar un número más, en este caso el resultado sería 4 (resultado de 0+1+1+1+1), sin embargo hay una forma más fácil de hacer esto y es con la función while. 

// EXPERIMENTO # 1 - While

// En este caso lo quese está diciendo es que mientras amigosEnMiSegundaFiesta sea menor a 4, repita la misma acción hasta que llegue a 4.
let amigosEnMiSegundaFiesta = 0

while (amigosEnMiSegundaFiesta < 4) {
    amigosEnMiSegundaFiesta = amigosEnMiSegundaFiesta + 1;
}

console.log(amigosEnMiSegundaFiesta);


// EXPERIMENTO # 2 - While

// En este caso la función lo que va a hacer es preguntar cada vez si la condición se sigue manteniendo, por eso después de while se incluye un console.log. Por lo tanto mientras sea cierto, se va a ir acumulando hasta llegar a 4.
let amigosEnMiTerceraFiesta = 0

while (amigosEnMiTerceraFiesta < 4) {
    amigosEnMiTerceraFiesta = amigosEnMiTerceraFiesta + 1;
    console.log(amigosEnMiTerceraFiesta);
}

console.log(amigosEnMiTerceraFiesta);


// EXPERIMENTO # 3 - Incrementos

// Las siguientes cuatro funciones hacen exactamente lo mismo (las cuatro opciones dentro de este mismo experimento)
let unNumeroCualquiera = 0;

while (unNumeroCualquiera < 3) {
    unNumeroCualquiera = unNumeroCualquiera + 1;
    // es lo mismo que: unNumberoCualquiera +=1;
    // es lo mismo que: unNumeroCualquiera++;
    // es lo mismo que: ++unNumeroCualquiera;
    console.log(unNumeroCualquiera);
}


// EXPERIMENTO # 4 - Incrementos

// La siguiente fórmula es otra forma de hacer un condicional. Se está diciendo lo siguiente: dada una variable i=0, si esa variable es <4 entonces sumar 1 (=++) hasta llegar a 4
let otroNumeroCualquiera = 0;

for (let i = 0; i < 4; i++) {
    otroNumeroCualquiera++;
}

console.log(otroNumeroCualquiera);


// EXPERIMENTO # 5 - Loops

// El mismo experimento anterior pero sumando uno por uno hasta llegar a 4
let otroNumeroMas = 0 

for (let i = 0; i < 4; i++) {
    console.log(i);
    otroNumeroMas++;
}


// EJERCICIO # 1

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





/*


FUNCTIONS AND PARAMETERS


*/

// EXPERIMENTO # 1 - Functions 

/* La siguiente fórmula va a agregar a un numero dado (number) + 2. Primero se escribe la formula y luego se agrega el valor de la variable number. El input sería "function addTwo" y el output es el "return" */ 
function addTwo (number) {
    return number + 2;
}

const finalAnswer = addTwo(5);
console.log(finalAnswer);
/* Como ya se creó la función arriba, se puede seguir utilizando más adelante, por ejemplo: */
const finalAnswer2 = addTwo(10);
console.log(finalAnswer2);


// EXPERIMENTO # 2 - Functions 

/* No es necesario que la función tenga un argumento, en el ejemplo siguiente no hay ningún arumento (paréntesis vacío). Lo que si se debe hacer es SIEMPRE LLAMAR EL PARÁMETRO, es decir, dentro de console.log, llamar el parámetro devuelvemeCinco en este caso */
function devuelvemeCinco() {
    return 5;
}
console.log(devuelvemeCinco());


// EXPERIMENTO # 3 - Functions 

/* También se pueden crear funciones con dos o más argumentos, por ejemplo el siguiente experimento con 2 funciones */
function sumar(num1, num2) {
    return num1 + num2;
}
console.log(sumar(5,10));
/* Otra forma de hacer lo anterior, sino se quiere llamar la función dentro del console.log, es la siguiente: */
const sumar2 = sumar(5,10);
console.log(sumar2);


// EXPERIMENTO # 4 - Functions 

function saludo1(primerNombre, Apellido, Distintivo, textoSaludo) {
    return `${textoSaludo} ${Distintivo} ${Apellido}! Estoy muy emocionado de que esté con nosotros, ${primerNombre}, espero disfrute su estadía ${Distintivo} ${Apellido}.`;
}

console.log(saludo1("Dario", "Ospina", "Sr." ,"Bienvenido"));
/* Como ya se creó la función, se pueden modificar las variables todas las veces que se quiera, ej: */
console.log(saludo1("Pepito", "Perez","Dr.","Hola!"))


// EXPERIMENTO # 5 - Functions 

/* Se puede también poner el resultado (console.log) e incluir ahí el return y luego llamar los parámetros, ej: */
const myHomeCity = "Salt Lake City";
const myHomeState = "Utah";
const myHomeCountry = "USA";

function logOutYourHome(city, state, country) {
  console.log(`You are from ${city}, ${state} ${country}.`);
}

logOutYourHome(myHomeCity, myHomeState, myHomeCountry);





/*


SCOPE


*/
/* Solo ejecuta lo que está dentro del scope, es decir lo que está dentro de {}, lo que se haga por fuera de scope está out of scope y no se va a ejecutar */

// EXPERIMENTO # 1 

let amigosEnTuFiesta = 0;
for (let i = 0; i <= 4; i++) {
    console.log(i);
    amigosEnTuFiesta++;
}
/* En este caso la función se ejecuta porque console.log está dentro de {}, pero si estuviera por fuera no se ejecutaría nada */


// EXPERIMENTO # 2 

let unaVariable;
if (true) {
    unaVariable = "En este caso va a funcionar"
}
console.log(unaVariable);
/* En este caso si funciona porque la variable se creó antes de {}. El scope es solamente lo que va dentro de {} */

// EXPERIMENTO # 3 

/* El siguiente ejercicio va a arrojar dos resultados: "Dentro del scope" y "Fuera del scope". La razón es porque el script busca lo que está más cerca cuando se pone un console.log, pero una vez está fuera del scope, si se usa un nuevo console.log va a buscar el que exista y aplique, en este caso va a arrojar el resultado de la variable que aún existe que es algo = "Fuera del scope".  */
let algo = "Fuera del scope";

if (true) {
    let algo = "Dentro del scope";
    console.log(algo);
}

console.log(algo);

// EXPERIMENTO # 4 

/* El siguiente script va a arrojar primero "Inside the IF statement" porque en el orden del script primero aparece el console.log que está dentro del IF. Una vez se cierra el IF, el siguiente console.log va a arrojar "Outside the IF statement" y una vez se cierra este scope, el último console.log va a arrojar "Outside of the function" porque los otros dos scopes ya se cerraron y ya se quedaron sin validez */
let AlgunaCosa = "Outside of the function";

function Cosa() {
    let AlgunaCosa = "Outside the IF statement";
    if (true) {
        let AlgunaCosa = "Inside the IF statement";
        console.log(AlgunaCosa);
    }
    console.log(AlgunaCosa);
}
/* Para que la función se ejecute, se debe llamar(call) la función en paréntesis () */
Cosa();
console.log(AlgunaCosa);





/*


FUNCIONES VARIAS


*/
// EXPERIMENTO # 1 - Upper & Lower cases 

/* Funciones varias */
const sentence1 = "CamBiAR todO a mInúsCulAs y lUeGO a MayÚscULAS"
console.log(sentence1.toLocaleLowerCase());
console.log(sentence1.toLocaleUpperCase());


// EXPERIMENTOS # 2 - Funciones matemáticas 

console.log(Math.round(5.1)); // Redondea hacia el entero más cercano
console.log(Math.floor(5.4)); // Redondea hacia abajo
console.log(Math.ceil(5.8)); // Redondea hacia arriba
console.log(Math.max(5, 3.1, 6.2, 9)) // Selecciona el número mayor/máximo
console.log(Math.min(5, 3.1, 6.2, 9)) // Selecciona el número menor/mínimo

const nombre = "Dario Ospina"
console.log(nombre.substr(4, 6)) // Trae los 6 primeros caracteres a partir del caracter # 4


/* Usar https://developer.mozilla.org/en-US/ como busador de funciones para los scripts */





/*


OBJECTS


*/
// EXPERIMENTO # 1 - Objects 

const persona = {
    nombre: "Dario Ospina", // Solo puede haber una clave llamada "nombre", si se escribe dos veces se sobreescribe
    ciudad: "Bogota", 
    mejorCiudad: "Bogota", // Sin embargo puede haber dos valores iguales, en este caso "ciudad" y "mejorCiudad" son iguales
    comidaFavorita: "tacos",
    quiereRaviolisAhora: true, // Siempre debe haber una coma entre una clave y otra
    numeroDeTacos: 20
};
console.log(persona);
console.log(persona.nombre);
console.log(persona["nombre"]); // Arroja el mismo resultado de la línea anterior


// EXPERIMENTO # 2 - Objects + IF 

const persona1 = {
    nombre: "Dario",
    rangoEdad: "25-35"
};
const persona2 = {
    nombre: "Rafael",
    rangoEdad: "70-90"
};

function sugerirMusica(persona) {
    if (persona.rangoEdad === "25-35") {
        console.log("Seguramente le gusta Daft Punk.");
    } else if (persona.rangoEdad === "70-90") {
        console.log("Seguramente le gusta Silva y Villalva.")
    } else {
        console.log("Mmmm...tal vez le gusta David Bowie, a todo el mundo le gusta.")
    }
}

sugerirMusica(persona1);
sugerirMusica(persona2);


// EXPERIMENTO # 3 - Objects + Funciones 

/* Se puede incluir una función dentro de un objeto */

const perro = {
    nombre: "Firulais",
    hablar(unParametro) { // Esta es la forma corta, pero se puede escribir: "hablar: function(unParametro)"
        console.log("Guau guau", unParametro);
    }
};

perro.hablar("jaja");


// EXPERIMENTO # 4 - Objects + objects 

/* Los objetos pueden tener objetos dentro */


const yo = {
    nombre: {
        primerNombre: "Dario",
        apellido: "Ospina"
    },
    ubicacion: {
        ciudad: "Bogota",
        departamento: "Cundinamarca",
        pais: "Colombia"
    }
};

console.log(yo); // Esto va a arrojar todo lo que hay dentro de "yo"
console.log(yo.nombre.primerNombre);
console.log(yo.ubicacion.pais);
/* console es un objeto y log es una función dentro de console */


// EXPERIMENTO # 5 - Context 

const yo2 = {
    nombre: {
        primerNombre: "Dario", /*Property = {primerNombre = key + "Dario" = value} */
        apellido: "Ospina"
    },
    ubicacion: {
        numeroCalle: 500,
        calle: "Falsa",
        ciudad: "Seattle",
        estado: "WA",
        zipCode: 55555,
        pais: "USA"
    },
    obtenerDireccion() {
        return `${this.nombre.primerNombre} ${this.nombre.apellido}
        ${this.ubicacion.numeroCalle} ${this.ubicacion.calle} ${this.ubicacion.ciudad} ${this.ubicacion.estado} ${this.ubicacion.zipCode} ${this.ubicacion.pais}`; // "This" se refiere al objeto que en este caso es yo2. Se podría reemplazar por yo2 y el resultado no cambiaría
    }
};
console.log(yo2.obtenerDireccion());
yo2.nombre.primerNombre = "Daniel"; // Se pueden cambiar valores dentro del objeto pero no se puede reasignar el objeto completo
console.log(yo2.nombre.primerNombre);





/*


GLOBAL OBJECTS


*/  
// EXPERIMENTO # 1 - Global objects 

console.log(this === window); // En este caso se está preguntando si el objeto "this" se refiere a la ventana en la que se está editando
console.log(window.scrollY); // La ubicación vertical dentro de la pantalla 
console.log(this.scrollY); // Lo mismo de la línea anterior. Cuando no se está dentro de un objeto "this" se refiere a la ventana(window).


// EXPERIMENTO # 2 - Arrays 

/* Son listas ordenadas de ítems, se diferencian de los objetos porque se usa [] en vez de {} */

const diasDeLaSemana = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo"
];
console.log(diasDeLaSemana);
console.log(diasDeLaSemana[0]);
console.log(diasDeLaSemana[3]);


// EXPERIMENTO # 3 - Arrays 

const numerosPrimos = [1,2,3,5,7,11,13,17]

console.log(numerosPrimos.length); // Arroja el número de numeros primos que hay dentro del Array
console.log(numerosPrimos.join(" * ")) // Trae todos los números y agrega un * o lo que se ponga entre "", entre cada número

// EXPERIMENTO # 4 - Arrays + Push and Pop 

const ejemploXY = ["A", "B", "C", "D", "E"];

ejemploXY.push("F"); // Agrega el valor introducido al final del array
console.log(ejemploXY);

ejemploXY.pop(); // Remueve el último valor agregado a la lista
console.log(ejemploXY);

ejemploXY[2]=("Algo"); // Reemplaza (overwrite) el valor # 2 de la lista, en este caso "C" por "Algo"
console.log(ejemploXY);

const eliminar = ejemploXY.splice(0,1); // Elimina de la lista uno o varios valores. El primer número es el número en la lista y el segundo el número de elementos que se quieren eliminar
console.log(ejemploXY);

const agregarNuevo = ejemploXY.splice(0,1, {"Nombre": "Dario", "Apellido": "Ospina"}); // Lo mismo anterior pero reemplaza el valor eliminado por uno nuevo
console.log(ejemploXY);

ejemploXY[0].SegundoApellido = "Latorre"; // Anexa contenido adicional al elemento seleccionado





/*


LOOPING OVER ARRAYS


*/  

// EXPERIMENT # 1 - LOOPING OVER ARRAYS 

/* Ejecuta la función para cada ítem de la lista (uno por uno) */

const ciudades = [
    "Bogota",
    "Medellin",
    "Cali",
    "Barranquilla",
    "Cartagena"
];

// Method 1
for (let i = 0;i < ciudades.length; i++) {
    console.log(ciudades[i].toUpperCase()); // Se le puede agregar .toUpperCase para que ponga en mayúsculas todas las ciudades
}

// Method 2
ciudades.forEach(function(cualquierCosa) {
    console.log(cualquierCosa);
})


// EXPERIMENT # 2  

/* .map sirve para crear una nueva lista/array a partir de los valores que ya existían, esto no modifica la lista original, simplemente crea una nueva */
const ciudadesEnMayuscula = ciudades.map(function(blabla) {
    return blabla.toUpperCase()
});
console.log(ciudadesEnMayuscula);

/* En el ejemplo siguiente se reemplazan todos los valores de la lista/array "ciudades" por el numero 4, por lo tanto el resultado devuelve 5 veces el número 4 */
const nuevaArray = ciudades.map(function(abcd) {
    return 4
});
console.log(nuevaArray);





/*


SORT


*/  

// EXPERIMENT # 3 - Sorting elements  

/* Sort in alphabetical order */
const listado = ["casa", "zorro", "Armando", "sapo"];

console.log(listado.sort());

/* Sorting numbers */
const numeros = [15, 9, -4, 7, 10]

console.log(numeros.sort(function(numero1,numero2) {
/* Se debe insertar el siguiente condicional para que la función funcione. No necesariamente debe ser 1 y -1, puede ser cualquier número positivo y negativo. Si se quisiera ordenar de mayor a menor, entonces se debería cambiar el ">" por "<" */
    if (numero1 > numero2) {
        return 1;
    } else if (numero2 > numero1); {
        return -1;
    }
        return 0;
}));


// EXPERIMENT # 4 - Sorting elements  

const mayuscYminusc = ["a", "Z", "B", "g"]

/* Por defecto la función sort los va a ordernar primero las mayúsculas en orden alfabético y luego las minúsculas en orden alfabético */
console.log(mayuscYminusc.sort());

/* Se podría crear una función para que covierta todo a mayúsculas y ordene los elementos de la lista */
console.log(mayuscYminusc.map(function(MAYUSCULAS) {return MAYUSCULAS.toUpperCase()
}).sort());
/* Lo mismo anterior se puede escribir de las siguientes dos maneras */
console.log(mayuscYminusc.map((MAYUSCULAS) => {return MAYUSCULAS.toUpperCase()}).sort()); // Esta es la primera, reemplazando "function" por un "=>" antes de {}

console.log(mayuscYminusc.map((MAYUSCULAS) => MAYUSCULAS.toUpperCase()).sort()); // Esta es la segunda, se puede acortar aún más quitando "{return}" 





/*


OTHER FUNCTIONS


*/  
// EXPERIMENT # 5 - Other functions  

const frase = "Esto es una frase";

console.log(frase.split("")); // Separa la frase letra por letra
console.log(frase.split("").map(ABC => ABC.toUpperCase())); // Se pueden agregar varias funciones en una, en este caso se creó una nueva lista con la frase separada letra por letra pero en mayúscula
console.log(frase.split("").map(XYZ => XYZ.toUpperCase()).filter(NnN => NnN !== "E")); // En este caso, además de lo anterior, se están removiendo todas las "E" de la frase. El símbolo "!==" significa diferente de...





/*


AND & OR


*/  
// EXPERIMENT # 1 

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





/*


TESTING


*/  
// TESTING # 1 

function addTwoToEveryNumberInTheList (list) {
    // an example for you to see how the tests work
    const newList = [];
    for (let i = 0; i < list.length; i++) {
      newList.push(list[i] + 2);
    }
    return newList;
  } 


// TESTING # 2

function findLargestNumber(list) {
    // return the largest number in array
    let largest = list[0];
    for (let i = 1; i < list.length; i++) {
      if (list[i] > largest) {
        largest = list[i];
      }
    }
    return largest;
  }