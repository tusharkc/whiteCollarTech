import React from "react";
import bannerImage from "../../../../assets/images/careerBanner.png";
import userNavigationIndicatorIcon from "../../../../assets/icons/userNavigationIndicatorIcon.svg";

const CareerBanner = () => {
  return (
    <div className="relative">
      <img
        src={bannerImage}
        alt=""
        className="w-full h-[70vh] sm:h-auto object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Be a part of our team!
        </h1>
        <div className="flex items-center">
          <p className="text-lg md:text-xl max-w-prose text-center">Home</p>
          <img className="mx-7" src={userNavigationIndicatorIcon} />
          <p className="text-lg md:text-xl max-w-prose text-center">Career</p>
        </div>
      </div>
    </div>
  );
};

export default CareerBanner;
