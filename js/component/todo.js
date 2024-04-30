const form = document.querySelector('main form');
const span = document.querySelector('main span:nth-child(3)');
const todoDiv = document.querySelector('.todo');
const input = document.querySelector('main input');
const todayDiv__span = document.querySelector('.today span');
// const todayDiv__i = document.querySelectorAll('.today i:not(:last-child)');
const todayDiv__firstI = document.querySelector('.fa-square');
const todayDiv__checkI = document.querySelector('.today i:last-child');
const todayDiv__ellipsisI = document.querySelector('.today i:nth-child(3)');

function submitHidden() {
  form.classList.add('hidden');
  span.classList.add('hidden');
  todoDiv.classList.remove('hidden');
}
function todo(event) {
  event.preventDefault();
  const todo = input.value;

  submitHidden();
  localStorage.setItem('todo', todo);
  todayDiv__span.innerText = todo;
  todayDiv__firstI.classList.remove('hidden');
  todayDiv__ellipsisI.classList.remove('hidden');
}

function containHiddenCheck() {
  todayDiv__checkI.classList.remove('hidden');
  todayDiv__span.style.textDecoration = 'line-through';
}
function check_() {
  if (todayDiv__checkI.classList.contains('hidden')) {
    containHiddenCheck();
  }
}

function checkTime() {
  const currentHour = getCurrentTime();
  if (currentHour === 0) {
    // 0시는 오전 12시를 의미합니다.
    localStorage.removeItem('todo');
  }
}

form.addEventListener('submit', todo);
todayDiv__firstI.addEventListener('click', check_);

if (localStorage.getItem('todo') !== null) {
  submitHidden();
  todayDiv__firstI.classList.remove('hidden');
  todayDiv__ellipsisI.classList.remove('hidden');
  todayDiv__span.innerText = localStorage.getItem('todo');
}
setInterval(getClock, 1000);
