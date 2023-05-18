import React from "react";
import { weReason } from "../../../../data";
import WCSellingPointCard from "./WCSellingPointCard";

const WCSellingPoints = () => {
  return (
    <div className="bg-[#141414] text-white">
      <div className="container mx-auto">
        <div className="mx-0 sm:mx-[140px]">
          <h1 className="text-center text-4xl sm:text-6xl font-light pt-12 sm:pt-20 pb-4">
            Why go for White Collar?
          </h1>
          <p className="text-center">
            White Collar is beneficial to both clients and employees when it
            comes to IT requirements <br /> and solutions.
          </p>

          <div className="grid grid-cols-12 gap-4 py-4 sm:py-24">
            {weReason.map((reason, index) => (
              <div key={index} className=" col-span-12 sm:col-span-6 p-6">
                <WCSellingPointCard {...reason} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WCSellingPoints;
