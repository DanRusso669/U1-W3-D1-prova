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
  {
    name: "Stefano",
    kudos: 1000,
  },
  {
    name: "Davide",
    kudos: 3000,
  },
  {
    name: "Paolo",
    kudos: 20,
  },
  {
    name: "Mauro",
    kudos: 1,
  },
  {
    name: "Valeria",
    kudos: 500,
  },
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
