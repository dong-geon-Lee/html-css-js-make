// 나의 해결책
// let faqs = document.querySelectorAll(".faq");
// let faqToggles = document.querySelectorAll(".faq-toggle");

// faqToggles.forEach((faqToggle, index) => {
//   faqToggle.addEventListener("click", () => {
//     faqs[index].classList.toggle("active");
//   });
// });

// 트레비스 솔루션
const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
