const container = document.querySelector(".container");
const imgURL = "https://source.unsplash.com/random/";

let rows = 30;

for (let i = 0; i < rows; i++) {
  const img = document.createElement("img");
  img.src = `${imgURL}${imgRandomSize()}`;

  container.appendChild(img);
}

function imgRandomSize() {
  return `${imgNumber()}x${imgNumber()}`;
}

function imgNumber() {
  return Math.floor(Math.random() * 10) + 300;
}
