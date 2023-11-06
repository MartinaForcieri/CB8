// ESERCIZIO 1

function classificaTemperatura(gradi) {
  if (gradi >= 30) {
    return "caldo";
  } else if (gradi >= 15) {
    return "mite";
  } else {
    return "freddo";
  }
}

console.log(classificaTemperatura(25));
console.log(classificaTemperatura(10));
console.log(classificaTemperatura(35));

//   ESERCIZIO 2

// Creazione dell'oggetto persona
const persona = {
  nome: "Martina",
  cognome: "Forcieri",
  eta: 35,
  citta: "Palermo",
  professione: "disoccupata",
  saluta: function () {
    console.log(
      "Ciao, sono " +
        this.nome +
        " " +
        this.cognome +
        ", ho " +
        this.eta +
        " anni e sono " +
        this.professione +
        " a " +
        this.citta +
        "."
    );
  },
};

persona.saluta();

//   ESERCIZIO AVANZATO

const preferiti = [];

function aggiungiAPreferiti(elemento) {
  preferiti.push(elemento);
}

function mostraPreferiti() {
  console.log("Elementi nei preferiti:");
  preferiti.forEach(function (elemento, indice) {
    console.log(indice + 1 + ". " + elemento);
  });
}

function rimuoviDaPreferiti(elemento) {
  let indice = preferiti.indexOf(elemento);
  if (indice !== -1) {
    preferiti.splice(indice, 1);
    console.log(elemento + " è stato rimosso dai preferiti.");
  } else {
    console.log(elemento + " non è presente nei preferiti.");
  }
}

aggiungiAPreferiti("Titolo 1");
aggiungiAPreferiti("Titolo 2");
aggiungiAPreferiti("Titolo 3");

mostraPreferiti();

rimuoviDaPreferiti("Titolo 2");

mostraPreferiti();
