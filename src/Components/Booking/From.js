import React, { useState } from 'react';

const fromCities = [
  { id: 1, city: 'Mumbai' },
  { id: 2, city: 'Pune' },
  { id: 3, city: 'Delhi' },
  { id: 4, city: 'Hyderabad' },
  { id: 5, city: 'Chennai' },
  { id: 6, city: 'Bengaluru' },
];


export default function From({valueFrom}) {
  const [showFrom, setShowFrom] = useState(false);
  const [cityName, setCityName] = useState('Select City');

  const handleShowFrom = () => {
    setShowFrom(!showFrom);
  };

  const handleChange = (e) => {
    const selectedCity = e.target.value;
    setCityName(selectedCity);
    valueFrom(selectedCity)
  };
  

  return (
        <div className='relative border-2 rounded-s-lg px-5 py-2 w-52 hover:border-gray-400' onClick={handleShowFrom}>
          <div htmlFor=""> From</div>
          <label className=''>{cityName}</label>
          {showFrom && (
            <ul className='absolute top-16 mt-1 px-4 -left-14 rounded-lg bg-white shadow-2xl w-64 text-center'>
                <ul className='grid grid-cols-1 divide-y divide-purple-400 hover:divide-y-4'>
              {fromCities.map((p) => (
                  <input type="text" key={p.id} value={p.city} onClick={handleChange} className='cursor-pointer py-2 hover:font-semibold focus:none' />
              ))}
              </ul>
            </ul>
          )}
        </div>
  );
}

 
