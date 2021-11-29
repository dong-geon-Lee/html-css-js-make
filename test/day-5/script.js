const bg = document.querySelector(".bg");
const loadText = document.querySelector(".loading-text");

let load = 0;
let int = setInterval(blur, 30);

function blur() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.textContent = `${load}%`;
  loadText.style.opacity = 1 - load / 100;
  bg.style.filter = `blur(${30 - (load / 100) * 30}px)`;
}
