/**  Codice Casimiro **/
const BASE_URL = "https://api.themoviedb.org/3";
const AUTH =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGNiNzY2YTllNWM0N2ZkOGMzYzg0ODRlZjVjZTY4OSIsInN1YiI6IjY1MGQ0ZDJhZjkyNTMyMDBhZGUxMTJkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KIhoXnYP6YFHse-oAlJpKUpNxh599De8UFJI3BnxvTE";
const httpGET = async (endpoint, requestName) => {
  let input = `${BASE_URL}${endpoint}`;
  console.log(
    "Executing request with name=" + requestName + "and url=" + input
  );

  const res = await fetch(input, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: AUTH,
    },
  });

  const data = await res.json();

  console.log(
    "Decoded json response for request with name=" + requestName + "and data="
  );
  console.log(data);

  return data;
};

const movieModalElGen = (obj) => {
  const container = document.createElement("div");
  const imageEl = document.createElement("img");
  const infoEl = document.createElement("div");

  const infoHeaderEl = document.createElement("div");
  const infoHeaderTitleEl = document.createElement("h1");
  const infoHeaderRatingEl = document.createElement("h3");
  const infoHeaderDateEl = document.createElement("p");
  const infoHeaderLangEl = document.createElement("p");
  const infoHeaderAgeEl = document.createElement("p");

  const infoMainEl = document.createElement("div");
  const infoMainDescEl = document.createElement("p");
  const infoMainPopEl = document.createElement("p");

  const closeBtnEl = document.createElement("button");

  container.className = "serie-modal";
  imageEl.src = `https://image.tmdb.org/t/p/w780${obj.poster_path}`;
  imageEl.alt = obj.original_name || obj.title;
  imageEl.className = "serie-modal-img";
  infoEl.className = "serie-modal-info";

  infoHeaderEl.className = "serie-modal-header";
  infoHeaderTitleEl.textContent = obj.original_name || obj.title;
  infoHeaderRatingEl.textContent = Math.floor(obj.vote_average) + " ⭐";
  infoHeaderDateEl.textContent = obj.first_air_date.split("-")[0];
  infoHeaderLangEl.textContent = obj.original_language;
  infoHeaderAgeEl.textContent = obj.adult;

  infoMainEl.className = "serie-modal-main";
  infoMainDescEl.textContent = obj.overview;
  infoMainPopEl.textContent =
    obj.popularity >= 100 ? "POPULAR SERIE!" : "UNPOPULAR SERIE";

  closeBtnEl.className = "serie-modal-close-btn";
  closeBtnEl.textContent = "X";

  infoHeaderEl.append(
    infoHeaderTitleEl,
    infoHeaderRatingEl,
    infoHeaderDateEl,
    infoHeaderLangEl,
    infoHeaderAgeEl
  );

  infoMainEl.append(infoMainDescEl, infoMainPopEl);
  infoEl.append(infoHeaderEl, infoMainEl);
  container.append(imageEl, infoEl, closeBtnEl);

  return container;
};

// SYNC - COMPONENTS

const listsContainerElGen = (title) => {
  const container = document.createElement("div");
  const titleEl = document.createElement("h3");

  container.className = "lists-container";
  titleEl.textContent = title;

  container.append(titleEl);
  return container;
};

const cardsListElGen = () => {
  const container = document.createElement("div");

  container.className = "cards-list";

  return container;
};

const cardElGen = (imageData) => {
  const imageEl = document.createElement("img");

  imageEl.className = "card-item";
  imageEl.id = imageData.id;
  imageEl.src = `https://image.tmdb.org/t/p/w500${imageData.poster_path}`;
  imageEl.alt = imageData.name;

  return imageEl;
};

// ASYNC - COMPONENTS

const asyncListContainerElGen = async (endpoint, title) => {
  const data = await httpGET(endpoint);
  const listContainerEl = listsContainerElGen(title);
  const cardsListEl = cardsListElGen();

  data.results.map((serie) => cardsListEl.append(cardElGen(serie)));
  listContainerEl.append(cardsListEl);

  return listContainerEl;
};
/** Fine codice Casimiro **/

const IMG_URL = "https://image.tmdb.org/t/p/original";

// requests for movies data
const prefix = "/discover/tv";

const requestsPaths = {
  fetchTopRated:
    prefix +
    "?include_adult=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=200",
  fetchTrending:
    prefix +
    "?include_adult=false&language=en-US&page=1&sort_by=popularity.desc", // ${base_url}/discover/tv/popular?language=en-US&page=1`,
  fetchNetflixOriginals: prefix + "?with_networks=213",
};

// banner
httpGET(requestsPaths.fetchNetflixOriginals, "==> Banner <==").then((data) => {
  console.log(data.results);
  // every refresh the movie will be change
  const setTVSerie =
    data.results[Math.floor(Math.random() * data.results.length - 1)];
  console.log(setTVSerie);
  let banner = document.getElementById("banner");
  let banner_title = document.getElementById("banner__title");
  let banner__desc = document.getElementById("banner__description");
  banner.style.backgroundImage =
    "url(" + IMG_URL + setTVSerie.backdrop_path + ")";
  banner__desc.innerText = truncate(setTVSerie.overview, 150);
  banner_title.innerText = setTVSerie.name;
});

//trending
httpGET(requestsPaths.fetchTrending, "==> Trending <==").then((data) => {
  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className = "row";
  row.classList.add("popularrow");
  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row__title";
  title.innerText = "Trending Now";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row__posters";
  row.appendChild(row_posters);
  data.results.forEach((serie) => {
    const poster = document.createElement("img");
    poster.className = "row__posterLarge";
    var s2 = serie.id;
    poster.id = s2;
    poster.src = IMG_URL + serie.poster_path;
    row_posters.appendChild(poster);
    poster.addEventListener("click", (event) => {
      console.log(
        "Clicked on poster with name=" + serie.name + "\nEvent: " + event
      );
      const serieModalEl = movieModalElGen(serie);
      const serieModalBtnEl = serieModalEl.querySelector("button");
      document.body.appendChild(serieModalEl);
      serieModalBtnEl.addEventListener("click", () => serieModalEl.remove());
    });
  });
});

// top rated
httpGET(requestsPaths.fetchTopRated, "==> Top Rated <==").then((data) => {
  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className = "row";
  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row__title";
  title.innerText = "Top Rated";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row__posters";
  row.appendChild(row_posters);
  data.results.forEach((serie) => {
    console.log("Creating serie: " + serie);
    const poster = document.createElement("img");
    poster.className = "row__posterLarge";
    var s2 = serie.id;
    poster.id = s2;
    poster.src = IMG_URL + serie.poster_path;
    row_posters.appendChild(poster);
    poster.addEventListener("click", (event) => {
      console.log(
        "Clicked on poster with name=" + serie.name + "\nEvent: " + event
      );
      const serieModalEl = movieModalElGen(serie);
      const serieModalBtnEl = serieModalEl.querySelector("button");
      document.body.appendChild(serieModalEl);
      serieModalBtnEl.addEventListener("click", () => serieModalEl.remove());
    });
  });
});

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
