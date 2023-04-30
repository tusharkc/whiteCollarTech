import React from "react";
import { weReason } from "../../../../data";
import WCSellingPointCard from "./WCSellingPointCard";

const WCSellingPoints = () => {
  return (
    <div className="bg-[#141414] text-white">
      <h1 className="text-center text-6xl font-light pt-20 pb-4">
        Why go for White Collar?
      </h1>
      <p className="text-center">
        White Collar is beneficial to both clients and employees when it comes
        to IT requirements <br /> and solutions.
      </p>

      <div className="mx-[140px] flex justify-evenly flex-wrap py-20">
        {weReason.map((reason, index) => (
          <div key={index} className="col-span-6">
            <WCSellingPointCard {...reason} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WCSellingPoints;
