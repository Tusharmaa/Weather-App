import React, { useState } from "react";
import "./Weather.css";
import SearchIcon from "@material-ui/icons/Search";
import WeatherOutput from "./WeatherOutput";

function Weather() {
  const [input, setInput] = useState("");
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [icon, setIcon] = useState("");
  const [description, setDescription] = useState("");
  const [pressure, setPressure] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [visibility, setVisibility] = useState("");

  const getWeather = async (e) => {
    e.preventDefault();
    const request = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${apiKey}`
    );
    const data = await request.json();
    setCity(data.name);
    setTemperature(data.main.temp);
    setIcon(data.weather[0].icon);
    setDescription(data.weather[0].description);
    setPressure(data.main.pressure);
    setHumidity(data.main.humidity);
    setWindSpeed(data.wind.speed);
    setVisibility(data.visibility);
    setInput("");
  };
  console.log(input);

  return (
    <div className="weather">
      <h2>Weather App</h2>
      <form>
        <div className="weather-input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="weather-inputStyle"
            placeholder="Enter the city name"
            type="text"
          />
          <div className="weather-search">
            <br />
            <button onClick={getWeather} className="weather-searchButton">
              <h4>SEARCH</h4>
              <SearchIcon className="weather-searchIcon" />
            </button>
          </div>
        </div>
      </form>

      <WeatherOutput
        cityName={city}
        temperature={temperature}
        symbol={icon}
        description={description}
        pressure={pressure}
        humidity={humidity}
        windSpeed={windSpeed}
        visibility={visibility}
      />
    </div>
  );
}

export default Weather;
