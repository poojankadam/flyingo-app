import React from 'react';
import CargoServices from './CargoServices';

import CargoDetails from './CargoDetails';


const CargoPage = () => {
  return (
    // <div className="container mx-auto py-8 px-4 shadow my-5  mb-10 border-style:solid  mt-8 border-2px solid bg-sky-100">
    <div className='flex flex-col items-center bg-gray-200 py-8 px-4 shadow my-5 mx-5 mb-10 border-style: solid;'>
      <div className='flex flex-col items-center justify-center p-2 mt-4'>

      <div className='flex justify-center text-3xl font4 text-pink-950 font-bold mb-2 mt-4 '>
        <h2>Cargo Services And Baggage Information</h2>
      </div>

      <div>
      <CargoServices cargoTypes={CargoDetails} />
      </div>
      
      </div>
      </div>
    
  );
};

export default CargoPage;
