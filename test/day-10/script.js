const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

const changeJoke = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com/", config);
  const data = await res.json();

  console.log(data);

  joke.innerHTML = data.joke;
};

jokeBtn.addEventListener("click", changeJoke);
