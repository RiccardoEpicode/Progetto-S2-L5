/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno 
  di qualcosa che non è stato spiegato a lezione.
- Puoi testare il tuo codice in un file separato, o de-commentando un 
  esercizio alla volta.
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri 
  la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati 
  delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento 
    dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
console.log("-----------");
console.log("Domanda 1");
console.log("-----------");

for (let i = 0; i < pets.length; i++) {
  const pet = pets[i];
  console.log(pet);
}

console.log("-----------");

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array 
    "pets".
*/

console.log("Domanda 2");
console.log("-----------");

const alphabetOrd = pets.sort();
console.log(alphabetOrd);

console.log("-----------");

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi 
    dell'array "pets", questa volta in ordine invertito.
*/

console.log("Domanda 3");
console.log("-----------");

const invertOrd = pets.sort().reverse();
console.log(invertOrd);

console.log("-----------");

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in 
    ultima posizione.
*/

console.log("Domanda 4");
console.log("-----------");

pets.push(pets.shift());
console.log(pets);

console.log("-----------");

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad 
    ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

console.log("Domanda 5");
console.log("-----------");

const usedPlates = [];

for (let i = 0; i < cars.length; i++) {
  let isUnique = false;
  let randomPlate;

  while (!isUnique) {
    randomPlate = Math.floor(Math.random() * 10000) + 1;

    switch (usedPlates.includes(randomPlate)) {
      case true:
        break;
      case false:
        isUnique = true;
        usedPlates.push(randomPlate);
        cars[i].licensePlateNumber = randomPlate;
        break;
    }
  }
}

console.log(cars);

console.log("-----------");

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione 
    nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da 
    ogni auto.
*/

console.log("Domanda 6");
console.log("-----------");
cars.push({
  brand: "Fiat",
  color: "blue",
  licensePlateNumber: 8675,
  model: "Punto",
  trims: ["GT", "f-line"],
});

console.log(cars);

for (i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}
console.log(cars);

console.log("-----------");

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" 
    di ogni auto nel nuovo array "justTrims", sotto definito.
*/

console.log("Domanda 7");
console.log("-----------");

const justTrims = [];

for (i = 0; i < cars.length; i++) {
  const copy = cars[i].trims[0];
  justTrims.push(copy);
}

console.log(justTrims);

console.log("-----------");

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due 
    diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in 
    console "Buzz".
*/

console.log("Domanda 8");
console.log("-----------");

for (i = 0; i < cars.length; i++) {
  const cicloCars = cars[i];
  if (cicloCars.color.charAt(0) === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

console.log("-----------");

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente 
    array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

console.log("Domanda 9");
console.log("-----------");

let y = 0;
while (numericArray[y] !== 32) {
  console.log(numericArray[y]);
  y++;
}
console.log(numericArray[y]);
console.log("-----------");

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera 
    un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

console.log("Domanda 10");
console.log("-----------");

const positions = [];

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      positions.push(1);
      break;
    case "b":
      positions.push(2);
      break;
    case "c":
      positions.push(3);
      break;
    case "d":
      positions.push(4);
      break;
    case "e":
      positions.push(5);
      break;
    case "f":
      positions.push(6);
      break;
    case "g":
      positions.push(7);
      break;
    case "h":
      positions.push(8);
      break;
    case "i":
      positions.push(9);
      break;
    case "l":
      positions.push(10);
      break;
    case "m":
      positions.push(11);
      break;
    case "n":
      positions.push(12);
      break;
    case "o":
      positions.push(13);
      break;
    case "p":
      positions.push(14);
      break;
    case "q":
      positions.push(15);
      break;
    case "r":
      positions.push(16);
      break;
    case "s":
      positions.push(17);
      break;
    case "t":
      positions.push(18);
      break;
    case "u":
      positions.push(19);
      break;
    case "v":
      positions.push(20);
      break;
    case "z":
      positions.push(21);
      break;
    default:
      positions.push("?");
  }
}

console.log(positions);

console.log("-----------");
