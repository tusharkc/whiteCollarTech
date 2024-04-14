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
              White Collar Technologies is a company which gave the launch pad
              to launch my carrier in USA. While doing my masters, my friend
              referred them to me for my training work under OPT . I got the
              best training and later got hired as full-time employee in few
              months. WCT not only trains you for the job but also gives you
              immense career growth opportunities. They have great portfolio of
              clients and amazing back office team.
            </p>

            <div className="flex items-center justify-center my-12">
              <img
                src={
                  "https://media.licdn.com/dms/image/C4E03AQGnY0MEQjPSaA/profile-displayphoto-shrink_400_400/0/1587179552323?e=1718841600&v=beta&t=8Ca0CQPEP_cnabA7jymrP_OkJ8C-I-iDYci8_ThSCtk"
                }
                alt=""
                className="h-20 w-20 rounded-full"
              />

              <p className="mx-5">
                <span className="font-bold">Rinka Chatterjee</span> <br />
                <span className="text-[#0055A5]">
                  White Collar Tech, Senior Business Analyst
                </span>
              </p>
            </div>
          </div>
          <div>
            <p className="text-center text-lg px-10">
              I have been working with Mit and White Collar for over 10 years
              now and could not be happier with the level of professionalism and
              quality they have provided. Any time I get a requirement,
              specifically in the life sciences space, I will go to White Collar
              before any other sources. Their management takes it upon
              themselves to understand not only the job requirements, but the
              actual project work the client is doing so they can send us the
              best suited candidates who fit that criteria.
            </p>

            <div className="flex items-center justify-center my-12">
              <img
                src={
                  "https://media.licdn.com/dms/image/C4E03AQFjllBbJKxlxw/profile-displayphoto-shrink_800_800/0/1582206563137?e=1718841600&v=beta&t=1vNHE37Ze2XCsJg5AZBk-4ggFC-DJBKOz9T9YXd4exo"
                }
                className="h-20 w-20 rounded-full"
                alt=""
              />

              <p className="mx-5">
                <span className="font-bold">Michael Morgan</span> <br />
                <span className="text-[#0055A5]">
                  Randstad Digital Americas, IT Recruiting Director
                </span>
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
