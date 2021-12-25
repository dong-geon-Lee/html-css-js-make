const poke_container = document.getElementById("pokemon-container");
const pokemon_count = 5;
const colors = {
  fire: "#fddfdf",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const fetchPokemonData = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemonData(i);
  }
};

const getPokemonData = async (id) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  createPokemonCard(data);
};

const createPokemonCard = (data) => {
  const { id, name, types } = data;

  console.log(id, name, types);

  const number = id.toString().padStart(3, "0");
  const nicName = name[0].toUpperCase() + name.slice(1);
  const type = types.map((t) => t.type.name)[0];

  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("pokemon");

  const colorKey = Object.keys(colors);
  const pokeType = colorKey.find((t) => type.indexOf(t) > -1);
  const color = colors[pokeType];
  console.log(pokeType, "찾아", color, "색깔을");

  pokemonCard.style.backgroundColor = color;

  const pokemonHTML = `
      <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"" alt="">
      </div>

      <div class="info">
        <span class="number">#${number}</span>
        <h3 class="name">${nicName}</h3>
        <small class="type">Type: <span>${pokeType}</span></small>
      </div>
  `;

  pokemonCard.innerHTML = pokemonHTML;
  poke_container.appendChild(pokemonCard);
};

fetchPokemonData();
