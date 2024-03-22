
import React from 'react';
import './Baggage.css';
const ExcessBaggageCharges = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Excess Baggage Charges</h1>
     <ul>
      <li>
         If you carry more than your free checked baggage allowance, you will have to pay excess baggage charges. The charges will depend on your route domestic or international , piece- or weight-based  and membership status.
      </li>
    
      <div>
          <h2 className='font-semibold mt-4'>Excess Baggage charges for Domestic Travel: </h2></div>
          <ul>
          <li>
          Additional pieces of baggage will be chargeable at a rate of ,<span>INR 1000</span> per piece. Additional charges may apply for excess baggage at the airport
          </li>

          <li>
          Additional pieces of baggage can be pre-booked online (up to only 2 pieces) at a charge of <span>INR 900</span> per piece
          </li>
          </ul>

        <div>
          <h2 className='font-semibold mt-4'>Excess Baggage charges for International Travel: </h2>
          

          <ul>
          <li>
          Airways connecting to another airline to/from an international destination:<span> 15 Kg</span> per passenger (One piece only).Baggage in excess of 15 kgs will be subject to additional charges of <span>INR 550 per kg</span>.
          </li>

          <li> Additional pieces of baggage will be chargeable at a rate of<span> INR 2000</span> per piece. Additional charges may apply for excess baggage at the airport.</li>
          
          <li>Additional pieces of baggage can be pre-booked online (subject to a maximum of up to only 2 pieces) at a charge of<span> INR 1800 </span>per piece.</li>
          </ul>
        
      </div>

      <p>
        <span>Please Note :</span>For any questions or concerns regarding excess baggage, you can reach out to the airway's customer support or visit their official website.
      </p>
      </ul>
    </div>
  );
};

export default ExcessBaggageCharges;
