const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const colorEl = document.getElementById("color");
const clearBtn = document.getElementById("clear");
const sizeEl = document.getElementById("size");

const ctx = canvas.getContext("2d");

console.log(ctx);

let x;
let y;
let isPressed = false;
let size = 10;
let color = "black";

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    let x2 = e.offsetX;
    let y2 = e.offsetY;

    drawCircle(x, y);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function sizeChange() {
  sizeEl.textContent = size;
}

increaseBtn.addEventListener("click", () => {
  size += 5;

  if (size > 50) {
    size = 50;
  }

  sizeChange();
});

decreaseBtn.addEventListener("click", () => {
  size -= 5;

  if (size < 5) {
    size = 5;
  }

  sizeChange();
});

clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

colorEl.addEventListener("change", (e) => {
  color = e.target.value;
});
