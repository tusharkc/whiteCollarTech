import React from "react";
import locationInfoData from "../../../../data/locationInfoData";
import WcLocationsCard from "./WcLocationsCard";

const WcLocations = () => {
  return (
    <div className="mx-36 mt-48">
      <div>
        <h2 className="font-light text-[45px] text-center">
          Our global office network
        </h2>
        <p className="text-center pt-4">
          We are slowly expanding to a global presence but in the meantime, you
          can <br /> find us in the USA, Canada as well as in India.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-4 mt-20 mb-36">
        {locationInfoData.map((location, index) => (
          <div key={index} className="col-span-4">
            <WcLocationsCard {...location} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WcLocations;
