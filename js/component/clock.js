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
  console.log(typeof Number(hours));
  //   if (hours >= 06 && hours <= 11) {
  //     greeting.innerText(`Good morning, ${localStorage.getItem("username")}.`);
  //   }
  //   if (hours >= 12 && hours <= 17) {
  //     greeting.innerText(`Good afternoon, ${localStorage.getItem("username")}.`);
  //   }
  if (Number(hours) >= 18 && Number(hours) <= 23) {
    console.log(typeof Number(hours));
    greeting.innerText = `Good evening, ${localStorage.getItem("username")}.`;
  }
}
getClock();
setInterval(getClock, 1000);
