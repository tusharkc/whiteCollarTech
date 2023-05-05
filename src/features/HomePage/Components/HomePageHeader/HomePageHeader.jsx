import React, { useRef } from "react";
import homePageHeader1 from "../../../../assets/images/header1.png";
import homePageHeader2 from "../../../../assets/images/header2.png";
import homePageHeader3 from "../../../../assets/images/header3.png";
import arrowIconWhite from "../../../../assets/icons/arrowIconWhite.svg";

const HomePageHeader = () => {
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <>
      <div ref={ref} className="flex overflow-x-hidden">
        <div
          style={{
            backgroundImage: `url(${homePageHeader1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "cover",
          }}
          onClick={() => scroll(window.innerWidth)}
          className="h-screen min-w-full flex items-center px-[140px]"
        >
          <div className="max-w-xl">
            <h1 className="text-white text-6xl font-extrabold tracking-wider leading-tight">
              Conjuring up the top IT talent for your business!
            </h1>
            <p className="text-white mt-5 mb-10">
              We are here to harness the power of top IT talent and help you
              overcome your challenges.
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="bg-white p-3 rounded-lg hover:bg-[#0055A5] hover:text-white transition-all"
            >
              Excel with us
            </button>

            <div className="text-white flex items-center mt-14">
              {/* <img
                onClick={() => scroll(-window.innerWidth)}
                src={arrowIconWhite}
                alt=""
                className="rotate-180"
              /> */}
              <p>&nbsp;&nbsp; 1/3 &nbsp;&nbsp;</p>
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

        <div
          style={{
            backgroundImage: `url(${homePageHeader2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "cover",
          }}
          onClick={() => scroll(window.innerWidth)}
          className="h-screen min-w-full flex items-center px-[140px]"
        >
          <div className="max-w-2xl">
            <h1 className="text-white text-6xl font-extrabold tracking-wider leading-tight">
              Building your IT Dream Team and orchestrating excellence!
            </h1>
            <p className="text-white mt-5 mb-10">
              We source, screen, and assemble the most exceptional <br /> talent
              for you to conquer your challenges with finesse.
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="bg-white p-3 rounded-lg hover:bg-[#0055A5] hover:text-white transition-all"
            >
              Connect with us
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
              <p>&nbsp;&nbsp; 2/3 &nbsp;&nbsp;</p>
              <img
                src={arrowIconWhite}
                onClick={(e) => {
                  e.stopPropagation();
                  scroll(window.innerWidth);
                }}
                alt=""
              />
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${homePageHeader3})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "cover",
          }}
          // onClick={() => scroll(-(2 * window.innerWidth))}
          className="h-screen min-w-full flex items-center px-[140px]"
        >
          <div className="max-w-2xl">
            <h1 className="text-white text-6xl font-extrabold tracking-wider leading-tight">
              When it comes to Life Sciences and <br /> IT needs, we are
              <br /> the one!
            </h1>
            <p className="text-white mt-5 mb-10">
              Fuel your scientific discovery with us and pave the way <br /> to
              your success because we specialize in life sciences.
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="bg-white p-3 rounded-lg hover:bg-[#0055A5] hover:text-white transition-all"
            >
              Hire the Experts
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
              <p>&nbsp;&nbsp; 3/3 &nbsp;&nbsp;</p>
              {/* <img
                src={arrowIconWhite}
                onClick={() => scroll(-(2 * window.innerWidth))}
                alt=""
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageHeader;
