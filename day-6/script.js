const boxes = document.querySelectorAll(".box");

const checkBoxes = () => {
  const windowPortion = 0.8;
  const triggerBottom = window.innerHeight * windowPortion;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
};

window.addEventListener("scroll", checkBoxes);

checkBoxes();
