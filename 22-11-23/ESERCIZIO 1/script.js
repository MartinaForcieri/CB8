// ESERCIZIO 1

async function getImages() {
  try {
    // Effettuo la chiamata all'endpoint
    const response = await fetch("https://picsum.photos/v2/list");

    // Verifico se la risposta è ok (status 200)
    if (!response.ok) {
      throw new Error(`Errore nella richiesta: ${response.status}`);
    }

    // Estraggo i dati JSON dalla risposta
    const data = await response.json();

    // Filtro e ottiengo solo gli URL di download
    const downloadUrls = data.map((image) => image.download_url);

    // Stampo i risultati
    console.log(downloadUrls);
  } catch (error) {
    console.error(`Si è verificato un errore: ${error.message}`);
  }
}

// Chiamata alla funzione asincrona
getImages();

// ESERCIZIO 2
