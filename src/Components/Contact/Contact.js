import React from "react";
import "../../App.css";

import SubscriptionForm from "./SubscriptionForm";


function Contact() {
  return (
    
     <div className="flex flex-col items-center bgcontact py-8 px-4 shadow my-5 mx-5  mb-10 border-style: solid;"> 

      <div className="flex flex-col justify-center items-center">
        <label className="justify-items-center items-center font-semibold pb-4 font4 text-3xl text-pink-950">
          Never miss an offer
        </label>
        <label className="flex text-xl font-semibold font6  text-pink-950">
          Subscribe and be the first receive our exclusive offers.
        </label>
      </div>

      <div>
        <SubscriptionForm />
        
      </div>
    </div>
  );
}

export default Contact;
