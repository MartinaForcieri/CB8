const mockData = [
  {
    id: 1,
    roboName: "Casi",
    price: 445,
    imageUrl: "https://robohash.org/casi",
  },
  {
    id: 2,
    roboName: "Alex",
    price: 1000,
    imageUrl: "https://robohash.org/alex",
  },
  {
    id: 3,
    roboName: "Pippo",
    price: 30,
    imageUrl: "https://robohash.org/pippo",
  },
  {
    id: 4,
    roboName: "Martina",
    price: 35,
    imageUrl: "https://robohash.org/martina",
  },
];

function createRobotCard(robotData) {
  const card = document.createElement("div");
  card.className = "robot-card";

  const img = document.createElement("img");
  img.src = robotData.imageUrl;
  img.alt = robotData.roboName;
  img.style.maxWidth = "100%";
  card.appendChild(img);

  const name = document.createElement("h3");
  name.textContent = robotData.roboName;
  card.appendChild(name);

  const price = document.createElement("p");
  price.textContent = `$${robotData.price}`;
  card.appendChild(price);

  const favoriteButton = document.createElement("button");
  favoriteButton.className = "button";
  favoriteButton.textContent = "❤️ Preferiti";
  card.appendChild(favoriteButton);

  const buyButton = document.createElement("button");
  buyButton.className = "button";
  buyButton.textContent = "🛒 Acquista";
  card.appendChild(buyButton);

  return card;
}

const robotList = document.getElementById("robotList");

mockData.forEach(function (robotData) {
  const robotCard = createRobotCard(robotData);
  robotList.appendChild(robotCard);
});
