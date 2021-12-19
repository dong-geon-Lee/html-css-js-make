const text = document.querySelector(".text");
const input = document.getElementById("speed");
let mainText = "Toss 프론트엔드 개발자 이동건";

let idx = 1;
let speed = 300;

input.addEventListener("input", (e) => {
  speed = 300 / e.target.value;
});

const textCreate = () => {
  const viewText = mainText.slice(0, idx);
  text.textContent = viewText;

  idx++;

  if (idx > mainText.length) {
    idx = 1;
  }

  setTimeout(textCreate, speed);
};

textCreate();
