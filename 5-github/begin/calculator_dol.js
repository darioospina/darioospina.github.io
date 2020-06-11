let runningTotal = 0; // Esto va a representar lo que está on hold, es decir el número que se ingresa primero (ej: si quiero saber cuánto es 5 + 2, primero ingreso 5 y ese 5 se debe poner on hold cuando ingreso el 2)
let buffer = "0"; // Esto va a representar lo que está en la pantalla, que siempre va a ser un "string", no un número
let previousOperator; // Esto va a representar la operación matemática, que también se debe poner on hold junto con el primer número ingresado (ej: usando el mismo ejemplo anterior, se debería almacenar el 5 y luego el +). previousOperator puede ser +, -, ×, ÷ o null



const screen = document.querySelector(".screen");



function buttonClick(value) { // "value" representa el valor del botón (1, 2, 3..., *, +, /...). Si se incluyera un console.log(value) para ejecutar la función, se vería en la consola el número o caracter sobre el que se está haciendo click.
    /* Si se inserta acá el código: 
        debugger
        Que significa depurador en español, en la consola/inspeccionar va aparecer una pestaña llamada "debugger" donde se puede examinar el paso a paso de lo que hace cada función
    */
    if (isNaN(parseInt(value))) { // isNaN = El valor ingresado es o no un número (true or false). NaN = Not a Number. //// Si NO es un número ejecute lo siguiente:
        handleSymbol(value); 
    } else {
    // Si ES un número ejecute lo siguiente  
        handleNumber(value);
    } 
    // Para verificar la funcionalidad de esta función, se podría escribir incluir este código acá: console.log(buffer); y en la consola al presionar los números, estos se irían concatenando
    screen.innerText = buffer; // Esto va a hacer exactamente lo anterior (es decir "console.log(buffer)") pero lo va a reflejar en la pantalla (".screen"), en el HTML.
} 



function handleNumber(numberString) { // Ejecuta la función para lo que son números. Se escogió el nombre "numberString" para tener en cuenta que hasta este punto es un número pero todavía no se ha convertido en número, sigue siendo un "string"
    if (buffer === "0") { // Con este condicional se están concatenando varios strings. Si se ingresa un solo número se refleja solo ese número, pero si se agregan más números, estos se van concatenando (ej: se ingresa un 5 seguido de un 7, va a concatenarlos y arrojar 57)
        buffer = numberString;
    } else {
        buffer += numberString; // Esto es igual que decir: buffer = buffer + numberString
    }
} 



function handleMath(symbol) {
    if (buffer === "0") { // Si esto pasa no haga nada
        return; // Poniendo return acá se está interrumpiendo la función IF.  
    }

    const intBuffer = parseInt(buffer); // Este código se podría acortar así: const intBuffer = +buffer. parseInt convierte un "string" en número para poder hacer operaciones matemáticas. Ahora intBuffer va a ser un número con el cual ejercutar las operaciones en la calculadora.

    if (runningTotal === 0) { // Si ingreso X número más una operación (ej: 5 +), devuelva lo siguiente:
        runningTotal = intBuffer; // En este momento el acumulado es solo 5, siguiendo el ejemplo anterior
    } else {
        flushOperation(intBuffer); // flushOperation va a ejecutar las operaciones matemáticas. "flushOperation" es el nombre escogido por el instructor para esta función. Lo que va a hacer es ir ejecutando las operaciones matemáticas a medida que se vayan acumulando (ej: si se ingresa 5 + 5 y luego se ingresa + 2, primero debe resolver la primera operación y guardarla en el buffer para luego seguir con más operaciones)
    }    
    previousOperator = symbol;
    buffer = "0";
}



function flushOperation(intBuffer) {
    if (previousOperator === "+") {
        runningTotal += intBuffer;
    } else if (previousOperator === "-") {
        runningTotal -= intBuffer;
    } else if (previousOperator === "×") {
        runningTotal *= intBuffer;
    } else {
        runningTotal /= intBuffer;
    }
    /* Esto mismo podría escribirse así:
        switch (previousOperator) {
            case "+":
                runningTotal += intBuffer;
                break
            case "-"
                runningTotal -= intBuffer;
                break 
            case...
        }
     */
}



function handleSymbol(symbol) { // Ejecuta la función para lo que son símbolos. Lo que está entre paréntesis es el nombre escogido por el instructor, podría ser cualquier nombre para luego llamar la función
    
    /* MÉTODO 1 - USANDO CONDICIONALES
    if (symbol === "C") {
        buffer = "0";
        runningTotal = 0; // Si se selecciona "C", devolver 0
    } else if {} ...
    */
    
    /* MÉTODO 2 - USANDO SWITCH */
    switch (symbol) { // Usando este método se puede simplificar el condicional. Se está diciendo que basado en el valor ejecute una acción. Si se cambia (switch) el valor, ejecute lo siguiente:
        case "C": // Si el símbolo es "C", entonces haga lo siguiente: 
            buffer = "0";
            runningTotal = 0;
            break; // Se cierra siempre con "break". Aquí se termina este bloque. Al final de cada "case" debe ir un "break"
        case "=":
            if (previousOperator === null) { // Si no hay un previousOperator, entonces se declara nulo. Esto quiere decir que se necesitan dos números para poderse declararse distinto a nulo
                return;
            }
            flushOperation(parseInt(buffer)); // Sino es null, ejecutar las operaciones matemáticas. parseInt(buffer) es para que accione sobre un número y no sobre un "string"
            previousOperator = null; 
            buffer =+ runningTotal;
            runningTotal = 0;
            break;
        case "←":
            if (buffer.length === 1) {
              buffer = "0";
            } else {
              buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case "+":
        case "-":
        case "×":
        case "÷":
            handleMath(symbol); // handleMath es el nombre que eligió el instructor para esta función. Si aplica para varios "cases", se puede escribir un "case" seguido de otro, luego escribir la función que aplica para todos ellos y cerrar con "break"
            break;
    }
}



function init () { // Dentro de esta función se van a configurar todos los elementos funcionales de la calculadora. En general se debe crear solo un "init" en todo el script donde se configure todo 
    document.querySelector(".calc-buttons")
        .addEventListener("click", function(event) { // Al hacer click en el botón, se va a ejecutar la función "event". Si se incluyera acá un console.log(event), hasta este punto lo que mostraría es que al hacer click va a llamar toda la información que se tiene sobre ese botón: posición del mouse, class, en qué momento se hizo click, etc.
            buttonClick(event.target.innerText);
        })
}
init (); // Aquí se está llamando la función "init" para que se ejecute. Se podría omitir en este script esta función, solo dejar su contenido (eliminando function init() y el llamado init()) e igual funcionaría el código. En caso de que se use, no se tiene que llamar "init", podría ser cualquier nombre.