const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=''";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280/";

const main = document.getElementById("main");
const movies = document.querySelectorAll(".movie");
const form = document.getElementById("form");
const inputSearch = document.getElementById("search");

const apiData = async (url) => {
  const response = await fetch(url);
  const datas = await response.json();

  main.innerHTML = "";

  datas.results.forEach((data) => {
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");

    const { backdrop_path, title, vote_average, overview } = data;

    movieDiv.innerHTML = `
      <img
        src="${IMG_PATH + backdrop_path}"
        alt="">

      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${rating(vote_average)}">${vote_average}</span>
      </div>

      <div class="overview">
        <h3>OverView</h3>
        ${overview}
      </div>
    `;

    main.appendChild(movieDiv);
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (inputSearch.value !== "") {
    apiData(SEARCH_API + inputSearch.value);
    inputSearch.value = "";
  } else {
    window.location.reload();
  }
});

const rating = (vote_average) => {
  if (vote_average > 7) {
    return "green";
  } else if (vote_average < 3) {
    return "red";
  } else {
    return "orange";
  }
};
