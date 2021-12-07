const remained = document.getElementById("remained");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");

const cups = document.querySelectorAll(".small-cup");

console.log(cups);

cups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlight(idx));
});

function highlight(idx) {
  if (
    cups[idx].classList.contains("full") &&
    !cups[idx].nextElementSibling?.classList.contains("full")
  ) {
    idx--;
  }

  cups.forEach((cup, idx2) => {
    if (idx >= idx2) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updatePercent();
}

function updatePercent() {
  const totalCups = cups.length; // 8
  const fullCups = document.querySelectorAll(".small-cup.full").length;

  const small = document.querySelector("small");

  if (fullCups === totalCups) {
    small.style.visibility = "hidden";
    liters.style.display = "none";
  } else {
    small.style.visibility = "visible";
  }

  percentage.textContent = `${(fullCups / totalCups) * 100}%`;
  percentage.style.height = `${(fullCups / totalCups) * 100}%`;

  liters.textContent = `${2 - (250 * fullCups) / 1000}L`;
}
