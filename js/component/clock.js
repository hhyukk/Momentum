const clockh1 = document.querySelector(".main__clock");
const greeting = document.querySelector(".greetings");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  if (hours > 12) {
    clockh1.innerText = `${hours - 12}:${minutes}`;
  } else {
    clockh1.innerText = `${hours}:${minutes}`;
  }

  if (Number(hours) >= 6 && Number(hours) <= 11) {
    greeting.innerText = `Good morning, ${localStorage.getItem("username")}.`;
  }
  if (Number(hours) >= 12 && Number(hours) <= 17) {
    greeting.innerText = `Good afternoon, ${localStorage.getItem("username")}.`;
  }
  if (Number(hours) >= 18 && Number(hours) <= 23) {
    greeting.innerText = `Good evening, ${localStorage.getItem("username")}.`;
  }
}
getClock();
setInterval(getClock, 1000);
