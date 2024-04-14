import React, { useRef } from "react";

import arrowIconWhite from "../../../../assets/icons/arrowIconWhite.svg";
import homepageBannerData from "../../../../data/homePageBannerData";
import useWindowSize from "../../../../hooks/useWindowSize";
import Slider from "react-slick";
import { scrollSectionInView } from "../../../../utils/functions";

const HomePageHeader = () => {
  const { width } = useWindowSize();
  const sliderRef = useRef(null);

  const HomePageBanner = ({
    homePageHeaderImg,
    heading,
    subHeading,
    btnText,
    currentIndex,
    finalIndex,
    handsetHeaderImg,
  }) => {
    return (
      <>
        <div
          style={{
            backgroundImage: `url(${
              width > 767 ? homePageHeaderImg : handsetHeaderImg
            })`,
            backgroundRepeat: "no-repeat",
          }}
          onClick={() => {}}
          className="h-screen min-w-full relative bg-cover"
        >
          <div className="max-w-[580px] absolute bottom-[14%] left-[7%]">
            <h1 className="text-white text-4xl sm:text-6xl font-extrabold tracking-wider leading-snug">
              {heading}
            </h1>
            <p className="text-white mt-5 mb-10 leading-snug tracking-wider">
              {subHeading}
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                scrollSectionInView("homePageContact");
              }}
              className="bg-white py-3 px-6 rounded-lg hover:bg-[#0055A5] hover:text-white transition-all"
            >
              {btnText}
            </button>

            <div className="text-white flex items-center mt-14 float-right sm:float-none px-6 sm:px-0">
              <img
                onClick={(e) => {
                  e.stopPropagation();
                  sliderRef.current.slickPrev();
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
                  sliderRef.current.slickNext();
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider ref={sliderRef} {...settings}>
        {homepageBannerData.map((bannerItem, index) => (
          <HomePageBanner
            key={index}
            {...bannerItem}
            currentIndex={index + 1}
            finalIndex={homepageBannerData.length}
          />
        ))}
      </Slider>
    </>
  );
};

export default HomePageHeader;
