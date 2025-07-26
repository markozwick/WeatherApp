import React, { useState } from 'react';
import { HiSearch } from 'react-icons/hi';

function SearchBar({ setLocation }) {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    if (input.trim()) {
      setLocation(input);
    }
  };

  return (
    <div className="pt-14 flex gap-2 mb-4">
      <input
        type="text"
        className="p-2 rounded border w-full dark:bg-gray-800"
        placeholder="Search for a city..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="px-4 py-2 bg-blue-500 text-white rounded flex items-center gap-1" onClick={handleSearch}>
        <HiSearch className="text-xl" />
        Search
      </button>
    </div>
  );
}

export default SearchBar;
