const form = document.querySelector("main form");
const span = document.querySelector("main span:nth-child(3)");
const todoDiv = document.querySelector(".todo");
const input = document.querySelector("main input");
const todayDiv__span = document.querySelector(".today span");
const todayDiv__i = document.querySelectorAll(".today i:not(:last-child)");
const todayDiv__firstI = document.querySelector(".today i:first-child");
const todayDiv__checkI = document.querySelector(".today i:last-child");
const todayDiv__ellipsisI = document.querySelector(".today i:nth-child(3)");

function todo(event) {
  event.preventDefault();
  form.classList.add("hidden");
  span.classList.add("hidden");
  todoDiv.classList.remove("hidden");

  todayDiv__span.innerText = input.value;
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

function check() {
  if (todayDiv__checkI.classList.contains("hidden")) {
    todayDiv__checkI.classList.remove("hidden");
    todayDiv__span.style.textDecoration = "line-through";
    console.dir(todayDiv__span);
  } else {
    todayDiv__checkI.classList.add("hidden");
  }
}
todayDiv__firstI.addEventListener("click", check);
todayDiv__checkI.addEventListener("click", check);
