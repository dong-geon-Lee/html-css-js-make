const nav = document.querySelector("nav");

window.addEventListener("scroll", navScroll);

function navScroll() {
  console.log(scrollY, nav.offsetHeight);

  if (scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}
