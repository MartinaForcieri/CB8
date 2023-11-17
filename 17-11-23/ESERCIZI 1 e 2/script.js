// ESERCIZIO 1

// Funzione che mostra il popup dopo 3.5 secondi
function mostraPopup() {
  // Chiedo all'utente se è maggiorenne
  let isMaggiorenne = window.confirm("Sei maggiorenne?");

  // Controllo la risposta dell'utente
  if (isMaggiorenne) {
    alert("Congratulazioni! Sei maggiorenne.");
  } else {
    alert("Mi dispiace, non sei maggiorenne.");
  }
}

// Imposto un timer di 3.5 secondi
setTimeout(mostraPopup, 3500);

// ESERCIZIO 2

// EseguO una chiamata fetch all'indirizzo
fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    // Filtro gli elementi con prezzo inferiore a 50
    const risultatoFiltrato = data.filter((prodotto) => prodotto.price < 50);

    // Stampo l'array filtrato
    console.log(risultatoFiltrato);
  });
