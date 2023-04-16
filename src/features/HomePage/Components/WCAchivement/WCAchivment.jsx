import React from "react";
import directPlacment from "../../../../assets/images/directPlacement.png";

const WCAchivment = () => {
  return (
    <div className="py-[150px] px-[140px]">
      <div className="flex items-center justify-around">
        <div className="max-w-[572px]">
          <h3 className="text-5xl font-light">
            A for Awesome A for Achievements
          </h3>
          <p className="mt-5">
            We have been providing technical consulting services for over a
            decade now and it has been a growing journey for us. Along the way,
            we've built relationships, onboarded clients, and achieved many
            milestones.
          </p>

          <div className="flex item-center justify-between mt-8">
            <div className="w-24">
              <h2 className="text-5xl font-semibold text-[#0055A5]">10+</h2>
              <p>managed projects</p>
            </div>
            <div className="w-24">
              <h2 className="text-5xl font-semibold text-[#0055A5]">12+</h2>
              <p>years of experience</p>
            </div>
            <div className="w-24">
              <h2 className="text-5xl font-semibold text-[#0055A5]">1K+</h2>
              <p>resources placed</p>
            </div>
            <div className="w-24">
              <h2 className="text-5xl font-semibold text-[#0055A5]">100+</h2>
              <p>happy clients</p>
            </div>
          </div>
        </div>
        <img
          className="h-[400px] w-[474px] object-cover rounded-2xl"
          src={directPlacment}
        />
      </div>
    </div>
  );
};

export default WCAchivment;
