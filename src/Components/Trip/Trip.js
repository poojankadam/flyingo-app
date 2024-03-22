import React from "react";

function Trip({ trip }) {
  const { image, name } = trip;
  console.log(image);
  return (
    <div className="w-full items-center justify-between space-x-6 p-6">
      <img className="" src={image} alt="" />

      <div>
        <div className="text-2xl font-bold pt-4">
          <h3 className="">{name}</h3>
        </div>

        <p className="text-gray-500">More Info</p>
      </div>
    </div>
  );
}

export default Trip;
