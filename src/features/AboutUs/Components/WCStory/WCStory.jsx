import React from "react";
import wcStoryAbout1 from "../../../../assets/images/wcAboutStory1.png";
import wcStoryAbout2 from "../../../../assets/images/wcAboutStory2.png";
import wcStoryAbout3 from "../../../../assets/images/wcAboutStory3.png";
import wcStoryAbout4 from "../../../../assets/images/wcAboutStory4.png";
import ceoSignature from "../../../../assets/images/founderSIgnature.svg";

const WCStory = () => {
  return (
    <div className="grid grid-cols-12 mt-24 gap-24 mx-36">
      <div className="col-span-6 flex items-center justify-center">
        <div className="grid grid-cols-12 grid-rows-2 gap-4">
          <img src={wcStoryAbout1} className="col-span-6" />
          <img src={wcStoryAbout2} className="col-span-6 mt-8" />
          <img src={wcStoryAbout3} className="col-span-6 -mt-8" />
          <img src={wcStoryAbout4} className="col-span-6" />
        </div>
      </div>
      <div className="col-span-6 tracking-normal">
        <div className="max-w-[474px] mt-8">
          <h2 className="text-4xl font-light">
            Introducing the story behind White Collar Technologies
          </h2>

          <div className="mt-5 leading-7">
            <p>
              Founded in 2010, White Collar Technologies started with the core
              idea of bridging the gaps in the IT industry when it comes to
              innovation and talent. Our founder, himself a consultant at that
              time, identified areas where improvements were drastically needed.
            </p>
            <br />
            <p>
              He started White Collar with a vision of turning it into an
              industry giant that provides top talent to brands and businesses.
              The aim was to become well-trusted, well-respected and relied upon
              by both the clients as well as the talented individuals that join
              us in our journey.
            </p>
          </div>

          <div className="mt-12">
            <img src={ceoSignature} />

            <p className="text-xl mt-6">
              CEO & founder of White Collar{" "}
              <span className="text-[#0055A5]">White Collar</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WCStory;
