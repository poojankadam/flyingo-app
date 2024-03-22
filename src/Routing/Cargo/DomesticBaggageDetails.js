import React from "react";
import './Baggage.css';
const DomesticBaggageDetails = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Domestic Travel:</h3>
      <div className="ml-4 mb-2">
        <p className="font-semibold">Hand Baggage:</p>
        <p>
          One handbag up to<span> 7 kgs </span>and <span>115 cms (L+W+H) </span>shall be allowed per
          customer. For contactless travel, we recommend placing it under the
          seat in front, on board.
        </p>
      </div>

      <div className="ml-4 mb-2">
        <p className="font-bold">Check-in Baggage:</p>
        <p>
          <span>15kg</span> allowance per person (1 piece only). For
          Double or MultiSeats bookings, an extra <span>10 kg</span>. Additional charges may
          apply for excess baggage.
        </p>
      </div>

      <div className="ml-4 mb-2">
        <p className="font-bold">Cabin Baggage:</p>
        <p>
          Your cabin baggage should be of dimension<span>115 cms (L+W+H)</span> . Please do
          not carry large suitcases in cabin luggage as they will not fit in the
          flight baggage compartment. The set dimension of the cabin baggage is
          mentioned in the baggage rules.
        </p>
      </div>

      <div className="ml-4">
        <p className="font-bold pb-2">Excess Baggage:</p>
        <div className="flex flex-row">
          <ul>
            
            <li>
              Excess baggage charges vary based on the airways, route, and fare
              type. These charges are applicable when your checked-in baggage or
              cabin baggage exceeds the allowed weight or size limits set by the
              airway.
            </li><br/>
            <li>
              For Domestic Travel, additional charges will apply for excess
              baggage beyond the allowed limits. Please check with the airway
              for the latest Excess Baggage Charges.
            </li><br/>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DomesticBaggageDetails;
