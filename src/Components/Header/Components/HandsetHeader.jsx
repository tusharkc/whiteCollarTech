import React from "react";
import wcLogoBlue from "../../../assets/images/wcLogoBlue.png";
import closeIcon from "../../../assets/icons/close.png";
import blueRightChevron from "../../../assets/icons/blueRightChevron.svg";
import { useState } from "react";
import { appPathName } from "../../../data";
import { Link, useNavigate } from "react-router-dom";
import wctLogoLight from "../../../assets/images/wctLogoWhite.svg";

const HandsetHeader = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [offeringsActive, setOfferingsActive] = useState(false);

  const navigate = useNavigate();
  const headerData = [
    { title: "About Us", navigateTo: appPathName.aboutUsPath },
    { title: "Career", navigateTo: appPathName.homePagePath },
    { title: "Contact Us", navigateTo: appPathName.contactUsPath },
  ];

  const OfferingCard = () => {
    const offeringData = [
      { title: "Managed Project Delivery", navigateTo: "" },
      { title: "IT Project Staffing", navigateTo: "" },
      { title: "Offshore Offerings", navigateTo: "" },
      { title: "Direct Placement", navigateTo: "" },
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
            <>
              <div
                className="my-10 rounded-3xl"
                style={{
                  background: `url(https://images.pexels.com/photos/1330219/pexels-photo-1330219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                }}
              >
                <img src={wctLogoLight} className="mx-auto py-5 z-20" />

                <p className="text-base font-light text-white p-4 tracking-normal z-20">
                  Hire the best team of professionals and get quality
                  consistently.
                </p>
              </div>
              <div
                onClick={() => setOfferingsActive(true)}
                className="flex py-6 items-center"
              >
                <h4 className="text-3xl">Our Offerings</h4>
                <img className="h-8 w-8" src={blueRightChevron} />
              </div>
              {headerData?.map((headerItem, index) => (
                <Link to={headerItem.navigateTo} key={index}>
                  <div className="flex py-6 items-center">
                    <h4 className="text-3xl">{headerItem.title}</h4>
                    <img className="h-8 w-8" src={blueRightChevron} />
                  </div>
                </Link>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default HandsetHeader;
