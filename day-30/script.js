const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "토스 프론트엔드 개발자 - 이동건";

let idx = 1;
let speed = 300 / speedEl.value;

speedEl.addEventListener("input", (e) => {
  speed = 300 / e.target.value;
});

const writeText = () => {
  textEl.textContent = text.slice(0, idx);
  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
};

writeText();
