function createElement(tag, attributes, textContent) {
  const element = document.createElement(tag);
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
  if (textContent) {
    element.textContent = textContent;
  }
  return element;
}

const navbar = createElement("nav", { class: "navbar" });
const logo = createElement("div", { class: "logo" });
const logoImage = createElement("img", { src: "logo.png", alt: "Logo" });
logo.appendChild(logoImage);

const navLinks = createElement("ul", { class: "nav-links" });
const navLinkData = [
  { text: "Home", url: "#" },
  { text: "About", url: "#" },
  { text: "Shop", url: "#" },
  { text: "Pages", url: "#" },
  { text: "Contact", url: "#" },
];

navLinkData.forEach((link) => {
  const listItem = createElement("li");
  const anchor = createElement("a", { href: link.url }, link.text);
  listItem.appendChild(anchor);
  navLinks.appendChild(listItem);
});

const userActions = createElement("div", { class: "user-actions" });
const signUpLink = createElement("a", { href: "#" }, "Sign Up");
const orderButton = createElement(
  "button",
  { class: "order-btn" },
  "Order Now"
);
userActions.appendChild(signUpLink);
userActions.appendChild(orderButton);

navbar.appendChild(logo);
navbar.appendChild(navLinks);
navbar.appendChild(userActions);

let mainSection = document.createElement("section");
mainSection.classList.add("main-section");

let centeredContent = document.createElement("div");
centeredContent.classList.add("centered-content");

let heading2 = document.createElement("h2");
heading2.textContent = "Choise";

let paragraph = document.createElement("p");
paragraph.textContent = "Choise who you are";

centeredContent.appendChild(heading2);
centeredContent.appendChild(paragraph);

mainSection.appendChild(centeredContent);

const gridSection = document.createElement("section");
gridSection.classList.add("griglia");

let unorderedList = document.createElement("ul");

let listItem1 = document.createElement("li");
let img1 = document.createElement("img");
img1.src = "./image/undraw_male_avatar_g98d.svg";
img1.style.width = "25%";
img1.alt = "Male";
let heading4_1 = document.createElement("h4");
heading4_1.textContent = "Male";
listItem1.appendChild(img1);
listItem1.appendChild(heading4_1);

let listItem2 = document.createElement("li");
let img2 = document.createElement("img");
img2.src = "./image/undraw_female_avatar_efig.svg";
img2.style.width = "25%";
img2.alt = "Female";
let heading4_2 = document.createElement("h4");
heading4_2.textContent = "Female";
listItem2.appendChild(img2);
listItem2.appendChild(heading4_2);

let listItem3 = document.createElement("li");
let img3 = document.createElement("img");
img3.src = "./image/undraw_dog_c7i6.svg";
img3.style.width = "25%";
img3.alt = "Dog";
let heading4_3 = document.createElement("h4");
heading4_3.textContent = "Dog";
listItem3.appendChild(img3);
listItem3.appendChild(heading4_3);

unorderedList.appendChild(listItem1);
unorderedList.appendChild(listItem2);
unorderedList.appendChild(listItem3);

gridSection.appendChild(unorderedList);

let articleSection1 = document.createElement("section");
articleSection1.classList.add("article-section");

let article1 = document.createElement("article");
article1.classList.add("article");

let imageContent1 = document.createElement("div");
imageContent1.classList.add("image-content");
let img1 = document.createElement("img");
img1.src = "./image/undraw_passing_by_0un9.svg";
img1.alt = "PassingBy";
imageContent1.appendChild(img1);

let textContent1 = document.createElement("div");
textContent1.classList.add("text-content");
let heading2_1 = document.createElement("h2");
heading2_1.textContent = "Go out with your dog!";
let paragraph1 = document.createElement("p");
paragraph1.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ducimus. Facilis necessitatibus ad corporis odit repudiandae architecto porro? Quidem nulla veniam esse, blanditiis harum minus id reiciendis perferendis ut dolorum.";
let button1 = document.createElement("button");
button1.classList.add("read-more-btn");
button1.textContent = "Read More";

textContent1.appendChild(heading2_1);
textContent1.appendChild(paragraph1);
textContent1.appendChild(button1);

article1.appendChild(imageContent1);
article1.appendChild(textContent1);

articleSection1.appendChild(article1);

let articleSection2 = document.createElement("section");
articleSection2.classList.add("article-section2");

