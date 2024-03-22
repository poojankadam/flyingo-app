
import React, { useState } from 'react';
import FeedbackCategory from './FeedbackCategory';
import Rating from './Rating';
import SubmitButton from './SubmitButton';
import { FaStar } from 'react-icons/fa';

const FeedbackForm = ({ onSubmit, onRate }) => {
  const [selectedFeedbackCategory, setSelectedFeedbackCategory] = useState('');
  const [feedbackType, setFeedbackType] = useState('Feedback');
  const [feedbackText, setFeedbackText] = useState('');
  const [rating, setRating] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFeedbackCategoryChange = (e) => {
    setSelectedFeedbackCategory(e.target.value);
  };

  const handleFeedbackTypeChange = (e) => {
    setFeedbackType(e.target.value);
  };

  const handleFeedbackTextChange = (e) => {
    setFeedbackText(e.target.value);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();

    if (!selectedFeedbackCategory || (feedbackType === 'Feedback' && !feedbackText)) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    // Clear error message
    setErrorMessage('');

    onSubmit(selectedFeedbackCategory, feedbackType, feedbackText, rating);
    setSelectedFeedbackCategory('');
    setFeedbackType('Feedback');
    setFeedbackText('');
    setRating(0);
  };

  const handleRate = (value) => {
    setRating(value);
    onRate(value);
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow " >
      {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}

      <div className="mt-4">
        <label className="block text-lg font-semibold mb-2">Choose a category for your feedback:</label>
        <FeedbackCategory onChange={handleFeedbackCategoryChange} />

        {selectedFeedbackCategory && (
          <p className="mt-2">Selected Category: {selectedFeedbackCategory}</p>
        )}
      </div>

      {feedbackType === 'Feedback' && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Give your feedback:</h3>
          <textarea
            className="block w-full p-2 border rounded mt-2"
            rows="4"
            cols="50"
            placeholder="Your feedback..."
            value={feedbackText}
            onChange={handleFeedbackTextChange}
          />
        </div>
      )}

      <div className="mt-4 font-semibold">
        <h2>Rate your journey with Airway</h2>
        <Rating onRate={handleRate} />
        <p>{rating}</p>
      </div>

      <div>
        <SubmitButton onSubmit={handleFeedbackSubmit} />
      </div>
    </div>
  );
};

export default FeedbackForm;
