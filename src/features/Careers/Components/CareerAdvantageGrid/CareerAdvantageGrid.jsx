import React from "react";
import CareerAdvantageItem from "./CareerAdvantageItem";

const CareerAdvantageGrid = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="mx-4 sm:mx-[140px] flex items-center justify-center flex-col">
        <p className="text-center text-[3rem] font-light py-20">
          Experience Awesomeness
        </p>
        <div className="grid grid-cols-12 gap-28">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div className="col-span-4">
              <CareerAdvantageItem
                title={"Lorem ipsum"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerAdvantageGrid;
