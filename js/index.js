const body = document.body.style;

const ImageArray = ["/image/c.jpg", "/image/풍경3.png", "/image/풍경4.jpg"];

const randomImage = ImageArray[Math.floor(Math.random() * ImageArray.length)];

function imageSetting() {
  body.backgroundImage = `url(${randomImage})`;
  body.backgroundSize = "cover";
  body.backgroundPosition = "center";
}

imageSetting();
