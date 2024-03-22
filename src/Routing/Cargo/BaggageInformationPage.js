import React, { useState } from 'react';
import BaggageOptions from './BaggageOptions';
import BaggageDetails from './BaggageDetails';
import './Baggage.css';

const BaggageInformationPage = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    
    <div className="container bgBaggageInfo mb-8 mt-8 mx-auto p-2">
      <h1 className="flex justify-center text-3xl font-bold mb-4 ">Baggage Information</h1>

      <div className="flex">
        
        <BaggageOptions selectedOption={selectedOption} handleOptionChange={handleOptionChange} />

      
        <BaggageDetails selectedOption={selectedOption} />
      </div>
    </div>
    
  );
};

export default BaggageInformationPage;
