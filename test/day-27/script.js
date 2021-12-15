const toasts = document.getElementById("toasts");
const btn = document.getElementById("btn");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

const types = ["info", "success", "error"];

btn.addEventListener("click", () => addToast());

function addToast(message, type) {
  const toastNotify = document.createElement("div");

  toastNotify.textContent = message ? message : makeMessage();
  toastNotify.classList.add("toast");
  toastNotify.classList.add(type ? type : makeType());

  toasts.appendChild(toastNotify);

  setTimeout(() => {
    toastNotify.remove();
  }, 3000);
}

function makeMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function makeType() {
  return types[Math.floor(Math.random() * types.length)];
}
