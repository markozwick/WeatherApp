import React, { useEffect, useState } from 'react';
import "../styles/ToggleTheme.css";

function ToggleTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="flex justify-between items-center px-6 py-3">
        <span className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
          Weather App
        </span>
        <div className="switch-wrapper">
          <label className="switch" htmlFor="switch-sun-moon">
            <input
              type="checkbox"
              id="switch-sun-moon"
              checked={dark}
              onChange={() => setDark(!dark)}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </header>
  );
}

export default ToggleTheme;

