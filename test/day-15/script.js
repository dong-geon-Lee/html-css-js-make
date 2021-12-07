const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.textContent = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const increment = target / 200;

    const initialNumber = +counter.textContent;

    if (initialNumber < target) {
      counter.textContent = Math.ceil(initialNumber + increment);
      setTimeout(updateCounter, 10);
    } else {
      counter.textContent = target;
    }
  };

  updateCounter();
});
