import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const PrivilegeLevel = ({ level }) => {
  const [joined, setJoined] = useState(false);

  const handleJoin = () => {
    setJoined(true);
  };

  return (
    <div className="bg-white p-6 shadow rounded">
      <h3 className="text-xl text-pink-950 font-bold">{level.name}</h3>
      <p className=" text-blue-950 font-semibold mt-2">{level.description}</p>
      <ul className="mt-4">
        {level.benefits.map((benefit, index) => (
          <li key={index} className="flex items-center">
            <FaCheck className="text-green-500 mr-2" />
            {benefit}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <h4 className="text-md font-bold mb-2">Exclusive Lounge Access:</h4>
        <p className="text-gray-600">{level.loungeAccess}</p>
      </div>
      {joined ? (
        <p className="mt-4 text-green-500">You have successfully joined!</p>
      ) : (
        <button
          onClick={handleJoin}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Join Now
        </button>
      )}
    </div>
  );
};

export default PrivilegeLevel;
