const searchInput = document.getElementById("searchInput");
const categoriesSelect = document.getElementById("categories");
const linksList = document.getElementById("linksList");

searchInput.addEventListener("input", () => {
  console.log("Search term:", searchInput.value);
});

const categories = ["Action", "Drama", "Comedy", "Sci-Fi"];

categories.forEach((category) => {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  categoriesSelect.appendChild(option);
});
