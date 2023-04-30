import React, { useEffect, useState } from "react";
import wctLogoLight from "../../../assets/images/wctLogoWhite.svg";
import wcLogoBlue from "../../../assets/images/wcLogoBlue.png";
import downChevronWhite from "../../../assets/icons/downChevronWhite.png";
import downChevronBlue from "../../../assets/icons/downChevronBlue.png";
import { Link, useLocation } from "react-router-dom";
import "../style/headerStyle.css";
import { appPathName } from "../../../data";

const Header = () => {
  const location = useLocation();

  const { pathname } = location;

  const [showOfferingOptions, setShowOfferingOptions] = useState(false);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 500
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");

    scrollTop >= 500 ? setIsHeaderSticky(true) : setIsHeaderSticky(false);
  };

  const HeaderOfferingOptions = () => (
    <div className="absolute right-[47%] mt-8 bg-white p-6 rounded-3xl header-offering-box">
      <p className="font-medium cursor-pointer px-1 py-2 hover:bg-[#0055A5] hover:rounded-md hover:text-white">
        Managed Project Delivery
      </p>
      <p className="font-medium cursor-pointer px-1 py-2 hover:bg-[#0055A5] hover:rounded-md hover:text-white">
        IT Project Staffing
      </p>
      <p className="font-medium cursor-pointer px-1 py-2 hover:bg-[#0055A5] hover:rounded-md hover:text-white">
        Offshore Offerings
      </p>
      <p className="font-medium cursor-pointer px-1 py-2 hover:bg-[#0055A5] hover:rounded-md hover:text-white">
        Direct Placement
      </p>
    </div>
  );

  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <div className="py-4 relative header-section bg-transparent">
        <div className="flex items-center justify-between mx-[140px]">
          <Link to={appPathName.homePagePath}>
            <img src={!isHeaderSticky ? wctLogoLight : wcLogoBlue} />
          </Link>
          <div className={`flex min-w-[70%] justify-evenly`}>
            {/* <p
              className={`cursor-pointer font-${
                pathname == "/" ? "bold" : "medium"
              } ${
                isHeaderSticky && pathname == "/"
                  ? "text-[#0845B7]"
                  : "text-black"
              }  ${!isHeaderSticky ? "text-white" : "text-black"}`}
            >
              Home
            </p> */}

            <div
              className="cursor-pointer"
              onClick={() => setShowOfferingOptions(!showOfferingOptions)}
            >
              <span className="flex items-center">
                <p
                  className={`${!isHeaderSticky ? "text-white" : "text-black"}`}
                >
                  Our Offering
                </p>
                <img
                  style={{
                    height: !isHeaderSticky ? "24px" : "34px",
                    padding: "2px",
                    transform: `rotate(${
                      showOfferingOptions ? "180" : "0"
                    }deg)`,
                  }}
                  src={!isHeaderSticky ? downChevronWhite : downChevronBlue}
                />
              </span>
            </div>
            <Link to={appPathName.aboutUsPath}>
              <p
                className={`cursor-pointer font-${
                  pathname == "/about-us" ? "bold" : "medium"
                } ${
                  isHeaderSticky && pathname == "/about-us"
                    ? "text-[#0845B7]"
                    : "text-black"
                } ${!isHeaderSticky ? "text-white" : "text-black"}`}
              >
                About Us
              </p>
            </Link>

            <p
              className={`cursor-pointer font-${
                pathname == "/career" ? "bold" : "medium"
              } ${
                isHeaderSticky && pathname == "/career"
                  ? "text-[#0845B7]"
                  : "text-black"
              } ${!isHeaderSticky ? "text-white" : "text-black"}`}
            >
              Career
            </p>
            <p
              className={`cursor-pointer font-${
                pathname == "/contact-us" ? "bold" : "medium"
              } ${
                isHeaderSticky && pathname == "/contact-us"
                  ? "text-[#0845B7]"
                  : "text-black"
              } ${!isHeaderSticky ? "text-white" : "text-black"}`}
            >
              Contact Us
            </p>
          </div>
        </div>

        {showOfferingOptions ? <HeaderOfferingOptions /> : <></>}
      </div>
    </header>
  );
};

export default Header;
