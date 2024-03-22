import React from 'react';
import './Baggage.css';
const InternationalBaggageDetails = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">International  Travel:</h3>
      <div className="ml-4 mb-2">
        <p className="font-semibold">Hand Baggage:</p>
        <p>
          One handbag up to<span> 7 kgs</span> and <span>115 cms (L+W+H)</span> shall be allowed per
          customer. For contactless travel, we recommend placing it under the
          seat in front, on board.
        </p>
      </div>
      <div className="ml-4 mb-2">
        <p className="font-semibold">Check-in Baggage:</p>
        <p>
          <span>15kg </span>allowance per person (1 piece only). For
          Double or MultiSeats bookings, an extra<span>10 kg.</span>  Additional charges may
          apply for excess baggage.
        </p>
      </div>

      <div className="ml-4 mb-2">
        <p className="font-semibold">Cabin Baggage:</p>
        <p>
          Your cabin baggage should be of dimension 115 cms (L+W+H). Please do
          not carry large suitcases in cabin luggage as they will not fit in the
          flight baggage compartment. The set dimension of the cabin baggage is
          mentioned in the baggage rules.
        </p>
      </div>

      <div className="ml-4">
        <p className="font-semibold pb-2">Excess Baggage:</p>
        <ul>
       <li> If you carry more than your free checked baggage allowance, you will have to pay excess baggage charges.</li>

        <li>The charges will depend on your route  and flight type (piece- or weight-based), fare type, and membership status.</li>
        <li>
              Additional charges will apply for excess
              baggage beyond the allowed limits. Please check with the airway
              for the latest Excess Baggage Charges.
        </li>
        </ul>
      </div>
      </div>
  );
};

export default InternationalBaggageDetails;
