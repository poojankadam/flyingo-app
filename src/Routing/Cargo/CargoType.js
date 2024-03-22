import React, { useState } from 'react';
import MoreInfoButton from './MoreInfoButton';

const CargoType = ({ title, description, moreInfo, image }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="p-8 ml-2 mr-1">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <img className="h-48 w-full object-cover" src={image} alt={title}/>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-4">
            {title}
          </div>
          <p className="text-gray-500 mb-4">{description}</p>
          {showDetails ? (
            <div>
              <p className="text-gray-500">{moreInfo}</p>
              <MoreInfoButton onClick={() => setShowDetails(false)} label="Less Information" />
            </div>
          ) : (
            <MoreInfoButton onClick={() => setShowDetails(true)} label="More Information" />
          )}
        </div>
      </div>
    </div>
  );
};

export default CargoType;
