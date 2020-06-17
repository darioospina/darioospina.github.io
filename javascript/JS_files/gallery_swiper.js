/* New se usa para abstarer una clase dentro de otra ya existente. No se recomienda usar mucho en JS. El siguiente código es para invocar la función  */

var mySwiper = new Swiper('.swiper-container', {
    speed: 400, // La velocidad a la que van a cambiar las imagenes
    spaceBetween: 100, // El espacio entre una fotografía y otra
    effect: "coverflow", // Tranisition effect. Could be "slide", "fade", "cube", "coverflow" or "flip"
    loop: true, // Se repiten las mismas imagenes una vez se acaba la galería
    navigation: {
        nextEl: ".swiper-button-next", // El nombre del botón "next"
        prevEl: ".swiper-button-prev" // El nombre del botón "previous"
    }
});

/* Para ver todos los atributos que se pueden incluir o modificar en el código ir a https://swiperjs.com/api/ --> En este sitio están las instrucciones para incluir el código y personalizarlo */



/* 
El siguiente código lo traje de https://popmotion.io/pure/ 
El script escogido es "Spring". Este es el link directo a CodePen: https://codepen.io/popmotion/pen/mqKyjd?editors=0010
*/

// NAVIGATION PHYSICS:

const { styler, spring, listen, pointer, value } = window.popmotion;
/*
El código de arriba se llama destructuring. Lo que se está haciendo es algo parecido a lo siguiente:

const persona = {nombre: "Dario", trabajo: "desempleado"};
const { nombre } = persona; --> Esto es igual que decir "const nombre = persona.nombre;", sin embargo cuando se tienen varios elementos que se quiere aislar, se puede hacer de la otra forma que es lo que está haciendo este código
console.log(nombre) --> Como se puede ver, lo que se está haciendo acá es aislar uno de los elementos dentro de un objeto para poderlo ejecutar y trabajar con él por fuera de ese objeto.

*/

const ball = document.querySelector('.miquito'); // Aquí cambié el elemento que estaba por defecto que era "box" por "miquito"
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, 'mousedown touchstart') // Listen está llamando a ejecutar el evento "Mousedown" que es el inicio del click. "Touchstart" hace lo mismo pero cuando se está viendo desde un smartphone (cuando se toca al principio)
  .start((e) => {
    e.preventDefault();
    pointer(ballXY.get()).start(ballXY);
  });

listen(document, 'mouseup touchend') // "Mouseup" es el fin del click. "Touchend" es cuando se suelta el dedo desde un smartphone
  .start(() => {
    spring({
      from: ballXY.get(),
      velocity: ballXY.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 200,
      // mass: 1,
      // damping: 10
    }).start(ballXY);
  });
