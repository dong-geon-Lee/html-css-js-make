const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo();
});

function addTodo(todo) {
  let text = input.value;

  if (todo) {
    text = todo.text;
  }

  if (text) {
    const todoEl = document.createElement("li");

    todoEl.textContent = text;

    todoEl.addEventListener("click", () => {
      if (todo && todo.completed) {
        todoEl.classList.toggle("completed");
        updateLS();
      }
    });

    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      todoEl.remove();
      updateLS();
    });

    ul.appendChild(todoEl);

    input.value = "";

    updateLS();
  }
}

function updateLS() {
  const listLi = document.querySelectorAll("li");

  const todoLi = [];

  listLi.forEach((li) => {
    todoLi.push({
      text: li.textContent,
      completed: li.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todoLi));
}
