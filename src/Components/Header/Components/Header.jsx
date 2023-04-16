import React, { useState } from "react";
import wctLogoLight from "../../../assets/images/wctLogoWhite.svg";
import downChevron from "../../../assets/icons/downChevronWhite.png";
import { useLocation } from "react-router-dom";
import "../style/headerStyle.css";

const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  const [showOfferingOptions, setShowOfferingOptions] = useState(false);

  const HeaderOfferingOptions = () => (
    <div className="absolute right-[40%] mt-8 bg-white p-6 rounded-3xl header-offering-box">
      <p className="font-medium cursor-pointer p-2 hover:bg-[#0055A5] hover:rounded-md hover:text-white">
        Managed Project Delivery
      </p>
      <p className="font-medium cursor-pointer p-2 hover:bg-[#0055A5] hover:rounded-md hover:text-white">
        IT Project Staffing
      </p>
      <p className="font-medium cursor-pointer p-2 hover:bg-[#0055A5] hover:rounded-md hover:text-white">
        Offshore Offerings
      </p>
      <p className="font-medium cursor-pointer p-2 hover:bg-[#0055A5] hover:rounded-md hover:text-white">
        Direct Placement
      </p>
    </div>
  );

  return (
    <div className="container mx-auto py-4 relative bg-black">
      <div className="flex items-center justify-between">
        <img src={wctLogoLight} />

        <div className="flex min-w-[70%] justify-evenly text-white">
          <p
            className={`cursor-pointer font-${
              pathname == "/" ? "bold" : "medium"
            }`}
          >
            Home
          </p>

          <div
            className="cursor-pointer"
            onClick={() => setShowOfferingOptions(!showOfferingOptions)}
          >
            <span className="flex items-center">
              <p>Our Offering</p>
              <img
                style={{
                  height: "24px",
                  padding: "2px",
                  transform: `rotate(${showOfferingOptions ? "180" : "0"}deg)`,
                }}
                src={downChevron}
              />
            </span>
          </div>
          <p
            className={`cursor-pointer font-${
              pathname == "/about-us" ? "bold" : "medium"
            }`}
          >
            About Us
          </p>
          <p
            className={`cursor-pointer font-${
              pathname == "/career" ? "bold" : "medium"
            }`}
          >
            Career
          </p>
          <p
            className={`cursor-pointer font-${
              pathname == "/contact-us" ? "bold" : "medium"
            }`}
          >
            Contact Us
          </p>
        </div>
      </div>

      {showOfferingOptions ? <HeaderOfferingOptions /> : <></>}
    </div>
  );
};

export default Header;
