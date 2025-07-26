import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const weatherLayers = {
  Clouds: 'clouds_new',
  Temperature: 'temp_new',
  Wind: 'wind_new',
  Precipitation: 'precipitation_new',
  Pressure: 'pressure_new',
};

const MapView = () => {
  const mapRef = useRef(null);
  const layerRef = useRef(null);
  const [selectedLayer, setSelectedLayer] = useState('Clouds');

  const apiKey = '98d4bbaa0b54fa7b9fe4ad11c449dae4'; 

  useEffect(() => {
    if (!mapRef.current) {
      const map = L.map('map').setView([14.5995, 120.9842], 6);
      mapRef.current = map;

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(map);
    }

    if (layerRef.current) {
      mapRef.current.removeLayer(layerRef.current);
    }

    const layerName = weatherLayers[selectedLayer];
    const newLayer = L.tileLayer(
      `https://tile.openweathermap.org/map/${layerName}/{z}/{x}/{y}.png?appid=${apiKey}`,
      {
        attribution: '© OpenWeatherMap',
        opacity: 0.5,
      }
    );

    newLayer.addTo(mapRef.current);
    layerRef.current = newLayer;
  }, [selectedLayer]);

  return (
    <div className="mb-4">
     
      <div className="mb-2">
        <label className="mr-2 font-semibold">Weather Overlay:</label>
        <select
          className="p-1 rounded border dark:bg-gray-800 dark:text-white"
          value={selectedLayer}
          onChange={(e) => setSelectedLayer(e.target.value)}
        >
          {Object.keys(weatherLayers).map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

     
      <div id="map" className="h-72 w-full rounded shadow" />
    </div>
  );
};

export default MapView;
