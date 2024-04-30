import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
import { Number } from "../../../../Components";
import wcAchivment from "../../../../assets/images/wcAchivement.png";

const WCAchivment = () => {
  const [inView, setInView] = useState(false);

  return (
    <>
      <Waypoint onEnter={() => setInView(true)} />
      <div className="py-20 sm:py-[150px] px-4 sm:px-[140px] text-center sm:text-left">
        <div className="flex items-center justify-around">
          <div className="max-w-[572px]">
            <h3 className="text-4xl sm:text-5xl font-light">
              A for Awesome A for Achievements
            </h3>
            <p className="mt-5">
              We have been providing technical consulting services for over a
              decade now and it has been a growing journey for us. Along the
              way, we've built relationships, onboarded clients, and achieved
              many milestones.
            </p>
            <div className="flex flex-col sm:flex-row item-center justify-between mt-8">
              {/* <div className="w-24">
                <h2 className="text-5xl font-semibold text-[#0055A5]">10+</h2>
                <p>managed projects</p>
              </div> */}

              {inView ? (
                <>
                  <div className="w-full sm:w-24">
                    <h2 className="text-5xl font-semibold text-[#0055A5]">
                      <Number n={12} />+
                    </h2>
                    <p className="leading-6">years of experience</p>
                  </div>
                  <div className="w-full sm:w-24 py-12 sm:py-0">
                    <h2 className="text-5xl font-semibold text-[#0055A5]">
                      <Number n={700} />+
                    </h2>
                    <p className="leading-6">resources placed</p>
                  </div>
                  <div className="w-full sm:w-24">
                    <h2 className="text-5xl font-semibold text-[#0055A5]">
                      <Number n={100} />+
                    </h2>
                    <p className="leading-6">happy clients</p>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <img className="hidden sm:block" src={wcAchivment} />
        </div>
      </div>
    </>
  );
};

export default WCAchivment;
