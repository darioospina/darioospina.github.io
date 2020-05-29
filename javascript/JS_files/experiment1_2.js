////////////////////////////////////////
////////////////////////////////////////
//////////////// SCOPE /////////////////
////////////////////////////////////////
////////////////////////////////////////
/* Solo ejecuta lo que está dentro del scope, es decir lo que está dentro de {}, lo que se haga por fuera de scope está out of scope y no se va a ejecutar */


//////////////////////////////////////////////////
//////////////// EXPERIMENTO # 1 /////////////////
//////////////////////////////////////////////////
let amigosEnTuFiesta = 0;
for (let i = 0; i <= 4; i++) {
    console.log(i);
    amigosEnTuFiesta++;
}
/* En este caso la función se ejecuta porque console.log está dentro de {}, pero si estuviera por fuera no se ejecutaría nada */




//////////////////////////////////////////////////
//////////////// EXPERIMENTO # 2 /////////////////
//////////////////////////////////////////////////
let unaVariable;
if (true) {
    unaVariable = "En este caso va a funcionar"
}
console.log(unaVariable);
/* En este caso si funciona porque la variable se creó antes de {}. El scope es solamente lo que va dentro de {} */



//////////////////////////////////////////////////
//////////////// EXPERIMENTO # 3 /////////////////
//////////////////////////////////////////////////
/* El siguiente ejercicio va a arrojar dos resultados: "Dentro del scope" y "Fuera del scope". La razón es porque el script busca lo que está más cerca cuando se pone un console.log, pero una vez está fuera del scope, si se usa un nuevo console.log va a buscar el que exista y aplique, en este caso va a arrojar el resultado de la variable que aún existe que es algo = "Fuera del scope".  */
let algo = "Fuera del scope";

if (true) {
    let algo = "Dentro del scope";
    console.log(algo);
}

console.log(algo);



//////////////////////////////////////////////////
//////////////// EXPERIMENTO # 4 /////////////////
//////////////////////////////////////////////////
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



//////////////////////////////////////////////////
//////////////// EXPERIMENTO # 5 /////////////////
//////////////////////////////////////////////////
/* El siguiente script no va a funcionar correctamente pero sirve para explicar bien qué va y qué no va a funcionar dependiendo de si fue creado o no dentro del scope {} */
const A = "A";
let F;

function doStuff(B) {
  console.log(B); // works, B parameter is still in scope
  const C = "C";
  let H = "H";
  if (1 + 1 === 2) {
    const D = "D";
    H = "something else";
  }
  console.log(D); // does not work, D was declared in that if statement block
  console.log(H); // works, H was declared outside the if statement
  F = "F";
}

let E = 0;
while (E < 3) {
  E++;
  console.log(A); // works, the outter block (called the global scope) is still in scope
  const G = "G";
}
console.log(E); // works, E was declared outside the whie loop
console.log(G); // does not work, declared inside the while loop and it's over

doStuff("B");
console.log(B); // does not work, the B parameter expires after the function call
console.log(C); // does not work, C was declared inside the function and the function is over
console.log(F); // works, F was declared in the global scope



