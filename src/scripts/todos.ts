
interface Todo {
  id: number;
  text: string;
}

interface JSONPlaceholderTodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const createButton : HTMLButtonElement | null = document.getElementById("create-btn") as HTMLButtonElement | null;
const loadButton  : HTMLButtonElement | null  = document.getElementById("load-btn") as HTMLButtonElement | null;
const createInput  : HTMLInputElement | null  = document.getElementById("create-input") as HTMLInputElement | null;
const todoList  : HTMLUListElement | null  = document.getElementById("todo-list") as HTMLUListElement | null;
const todoDescription  : HTMLElement | null  = document.getElementById("todo-description");
const todoTitle : HTMLElement | null  = document.getElementById("todo-title");

const todosFromStorage : string = localStorage.getItem("todos") ?? "[]";

let todos: Todo[] = JSON.parse(todosFromStorage);

const appendLiElement = (todo: Todo) => {
  const liElement : HTMLLIElement = document.createElement("li");

  liElement.innerText = todo.text;
  liElement.id = todo.id.toString();

  liElement.classList.add(
    "list-group-item",
    "d-flex",
    "align-items-center",
    "justify-content-between"
  );

  const deleteElement : HTMLButtonElement = document.createElement("button");

  deleteElement.innerText = "Удалить";

  deleteElement.classList.add("button");
  deleteElement.classList.add("button_dark");

  liElement.appendChild(deleteElement);

  const deleteTodo = () => {
    liElement.remove();

    todos = todos.filter((todo) => {
      return todo.id.toString() != liElement.id;
    });

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  deleteElement.addEventListener("click", deleteTodo);

  if (todoList != null) {
    todoList.appendChild(liElement);
  }
};

const createTodo = () => {
  if (createInput == null) {
    return;
  }

  const text : string = createInput.value;

  // обработка, чтобы не добавлять пустые дела
  if (!text) {
    return;
  }

  const newTodo : Todo = {
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

if (createButton !== null) {
  createButton.addEventListener("click", createTodo);
}

if (loadButton !== null) {
  loadButton.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/todos/" + (todos.length + 1))
      .then((response) => response.json())
      .then((json : JSONPlaceholderTodo) => {
        const newTodo : Todo = {
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
