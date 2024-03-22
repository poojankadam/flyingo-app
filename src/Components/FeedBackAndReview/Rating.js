import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ onRate }) => {
  const [selectedRating, setSelectedRating] = useState(0);

  const handleClick = (value) => {
    setSelectedRating(value);
    onRate(value);
  };
  const maxStars = 5;
  const stars = [];

  for (let i = 1; i <= maxStars; i++) {
    stars.push(
      <span
        key={i}
        className="cursor mr-2"
        onClick={() => handleClick(i)}
      >
        <FaStar
          className={i <= selectedRating ? "text-yellow-500" : "text-white"}
        />
      </span>
    );
  }

  return (
    <div className="flex items-center">
      {stars}
    </div>
  );
};

export default Rating;