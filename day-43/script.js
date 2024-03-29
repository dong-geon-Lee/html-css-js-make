const panel = document.querySelector("#panel");
const ratingsContainer = document.querySelector(".ratings-container");
const ratings = document.querySelectorAll(".rating");
const sendBtn = document.querySelector("#send");

let selectedRating = "Satisfied";

ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.textContent;
  }
});

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
    <i class='fas fa-heart'><i>
    <strong>Thank You!</strong>
    <br> 
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support </p>
  `;
});

function removeActive() {
  ratings.forEach((rating) => {
    rating.classList.remove("active");
  });
}
