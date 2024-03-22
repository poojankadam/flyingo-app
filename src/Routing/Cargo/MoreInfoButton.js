import React from 'react';

const MoreInfoButton = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="mt-4 text-indigo-500 hover:underline focus:outline-none"
    >
      {label}
    </button>
  );
};

export default MoreInfoButton;