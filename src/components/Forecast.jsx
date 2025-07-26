// import React from 'react';
// import {
//   WiThermometer,
//   WiHumidity,
//   WiStrongWind
// } from 'react-icons/wi';

// function Forecast({ data }) {
//   const daily = data.list.slice(1, 8);

//   const bgMap = {
//     Clear: '/images/clear.jpg',
//     Clouds: '/images/clouds.jpg',
//     Rain: '/images/rain.jpg',
//     Snow: '/images/snow.jpg',
//     Mist: '/images/mist.jpg',
//     Fog: '/images/fog.jpg',
//     Default: '/images/default.jpg',
//   };

//   return (
//     <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
//       {daily.map((item, index) => {
//         const weatherType = item.weather[0].main;
//         const bgImage = bgMap[weatherType] || bgMap.Default;

//         return (
//           <div
//             key={index}
//             className="p-2 rounded shadow text-center text-white relative h-48 overflow-hidden"
//             style={{
//               backgroundImage: `url(${bgImage})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//             }}
//           >
//             <div className="absolute inset-0 bg-black bg-opacity-40 rounded"></div>
//             <div className="relative z-10 space-y-1">
//               <p className="font-semibold">{new Date(item.dt * 1000).toLocaleDateString()}</p>
//               <p className="capitalize">{weatherType}</p>
//               <div className="flex items-center justify-center gap-1">
//                 <WiThermometer className="text-xl" /> {item.main.temp}°C
//               </div>
//               <div className="flex items-center justify-center gap-1">
//                 <WiHumidity className="text-xl" /> {item.main.humidity}%
//               </div>
//               <div className="flex items-center justify-center gap-1">
//                 <WiStrongWind className="text-xl" /> {item.wind.speed} m/s
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Forecast;

import React from 'react';
import {
  WiThermometer,
  WiHumidity,
  WiStrongWind
} from 'react-icons/wi';

function Forecast({ data }) {
  const daily = data.list.slice(1, 8); // still using 3-hour intervals

  const bgMap = {
  Clear: `${import.meta.env.BASE_URL}images/clear.jpg`,
  Clouds: `${import.meta.env.BASE_URL}images/clouds.jpg`,
  Rain: `${import.meta.env.BASE_URL}images/rain.jpg`,
  Snow: `${import.meta.env.BASE_URL}images/snow.jpg`,
  Mist: `${import.meta.env.BASE_URL}images/mist.jpg`,
  Fog: `${import.meta.env.BASE_URL}images/fog.jpg`,
  // Default: `${import.meta.env.BASE_URL}images/default.jpg`,
};



  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
      {daily.map((item, index) => {
        const weatherType = item.weather[0].main;
        const bgImage = bgMap[weatherType] || bgMap.Default;

        const dateObj = new Date(item.dt * 1000);
        const fullDate = dateObj.toLocaleDateString(undefined, {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
        });
        const time = dateObj.toLocaleTimeString(undefined, {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });

        return (
          <div
            key={index}
            className="p-2 rounded shadow text-center text-white relative h-52 overflow-hidden"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded"></div>
            <div className="relative z-10 space-y-1">
              <p className="font-semibold">{fullDate}</p>
              <p className="text-sm">{time}</p>
              <p className="capitalize">{weatherType}</p>
              <div className="flex items-center justify-center gap-1">
                <WiThermometer className="text-xl" /> {item.main.temp}°C
              </div>
              <div className="flex items-center justify-center gap-1">
                <WiHumidity className="text-xl" /> {item.main.humidity}%
              </div>
              <div className="flex items-center justify-center gap-1">
                <WiStrongWind className="text-xl" /> {item.wind.speed} m/s
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Forecast;
