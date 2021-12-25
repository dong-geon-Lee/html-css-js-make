const content = document.querySelectorAll("img");
const menu = document.querySelectorAll("nav ul li");

console.log(content);
console.log(menu);

menu.forEach((img, idx) => {
  img.addEventListener("click", () => {
    hideImg();
    hideActive();

    content[idx].classList.add("show");
    menu[idx].classList.add("active");
  });
});

function hideImg() {
  content.forEach((img) => {
    img.classList.remove("show");
  });
}

function hideActive() {
  menu.forEach((m) => {
    m.classList.remove("active");
  });
}
