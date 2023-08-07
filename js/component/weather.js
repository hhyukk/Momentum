const weatherAPI_Key = "a83d87055735dac8fb3d81d4f56b969a";
const weatherIcon = document.querySelector("header button:last-child > i");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherAPI_Key}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(
        ".header__information--Temperature"
      );
      const city = document.querySelector(".header__information--city");
      weather.innerText = Math.floor(data.main.temp);
      city.innerText = data.name;

      if (data.weather[0].main === "Rain") {
        weatherIcon.className = "fa-solid fa-cloud-rain";
      }
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
