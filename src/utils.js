export const getApiUrl = (coords) => {
  const key = "8f21b2d64258441897474f2cdf84d44b";

  if (typeof coords === "object") {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${key}`;
  } else {
    return `https://api.openweathermap.org/data/2.5/weather?q=${coords}&appid=${key}`;
  }
};
