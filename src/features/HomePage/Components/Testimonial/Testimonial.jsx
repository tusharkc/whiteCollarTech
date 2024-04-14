import React from "react";
import doubleQuote from "../../../../assets/images/doubleQuote.svg";
import Slider from "react-slick";
import arrowIcon from "../../../../assets/icons/arrowIcon.svg";
import testimonialImg from "../../../../assets/images/testimonial1.png";

const Testimonial = () => {
  function PrevArrow({ className, style, onClick }) {
    return (
      <img
        src={arrowIcon}
        className={className}
        style={{
          ...style,
          display: "block",
          transform: "rotate(180deg)",
        }}
        onClick={onClick}
      />
    );
  }

  function NextArrow({ className, style, onClick }) {
    return (
      <img
        src={arrowIcon}
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="py-20 sm:py-24">
      <h1 className="text-4xl sm:text-6xl font-light text-center">
        Reflections of our commitment!
      </h1>

      <img src={doubleQuote} className="py-10 mx-auto" />

      <div className="container mx-auto overflow-hidden">
        <Slider {...settings} className="max-w-[963px] mx-auto">
          <div>
            <p className="text-center text-lg px-10">
              My team has partnered with White Collar on numerous pharma
              industry clients for over 10 years. They continue to provide us
              with great talent while operating in a highly ethical and
              transparent matter. We look forward to continuing to work with
              them for the next 10!
            </p>
            <div className="flex items-center justify-center my-12">
              <img
                src={
                  "https://media.licdn.com/dms/image/C4D03AQERLQLG3Q7suQ/profile-displayphoto-shrink_400_400/0/1516253792688?e=1718841600&v=beta&t=GeBHTltYojl1Q4QYcrCxA1pPtOm3xnlnPLvDz6D34Gw"
                }
                alt=""
                className="h-20 w-20 rounded-full"
              />

              <p className="mx-5">
                <span className="font-bold">Daniel Stowe</span> <br />
                <span className="text-[#0055A5]">
                  Experis New England, Managing Director
                </span>
              </p>
            </div>
          </div>
          <div>
            <p className="text-center text-lg px-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.{" "}
              <br />
              <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <div className="flex items-center justify-center my-12">
              <img src={testimonialImg} alt="" />

              <p className="mx-5">
                <span className="font-bold">Ricky Franses</span> <br />
                <span className="text-[#0055A5]">COMPANY CEO</span>
              </p>
            </div>
          </div>
          <div>
            <p className="text-center text-lg px-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.{" "}
              <br />
              <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <div className="flex items-center justify-center my-12">
              <img src={testimonialImg} alt="" />

              <p className="mx-5">
                <span className="font-bold">Ricky Franses</span> <br />
                <span className="text-[#0055A5]">COMPANY CEO</span>
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
