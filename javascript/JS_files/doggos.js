/* AJAX = Asynchronous JavaScript and XML
Es un grupo de técnicas que se utilizan en programación. Ej de AJAX: En Netflix no se cargan todos los videos al tiempo, se van cargando en la medida que uno va scrolling down por la página para hacer la navegación más rápida.

AJAX requiere/llama los datos de un API (Application Programmin Interface) que es el software que permite que dos aplicaciones se hablen entre ellas */



/*


EJERCICIO # 1 - AJAX


*/ 
const BREEDS_URL = "https://dog.ceo/api/breeds/image/random"; 

fetch(BREEDS_URL) // Fetch es para que JavaScript haga el requerimiento de información al servidor de esta página y traiga los datos de vuelta
/* CUANDO ESTAMOS USANDO FETCH, ESTAMOS HACIENDO AJAX. ES UNA DE LAS TÉCNICAS CREADAS RECIENTEMENTE DE AJAX */ 
/* Lo que fetch trae es una promesa (promise) que corresponde a un objeto que representa un valor futuro */
    .then(function(response){ // Entonces => Obtenga una respuesta del servior. Hasta este punto no se le ha dicho a JavaScript qué traer de esa página, podría ser un archivo, una imagen, un JS, un CSS, etc.
        return response.json(); // JSON (JavaScript Object Notation) es una sintaxis para serializar objetos, arreglos, números, cadenas, booleanos y nulos
    })
    .then(function(data) {
        console.log(data); // Lo que sea que se encuentre en la función anterior (.then(function(response)) se está llamando en esta función para que traiga los datos. La información llamada se puede ver en la consola. Además, al inspeccionar el elemento, en la pestaña "Network" aparece el detalle con la información de este objeto incluido un timeline con la velocidad de respuesta (en milisegundos) de cada objeto existente en la página
    })

console.log("Qué función va primero?") // Si se revisa la consola, esto se va a ejecutar primero, a pesar de ir después. La razón es porque la función fetch tarda más en responder mientras carga la información.




/*


EJERCICIO # 2 - AJAX


*/ 
/* El siguiente ejercicio utiliza el mismo código anterior, solo que interactúa con el HTML. El JS lo que está haciendo es crear una nueva imagen con unos atributos, pero esta imagen va a cambiar cada vez que se refresque o actualice la página */
const BREEDS_URL2 = "https://dog.ceo/api/breeds/image/random"; 

fetch(BREEDS_URL2)

.then(function(response2){ 
    return response2.json(); 
})

.then(function(data2) {
    const img = document.createElement("img"); // createElement como su nombre lo indica, crea un nuevo elemento, en este caso se está diciendo que cree una nueva imagen
    img.src = data2.message; // Traiga el mensaje que contiene el objeto del API de la página https://dog.ceo/api/breeds/image/random
    img.alt = "Lindo perrito"; // Use para la imagen el texto alternativo "Lindo perrito"

    document.querySelector(".perros1") // En referencia al div class "perros1" que existe en el HTML
        .appendChild(img); // appendChild lo que hace es anexar el elemento dentro del div o el elemento seleccionado al final de éste. Este es el vínculo entre el script y el HTML (DOM) 
})


//////////
// IMPORTANTE:
// Un código similar se podría usar por ejemplo para traer random tweets de Twitter a través del API de Twitter
//////////




/*


EJERCICIO # 3 - AJAX


*/
/* El siguiente es el mismo código del Ejercicio # 2 pero se está agregando una función adicional para que al hacer click en el botón "Agregar-perro" añada o agregue una imagen adicional de un perro */

const BREEDS_URL3 = "https://dog.ceo/api/breeds/image/random"; 

function CambiarPerro() {
    fetch(BREEDS_URL3)
    
    .then(function(response3){ // Vaya al servidor de la página y busque la información
        return response3.json(); 
    })
    
    .then(function(data3) { // Una vez haya ido al servidor y haya encontrado la información, ejecute una serie de acciones, en este caso es crear una nueva imagen con una serie de atributos
        const img = document.createElement("img"); 
        img.src = data3.message; 
        img.alt = "Lindo perrito"; 
    
        document.querySelector(".perros2") // Y una vez creada esa imagen, tráigala y póngala en un sitio específico de mi HTML, en este caso en el div "perros2"
            .appendChild(img); 
    })   
}
document.querySelector(".agregar-perro").addEventListener("click", CambiarPerro); // Aquí se está primero seleccionando el botón "agregar-perro" y diciéndole que al hacer click sobre él, ejecute la función "CambiarPerro"




/*


EJERCICIO # 4 - AJAX + SELECT BOX + CSS ANIMATION


*/
const BREEDS_URL4 = "https://dog.ceo/api/breeds/list/all";
const select = document.querySelector(".breeds"); // Seleccionar el class "breeds" y denominarlo select

fetch(BREEDS_URL4)
    .then(function(response4){ // Se puede omitir la etiqueta function, escribiendo lo mismo así: .then(response => {})
        return response4.json();
    })
    .then(function(data4){
        // console.log(data); esto arrojaría como resultado las key y los value dentro del objeto pero de forma desordenada
        const breedsObject = data4.message; // Este es el objeto que contiene los dog breeds (razas de perros)
        const breedsArray =  Object.keys(breedsObject); // Aquí se convierte la lista en Array, de manera que a cada raza se le asignó un número y la lista ahora está enumerada. En el siguiente link se encuentra la literatura sobre Object.keys: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys 
        
        for (let i = 0; i < breedsArray.length; i++) { // Para cada raza crear una opción dentro de la lista desplegable
            const option = document.createElement("option");
            option.value = breedsArray[i];
            option.innerText = breedsArray[i]; // Aquí ya se tiene una opción lista para ser insertada 
            select.appendChild(option); // Esto va a anexar la opción dentro del elemento "breeds" que es la lista desplegable del HTML
        }
    })

select.addEventListener("change", function(event) {
   console.log(`https://dog.ceo/api/breed/${event.target.value}/images/random`); // En este punto, cada vez que se seleccione una raza de la lista de desplegable, ésta se va a incluir (se puede ver en la consola) dentro de la página web que contiene las imagenes random de perros. Se usa `` para que se puedan incluir ${valores.variables} 
});

/*
Steps for the DOG App:
1. Make URL ---> See the last 2 minutes from the video "change event"
2. Show loading spinner
3. Fetch from the API
4. Use the URL to change the current image
5. Stop showing loading spinner
*/