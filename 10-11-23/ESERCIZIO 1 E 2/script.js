const cardGenerator = (imgUrl, title, description, btnText) => {
  const heroEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const titleEl = document.createElement("h1");
  const descriptionEl = document.createElement("p");
  const btnEl = document.createElement("button");

  heroEl.setAttribute("class", "card");
  imgEl.setAttribute("src", imgUrl);
  imgEl.setAttribute("alt", title);
  titleEl.textContent = title;
  descriptionEl.textContent = description;
  btnEl.textContent = btnText;

  heroEl.append(imgEl, titleEl, descriptionEl, btnEl);

  // Aggiungo un gestore di eventi al pulsante per l'evento di click
  btnEl.addEventListener("click", (element) => {
    // Nascondo la sezione hero impostando la proprietà display a 'none'
    console.log("Cliccato elemento " + element);
    heroEl.style.display = "none";
  });

  return heroEl;
};

document.body.append(
  cardGenerator(
    "https://picsum.photos/300/300",
    "Lorem ipsum dolor",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.  adipisicing elit.  adipisicing elit. Laudantiu animi",
    "Clicca qui"
  )
);
