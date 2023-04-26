import { set } from "lodash";
import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";

export default function Weather() {
  const [zip, setZip] = useState("");
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState([]);

  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!zip) {
      return; // return early if zip is empty
    }
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&appid=241ede31168d7f75348e180450358ce7&units=metric`;
    const apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=241ede31168d7f75348e180450358ce7&units=metric`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setForecast(data.list);
        setCity(data.city);
      })
      .catch((error) => console.log(error));

    fetch(apiUrl2)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTemperature(data.main.temp);
        setHumidity(data.main.humidity);
        setWind(data.wind.speed);
        setDescription(data.weather[0].description);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (forecast.length > 0) {
      const canvas = document.getElementById("myChart");
      const ctx = canvas.getContext("2d");

      const data = {
        labels: forecast.map((item) => item.dt_txt),
        datasets: [
          {
            label: "Temperature",
            data: forecast.map((item) =>
              ((item.main.temp * 9) / 5 + 32).toFixed(1)
            ),
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      };

      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };

      const myChart = new Chart(ctx, {
        type: "line",
        data: data,
        options: options,
      });
      // Destroy the previous chart
      return () => {
        myChart.destroy();
      };
    }
  }, [forecast]);

  return (
    <div className="container">
      <br />
      <h2>Weather Forecast {zip ? `for ${city.name}, ${zip}` : ""}</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter ZIP code"
            value={zip}
            onChange={(event) => setZip(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Get Weather
        </button>
      </form>
      <br />

      <div className="container">
        {temperature && (
          <>
            <hr />
            <h3>
              Temperature: {((temperature * 9) / 5 + 32).toFixed(1)}
              °F
            </h3>
            <h3>Humidity: {humidity}%</h3>
            <h3>Wind: {wind} m/s</h3>
            <h3>Description: {description}</h3>
          </>
        )}
      </div>
      <br />
      <div className="container">
        <div className="collapse show" id="chart-collapse">
          <div className="chart-container">
            <canvas id="myChart"></canvas>
          </div>
        </div>

        <br />

        <button
          className="btn btn-primary"
          type="button"
          data-toggle="collapse"
          data-target="#chart-collapse"
          aria-expanded="true"
          aria-controls="chart-collapse"
        >
          Click to toggle chart
        </button>
      </div>

      <br />

      <div className="container">
        <button
          className="btn btn-primary"
          type="button"
          data-toggle="collapse"
          data-target="#table-collapse"
          aria-expanded="true"
          aria-controls="table-collapse"
        >
          Click to toggle table
        </button>

        <br />

        <div className="collapse" id="table-collapse">
          <table className="table text-center">
            <thead>
              <tr>
                <th>Date</th>
                <th>Temperature</th>
                <th>Feel Temperature</th>
                <th>Humidity</th>
                <th>Wind</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {forecast.map((item) => (
                <tr key={item.dt}>
                  <td>{item.dt_txt}</td>
                  <td>{((item.main.temp * 9) / 5 + 32).toFixed(1)}°F</td>
                  <td>{item.main.feels_like}°F</td>
                  <td>{item.main.humidity}%</td>
                  <td>{item.wind.speed}</td>
                  <td>{item.weather[0].description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
