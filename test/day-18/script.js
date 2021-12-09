const body = document.body;
const slide = document.querySelectorAll(".slide");

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeIdx = 0;

const sliderImg = () => {
  slide.forEach((sl) => sl.classList.remove("active"));
  slide[activeIdx].classList.add("active");
};

const bodyImg = () => {
  body.style.backgroundImage = slide[activeIdx].style.backgroundImage;
};

leftBtn.addEventListener("click", () => {
  activeIdx--;

  if (activeIdx < 0) {
    activeIdx = slide.length - 1;
  }

  bodyImg();
  sliderImg();
});

rightBtn.addEventListener("click", () => {
  activeIdx++;

  if (activeIdx > slide.length - 1) {
    activeIdx = 0;
  }

  bodyImg();
  sliderImg();
});
