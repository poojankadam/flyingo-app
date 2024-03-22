import React from "react";

function OfferItem({ imageUrl }) {
  return (
    <>
      <div className="card w-[300px] h-[250px] ml-7 mr-7 rounded-lg">
        <div className="">
          <img
            className="w-[300px] h-[250px]"
            src={imageUrl}
            alt="img"
          />
        </div>
      </div>
    </>
  );
}

export default OfferItem;
