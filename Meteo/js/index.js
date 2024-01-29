/* variable pour api  */
const url = "https://api.openweathermap.org/data/2.5/weather?";
const keyApi = "36a083e9e34426c46d5c27a7bbdf84ad";
let latitude = "";
let longitude = "";

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      startFetch(url);
    },
    function (error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.error("User denied the request for geolocation.");
          break;
        case error.POSITION_UNAVAILABLE:
          console.error("Location information is unavailable.");
          break;
        case error.TIMEOUT:
          console.error("The request to get user location timed out.");
          break;
        case error.UNKNOWN_ERROR:
          console.error("An unknown error occurred.");
          break;
      }
    }
  );
} else {
  console.error("Geolocation is not available in this browser.");
}

/* on récupere les éléments html */
const localisation = document.getElementById("loc");
const tNow = document.getElementById("now");
const tmin = document.getElementById("min");
const tmax = document.getElementById("max");
const sunrise = document.getElementById("sunrise");
const humidity = document.getElementById("humidity");
const pressure = document.getElementById("pressure");
const degWind = document.getElementById("deg");
const gustWind = document.getElementById("gust");
const speedWind = document.getElementById("speed");
const ressent = document.getElementById("ressent");

const startFetch = (url) => {
  fetch(url + `lat=${latitude}&lon=${longitude}&appid=${keyApi}&units=metric`)
    .then((response) => response.json())
    .then((data) => {
      console.log("données", data);
      localisation.innerHTML = data.name;
      tNow.innerHTML = `t° :${data.main.temp} ° C`;
      tmin.innerHTML = `Min : ${data.main.temp_min} °C`;
      tmax.innerHTML = `Max : ${data.main.temp_max} °C`;
      humidity.innerHTML = `Humidity : ${data.main.humidity} %`;
      pressure.innerHTML = `pressure : ${data.main.pressure} hPa`;
      iconWeather(data.weather[0].icon);
      degWind.innerHTML = `Direction du vent : <br> ${windDirection(data.wind.deg)}`;
      gustWind.innerHTML = `${data.wind.gust} gust`;
      speedWind.innerHTML = `${data.wind.speed} km/h`;
      ressent.innerHTML = `le ressentis dehors <br> est de : ${data.main.feels_like}`;
    });
};

const urlIcon = " https://openweathermap.org/img/wn/";
const iconMeteo = document.getElementById("iconMeteo");

const iconWeather = (icon) => {
  fetch(`${urlIcon}${icon}@2x.png`)
    .then((response) => response.blob())
    .then((item) => {
      const imgUrl = URL.createObjectURL(item);
      iconMeteo.src = imgUrl;
    });
};

const windDirection = (deg) => {
  if ((deg = 0)) return "Nord";
  if (deg <= 90) return "Nord-Ouest";
  if ((deg = 90)) return "Ouest";
  if (deg <= 180) return "Sud-Ouest";
  if ((deg = 180)) return "Sud";
  if (deg <= 270) return "Sud-Est";
  if ((deg = 270)) return "Est";
  if (deg <= 360) return "Nord-Est";
};
