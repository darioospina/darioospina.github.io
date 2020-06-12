const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const galleryImgs = document.querySelectorAll(".gallery-img") // Se utiliza este const para que si se agregan nuevas imagenes al HTML con el class "gallery-img" siga aplicando el script a las nuevas imagenes 
let currentlySelected = 0; // Esto es para ir contando el # de imagen que se está mostrando en pantalla 

nextButton.addEventListener("click", function() { // Dentro de una función, JavaScript va leyendo línea a línea, por lo tanto el código se va armando en orden consecutivo de eventos. 
    galleryImgs[currentlySelected].classList.remove("active"); // Paso 1) El primer paso al hacer click en "Siguiente" es remover la imagen que está activa. 
    currentlySelected++; // Paso 2) Es lo mismo que: currentlySelected = currentlySeleted + 1. En este caso si currentlySelected era la imagen # 0, con esta función va a pasar a la imagen # 1.
    galleryImgs[currentlySelected].classList.add("active"); // Paso 3) Ahora va a activar la siguiente imagen, la número 3
    prevButton.disabled = false; // Paso 4) Después de la imagen # 0, se habilita el botón "Anterior"
    
    if (galleryImgs.length === currentlySelected + 1) { // Paso 5) Si el número de imagenes es igual a la imagen seleccionada + 1 (se agrega + 1 teniendo en cuenta que la primera imagen es la # 0). Eso sería exactamente lo mismo que escribir: if (galleryImgs.length - 1 === currentlySelected)
        nextButton.disabled = true; // Si lo anterior se cumple, deshabilitar el botón "Siguiente"
    }
})

prevButton.addEventListener("click", function() { 
    galleryImgs[currentlySelected].classList.remove("active");
    currentlySelected--; // Lo mismo que currentlySelected = currentlySelected - 1
    galleryImgs[currentlySelected].classList.add("active");
    nextButton.disabled = false;

    if (currentlySelected === 0) {
        prevButton = true;
    }
})