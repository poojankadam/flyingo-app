
import React, { useState } from "react";
import StateCityList from "./StateCityList";
import statesData from "./StateData";
import citiesData from "./CityData";
import Subscribebtn from "./Subscribebtn";

export default function SubscriptionForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const isFormValid = () => {
    return name && email && selectedState && selectedCity && isChecked;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      alert("Please fill in all required fields.");
      return;
    }

    
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex flex-col justify-center  bg-slate-300 items-center py-8 px-8  shadow mx-8 my-8 rounded-xl">

      <form className="max-w-2x mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your email address"
          />
        </div>

        <StateCityList
          statesData={statesData}
          citiesData={citiesData}
          onStateChange={setSelectedState}
          onCityChange={setSelectedCity}
          selectedState={selectedState}
        />

        <div className="flex items-center space-x-2 mt-4">
          <input
            type="checkbox"
            className="form-checkbox text-blue-500"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label className="text-pink-950 font-semibold">
            I would like to get offers and news from Airway.
          </label>
        </div>

        <Subscribebtn isFormValid={isFormValid} />
      </form>
    </div>
  );
}

