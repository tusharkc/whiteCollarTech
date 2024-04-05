import React from "react";
import CareerAdvantageItem from "./CareerAdvantageItem";
import { careerListingData } from "../../../../data/careerListingData";

const CareerAdvantageGrid = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="mx-4 sm:mx-[140px] flex items-center justify-center flex-col">
        <p className="text-center text-[3rem] font-light py-20">
          Experience Awesomeness
        </p>
        <div className="grid grid-cols-12 gap-8 md:gap-28">
          {careerListingData.map((item) => (
            <div className="col-span-12 md:col-span-4">
              <CareerAdvantageItem
                title={item?.title}
                description={item?.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerAdvantageGrid;
