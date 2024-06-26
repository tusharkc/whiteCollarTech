import React from "react";
import ceoSignature from "../../../../assets/images/founderSIgnature.svg";
import wcStoryAbout1 from "../../../../assets/images/wcStoryAbout1.webp";
import wcStoryAbout2 from "../../../../assets/images/wcStoryAbout2.webp";
import wcStoryAbout3 from "../../../../assets/images/wcStoryAbout3.webp";
import wcStoryAbout4 from "../../../../assets/images/wcStoryAbout4.webp";

const WCStory = () => {
  return (
    <>
      <div className="grid grid-cols-12 mt-12 sm:mt-24 gap-0 sm:gap-24">
        <div className="sm:col-span-6 hidden sm:flex items-center justify-center">
          <div className="grid grid-cols-12 grid-rows-2 gap-4">
            <img src={wcStoryAbout1} className="col-span-6" />
            <img src={wcStoryAbout2} className="col-span-6 mt-8" />
            <img src={wcStoryAbout3} className="col-span-6 -mt-8" />
            <img src={wcStoryAbout4} className="col-span-6" />
          </div>
        </div>

        <div className="col-span-12 sm:col-span-6 tracking-normal px-8 sm:px-0">
          <div className="max-w-full sm:max-w-[474px] mt-8">
            <h2 className="text-4xl font-light">
              Introducing the story behind White Collar Technologies
            </h2>

            <div className="mt-5 leading-7">
              <p>
                Founded in 2010, I started White Collar Technologies with the
                core idea of bridging the gaps in the IT industry when it comes
                to innovation and talent. Being experienced as a consultant
                myself, I couldn’t help but identify a lot of areas where
                improvements were drastically needed and decided to work on it.
              </p>
              <br />
              <p>
                I had a vision to turn White Collar into an industry giant that
                provides top talent to leading brands and Fortune 500
                businesses. The aim was to become well-trusted, well-respected
                and relied upon by both the clients as well as the talented
                individuals that join us in our journey
              </p>
            </div>

            <div className="mt-12">
              <img src={ceoSignature} />

              <p className="text-xl mt-6">
                <span className="text-[#0055A5]"> Maulin Thakkar, </span>
                CEO & founder
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WCStory;
