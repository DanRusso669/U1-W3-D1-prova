// FOREACH
// forEach non è altro che un altro modo di ciclare unarray
// non ha nessun valore di ritorno, lo possiamo utilizzare solo per accedere all'elemento dell'array per farne quello che vogliamo
const fruits = ["apple", "pear", "kiwi", "ananas", "orange", "grapes"];

console.log(fruits);

// il metodo mi chiede una funzione per descrivere le operazioni da svolgere
// fruits.forEach(function (fruit) {
//   console.log("FRUIT", fruit);
// });

fruits.forEach((fruit, i) => {
  // per ogni esecuzione di questa funzione, fruit mi rappresenterà un elemento sempre diverso (in posizone diversa dall'array)
  console.log("FRUIT" + i, fruit);
});

// MAP
// ha lo scopo di MODIFICARE gli elementi di un array e ritornarli in un nuovo array (senza alterare l'originale)
// ritorna lo stesso numero di elementi di partenza

// quello che ritorna la funzione del map, sarà il nuovo elemento che prenderà posto nel nuovo array
const mappedFruits = fruits.map(fruit => fruit.toUpperCase() + "!");
console.log(mappedFruits);

const people = [
  { name: "Stefano", kudos: 1000 },
  { name: "Davide", kudos: 3000 },
  { name: "Paolo", kudos: 20 },
  { name: "Mauro", kudos: 1 },
  { name: "Valeria", kudos: 500 },
];

const peopleNames = people.map(obj => obj.name);
console.log(peopleNames);

// FILTER
// ha lo scopo di ridurre potenzialmente una collezione, con solo elementi che passano una condizione
// il filter ritorna solo gli elementi che ritornano true dalla funzione, quindi potenzialmente un numero infeirore di elementi,
// se non proprio un array vuoto con 0 elementi

// il filter vuole che sia ritornato o true o false
const filteredElements = fruits.filter(fruit => fruit.length >= 5);
console.log(filteredElements);

// REDUCE
// il reduce serve sempre a ciclare un array e ridurne i valor in un SINGOLO VALORE DI RITORNO

// array.reduce((accumulatore, elemento corrente) => [operazione da svolgere], [valore iniziale di partenza])
const numArr = [14, 0, 140, 2, 55];

const reduced = numArr.reduce((accumulator, currentValue) => {
  console.log("ACCUMULATORE", accumulator);
  console.log("CURRENT VALUE", currentValue);
  return accumulator + currentValue;
}, 0); //Questo numero dopo la virgola si chiama INIZIAL VALUE e permette all'accumulatore di iniziare con un parametro a nostra scelta.
// Se non inseriamo niente, l'accumulatore prendere come valore il primo elemento dell'array

console.log(reduced);
console.log("___________________________________________________");

const reducedPeople = people.reduce((accumulator, currentValue) => {
  console.log("ACCUMULATORE", accumulator);
  console.log("CURRENT VALUE", currentValue.kudos);

  return accumulator + currentValue.kudos;
  // il valore dopo la virgola è il secondo argomento del reduce e rappresenta un "initialValue" ovvero il valore iniziale del nostro accumulator
}, 0);

console.log(reducedPeople);

console.log("___________________________________________________");

const reducedNames = peopleNames.reduce((accumulator, currentValue) => {
  return accumulator + " " + currentValue;
}, "");

console.log(reducedNames);

console.log("___________________________________________________");

const reducedNamesArray = people.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue.name);
}, []);
