// ESERCIZIO 1

// Dati dei robot raccomandati
var recommendedRobots = [
  { imageUrl: "https://robohash.org/casi", price: "445 $", name: "Casi" },
];

// Funzione per creare dinamicamente gli elementi robo e aggiungerli alla lista
function createRoboElement(robotData) {
  let roboDiv = document.createElement("div");
  roboDiv.className = "robo";

  let img = document.createElement("img");
  img.src = robotData.imageUrl;
  img.alt = robotData.name;

  let textDiv = document.createElement("div");
  textDiv.className = "text";

  let priceParagraph = document.createElement("p");
  priceParagraph.textContent = robotData.price;

  let nameHeading = document.createElement("h4");
  nameHeading.textContent = robotData.name;

  textDiv.appendChild(priceParagraph);
  textDiv.appendChild(nameHeading);

  roboDiv.appendChild(img);
  roboDiv.appendChild(textDiv);

  return roboDiv;
}

// Ottiengo il riferimento all'elemento roboList
let roboList = document.getElementById("roboList");

// Aggiunggo dinamicamente gli elementi robo alla lista
recommendedRobots.forEach(function (robotData) {
  let roboElement = createRoboElement(robotData);
  roboList.appendChild(roboElement);
});

// ESERCIZIO 2

const roboProdGen = (roboData) => {
  try {
    const wrapperEl = document.createElement("div");
    const imgEl = document.createElement("img");
    const textEl = document.createElement("div");
    const priceEl = document.createElement("p");
    const nameEl = document.createElement("h4");

    wrapperEl.className = "robo";
    imgEl.src = roboData.imageUrl;
    imgEl.alt = roboData.roboName;
    textEl.className = "text";
    priceEl.textContent = roboData.price + "$";
    nameEl.textContent = roboData.roboName;
    textEl.append(priceEl, nameEl);
    wrapperEl.append(textEl, imgEl);

    return wrapperEl;
  } catch (error) {
    console.error(
      "Si è verificato un errore durante la generazione del prodotto robo:",
      error
    );
    // Gestione dell'errore qui, se necessario
  }
};
ì;
