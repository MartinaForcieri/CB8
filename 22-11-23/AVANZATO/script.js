// Funzione per renderizzare un'immagine e un testo
function renderImageAndText(imageData) {
  // Creazione dell'elemento immagine
  const imageElement = document.createElement("img");
  imageElement.src = imageData.download_url;
  imageElement.alt = imageData.author;

  // Creazione dell'elemento testo
  const textElement = document.createElement("p");
  textElement.textContent = `Autore: ${imageData.author}`;

  // Creazione di un contenitore per l'immagine e il testo
  const container = document.createElement("div");
  container.appendChild(imageElement);
  container.appendChild(textElement);

  // Aggiungo il contenitore alla pagina
  document.getElementById("imagesContainer").appendChild(container);
}

// Funzione asincrona per ottenere la lista di immagini e renderizzarle
async function renderImages() {
  try {
    // Effettuo la chiamata all'endpoint
    const response = await fetch("https://picsum.photos/v2/list");

    // Verifico se la risposta è ok (status 200)
    if (!response.ok) {
      throw new Error(`Errore nella richiesta: ${response.status}`);
    }

    // Estraggo i dati JSON dalla risposta
    const imageDataList = await response.json();

    // Chiamata alla funzione per renderizzare ogni immagine
    imageDataList.forEach(renderImageAndText);
  } catch (error) {
    console.error(`Si è verificato un errore: ${error.message}`);
  }
}

// Chiamata alla funzione asincrona per renderizzare le immagini
renderImages();
