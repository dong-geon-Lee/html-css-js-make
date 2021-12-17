const times = document.getElementById("times");
const loveMe = document.querySelector(".loveMe");

let timeHeart = 0;
let timeClick = 0;

loveMe.addEventListener("click", (e) => {
  if (timeHeart === 0) {
    timeHeart = e.timeStamp;
  } else if (e.timeStamp - timeHeart < 1000) {
    createHeart(e);
    timeHeart = 0;
  }
});

const createHeart = (e) => {
  const iconEl = document.createElement("i");
  iconEl.classList.add("fas");
  iconEl.classList.add("fa-heart");

  const x = e.clientX;
  const y = e.clientY;

  const xInside = x - e.target.offsetLeft;
  const yInside = y - e.target.offsetTop;

  iconEl.style.left = `${xInside}px`;
  iconEl.style.top = `${yInside}px`;

  loveMe.appendChild(iconEl);

  setTimeout(() => iconEl.remove(), 1000);

  times.innerHTML = ++timeClick;

  setTimeout(() => {
    times.innerHTML = --timeClick;
  }, 3000);
};
