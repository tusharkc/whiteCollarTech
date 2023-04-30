import React from "react";
import visionImg from "../../../../assets/images/vision.png";
import missionImg from "../../../../assets/images/mission.png";

const VisionMission = () => {
  return (
    <div className="my-36 mx-36">
      <div className="grid grid-cols-12 tracking-normal gap-24">
        <div className="col-span-6 flex items-center justify-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-light">Vision Statement</h1>
            <p className="text-[17px] mt-5 leading-7">
              Our vision is to be the leading provider of top-notch talent
              through commitment, compliance, and collaboration. We envision a
              future where we are well-trusted and relied upon by both our
              clients and employees.
            </p>
            <img src={visionImg} className="mt-12" />
          </div>
        </div>
        <div className="col-span-6 flex items-center">
          <div className="max-w-xl flex flex-col justify-between">
            <img src={missionImg} className="self-end" />
            <div className="mt-12">
              <h1 className="text-5xl font-light">Mission Statement</h1>
              <p className="text-[17px] mt-5 leading-7">
                We are committed to providing exceptional experiences to our
                clients by connecting businesses with top talent while also
                prioritizing a supportive and inclusive environment for our
                employees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
