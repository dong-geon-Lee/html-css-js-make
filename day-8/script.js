const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.textContent
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 0.05}s">${letter}</span>`
    )
    .join("");
});