let textContent2 = document.createElement("div");
textContent2.classList.add("text-content2");
let heading2_2 = document.createElement("h2");
heading2_2.textContent = "Good Doggy";
let paragraph2 = document.createElement("p");
paragraph2.textContent =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, eos inventore. Consequuntur nisi obcaecati optio qui quisquam, quos provident laudantium sapiente ipsam quam quasi, soluta vel voluptates saepe error sequi!";
let button2 = document.createElement("button");
button2.textContent = "Learn More";

textContent2.appendChild(heading2_2);
textContent2.appendChild(paragraph2);
textContent2.appendChild(button2);

let imageContainer = document.createElement("div");
imageContainer.classList.add("image-container");
let img2 = document.createElement("img");
img2.src = "./image/undraw_good_doggy_re_eet7.svg";
img2.alt = "Good Doggy";
imageContainer.appendChild(img2);

articleSection2.appendChild(textContent2);
articleSection2.appendChild(imageContainer);

let blogSection = document.createElement("section");
blogSection.classList.add("blog-section");

let blogHeader = document.createElement("div");
blogHeader.classList.add("blog-header");

let heading2 = document.createElement("h2");
heading2.textContent = "Il Tuo Blog";

let descriptionParagraph = document.createElement("p");
descriptionParagraph.textContent = "Descrizione del blog centrata.";

blogHeader.appendChild(heading2);
blogHeader.appendChild(descriptionParagraph);

blogSection.appendChild(blogHeader);

let blogGrid = document.createElement("div");
blogGrid.classList.add("blog-grid");

for (let i = 1; i <= 3; i++) {
  let blogItem = document.createElement("div");
  blogItem.classList.add("blog-item");

  let imgSrc =
    "https://fastly.picsum.photos/id/" +
    (100 + i) +
    "/2592/1728.jpg?hmac=E1-3Hac5ffuCVwYwexdHImxbMFRsv83exZ2EhlYxkgY";
  let imgAlt = "Immagine " + i;

  let img = document.createElement("img");
  img.src = imgSrc;
  img.alt = imgAlt;

  let paragraph = document.createElement("p");
  paragraph.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, fuga?";

  let readMoreLink = document.createElement("a");
  readMoreLink.href = "#";
  readMoreLink.textContent = "Read more ➡️";

  blogItem.appendChild(img);
  blogItem.appendChild(paragraph);
  blogItem.appendChild(readMoreLink);

  blogGrid.appendChild(blogItem);
}

blogSection.appendChild(blogGrid);

let formSection = document.createElement("section");
formSection.classList.add("form-section");

let leftContent = document.createElement("div");
leftContent.classList.add("left-content");

let heading2 = document.createElement("h2");
heading2.textContent = "Contact Us";

let paragraph = document.createElement("p");
paragraph.textContent =
  "Feel free to reach out to us with any questions or concerns.";

leftContent.appendChild(heading2);
leftContent.appendChild(paragraph);

formSection.appendChild(leftContent);

let rightContent = document.createElement("div");
rightContent.classList.add("right-content");

let form = document.createElement("form");
form.action = "#";
form.method = "post";

let labels = ["First Name:", "Last Name:", "Email:", "Subject:", "Message:"];
let inputTypes = ["text", "text", "email", "text", "textarea"];
let inputNames = ["firstName", "lastName", "email", "subject", "message"];

for (let i = 0; i < labels.length; i++) {
  let label = document.createElement("label");
  label.textContent = labels[i];
  label.htmlFor = inputNames[i];

  let input = document.createElement("input");
  input.type = inputTypes[i];
  input.id = inputNames[i];
  input.name = inputNames[i];
  input.required = true;

  if (inputTypes[i] === "textarea") {
    input = document.createElement("textarea");
    input.id = inputNames[i];
    input.name = inputNames[i];
    input.rows = "4";
    input.required = true;
  }

  form.appendChild(label);
  form.appendChild(input);
}

let submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "SENDING";

form.appendChild(submitButton);

rightContent.appendChild(form);

formSection.appendChild(rightContent);

let footer = document.createElement("footer");

let paragraph = document.createElement("p");
paragraph.classList.add("footer-text");
paragraph.textContent = "Made with ❤️ by Martina Forcieri!";

document.body.append(
  navbar,
  mainSection,
  gridSection,
  articleSection1,
  articleSection2,
  blogSection,
  formSection,
  footer
);
