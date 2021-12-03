const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const buttons = document.querySelector("#buttons");

console.log(buttons);

sounds.forEach((sound) => {
  const btn = document.createElement("button");

  btn.classList.add("btn");
  btn.textContent = sound;

  btn.addEventListener("click", () => {
    stopSound();
    const playSound = document.getElementById(sound);
    playSound.play();
  });

  buttons.appendChild(btn);
});

function stopSound() {
  sounds.forEach((sound) => {
    const stopList = document.getElementById(sound);
    stopList.currentTime = 0;
    stopList.pause();
  });
}
