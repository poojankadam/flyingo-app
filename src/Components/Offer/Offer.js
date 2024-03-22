import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import offers from "./offers";
import OfferItem from "./OfferItem";

function Offer() {
  const scrollLeft = () => {
    const carouselElement = document.getElementById("carousel");
    carouselElement.scrollLeft -= 300;
  };

  const scrollRight = () => {
    const carouselElement = document.getElementById("carousel");
    carouselElement.scrollLeft += 300;
  };

  return (
    <div className="w-full">
      <div className="text-center pt-32 pb-10 text-4xl font-bold">Offers For You</div>

      <div className="grid grid-rows-1 mx-auto bg-fuchsia-950">
        <div className="flex justify-end pt-3">
          <button
            onClick={scrollLeft}
            className="p-2 m-2 rounded-full bg-yellow-600"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 m-2 rounded-full bg-yellow-600"
          >
            <FiChevronRight />
          </button>
        </div>

        <div
          id="carousel"
          className="p-4 flex items-center justify-start overflow-hidden"
        >
          {offers.map((offer) => (
            <div key={offer.id}>
              <Link to={`/offer/${offer.id}`}>
                <OfferItem
                  imageUrl={offer.image}
                  title={offer.title}
                  id={offer.id}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Offer;
