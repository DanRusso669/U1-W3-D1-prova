// OBJECTIVES

let dynamicProperty = "licensePlate";
let plate1 = "AB372CD";

// rappresentare entità sottoforma di modelli con coppie chiave:valore

const car = {
  brand: "ford",
  model: "focus",
  color: "silver",
  // le quadre in questo caso dichiarano le volontà di RISOLVERE il dato dinamico, e usarlo come nome di variabile.
  [dynamicProperty]: plate1,
};

console.log("CAR", car);

const carProperties = Object.keys(car); //['brand', 'model', 'color', 'licensePlate']
console.log(carProperties);
const car2 = {};

for (let i = 0; i < carProperties.length; i++) {
  const property = carProperties[i];
  console.log(property[i]);

  car2[property] = null;
}

console.log("CAR2", car2);
console.log("CAR2", car2.plate); // non trovato ==> undefined
console.log("CAR2", car2[dynamicProperty]); // questo è il riferimento dinamico, è sempre aggiornato del nome proprietà

// le quadre permottono anche la risoluzione di espressioni, prima di andare a cercare corrispondenza col valore generato.
// console.log("CAR2 plate".car2["license" + "Plate"]); // car2["licensePlate"]

// creare una nuova proprietà
car2.creationDate = "10/03/2025";
console.log(car2);

// eliminare una proprietà
delete car2.color;
console.log(car2);
