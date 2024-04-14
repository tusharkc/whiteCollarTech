import React from "react";
import "./partnerWithUsStyle.css";
import wcLogoV2 from "../../../../assets/images/wcLogoV2.svg";
import { scrollSectionInView } from "../../../../utils/functions";

const PartnerWithUs = () => {
  return (
    <div className="partner-with-us-section mt-20 sm:mt-[100px]">
      <div className="flex items-center justify-around py-7 sm:py-28 mx-4 sm:mx-[140px]">
        <div>
          <h1 className="text-white text-4xl sm:text-5xl leading-10">
            Empowering{" "}
            <span className="font-extrabold">
              Life Science <br />
            </span>
            Discoveries for <span className="font-extrabold">12 years!</span>
          </h1>

          <p className="text-white mt-4">
            Our footprints may have started going around but our feet are{" "}
            <br className="hidden sm:block" />
            already firmly planted in the Life Sciences Industry.
          </p>

          <button
            onClick={() => scrollSectionInView("homePageContact")}
            className="mt-10 bg-white hover:bg-[#141414] hover:text-white transition-all py-4 px-6 rounded-md"
          >
            Partner with us
          </button>
        </div>

        <img className="hidden sm:block" src={wcLogoV2} alt="wcLogo" />
      </div>
    </div>
  );
};

export default PartnerWithUs;
