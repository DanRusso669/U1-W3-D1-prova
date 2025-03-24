// SPREAD OPERATORE

const car = {
  brand: "ford",
  model: "focus",
  color: "silver",
};

const car2 = {
  licensePlate: "AB198DC",
  dateOfLicense: "24/03/24",
};

const car3 = Object.assign({}, car, car2, { brand: "maserati" });
console.log(car3);

// con lo spread lo possiamo scrivere così
const car4 = { ...car, ...car2, brand: "ferrari" };
console.log(car4);

// spread nell'ambito array

const nums = [56, 70, 10];
const otherNums = [0, 140, 2, 55];

console.log(nums.concat(otherNums));

// alternativa con spread
const numsCombined = [...nums, 100, 1000, ...otherNums];
console.log(numsCombined);

const arrOfCharacters = [..."Epicode"]; // esattamente come fare "Epicode".split()
console.log("spread con caratteri", [..."Epicode"]);

// REST PARAMETERS (quello dei 3 puntini DENTRO I PARAMETRI)
// serve a raccogliere tutti i parametri AGGIUNTIVI rispetto quelli già specificati

const anyFunc = function (param1, param2, ...rest) {
  let str = param1 + " " + param2;
  console.log(param1);
  console.log(param2);
  console.log(rest);

  //   rest saranno tutti quei parametri aggiuntivi, di numero indefinito, raccolti in forma di array
  // di conseguenza possiamo accedere alle singole posizioni o ciclare l'array
  for (let i = 0; i < rest.length; i++) {
    const extraParam = rest[i];
    str += " " + extraParam;
  }

  return str;
};

console.log(anyFunc("ciao", "ragazzi", "siamo", "in", "classe", "!"));

// DESTRUCTURING - semplifico un dato in variabili singole

const person = {
  name: "Stefano",
  surname: "Miceli",
  age: 15,
  teaching: true,
  userLocation: {
    area: {
      state: "IT",
      region: "FVG",
      adress: "via delle rose 3",
    },
  },
};

// la sintassi prevede
// const { nomeProprietà } = fonte;
const {
  name,
  surname,
  userLocation: {
    area: { state, region, adress },
  },
} = person;
const { userLocation } = person; //ri-destrutturiamo per avere accesso a userLocation
// da qui in poi avremo delle variabili con lo stesso nome della proprietà da usare direttamente
console.log(name);
console.log(surname);
console.log(state);
console.log(region);
console.log(adress);

//
console.log("_____________________________________________________________________");

// const getPersonData = function (obj) {
//   const { name, surname, userLocation } = obj;
//   console.log(name);
//   console.log(surname);
//   console.log(userLocation);
//   //   console.log(obj.name);
//   //   console.log(obj.surname);
//   //   console.log(obj.userLocation);
// };

console.log("_____________________________________________________________________");

const getPersonData = function ({ name, surname, userLocation, age, teaching }) {
  // in questo modo, SAPENDO DI RICEVERE UN OGGETTO NEL PARAMETRO DELLA FUNZIONE
  // posso destrutturarne le proprietà in singoli parametri da utilizzare direttamente
  console.log(name);
  console.log(surname);
  console.log(userLocation);
  console.log(age);
  console.log(teaching);
};

// sto inviando person (oggetto) come argomento della funzione
getPersonData(person);

console.log("_____________________________________________________________________");

// DESTRUCTURING DI ARRAY
// const [nomePos1, nomePos2, ...] = fonte
const letters = ["a", "b", "c", "d", "e", "f"];

// const second = letters[1];
// const last = letters[letters.length - 1];

const [first, second, third, fourth, , sixth] = letters;
// saltiamo la quinta e creiamo variabili dedicate per le altre posizioni

console.log(first);
console.log(second);
console.log(third);

console.log("_____________________________________________________________________");
