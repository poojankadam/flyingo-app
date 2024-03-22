
import React from 'react';

const BaggageOptions = ({ selectedOption, handleOptionChange }) => {
  return (
    <div className="mr-6">
      <h2 className="text-xl font-semibold mb-4 box-border:2px solid bg-gray-400">Baggage Allowance</h2>
    <div className='mt-8 p-2'>
      
    <button
        className={`block mb-4 font-semibold  cursor-pointer ${selectedOption == 'Domestic' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} px-4 py-2 rounded`}
        onClick={() => handleOptionChange('Domestic')}> Domestic Travel - Baggage Allowance
      </button>

      <button
        className={`block mb-4 font-semibold cursor-pointer ${selectedOption == 'International' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} px-4 py-2 rounded`}
        onClick={() => handleOptionChange('International')}>International Travel - Baggage Allowance
      </button>

      <button
        className={`block mb-4 font-semibold cursor-pointer ${selectedOption == 'Excess Baggage Charges' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} px-4 py-2 rounded`}
        onClick={() => handleOptionChange('Excess Baggage Charges')}>Excess Baggage Charges
      </button>

      <button
        className={`block font-semibold cursor-pointer ${selectedOption ==' Baggage Advisories' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} px-4 py-2 rounded`}
        onClick={() => handleOptionChange('Baggage Advisories')}>Baggage Advisories
      </button>
      </div>
    </div>
  );
};

export default BaggageOptions;
