import React from "react";
const SubmitButton = ({ onSubmit }) => {
    return (
      
      <button
        className="mt-4 bg-yellow-400 hover:bg-pink-800 text-black font-semibold py-2 px-4 rounded focus:outline-none"
         type= "submit" onClick={onSubmit} >
        Submit Feedback
      </button>
    );
  };
  
  export default SubmitButton;