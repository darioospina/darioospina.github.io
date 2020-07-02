let score = 0;

function getSadInterval() {
    return Date.now() + 1000; // Va a pasar 1 segundo antes de que el topo triste desaparezca
}

function getGoneInterval() {
    return Date.now() + Math.floor(Math.random() * 18000) + 2000 // Cambiar en un intervalo de tiempo entre 2 y 20 segundos (ver experiment_summary.js para entender por qué)
}

function getHungryInterval() {
    return Date.now() + Math.floor(Math.random() * 3000) + 2000 // En este caso cambiar en un intervalo de tiempo entre 2 y 5 segundos
}

function getKingStatus() {
    return Math.random() > 0.9 // 90% de las veces va a ser falso y solo 10% va a ser verdadero. Esto se está usando para que solo el 10% de las veces el topo tenga corona
}

const moles = [ // PASO 1: CREAR UN ARRAY PARA LOS TOPOS(MOLES)
    { // PASO 2: CREAR UN OBJETO PARA CADA HOYO 
        status: "sad",
        next: getSadInterval(), // Esto representa el tiempo que va a durar cada topo triste en el hoyo
        king: true, // Se refiere a si el topo tiene corona o no
        node: document.getElementById("hole-0") // Crear un nodo que represente el DOM o el elemento en HTML
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: true,
        node: document.getElementById("hole-1")
      },
      {
        status: "sad",
        next: getSadInterval(),
        king: true,
        node: document.getElementById("hole-2")
      },
      {
        status: "sad",
        next: getSadInterval(),
        king: true,
        node: document.getElementById("hole-3")
      },
      {
        status: "sad",
        next: getSadInterval(),
        king: true,
        node: document.getElementById("hole-4")
      },
      {
        status: "sad",
        next: getSadInterval(),
        king: true,
        node: document.getElementById("hole-5")
      },
      {
        status: "sad",
        next: getSadInterval(),
        king: true,
        node: document.getElementById("hole-6")
      },
      {
        status: "sad",
        next: getSadInterval(),
        king: true,
        node: document.getElementById("hole-7")
      },
      {
        status: "sad",
        next: getSadInterval(),
        king: true,
        node: document.getElementById("hole-8")
      },
      {
        status: "sad",
        next: getSadInterval(),
        king: true,
        node: document.getElementById("hole-9")
      }
    ];

function getNextStatus (mole) {
  switch (mole.status) {
    case "sad": // Cuando el status del topo sea triste (...)
    case "fed": // (...) Pasados 1000 milisegundos (...)
      mole.next = getSadInterval();
      if (mole.king) {
        mole.node.children[0].src = "./mole-imgs/king-mole-leaving.png";
      } else {
        mole.node.children[0].src = "./mole-imgs/mole-leaving.png"; // Traer el nodo # 1 y cambiar dentro de la etiqueta img, la dirección de la nueva imagen que se quiere incluir ahí
      }
      mole.status = "leaving"; // (...) El nuevo status del topo va a ser leaving (yéndose) osea el topo de espaldas (...)
      break; 
    case "leaving":
      mole.next = getGoneInterval();
      mole.king = false;
      mole.node.children[0].classList.toggle("gone", true); // "mole.node.children" va a traer un listado de todos los nodos, por eso toca especificar cuál se quiere traer, en este caso sobre el nodo # 1 que es el que estamos llamando, adicionar un class que se llame "gone". 
      mole.status = "gone"; // El nuevo status del topo después de que se está yendo, es ido, osea el hoyo vacío (sin topo)
      break;
    case "hungry":
      mole.node.children[0].classList.toggle("hungry", false); // El topo ya no está más hambriento, ahora va a estar triste
      if (mole.king) {
        mole.node.children[0].src = "./mole-imgs/king-mole-sad.png";
      } else {
        mole.node.children[0].src = "./mole-imgs/mole-sad.png";
      }
      mole.status = "sad"; // Aquí se vuelve a iniciar el ciclo
      mole.next = getSadInterval();
      break;
    case "gone":
      mole.status = "hungry"; // El siguiente status después de ido es hambriento
      mole.king = getKingStatus();
      mole.next = getHungryInterval();
      mole.node.children[0].classList.toggle("hungry", true); // Crear un class "hungry" a partir del nodo [0]
      mole.node.children[0].classList.toggle("gone", false); // Remover el class anterior "gone" porque ya hay uno nuevo
      if (mole.king) {
        mole.node.children[0].src = "./mole-imgs/king-mole-hungry.png"; // Traer imagen del topo con corona si al ejecutar la función getKingStatus arroja king = true
      } else {
        mole.node.children[0].src = "./mole-imgs/mole-hungry.png"; // Traer la nueva imagen del topo hambriento
      }
      break;
  }
};

function feed(event) {
    if (event.target.tagName !== "IMG" || !event.target.classList.contains("hungry")) { // Si el tag IMG contiene "hungry" entonces ejecute la función, de lo contrario, pare. "!==" significa diferente de.
        return;
    }

    const mole = moles[parseInt(event.target.dataset.index)]; // parseInt para convertir el string en número

    mole.status = "fed"; // Status "fed" (alimentado) que es el topo con la lombriz en la boca
    mole.next = getSadInterval();
    if (mole.king) {
        mole.node.children[0].src = "./mole-imgs/king-mole-fed.png"
        score += 2; // 2 puntos si el topo alimentado tiene es un rey (king). Esto es lo mismo que escribir "score = score + 2"        
    } else {
        mole.node.children[0].src = "./mole-imgs/mole-fed.png"; // Muestre la imagen del topo alimentado
        score++; // 1 punto cada vez que un topo es alimentado si el topo no tiene corona
    }
    mole.node.children[0].classList.remove("hungry"); // Aquí ya no está más hambriento, entonces remover el class "hungry" 

    if (score >= 10) {
        win();
    }

    document.querySelector(".worm-container").style.width = `${10 * score}%` // Aquí se está llamando el div que contiene la imagen de la lombriz que muestra el puntaje. Cada vez que se consiga un punto, ésta cantidad se va a multiplicar por 10 para convertirse en porcentaje y se va a cambiar el width% del div que está en el HTML.
}

function win() {
    document.querySelector(".bg").classList.toggle("hide", true); 
    document.querySelector(".win").classList.toggle("show", true); // Los class "win" y "hide" se refieren a la imagen que está en el DOM/HTML, el nombre del class es "win hide"
}


document.querySelector(".bg").addEventListener("click", feed); // Se agregó un evento para que al hacer click en cualquier parte de la sección bg (background) del HTML, ejecute la función feed que está escrita arriba


let runAgainAt = Date.now() + 100;
function nextFrame() { // NOTA: Entender mejor el funcionamiento de requestAnimationFrame(). Esto es para cambiar de frame cada 0,1 segundos
    const now = Date.now();
        if (runAgainAt <= now) {
            for (let i = 0; i < moles.length; i++) {
                if (moles[i].next <= now) { // Aquí se está preguntando si es el momento para el status adecuado de aparecer (ej: si es el momento para "sad", "hungry", "leaving" o "gone")
                    getNextStatus(moles[i]);
                }
            }
            runAgainAt = now + 100;
        }
        requestAnimationFrame(nextFrame);
    }
    
nextFrame();


