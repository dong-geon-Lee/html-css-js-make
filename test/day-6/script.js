const boxs = document.querySelectorAll(".box");
const triggerBottom = window.innerHeight * 0.8;

const checkBox = () => {
  console.log(boxs);

  boxs.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
};

checkBox();

window.addEventListener("scroll", checkBox);
