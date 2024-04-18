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

  liElement.classList.add(
    "list-group-item",
    "d-flex",
    "align-items-center",
    "justify-content-between"
  );

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

  // обработка, чтобы не добавлять пустые дела
  if (!text) {
    return;
  }

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

loadButton.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/todos/" + (todos.length + 1))
    .then((response) => response.json())
    .then((json) => {
      const newTodo = {
        id: json.id,
        text: json.title,
      };

      appendLiElement(newTodo);

      todos.push(newTodo);

      localStorage.setItem("todos", JSON.stringify(todos));
    });
});

// Test
const testForm = document.getElementById("test");

testForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let data = Array.from(event.target.elements).map((element) => {
    const atr = element.getAttribute("aria-true");

    return {
      name: element.name,
      isTrue: atr == "true",
      value: element.checked,
    };
  });

  const isTestRight = data.filter(answer => answer.isTrue).every(answer => answer.value == true);

  if (isTestRight) {
    alert("Все верно!")
  } else {
    alert("Есть ошибки!")

    const btns = document.querySelector(".radio-btn");
  }
})
