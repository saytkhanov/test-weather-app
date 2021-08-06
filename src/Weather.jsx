import React, { useEffect, useState } from "react";
import { getApiUrl } from "./utils";

function Weather({ city, key }) {
  const [weather, setWeather] = useState({});
  const temp = Math.floor(weather.main?.temp - 273.15);
  const feels = Math.floor(weather.main?.feels_like - 273.15)

  useEffect(() => {
    fetch(getApiUrl(city))
      .then((res) => res.json())
      .then((json) => {
        setWeather(json);
      });
  }, [city]);

  if (!Object.keys(weather).length) {
    return <div>loading of weather...</div>;
  }

  return (
    <div className="container-card">
      <div className="header">
        <div>
          <b>{weather.name}</b>, {weather.sys.country}{" "}
        </div>
      </div>
      <div className="weather-icon">
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="icon"
          />
        </div>
        <div>
          <h1>{temp} &deg;C</h1>
        </div>
      </div>
      <div className="other-info">
        <p>Feels like - {feels}&deg;C,   {weather.weather[0].description.toUpperCase()}</p>
      </div>
      <div className="main-weather-info">
        <div style={{marginRight: 40}}>
          <p>{weather.wind?.speed}m/s SSE</p>
        </div>
        <div>
          <p>{weather.main?.pressure}hPa</p>
        </div>
      </div>
      <div>
        <div>
          <p>Humidity: {weather.main?.humidity}%</p>
        </div>
        <div>
          <p>Visibility: {weather.visibility / 1000}km</p>
        </div>
      </div>
    </div>
  );
}

export default Weather;
