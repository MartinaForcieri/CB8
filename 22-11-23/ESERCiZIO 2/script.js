// Funzione per renderizzare l'immagine e il testo
function renderImageAndText(imageData) {
  // Ottiengo i riferimenti agli elementi HTML
  const imageContainer = document.getElementById("imageContainer");
  const textContainer = document.getElementById("textContainer");

  // Creazione dell'elemento immagine
  const imageElement = document.createElement("img");
  imageElement.src = imageData.download_url;
  imageElement.alt = imageData.author;

  // Creazione dell'elemento testo
  const textElement = document.createElement("p");
  textElement.textContent = `Autore: ${imageData.author}`;

  // Aggiungo gli elementi alla pagina
  imageContainer.appendChild(imageElement);
  textContainer.appendChild(textElement);
}

// Dati dell'oggetto immagine
const imageData = {
  id: "0",
  author: "Alejandro Escamilla",
  download_url: "https://picsum.photos/id/0/5000/3333",
};

// Chiamata alla funzione per renderizzare l'immagine e il testo
renderImageAndText(imageData);
