const panel = document.querySelector(".panel");
const ratingsContainer = document.querySelector(".ratings-container");
const rating = document.querySelectorAll(".rating");
const sendBtn = document.getElementById("send");

let selectedText = "Satisfied";

ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedText = e.target.nextElementSibling.textContent;
  }
});

function removeActive() {
  rating.forEach((r) => r.classList.remove("active"));
}

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
    <i class='fas fa-heart'><i>
    <strong>Thank You!</strong>
    <br> 
    <strong>Feedback: ${selectedText}</strong>
    <p>We'll use your feedback to improve our customer support </p>
  `;
});
