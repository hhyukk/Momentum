const loginPageStyle = document.querySelector('.loginPage').style;
const ImageArray_loginPage = ['/image/풍경3.png', '/image/풍경4.jpg'];
const randomImage_loginPage = ImageArray_loginPage[Math.floor(Math.random() * ImageArray_loginPage.length)];
function imageSetting_loginPage() {
  loginPageStyle.backgroundImage = `url(${randomImage_loginPage})`;
  loginPageStyle.backgroundSize = 'cover';
  loginPageStyle.backgroundPosition = 'center';
}
imageSetting_loginPage();

const body = document.body.style;

const ImageArray = [
  // "/image/homepageBackground.jpg",
  '../image/homepageBackground.jpg',
  '../image/homepageBackground1.jpg',
  '../image/homepageBackground2.avif',
  '../image/alps.jpg',
];
const randomImage = ImageArray[Math.floor(Math.random() * ImageArray.length)];

function imageSetting_homePage() {
  body.backgroundImage = `url(${randomImage})`;
  body.backgroundPosition = 'center';
  body.backgroundRepeat = 'no-repeat';
  body.backgroundSize = 'cover';
}

imageSetting_homePage();
