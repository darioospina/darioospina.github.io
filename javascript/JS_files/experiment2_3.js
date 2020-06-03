/////////////////////////////////////////////////
///////// EXPERIMENTO # 1 - Global objects ///////
////////////////////////////////////////////////

console.log(this === window); // En este caso se está preguntando si el objeto "this" se refiere a la ventana en la que se está editando
console.log(window.scrollY); // La ubicación vertical dentro de la pantalla 
console.log(this.scrollY); // Lo mismo de la línea anterior. Cuando no se está dentro de un objeto "this" se refiere a la ventana(window).


/////////////////////////////////////////////////
///////// EXPERIMENTO # 2 - Arrays ///////
////////////////////////////////////////////////
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


/////////////////////////////////////////////////
///////// EXPERIMENTO # 3 - Arrays ///////
////////////////////////////////////////////////
const numerosPrimos = [1,2,3,5,7,11,13,17]

console.log(numerosPrimos.length); // Arroja el número de numeros primos que hay dentro del Array
console.log(numerosPrimos.join(" * ")) // Trae todos los números y agrega un * o lo que se ponga entre "", entre cada número


////////////////////////////////////////////////////// EXPERIMENTO # 4 - Arrays + Push and Pop /////
//////////////////////////////////////////////////
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
