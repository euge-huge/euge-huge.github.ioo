var _a;
var createButton = document.getElementById("create-btn");
var loadButton = document.getElementById("load-btn");
var createInput = document.getElementById("create-input");
var todoList = document.getElementById("todo-list");
var todoDescription = document.getElementById("todo-description");
var todoTitle = document.getElementById("todo-title");
var todosFromStorage = (_a = localStorage.getItem("todos")) !== null && _a !== void 0 ? _a : "[]";
var todos = JSON.parse(todosFromStorage);
var appendLiElement = function (todo) {
    var liElement = document.createElement("li");
    liElement.innerText = todo.text;
    liElement.id = todo.id.toString();
    liElement.classList.add("list-group-item", "d-flex", "align-items-center", "justify-content-between");
    var deleteElement = document.createElement("button");
    deleteElement.innerText = "Удалить";
    deleteElement.classList.add("button");
    deleteElement.classList.add("button_dark");
    liElement.appendChild(deleteElement);
    var deleteTodo = function () {
        liElement.remove();
        todos = todos.filter(function (todo) {
            return todo.id.toString() != liElement.id;
        });
        localStorage.setItem("todos", JSON.stringify(todos));
    };
    deleteElement.addEventListener("click", deleteTodo);
    if (todoList != null) {
        todoList.appendChild(liElement);
    }
};
var createTodo = function () {
    if (createInput == null) {
        return;
    }
    var text = createInput.value;
    // обработка, чтобы не добавлять пустые дела
    if (!text) {
        return;
    }
    var newTodo = {
        id: todos.length,
        text: text,
    };
    appendLiElement(newTodo);
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
};
if (todos && todos.length > 0) {
    todos.forEach(function (todo) {
        appendLiElement(todo);
    });
}
if (createButton !== null) {
    createButton.addEventListener("click", createTodo);
}
if (loadButton !== null) {
    loadButton.addEventListener("click", function () {
        fetch("https://jsonplaceholder.typicode.com/todos/" + (todos.length + 1))
            .then(function (response) { return response.json(); })
            .then(function (json) {
            var newTodo = {
                id: json.id,
                text: json.title,
            };
            appendLiElement(newTodo);
            todos.push(newTodo);
            localStorage.setItem("todos", JSON.stringify(todos));
        });
    });
}
// Test
// const testForm = document.getElementById("test");
// testForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   let data = Array.from(event.target.elements).map((element) => {
//     const atr = element.getAttribute("aria-true");
//     return {
//       name: element.name,
//       isTrue: atr == "true",
//       value: element.checked,
//     };
//   });
//   const isTestRight = data.filter(answer => answer.isTrue).every(answer => answer.value == true);
//   if (isTestRight) {
//     alert("Все верно!")
//   } else {
//     alert("Есть ошибки!")
//     const btns = document.querySelector(".radio-btn");
//   }
// })
