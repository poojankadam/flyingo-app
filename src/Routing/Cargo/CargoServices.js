import React from 'react';
import CargoType from './CargoType';

const CargoServices = ({ cargoTypes }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 ">
      <div className="flex flex-wrap justify-center">
        {cargoTypes.map(cargo => (
          <CargoType
            key={cargo.id}
            title={cargo.title}
            description={cargo.description}
            moreInfo={cargo.moreInfo}
            image={cargo.image}
          />
        ))}
      </div>
     </div>
  );
};

export default CargoServices;



