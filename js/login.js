const loginForm = document.querySelector('.login-form');
const loginInput = document.querySelector('.login-form input');
const loginDiv = document.querySelector('.login-div');

const loginSpan = document.querySelector('.login-div span');

const loginBottomDiv = document.querySelector('.login-bottomdiv');
const loginBottomFirstButton = document.querySelector('.login-bottomdiv button:first-child');
const loginBottomLastButton = document.querySelector('.login-bottomdiv button:last-child');
const warningSpan = document.querySelector('.warning');
const loginPage = document.querySelector('.loginPage');
const animationForwards = document.querySelector('.animation1000');

function chageEmailSpan() {
  const name = localStorage.getItem('username');
  loginSpan.innerText = `What's your email, ${name}?`;
  loginInput.value = '';
  loginInput.style.width = '490px';
  loginInput.type = 'email';
  loginBottomFirstButton.className = 'login-bottomdiv__email';
  loginBottomFirstButton.innerHTML = `<i class="fa-solid fa-chevron-left fa-2xs"></i>
  Change name`;
  loginBottomLastButton.innerHTML = `<i class="fa-solid fa-share fa-2xs"></i>
  Stay logged out`;
}
function removeSaveAnimation() {
  loginDiv.classList.remove('animation1001');
  loginBottomDiv.classList.remove('animation0001');
  loginBottomDiv.classList.remove('animation1001');
}

function chagePasswordSpan() {
  loginSpan.innerText = `What's your password?`;
  loginInput.value = '';
  loginInput.style.width = '490px';
  loginInput.type = 'password';
  loginBottomFirstButton.innerHTML = `<i class="fa-solid fa-chevron-left fa-2xs"></i> Email`;
  loginBottomLastButton.innerHTML = '<i class="fa-solid fa-key fa-2xs"></i> Change password';
  loginBottomFirstButton.className = 'login-bottomdiv__password';
}
function check() {
  if (loginInput.type == 'password' && loginInput.value.length < 6) {
    warningSpan.innerText = 'Passwords need to be at least 6 characters long.';
    warningSpan.classList.remove('hidden');
    warningSpan.classList.add('animation001');

    setTimeout(removeWarningAnimation, 300);
  } else {
    localStorage.setItem('userPassword', loginInput.value);
    loginPage.classList.add('animation1000');
    loginPage.style.animationFillMode = 'forwards';
    setTimeout(() => {
      loginPage.classList.add('hidden');
    });
  }
}
function nextPage() {}
function save(event) {
  event.preventDefault();
  const getuser = loginInput.value;

  if (loginInput.type == 'text') {
    localStorage.setItem('username', getuser);
    loginDiv.classList.add('animation1001');
    loginBottomDiv.classList.remove('hidden');
    loginBottomDiv.classList.add('animation0001');

    setTimeout(chageEmailSpan, 500);
    setTimeout(removeSaveAnimation, 1000);
  } else if (loginInput.type == 'email') {
    localStorage.setItem('useremail', getuser);

    loginDiv.classList.add('animation1001');
    loginBottomDiv.classList.add('animation1001');
    setTimeout(chagePasswordSpan, 500);
    setTimeout(removeSaveAnimation, 1000);
  } else if (loginInput.type == 'password') {
    check();
  }
}
function backEmail() {
  loginSpan.innerText = "Hello, what's your name?";
  loginInput.style.width = '570px';
  loginInput.value = '';
  loginInput.type = 'text';
}
function removeBackAnimation() {
  loginBottomDiv.classList.add('hidden');
  loginDiv.classList.remove('animation1001');
  loginBottomDiv.classList.remove('animation1000');
}
function chageEmailButton() {
  loginBottomFirstButton.innerHTML = `<i class="fa-solid fa-chevron-left fa-2xs"></i>
          Change name`;
  loginBottomLastButton.innerHTML = `<i class="fa-solid fa-share fa-2xs"></i>
          Stay logged out`;
}
function back(event) {
  event.preventDefault();
  console.log(loginBottomFirstButton.className.indexOf('email'));
  if (loginBottomFirstButton.className.indexOf('email') != -1) {
    loginDiv.classList.add('animation1001');
    loginBottomDiv.classList.add('animation1000');
    setTimeout(backEmail, 500);
    setTimeout(removeBackAnimation, 900);
  } else {
    loginDiv.classList.add('animation1001');
    loginBottomDiv.classList.add('animation1001');

    setTimeout(chageEmailSpan, 500);
    setTimeout(removeSaveAnimation, 900);
  }
}
function removeWarningAnimation() {
  warningSpan.classList.remove('animation001');
}
function warning(event) {
  event.preventDefault();
  warningSpan.classList.remove('hidden');
  warningSpan.classList.add('animation001');

  setTimeout(removeWarningAnimation, 300);
}
function removeSenseAnimation() {
  warningSpan.classList.add('hidden');
  warningSpan.classList.remove('animation100');
}
function sense() {
  if (warningSpan.className.indexOf('hidden') == -1) {
    warningSpan.classList.add('animation100');
    setTimeout(removeSenseAnimation, 250);
  }
}

if (localStorage.getItem('userPassword') === null) {
  loginForm.addEventListener('submit', save);
  loginBottomFirstButton.addEventListener('click', back);
  loginInput.addEventListener('invalid', warning);
  loginInput.addEventListener('input', sense);
} else {
  loginPage.style.display = 'none';
}
