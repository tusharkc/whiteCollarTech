import React, { useRef } from "react";

import arrowIconWhite from "../../../../assets/icons/arrowIconWhite.svg";
import homepageBannerData from "../../../../data/homePageBannerData";

const HomePageHeader = () => {
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  const HomePageBanner = ({
    homePageHeaderImg,
    heading,
    subHeading,
    btnText,
    currentIndex,
    finalIndex,
  }) => {
    return (
      <>
        <div
          style={{
            backgroundImage: `url(${homePageHeaderImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "cover",
          }}
          onClick={() => scroll(window.innerWidth)}
          className="h-screen min-w-full relative"
        >
          <div className="max-w-[580px] absolute bottom-[14%] left-[7%]">
            <h1 className="text-white text-6xl font-extrabold tracking-wider leading-snug">
              {heading}
            </h1>
            <p className="text-white mt-5 mb-10 leading-snug tracking-wider">
              {subHeading}
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="bg-white py-3 px-6 rounded-lg hover:bg-[#0055A5] hover:text-white transition-all"
            >
              {btnText}
            </button>

            <div className="text-white flex items-center mt-14">
              <img
                onClick={(e) => {
                  e.stopPropagation();
                  scroll(-window.innerWidth);
                }}
                src={arrowIconWhite}
                alt=""
                className="rotate-180"
              />
              <p>
                &nbsp;&nbsp; {currentIndex}/{finalIndex} &nbsp;&nbsp;
              </p>
              <img
                onClick={(e) => {
                  e.stopPropagation();
                  scroll(window.innerWidth);
                }}
                src={arrowIconWhite}
                alt=""
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div ref={ref} className="flex overflow-x-hidden">
        {homepageBannerData.map((bannerItem, index) => (
          <HomePageBanner
            key={index}
            {...bannerItem}
            currentIndex={index + 1}
            finalIndex={homepageBannerData.length}
          />
        ))}
      </div>
    </>
  );
};

export default HomePageHeader;
