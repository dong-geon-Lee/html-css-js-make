const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const repos = document.getElementById("repos");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  createData(search.value);

  search.value = "";
});

const getRepos = async (username) => {
  const repos = document.getElementById("repos");

  try {
    const { data } = await axios.get(APIURL + username + "/repos");
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
};

const createData = async (username) => {
  getRepos(username);
  try {
    const { data } = await axios.get(APIURL + username);
    const { avatar_url, name, bio, followers, following, public_repos } = data;

    console.log(data);

    const innerHTMLData = `
      <div class="card">
        <div>
          <img src="${avatar_url}" alt="" class="avatar">
        </div>
  
        <div class="user-info">
          <h2>${name}</h2>
          <p>${bio}</p>
  
          <ul>
            <li>300 <strong>${followers}</strong></li>
            <li>100 <strong>${following}</strong></li>
            <li>30 <strong>${public_repos}</strong></li>
          </ul>
  
          <div id="repos" class="repos">
   
          </div>
        </div>
      </div>`;

    main.innerHTML = innerHTMLData;
  } catch (err) {
    console.log(err.message);
  }
};
