import React from "react";
import { WCKPIData } from "../../../../data";
import WCKPICard from "./WCKPICard";

const WCKPI = () => {
  return (
    <div className="container mx-auto mt-20 sm:mt-[140px]">
      <h1 className="text-center font-light text-4xl sm:text-6xl p-2">
        Empowering your success <br className="hidden sm:block" /> through these
        solutions!
      </h1>

      <p className="text-center mt-5 font-light">
        We offer four different types of services for your unique business
        needs.
      </p>

      <div className="grid grid-cols-12 gap-4 mt-16 mx-4 sm:mx-[150px]">
        {WCKPIData.map((kpi, index) => (
          <div
            key={index}
            className="col-span-12 sm:col-span-6 flex items-center justify-center"
          >
            <WCKPICard {...kpi} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WCKPI;
