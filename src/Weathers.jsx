import React, { useState } from "react";
import Weather from "./Weather";

function Weathers({ cities, openSettings }) {
  // const temp = Math.floor(cities.main?.temp - 273.15);
  // const feels = Math.floor(cities.main?.feels_like - 273.15);
  // const weather = cityWeather.weather?.main.map(item => item)

  return (
    <div>
      <div className="icon-settings">
        {" "}
        <img
          style={{ cursor: "pointer" }}
          onClick={() => openSettings(true)}
          width={20}
          src={
            "https://w7.pngwing.com/pngs/327/195/png-transparent-computer-icons-gear-options-icon-logo-silhouette-black-and-white-thumbnail.png"
          }
          alt=""
        />
      </div>
      {cities.map((city) => {
        return (
          <Weather openSettings={openSettings} city={city} key={city.id} />
        );
      })}
    </div>
  );
}

export default Weathers;
