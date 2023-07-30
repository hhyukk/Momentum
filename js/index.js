const body = document.body.style;

const ImageArray = ["/image/c.jpg", "/image/풍경3.png", "/image/풍경4.jpg"];

const randomImage = ImageArray[Math.floor(Math.random() * ImageArray.length)];

function imageSetting() {
  body.backgroundImage = `url(${randomImage})`;
  body.backgroundRepeat = "no-repeat";
  body.backgroundSize = "cover";
  body.backgroundAttachment = "fixed";
  body.backgroundPosition = "center";
}

imageSetting();
