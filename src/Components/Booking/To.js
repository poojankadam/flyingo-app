import React, { useState } from 'react';

const fromCities = [
  { id: 1, city: 'Rio de Janeiro' },
  { id: 2, city: 'New York' },
  { id: 3, city: 'Dubai' },
  { id: 4, city: 'Amsterdam' },
  { id: 5, city: 'Victoria' },
  { id: 6, city: 'Berlin' },
];

function To({valueTo}) {
  const [showFrom, setShowFrom] = useState(false);
  const [cityName, setCityName] = useState('Select Airport');

  const handleShowFrom = () => {
    setShowFrom(!showFrom);
  };

  const handleChange = (e) => {
    const selectedCity = e.target.textContent;
    setCityName(selectedCity);
    valueTo(selectedCity)
  };



  return (
    <div className='relative border-2 px-5 py-2 w-52 hover:border-gray-400' onClick={handleShowFrom}>
      <div htmlFor=""> To</div>
      <label className=''>{cityName}</label>
      {showFrom && (
        <ul className='absolute top-16 mt-1 px-4 rounded-lg bg-white shadow-2xl w-64 text-center'>
            <ul className='grid grid-cols-1 divide-y divide-purple-400 hover:divide-y-4'>
          {fromCities.map((p) => (
              <li key={p.id} value={p.city} onClick={handleChange} className='cursor-pointer py-2 hover:font-semibold'>
              {p.city}
            </li>
          ))}
          </ul>
        </ul>
      )}
    </div>
  );
}

export default To;
