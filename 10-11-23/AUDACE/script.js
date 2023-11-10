const imageList = [
  {
    id: 1,
    imgUrl: "https://picsum.photos/200/200?random=6",
    altText: "Immagine 1",
  },
  {
    id: 2,
    imgUrl: "https://picsum.photos/200/200?random=10",
    altText: "Immagine 2",
  },
  {
    id: 3,
    imgUrl: "https://picsum.photos/200/200?random=9",
    altText: "Immagine 3",
  },
  {
    id: 4,
    imgUrl: "https://picsum.photos/200/200?random=7",
    altText: "Immagine 4",
  },
  {
    id: 5,
    imgUrl: "https://picsum.photos/200/200?random=4",
    altText: "Immagine 5",
  },
  {
    id: 6,
    imgUrl: "https://picsum.photos/200/200?random=3",
    altText: "Immagine 6",
  },
  {
    id: 7,
    imgUrl: "https://picsum.photos/200/200?random=7",
    altText: "Immagine 7",
  },
  {
    id: 8,
    imgUrl: "https://picsum.photos/200/200?random=4",
    altText: "Immagine 8",
  },
  {
    id: 9,
    imgUrl: "https://picsum.photos/200/200?random=2",
    altText: "Immagine 9",
  },
  {
    id: 10,
    imgUrl: "https://picsum.photos/200/200?random=1",
    altText: "Immagine 10",
  },
];

// Funzione pura per generare dinamicamente una immagine
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
imageList.forEach((item) => {
  const imageElement = imageGenerator(
    item.id,
    item.imgUrl,
    item.altText,
    "gallery-image"
  );
  galleryContainer.appendChild(imageElement);
});
