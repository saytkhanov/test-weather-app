import React, { useState } from "react";
import moment from "moment";

function Weather({ cities, openSettings }) {
  console.log(cities);
  // const temp = Math.floor(cities.main?.temp - 273.15);
  // const feels = Math.floor(cities.main?.feels_like - 273.15);

  // const weather = cityWeather.weather?.main.map(item => item)
  // console.log(weather?.clear)
  return (
    <div>{cities.name}</div>

    // <SettingsIcon onClick={() => openSettings(true)} />
  );
}

export default Weather;
