import React from 'react';
import { HiLocationMarker } from "react-icons/hi";
import {
  WiHumidity,
  WiStrongWind,
  WiBarometer,
  WiThermometer,
  WiThermometerExterior,
  WiSunrise,
  WiSunset,
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiFog,
} from 'react-icons/wi';

function WeatherCard({ data }) {
  const current = data.list[0];
  const weatherMain = current.weather[0].main.toLowerCase();
  const sunrise = new Date(data.city.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(data.city.sunset * 1000).toLocaleTimeString();

  const backgroundClass = {
    clear: 'bg-[url("/videos/clear.gif")]',
    clouds: 'bg-[url("/videos/cloud.gif")]',
    rain: 'bg-[url("/videos/rain.gif")]',
    snow: 'bg-[url("/videos/snow.gif")]',
    mist: 'bg-[url("/videos/mist.gif")]',
    fog: 'bg-[url("/videos/fog.gif")]',
  }[weatherMain];

  return (
    <div
      className={`bg-cover bg-center text-white dark:text-gray-100 p-6 rounded-2xl shadow-lg mb-4 transition-all ${backgroundClass}`}
    >
      <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
         <HiLocationMarker className="text-red-500 text-3xl" />{data.city.name}
      </h2>
      <p className="capitalize mb-4 text-lg">{current.weather[0].description}</p>

      <div className="grid grid-cols-2 gap-4">
        <p className="flex items-center gap-2">
          <WiThermometer className="text-2xl" /> Temp: {current.main.temp}°C
        </p>
        <p className="flex items-center gap-2">
          <WiThermometerExterior className="text-2xl" /> Feels like: {current.main.feels_like}°C
        </p>
        <p className="flex items-center gap-2">
          <WiHumidity className="text-2xl" /> Humidity: {current.main.humidity}%
        </p>
        <p className="flex items-center gap-2">
          <WiBarometer className="text-2xl" /> Pressure: {current.main.pressure} hPa
        </p>
        <p className="flex items-center gap-2">
          <WiStrongWind className="text-2xl" /> Wind: {current.wind.speed} m/s
        </p>
        <p className="flex items-center gap-2">
          <WiFog className="text-2xl" /> Visibility: {current.visibility} m
        </p>
        <p className="flex items-center gap-2">
          <WiSunrise className="text-2xl" /> Sunrise: {sunrise}
        </p>
        <p className="flex items-center gap-2">
          <WiSunset className="text-2xl" /> Sunset: {sunset}
        </p>
      </div>
    </div>
  );
}

export default WeatherCard;
