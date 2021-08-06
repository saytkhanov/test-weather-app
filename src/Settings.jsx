import React, { useEffect, useState } from "react";

function Settings({ setSettingsOpened, setCities, cities }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));
  }, [cities]);

  const handleAddCities = (ev) => {
    ev.preventDefault();
    if (cities.indexOf(input) !== -1) {
      return;
    } else if (input.length > 0) {
      setCities([...cities, input]);
      setInput("");
    }
  };

  const handleDelete = (id) => {
    setCities(
      cities.filter((item, index) => {
        return index !== id;
      })
    );
  };

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
          <div className="card" key={city}>
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
