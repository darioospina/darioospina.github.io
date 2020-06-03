/////////////////////////////////////////////////////
/////// EXPERIMENT # 1 - LOOPING OVER ARRAYS ////////
/////////////////////////////////////////////////////

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
/* Este método ejecuta la función para cada ítem de la lista (uno por uno) */
ciudades.forEach(function(cualquierCosa) {
    console.log(cualquierCosa);
})



////////////////////////////////////////////////////////
/////////////////// EXPERIMENT # 2  ////////////////////
////////////////////////////////////////////////////////
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



////////////////////////////////////////////////////////
///////// EXPERIMENT # 3 - Sorting elements  ///////////
////////////////////////////////////////////////////////
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



////////////////////////////////////////////////////////
///////// EXPERIMENT # 4 - Sorting elements  ///////////
////////////////////////////////////////////////////////
const mayuscYminusc = ["a", "Z", "B", "g"]

/* Por defecto la función sort los va a ordernar primero las mayúsculas en orden alfabético y luego las minúsculas en orden alfabético */
console.log(mayuscYminusc.sort());

/* Se podría crear una función para que covierta todo a mayúsculas y ordene los elementos de la lista */
console.log(mayuscYminusc.map(function(MAYUSCULAS) {return MAYUSCULAS.toUpperCase()
}).sort());
/* Lo mismo anterior se puede escribir de las siguientes dos maneras */
console.log(mayuscYminusc.map((MAYUSCULAS) => {return MAYUSCULAS.toUpperCase()}).sort()); // Esta es la primera, reemplazando "function" por un "=>" antes de {}

console.log(mayuscYminusc.map((MAYUSCULAS) => MAYUSCULAS.toUpperCase()).sort()); // Esta es la segunda, se puede acortar aún más quitando "{return}" 



////////////////////////////////////////////////////////
///////// EXPERIMENT # 5 - Other functions  ///////////
////////////////////////////////////////////////////////
const frase = "Esto es una frase";

console.log(frase.split("")); // Separa la frase letra por letra
console.log(frase.split("").map(ABC => ABC.toUpperCase())); // Se pueden agregar varias funciones en una, en este caso se creó una nueva lista con la frase separada letra por letra pero en mayúscula
console.log(frase.split("").map(XYZ => XYZ.toUpperCase()).filter(NnN => NnN !== "E")); // En este caso, además de lo anterior, se están removiendo todas las "E" de la frase. El símbolo "!==" significa diferente de...