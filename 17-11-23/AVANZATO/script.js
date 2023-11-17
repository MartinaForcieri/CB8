// Funzione per mostrare il popup dopo 3.5 secondi
function mostraPopup() {
  // Mostro il popup
  document.getElementById("popup-container").classList.remove("hidden");

  // Nascondo il resto della pagina
  document.getElementById("main-content").style.display = "none";
}

// Funzione per chiudere il popup
function chiudiPopup() {
  // Chiudo il popup
  document.getElementById("popup-container").classList.add("hidden");

  // Ripristino la visibilità della pagina
  document.getElementById("main-content").style.display = "block";
}

// Funzione per il redirect a google.com
function redirectNo() {
  // Eseguo il redirect
  window.location.href = "https://www.google.com";
}

// Imposto un timer di 3.5 secondi
setTimeout(mostraPopup, 3500);
