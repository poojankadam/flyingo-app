import React from 'react';

const FeedbackCategory = ({ onChange }) => {
    return (
      <select
        className="block w-full p-2 border rounded mt-2"
        onChange={onChange}
        
      >
        <option value="">- Choose a Catergory -</option>
        <option value="suggestion">Suggestion</option>
        <option value="compliment">Compliment</option>
        <option value="technical problem">Technical Problem</option>
        <option value="In-flight Entertainment">In-flight Entertainment</option>
        <option value="technical problem">Other</option>

      
      </select>
    );
  };
  
  export default FeedbackCategory;


  
  
  
  
  
  
  
  
  