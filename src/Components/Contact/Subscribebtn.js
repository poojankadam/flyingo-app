
import React from "react";

function Subscribebtn({ isFormValid }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      alert("Subscribed Successfully!");
    } else {
      alert("Please fill in all required fields.");
    }
  }

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={handleClick}
        className="bg-yellow-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-2 focus:ring focus:border-blue-300"
      >
        Subscribe
      </button>
    </div>
  );
}

export default Subscribebtn;
