const footerButton = document.querySelector("footer button");
const todolistDiv = document.querySelector(".todolist");
const NewTodoButton = document.querySelector(".todolist button");
const todolistInput = document.querySelector(".todolist input");
const todolistForm = document.querySelector(".todolist form");

const TODOS_KEY = "todos";

let toDos = [];

function lookDIv() {
  if (todolistDiv.classList.contains("hidden")) {
    todolistDiv.classList.remove("hidden");
  } else {
    todolistDiv.classList.add("hidden");
  }
}
function lookInput() {
  NewTodoButton.classList.add("hidden");
  todolistInput.classList.remove("hidden");
}
footerButton.addEventListener("click", lookDIv);
NewTodoButton.addEventListener("click", lookInput);
