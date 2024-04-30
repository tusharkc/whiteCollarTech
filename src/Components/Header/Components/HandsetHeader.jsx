import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import blueRightChevron from "../../../assets/icons/blueRightChevron.svg";
import closeIcon from "../../../assets/icons/close.png";
import wcLogoBlue from "../../../assets/images/wcLogoBlue.png";
import { appPathName } from "../../../data";

const HandsetHeader = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [offeringsActive, setOfferingsActive] = useState(false);

  const navigate = useNavigate();
  const headerData = [
    { title: "About Us", navigateTo: appPathName.aboutUsPath },
    { title: "Career", navigateTo: appPathName.careerPath },
    { title: "Contact Us", navigateTo: appPathName.contactUsPath },
  ];

  const OfferingCard = () => {
    const offeringData = [
      {
        title: "Managed Project Delivery",
        navigateTo: appPathName.contactUsPath,
      },
      { title: "IT Project Staffing", navigateTo: appPathName.contactUsPath },
      { title: "Offshore Offerings", navigateTo: appPathName.contactUsPath },
      { title: "Direct Placement", navigateTo: appPathName.contactUsPath },
    ];
    return (
      <div className="pb-40">
        <div className="flex items-center">
          <img
            className="rotate-180 w-12 py-12"
            onClick={() => setOfferingsActive(false)}
            src={blueRightChevron}
          />
          <h2 className="text-3xl font-bold text-[#0055A5]">Our Offerings</h2>
        </div>

        {offeringData?.map((offeringItem, index) => (
          <Link to={offeringItem.navigateTo} key={index}>
            <div className="flex py-6 items-center">
              <h4 className="text-xl">{offeringItem.title}</h4>
              <img className="h-8 w-8" src={blueRightChevron} />
            </div>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <div
      style={{ boxShadow: "0px 3px 6px #00000029" }}
      className="container mx-auto fixed left-0 right-0 z-50 bg-white p-5"
    >
      <div className="flex items-center justify-between">
        <img
          src={wcLogoBlue}
          onClick={() => navigate(appPathName.homePagePath)}
          className="w-44"
        />
        <>
          {!headerActive ? (
            <div class="space-y-1.5" onClick={() => setHeaderActive(true)}>
              <span class="block w-5 h-0.5 bg-gray-600"></span>
              <span class="block w-6 h-0.5 bg-gray-600"></span>
              <span class="block w-7 h-0.5 bg-gray-600"></span>
              <span class="block w-5 h-0.5 bg-gray-600"></span>
            </div>
          ) : (
            <img
              className="w-6"
              src={closeIcon}
              onClick={() => setHeaderActive(false)}
            />
          )}
        </>
      </div>

      {headerActive && (
        <>
          {offeringsActive ? (
            <>
              <OfferingCard />
            </>
          ) : (
            <div className="pb-40 pt-12">
              <div
                onClick={() => setOfferingsActive(true)}
                className="flex py-6 items-center"
              >
                <h4 className="text-3xl">Our Offerings</h4>
                <img className="h-8 w-8" src={blueRightChevron} />
              </div>
              {headerData?.map((headerItem, index) => (
                <Link
                  to={headerItem.navigateTo}
                  onClick={() => {
                    setHeaderActive(false);
                  }}
                  key={index}
                >
                  <div className="flex py-6 items-center">
                    <h4 className="text-3xl">{headerItem.title}</h4>
                    <img className="h-8 w-8" src={blueRightChevron} />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default HandsetHeader;
