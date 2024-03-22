import React from 'react';
import FeedbackForm from './FeedbackForm';

const FeedbackPage = () => {
  const handleRate = (value) => {
    console.log('Rating:', value); // You can do something with the rating value here
  };

  const handleSubmit = (category, type, text, rating) => {
    console.log('Submitted:', category, type, text, rating);
  };

  return (
    <div className='flex flex-col items-center bgfdback py-8 px-4 shadow my-5 mx-5 mb-10 border-style: solid;'>
      <h1 className="text-3xl font-semibold text-center mb-4 text-pink-950 font5">Feedback and Rating</h1>
      <h2 className="text-xl font-semibold text-center mb-8 text-pink-800">
        Tell us about your experience with Airway and rate it accordingly.
      </h2>
      <FeedbackForm onSubmit={handleSubmit} onRate={handleRate} />
    </div>
  );
};

export default FeedbackPage;
