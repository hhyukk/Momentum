const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const loginSpan = document.querySelector(".login-div span");
const loginBottomDiv = document.querySelector(".login-bottomdiv");
const inputDiv = document.querySelector(".login-div");
const loginBottomFirstButton = document.querySelector(
  ".login-bottomdiv button:first-child"
);
const loginBottomLastButton = document.querySelector(
  ".login-bottomdiv button:last-child"
);
const warningSpan = document.querySelector(".warning");
function chageEmailSpan() {
  const name = localStorage.getItem("username");
  loginSpan.innerText = `What's your email, ${name}?`;
  loginInput.value = "";
  loginInput.style.width = "490px";
  loginInput.type = "email";
}
function removeSaveAnimation() {
  inputDiv.classList.remove("animation1001");
  loginBottomDiv.classList.remove("animation0001");
  loginBottomDiv.classList.remove("animation1001");
}

function chagePasswordSpan() {
  loginSpan.innerText = `What's your password?`;
  loginInput.value = "";
  loginInput.style.width = "490px";
  loginInput.type = "password";
  loginBottomFirstButton.innerHTML = `<i class="fa-solid fa-chevron-left fa-2xs"></i> Email`;
  loginBottomLastButton.innerHTML =
    '<i class="fa-solid fa-key fa-2xs"></i> Change password';
  loginBottomFirstButton.classList.add("Email");
}
function check() {
  if (loginInput.type == "password" && loginInput.value.length < 6) {
    warningSpan.innerText = "Passwords need to be at least 6 characters long.";
    warningSpan.classList.remove("hidden");
    warningSpan.classList.add("animation001");

    setTimeout(removeWarningAnimation, 300);
  } else {
    localStorage.setItem("userPassword", loginInput.value);
    window.location = "homepage.html";
  }
}
function nextPage() {}
function save(event) {
  event.preventDefault();
  const getuser = loginInput.value;

  if (loginInput.type == "text") {
    localStorage.setItem("username", getuser);

    inputDiv.classList.add("animation1001");
    loginBottomDiv.classList.remove("hidden");
    loginBottomDiv.classList.add("animation0001");

    setTimeout(chageEmailSpan, 500);
    setTimeout(removeSaveAnimation, 1000);
  } else if (loginInput.type == "email") {
    localStorage.setItem("useremail", getuser);

    inputDiv.classList.add("animation1001");
    loginBottomDiv.classList.add("animation1001");
    setTimeout(chagePasswordSpan, 500);
    setTimeout(removeSaveAnimation, 1000);
  } else if (loginInput.type == "password") {
    check();
  }
}
function backEmail() {
  loginSpan.innerText = "Hello, what's your name?";
  loginInput.style.width = "570px";
  loginInput.value = "";
  loginInput.type = "text";
}
function removeBackAnimation() {
  loginBottomDiv.classList.add("hidden");
  inputDiv.classList.remove("animation1001");
  loginBottomDiv.classList.remove("animation1000");
}
function chageEmailButton() {
  loginBottomFirstButton.innerHTML = `<i class="fa-solid fa-chevron-left fa-2xs"></i>
          Change name`;
  loginBottomLastButton.innerHTML = `<i class="fa-solid fa-share fa-2xs"></i>
          Stay logged out`;
}
function back(event) {
  event.preventDefault();

  if (loginBottomFirstButton.className.indexOf("Email") != -1) {
    inputDiv.classList.add("animation1001");
    loginBottomDiv.classList.add("animation1001");
    setTimeout(chageEmailSpan, 500);
    setTimeout(chageEmailButton, 500);
    setTimeout(removeSaveAnimation, 1000);
  } else {
    inputDiv.classList.add("animation1001");
    loginBottomDiv.classList.add("animation1000");

    setTimeout(backEmail, 500);
    setTimeout(removeBackAnimation, 900);
  }
}
function removeWarningAnimation() {
  warningSpan.classList.remove("animation001");
}
function warning(event) {
  event.preventDefault();
  warningSpan.classList.remove("hidden");
  warningSpan.classList.add("animation001");

  setTimeout(removeWarningAnimation, 300);
}
function removeSenseAnimation() {
  warningSpan.classList.add("hidden");
  warningSpan.classList.remove("animation100");
}
function sense() {
  if (warningSpan.className.indexOf("hidden") == -1) {
    warningSpan.classList.add("animation100");
    setTimeout(removeSenseAnimation, 250);
  }
}
loginForm.addEventListener("submit", save);
loginBottomFirstButton.addEventListener("click", back);
loginInput.addEventListener("invalid", warning);
loginInput.addEventListener("input", sense);
