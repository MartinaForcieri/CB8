// ESERCIZIO 1

function calcolatrice(valore1, valore2, valore3, operazione, callback) {
  let risultato;
  switch (operazione) {
    case "+":
      risultato = valore1 + valore2 + valore3;
      break;
    case "-":
      risultato = valore1 - valore2 - valore3;
      break;
    case "*":
      risultato = valore1 * valore2 * valore3;
      break;
    case "/":
      if (valore2 !== 0 && valore3 !== 0) {
        risultato = valore1 / valore2 / valore3;
      } else {
        callback("Divisione per zero non consentita.");
        return;
      }
      break;
    default:
      callback("Operazione non valida");
      return;
  }
  callback(null, risultato);
}

// Esempi di utilizzo:
calcolatrice(5, 3, 2, "+", function (errore, risultato) {
  if (errore) {
    console.log("Errore:", errore);
  } else {
    console.log("Risultato dell'addizione:", risultato);
  }
});

calcolatrice(10, 2, 3, "*", function (errore, risultato) {
  if (errore) {
    console.log("Errore:", errore);
  } else {
    console.log("Risultato della moltiplicazione:", risultato);
  }
});

calcolatrice(8, 4, 0, "/", function (errore, risultato) {
  if (errore) {
    console.log("Errore:", errore);
  } else {
    console.log("Risultato della divisione:", risultato);
  }
});

//ESERCIZIO 2

const carrello = [
  {
    id: 1,
    nome: "Prodotto 1",
    immagine: "url_immagine_1.jpg",
    descrizione: "Descrizione del prodotto 1",
  },
  {
    id: 2,
    nome: "Prodotto 2",
    immagine: "url_immagine_2.jpg",
    descrizione: "Descrizione del prodotto 2",
  },
  {
    id: 3,
    nome: "Prodotto 3",
    immagine: "url_immagine_3.jpg",
    descrizione: "Descrizione del prodotto 3",
  },
];

// Utilizzando map
const risultatiMap = carrello.map((prodotto) => {
  console.log(prodotto);
  return prodotto;
});

// map restituisce un nuovo array risultati contenente operazioni
//delle operazioni sulla funzione di callback.
//Nel nostro caso, stiamo stampando gli oggetti e ritornando oggetti oggetti oggetti nell'array "risultatiMap"

// Utilizzando forEach
carrello.forEach((prodotto) => {
  console.log(prodotto);
});

//foreach non restituisce un nuovo array ma esegue semplicemente la funzione di callback per ogni elemento dell'array.
//In questo caso, stiamo solo stampando gli oggetti direttamente ".forEach"

//ESERCIZIO AVANZATO

// Dati due array di numeri
const array1 = [5, 6, 9, 12, 15, 18, 21, 24];
const array2 = [2, 5, 7, 10, 13, 15, 20, 25];

// Trasformazione (utilizzando map)
const array1Trasformato = array1.map((numero) => numero * 2);
const array2Trasformato = array2.map((numero) => numero + 5);

// Filtraggio (utilizzando filter)
const array1Filtrato = array1Trasformato.filter((numero) => numero > 10);
const array2Filtrato = array2Trasformato.filter((numero) => numero % 2 === 0);

console.log(
  "Dal array1 trasformato, tenere solo i numeri maggiori di 10:",
  array1Filtrato
);
console.log(
  "Dal array2 trasformato, tenere solo i numeri pari:",
  array2Filtrato
);
