
// import React, { useState } from 'react';
// import statesData from './StateData';
// import citiesData from './CityData';

// const StateCityList = ({statesData, citiesData, onStateChange, onCityChange, selectedState }) => {

//   const [selectedStateId, setSelectedStateId] = useState('');

  
//   const filteredcities = () => {
//     if (citiesData[`id_${selectedStateId}`]) {
//       return citiesData[`id_${selectedStateId}`];
//     } else {
//       return [];
//     }
//   };
  
//   const handleStateChange = (event) => {
//     setSelectedStateId(event.target.value);
//   };

  
//   return (
//     <>
//     <div className='flex items-center mb-4 mt-4 ml-4'>
//       <label for="state" className="flex-none font-medium mr-2">State:</label>

//       <select id="state"  className="flex-grow  px-8 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 "
//          onChange={handleStateChange} value={selectedStateId} >

//         <option >Select State</option>
//         {statesData.map((state) => (<option key={state.id} value={state.id}>{state.stateName}</option>))}
//       </select>
//     </div>


//     <div className='flex items-center mb-4 mt-4 ml-1'>

//       <label for="City" className='flex-none font-medium mr-4 ml-4 '>City:</label>

//       <select id="city" className='flex-grow  px-8 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'>
//       <option >select your city </option>
//         {filteredcities().map((city) => (<option key={city} value={city}> {city}</option>))}
//       </select>
//     </div>
//     </>
//   );
  
// };

// export default StateCityList;

import React, { useState } from 'react';

const StateCityList = ({ statesData, citiesData, onStateChange, onCityChange, selectedCity,selectedState }) => {
  const [selectedStateId, setSelectedStateId] = useState('');

  const filteredCities = () => {
    if (citiesData[`id_${selectedStateId}`]) {
      return citiesData[`id_${selectedStateId}`];
    } else {
      return [];
    }
  };

  const handleStateChange = (event) => {
    setSelectedStateId(event.target.value);
    onStateChange(event.target.value); // Call the parent's onStateChange function
    onCityChange(''); // Reset the selected city when state changes
  };

  const handleCityChange = (event) => {
    onCityChange(event.target.value); // Call the parent's onCityChange function
  };

  return (
    <>
      <div className='flex items-center mb-4 mt-4 ml-4'>
        <label htmlFor="state" className="flex-none font-medium mr-2">State:</label>
        <select
          id="state"
          className="flex-grow px-8 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          onChange={handleStateChange}
          value={selectedState}
        >
          <option value="">Select State</option>
          {statesData.map((state) => (
            <option key={state.id} value={state.id}>
              {state.stateName}
            </option>
          ))}
        </select>
      </div>

      <div className='flex items-center mb-4 mt-4 ml-1'>
        <label htmlFor="city" className='flex-none font-medium mr-4 ml-4 '>City:</label>
        <select
          id="city"
          className='flex-grow px-8 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'
          onChange={handleCityChange}
          value={selectedCity}
        >
          <option value="">Select your city</option>
          {filteredCities().map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default StateCityList;
