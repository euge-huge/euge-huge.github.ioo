const createButton = document.getElementById("create-btn");
const loadButton = document.getElementById("load-btn");
const createInput = document.getElementById("create-input");
const todoList = document.getElementById("todo-list");
const todoDescription = document.getElementById("todo-description");
const todoTitle = document.getElementById("todo-title");

let todos = localStorage.getItem("todos") ?? "[]";

todos = JSON.parse(todos);

const appendLiElement = (todo) => {
  const liElement = document.createElement("li");

  liElement.innerText = todo.text;
  liElement.id = todo.id;

  liElement.classList.add("todo-list__item");

  const deleteElement = document.createElement("button");

  deleteElement.innerText = "Удалить";

  deleteElement.classList.add("button");
  deleteElement.classList.add("button_dark");

  liElement.appendChild(deleteElement);

  const deleteTodo = () => {
    liElement.remove();

    todos = todos.filter((todo) => {
      return todo.id != liElement.id;
    });

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  deleteElement.addEventListener("click", deleteTodo);

  todoList.appendChild(liElement);
};

const createTodo = () => {
  const text = createInput.value;

  const newTodo = {
    id: todos.length,
    text: text,
  };

  appendLiElement(newTodo);

  todos.push(newTodo);

  localStorage.setItem("todos", JSON.stringify(todos));
};

if (todos && todos.length > 0) {
  todos.forEach((todo) => {
    appendLiElement(todo);
  });
}

createButton.addEventListener("click", createTodo);

loadButton.addEventListener("click", async () => {
  fetch("https://jsonplaceholder.typicode.com/todos/" + todos.length)
    .then((response) => response.json())
    .then((json) => {
      const newTodo = {
        id: json.id,
        text: json.title,
      };

      appendLiElement(newTodo);

      todos.push(newTodo);

      localStorage.setItem("todos", JSON.stringify(todos));
    }).catch((err) => {
        console.log(err);

        alert("Не удалось загрузить туду! :(")
    });
});
