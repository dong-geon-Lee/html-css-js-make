const faqs = document.querySelectorAll(".faq");
const faqToggles = document.querySelectorAll(".faq-toggle");

faqToggles.forEach((toggle, index) => {
  toggle.addEventListener("click", () => {
    faqs[index].classList.toggle("active");
  });
});
