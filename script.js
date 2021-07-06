"use strict";

let aqi_display = document.querySelector(".aqi");
let city = document.querySelector(".city");
let temprature = document.querySelector(".temprature");
let sunrise_time = document.querySelector(".sunrise");
let sunset_time = document.querySelector(".sunset");
let wind = document.querySelector(".wind");

document.querySelector(".check").addEventListener("click", () => {
  let lat = Number(document.querySelector(".lat").value);
  let long = Number(document.querySelector(".long").value);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      // long = position.coords.longitude;
      // lat = position.coords.latitude;

      const api = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=34910a5f0c434a0d959d74131d08df7f&include=minutely`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const { aqi, city_name, temp, sunrise, sunset, wind_spd } =
            data.data[0];

          console.log(sunrise, sunrise, wind_spd);

          aqi_display.textContent = aqi;
          city.textContent = city_name;
          temprature.textContent = temp;
          sunrise_time.textContent = sunrise;
          sunset_time.textContent = sunset;
          wind.textContent = wind_spd;
          document.getElementById("data").style.opacity = "1";
        });
    });
  }
});
