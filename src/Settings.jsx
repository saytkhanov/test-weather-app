import React, { useEffect, useState } from "react";
import { getApiUrl } from "./utils";

function Settings({ setSettingsOpened, setCities, cities }) {
  const [input, setInput] = useState("");
  const [currentCity, setCurrentCity] = useState(null);

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));
  }, [cities]);

  const handleAddCities = (e) => {
    e.preventDefault();

    setCities([...cities, input]);
    setInput("");
  };

  const handleDelete = (id) => {
    setCities(
      cities.filter((item, index) => {
        return index !== id;
      })
    );
  };

  function handleDragStart(e, city) {
    console.log("drag", city);
    setCurrentCity(city);
  }

  function handleDragEnd(e) {
    e.target.style.background = "white";
  }

  function handleDragOver(e) {
    e.preventDefault();
    e.target.style.background = "white";
  }

  function handleDrop(e, city, id) {
    e.preventDefault();
    console.log("drop", city);
    setCities(
      cities.map((city, index) => {
        if (city === index) {
          return {
            ...city,
            name: currentCity.name,
          };
        }
        if (city.id === currentCity.id) {
          return {
            ...city,
            name: city.name,
          };
        }
        return city;
      })
    );
    e.target.style.background = "lightgray";
  }

  return (
    <div className="container-card">
      <div className="header-settings">
        <div>
          <h3>Settings</h3>
        </div>
        <div>
          <h2
            style={{ cursor: "pointer" }}
            onClick={() => setSettingsOpened(false)}
          >
            ✖
          </h2>
        </div>
      </div>
      <div className="form">
        <form onSubmit={handleAddCities}>
          <input
            type="text"
            value={input}
            placeholder="Введите город"
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Добавить</button>
        </form>
      </div>
      {cities.map((city, id) => {
        return (
          <div
            onDragStart={(e) => handleDragStart(e, city)}
            onDragLeave={(e) => handleDragEnd()}
            onDragEnd={(e) => handleDragEnd(e)}
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, city)}
            draggable={true}
            className="card"
          >
            <div>
              <button> ||| </button>
            </div>
            <div>{city}</div>
            <div>
              {" "}
              <button onClick={() => handleDelete(id)}>Х</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Settings;
