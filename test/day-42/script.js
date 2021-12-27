const search = document.getElementById("filter");
const userList = document.querySelector(".list-item");
const listItem = [];

const userData = async () => {
  const res = await fetch("https://randomuser.me/api?results=50");
  const data = await res.json();
  const { results } = data;

  console.log(results);

  userList.innerHTML = "";

  results.forEach((result) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <img src="${result.picture.large}" alt="${result.name.title}">
      <div class="user-info">
        <h3>${result.name.first} ${result.name.last}</h3>
        <p>${result.location.country}</p>
      </div>
    `;

    userList.appendChild(li);

    listItem.push(li);
  });
};

userData();

const filterTerm = (searchTerm) => {
  console.log(searchTerm);
  listItem.forEach((item) => {
    if (item.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
};

search.addEventListener("input", (e) => {
  filterTerm(e.target.value);
});
