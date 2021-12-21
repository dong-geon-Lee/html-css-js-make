const toggles = document.querySelectorAll(".toggle");
const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");

const clickTrick = () => {};

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => clickTrick(e.target))
);
