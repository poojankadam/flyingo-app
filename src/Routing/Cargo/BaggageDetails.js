
import React from 'react';
import DomesticBaggageDetails from './DomesticBaggageDetails';
import InternationalBaggageDetails from './InternationalBaggageDetails';
import ExcessBaggageCharges from './ExcessBaggageCharges';
import BaggageAdvisories from './BagggageAdivisories';

const BaggageDetails = ({ selectedOption }) => {
  return (
    <div>
      <h2 className="flex justify-center text-2xl font-semibold mb-4 ml-2 border-2px solid bg-gray-400"> Baggage Details </h2>
      {selectedOption == 'Domestic' && <DomesticBaggageDetails />}
      {selectedOption == 'International' && <InternationalBaggageDetails />}
      {selectedOption == 'Excess Baggage Charges' && <ExcessBaggageCharges/>}
      {selectedOption == 'Baggage Advisories' && <BaggageAdvisories/>}
    </div>
  );
};

export default BaggageDetails;
