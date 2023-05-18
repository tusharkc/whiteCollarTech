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
