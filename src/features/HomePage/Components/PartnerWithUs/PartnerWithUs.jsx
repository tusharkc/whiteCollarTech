import React from "react";
import "./partnerWithUsStyle.css";
import wcLogoV2 from "../../../../assets/images/wcLogoV2.svg";

const PartnerWithUs = () => {
  return (
    <div className="partner-with-us-section mt-[100px]">
      <div className="flex items-center justify-around py-28 mx-[140px]">
        <div>
          <h1 className="text-white text-5xl">
            Empowering{" "}
            <span className="font-extrabold">
              Life Science <br />
            </span>
            Discoveries for <span className="font-extrabold">12 years!</span>
          </h1>

          <p className="text-white mt-4">
            Our footprints may have started going around but our feet are <br />
            already firmly planted in the Life Sciences Industry.
          </p>

          <button className="mt-10 bg-white hover:bg-[#141414] hover:text-white transition-all p-2 rounded-md">
            Partner with us
          </button>
        </div>

        <img src={wcLogoV2} alt="wcLogo" />
      </div>
    </div>
  );
};

export default PartnerWithUs;
