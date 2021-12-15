const sliderContainer = document.querySelector(".slider-container");
const leftSlide = document.querySelector(".left-slide");
const rightSlide = document.querySelector(".right-slide");
const downBtn = document.querySelector(".down-button");
const upBtn = document.querySelector(".up-button");
const slideLength = rightSlide.querySelectorAll("div").length;

let activeIdx = 0;
let currentHeight = sliderContainer.clientHeight;

leftSlide.style.top = `-${(slideLength - 1) * 100}vh`;

downBtn.addEventListener("click", () => changeSlide("down"));
upBtn.addEventListener("click", () => changeSlide("up"));

const changeSlide = (direction) => {
  if (direction === "down") {
    activeIdx--;

    if (activeIdx < 0) {
      activeIdx = slideLength - 1;
    }
  } else if (direction === "up") {
    activeIdx++;

    if (activeIdx > slideLength - 1) {
      activeIdx = 0;
    }
  }

  leftSlide.style.transform = `translateY(${activeIdx * currentHeight}px)`;
  rightSlide.style.transform = `translateY(-${activeIdx * currentHeight}px)`;
};
