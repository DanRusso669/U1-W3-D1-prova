// FUNCTION
// blocco di codice riutilizzabile
// e si compone di due fasi

// 1) la definizione del blocco di istruzioni
// 2) l'esecuzione di queste istruzioni

console.log("FUNCTIONS");

// DEFINIZIONE

function sayHi() {
  console.log("Hey there!");
}

// INVOCAZIONE = applicando le () al nome della funzione
sayHi();

// PARAMETRI DI FUNZIONE
// sintassi con funzione come valore di variabile (NO HOSTING, consigliato!)
// la funzione è anonima ma avrà ancora un modo per essere raggiunta (il nome della variabile)

const sayMyName = function (name) {
  // mi serve un parametro quando voglio variare l'effetto della funzione, rendere dinamiche le sue istruzioni
  //   console.log("Ciao " + name + "!");
  return "Ciao " + name + "!";
};

// il momento in cui valorizziamo un parametro è il momento dell'invocazione della funzione stessa
console.log(sayMyName("Stefano"));
let result1 = sayMyName("Stefano");
let result2 = sayMyName("Davide");
let result3 = sayMyName("Renato");

// console.log(result1, result2, result3);

// ARROW FUNCTIONS
// semplicemente una diversa sintassi per definire una funzione, sarà più snella

// le arrow functions possono essere SOLO ANONIME
// const sayMyNameArrow = (name) => {
//   return "Ciao " + name + "!";
// };

// arrow function con return IMPLICITO (senza graffe e senza keyword return)
const sayMyNameArrow = name => "Ciao " + name + "!";

console.log(sayMyNameArrow("Mauro"));
const result4 = sayMyNameArrow("Sabatino");
console.log(result4);
