////////////////////////////////////////
////////////////////////////////////////
//////////////// SCOPE /////////////////
////////////////////////////////////////
////////////////////////////////////////
/* Solo ejecuta lo que está dentro del scope, es decir lo que está dentro de {}, lo que se haga por fuera de scope está out of scope y no se va a ejecutar */

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



