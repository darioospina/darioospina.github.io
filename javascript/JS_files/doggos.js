/* AJAX = Asynchronous JavaScript and XML
Es un grupo de técnicas que se utilizan en programación. Ej de AJAX: En Netflix no se cargan todos los videos al tiempo, se van cargando en la medida que uno va scrolling down por la página para hacer la navegación más rápida.

AJAX requiere/llama los datos de un API (Application Programmin Interface) que es el software que permite que dos aplicaciones se hablen entre ellas */



/*


EJERCICIO # 1 - AJAX


*/ 
const BREEDS_URL = "https://dog.ceo/api/breeds/image/random"; 

fetch(BREEDS_URL) // Fetch es para que JavaScript haga el requerimiento de información al servidor de esta página y traiga los datos de vuelta
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
        .appendChild(img); // appendChild lo que hace es anexar el elemento dentro del div o el elemento seleccionado al final de éste.
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