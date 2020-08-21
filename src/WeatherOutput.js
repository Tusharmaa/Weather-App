import React from "react";
import "./WeatherOutput.css";

function WeatherOutput({
  cityName,
  temperature,
  description,
  symbol,
  pressure,
  humidity,
  windSpeed,
  visibility,
}) {
  return (
    <div className="weatherOutput">
      {/* <img
        src="https://www.pngkey.com/png/detail/129-1296419_cartoon-mountains-png-mountain-animation-png.png"
        alt="image"
      /> */}
      <h3>{cityName}</h3>
      <h1>{temperature}°C</h1>
      <p>{description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${symbol}@2x.png`}
        alt="icon"
      />
      <div className="weatherOutput-description">
        <div className="weatherOutput-descriptionLeft">
          <p>
            Pressure: {pressure} <small>hPa</small>
          </p>
          <br />
          <p>
            Humidity: {humidity} <small>%</small>
          </p>
        </div>
        <div className="weatherOutput-descriptionRight">
          <p>
            Wind Speed: {windSpeed} <small>m/s</small>
          </p>
          <br />
          <p>
            Visibility: {visibility} <small>m</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherOutput;
