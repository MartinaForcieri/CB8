const imageData = [
  {
    id: 1,
    imgUrl: "https://picsum.photos/200/200?1",
    altText: "Immagine alternativa 1",
  },
];

// Funzione per generare dinamicamente una immagine
function imageGenerator(id, imgUrl, altText, cssClass) {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add(cssClass);

  const image = document.createElement("img");
  image.src = imgUrl;
  image.alt = altText;
  image.id = `image${id}`;

  imageContainer.appendChild(image);
  return imageContainer;
}

// Ottiengo il riferimento al container della gallery
const galleryContainer = document.getElementById("galleryContainer");

// Popolo la gallery dinamicamente
imageData.forEach((item) => {
  const imageElement = imageGenerator(
    item.id,
    item.imgUrl,
    item.altText,
    "gallery-image"
  );
  galleryContainer.appendChild(imageElement);
});
