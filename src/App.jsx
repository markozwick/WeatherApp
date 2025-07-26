import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Forecast from './components/Forecast';
import MapView from './components/MapView';
import ToggleTheme from './components/ToggleTheme';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('Manila');

  useEffect(() => {
    fetchWeather(location);
  }, [location]);

  const fetchWeather = async (city) => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await res.json();
    setWeatherData(data);
  };

  return (
  <div className="min-h-screen p-4 transition bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
    <div className="flex justify-end mb-1">
      <ToggleTheme />
    </div>
    
    <SearchBar setLocation={setLocation} />
    
    {weatherData && (
      <>
        <WeatherCard data={weatherData} />
        <Forecast data={weatherData} />
        <MapView location={location} />
      </>
    )}
  </div>
);
}

export default App;
