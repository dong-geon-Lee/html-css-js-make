const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let int = setInterval(blurring, 30);
let load = 0;

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.textContent = `${load}%`;
  loadText.style.opacity = 1 - load / 100;
  bg.style.filter = `blur(${30 - (load / 100) * 30}px)`;
}
