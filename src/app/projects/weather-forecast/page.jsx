"use client";

import { useState, useEffect } from "react";
import Current from "@/components/weatherApp/Current";
import Forecast from "@/components/weatherApp/Forecast";

function page() {
  const apiKey = "f537c9609e96ea685aac2c09ca176bfa";
  const url = "https://api.openweathermap.org";

  const [city, setCity] = useState("TEHRAN");
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!submitted) return;

    if (/[\d\W]/.test(city)) {
      alert("Invalid input. Please enter only letters.");
      return;
    }

    fetch(`${url}/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
      .then((response) => {
        if (!response.ok) {
          return response.json().then((error) => {
            throw new Error(error.message);
          });
        }
        return response.json();
      })
      .then((data) => setWeatherData(data))
      .catch((error) => {
        console.error("Error:", error);
      });

    fetch(`${url}/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`)
      .then((response) => {
        if (!response.ok) {
          return response.json().then((error) => {
            throw new Error(error.message);
          });
        }
        return response.json();
      })
      .then((data) => setForecastData(data))
      .catch((error) => {
        console.error("Error:", error);
        window.alert(`Error fetching forecast data: ${error.message}`);
      });

    setSubmitted(false);
  }, [city, submitted]);

  function fetchWeatherData() {
    setSubmitted(true);
  }

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <div className='w-full h-[90vh] grid lg:grid-cols-3 justify-center p-2 md:px-56 gap-2'>
      <div className='w-full h-[30px] lg:col-span-3 flex flex-row gap-2 justify-between items-center'>
        <input
          type={"text"}
          onChange={(e) => setCity(e.target.value)}
          className='h-full border lg:col-span-2 w-full border-purplish rounded-md p-1'
          placeholder='City Name'
        />
        <button
          className='btn btn-active lg:col-span-1 btn-primary btn-sm'
          onClick={() => {
            setSubmitted(true);
          }}
        >
          search
        </button>
      </div>
      <Current weatherData={weatherData} url={url} />
      <Forecast forecastData={forecastData} url={url} />
    </div>
  );
}

export default page;
