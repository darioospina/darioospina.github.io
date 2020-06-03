
/////////////////////////////////////////////////
///////// EXPERIMENTO # 1 - Objects //////////////
/////////////////////////////////////////////////

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


/////////////////////////////////////////////////
///////// EXPERIMENTO # 2 - Objects + IF ////////
/////////////////////////////////////////////////

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


/////////////////////////////////////////////////
//// EXPERIMENTO # 3 - Objects + Funciones //////
/////////////////////////////////////////////////
/* Se puede incluir una función dentro de un objeto */

const perro = {
    nombre: "Firulais",
    hablar(unParametro) { // Esta es la forma corta, pero se puede escribir: "hablar: function(unParametro)"
        console.log("Guau guau", unParametro);
    }
};

perro.hablar("jaja");


/////////////////////////////////////////////////
//// EXPERIMENTO # 4 - Objects + objects //////
/////////////////////////////////////////////////
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


/////////////////////////////////////////////////
/////////// EXPERIMENTO # 5 - Context ///////////
/////////////////////////////////////////////////

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