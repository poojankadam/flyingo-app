import React from "react"
import './Baggage.css';
export default function BaggageAdvisories(){
  return(
<div className=" ml-4">
  <p className=" flex mt-4 mb-4 text-xl font-semibold">General advisories regarding your baggage:</p>
  <ul>
    <li>
      Always double-check the baggage allowance and restrictions of the airway you're flying with before your trip.
    </li>

    <li>
      Ensure that your checked baggage is securely locked and labeled with your contact details.
    </li>

    <li>
      Be aware of prohibited items such as sharp objects, flammable materials, and liquids exceeding the allowed limit in your carry-on baggage.
    </li>

    <li>
      Consider using luggage with distinctive markings to easily identify your bags on the carousel.
    </li>
    <li>
      We recommend arriving at the airport with sufficient time to check in your baggage and go through security checks without rushing.
    </li>

    <li>
      If you have connecting flights, verify the baggage transfer process with the airway to avoid confusion or delays.
    </li>

    <li>
      In case of lost or damaged baggage, report the issue to the airway's baggage service immediately and keep all relevant documents.
    </li>

  </ul>
</div> 

  )
}