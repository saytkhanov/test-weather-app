import React, { useEffect, useState } from "react";
import Weathers from "./Weathers";
import { getApiUrl } from "./utils";
import Settings from "./Settings";

function App() {
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState(
    () => JSON.parse(localStorage.getItem("cities")) || []
  );
  const [settingsOpened, setSettingsOpened] = useState(false);

  const openSettings = () => {
    setSettingsOpened(true);
  };

  useEffect(() => {
    setLoading(true);
    if (cities.length === 0) {
      navigator.geolocation.getCurrentPosition((position) => {
        try {
          fetch(getApiUrl(position.coords))
            .then((res) => res.json())
            .then((data) => {
              setCities([...cities, data.name]);
              setLoading(false);
            });
        } catch (e) {
          console.log(e.message);
        }
      });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return "loading.....";
  }

  return (
    <div className="container">
      {settingsOpened ? (
        <Settings
          setSettingsOpened={setSettingsOpened}
          cities={cities}
          setCities={setCities}
        />
      ) : (
        <Weathers openSettings={openSettings} cities={cities} />
      )}
    </div>
  );
}

export default App;

//8f21b2d64258441897474f2cdf84d44b
