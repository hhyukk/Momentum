const form = document.querySelector("main form");
const span = document.querySelector("main span:nth-child(3)");
const todoDiv = document.querySelector(".todo");
const input = document.querySelector("main input");
const todayDiv__span = document.querySelector(".today span");
const todayDiv__i = document.querySelectorAll(".today i:not(:last-child)");
const todayDiv__firstI = document.querySelector(".today i:first-child");
const todayDiv__checkI = document.querySelector(".today i:last-child");
const todayDiv__ellipsisI = document.querySelector(".today i:nth-child(3)");

function submitHidden() {
  form.classList.add("hidden");
  span.classList.add("hidden");
  todoDiv.classList.remove("hidden");
}
function todo(event) {
  event.preventDefault();
  const todo = input.value;

  submitHidden();
  localStorage.setItem("todo", todo);
  todayDiv__span.innerText = todo;
}
form.addEventListener("submit", todo);

function notHidden() {
  if (todayDiv__checkI.classList.contains("hidden")) {
    todayDiv__i.forEach((icon) => icon.classList.remove("hidden"));
  } else {
    todayDiv__ellipsisI.classList.remove("hidden");
  }
}

function hidden() {
  if (todayDiv__checkI.classList.contains("hidden")) {
    todayDiv__i.forEach((icon) => icon.classList.add("hidden"));
  } else {
    todayDiv__ellipsisI.classList.add("hidden");
  }
}
todoDiv.addEventListener("mouseover", notHidden);
todoDiv.addEventListener("mouseout", hidden);

function containHiddenCheck() {
  todayDiv__checkI.classList.remove("hidden");
  todayDiv__span.style.textDecoration = "line-through";
  localStorage.setItem("todoCheckBox", 1);
}
function check() {
  if (todayDiv__checkI.classList.contains("hidden")) {
    containHiddenCheck();
  } else {
    todayDiv__checkI.classList.add("hidden");
    todayDiv__span.style.textDecoration = "";
    localStorage.setItem("todoCheckBox", 0);
  }
}
todayDiv__firstI.addEventListener("click", check);
todayDiv__checkI.addEventListener("click", check);

if (localStorage.getItem("todo") !== null) {
  submitHidden();
  todayDiv__span.innerText = localStorage.getItem("todo");
  if (localStorage.getItem("todoCheckBox") === "1") {
    containHiddenCheck();
    todayDiv__firstI.classList.remove("hidden");
  }
}
