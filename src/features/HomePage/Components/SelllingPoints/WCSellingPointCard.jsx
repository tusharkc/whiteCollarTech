import React from "react";

const WCSellingPointCard = ({ segmentName, reasonsArr, segmentIcon }) => {
  return (
    <div className="py-10 px-8 bg-[#262626] rounded-3xl">
      <div>
        <span className="flex items-center mb-10">
          <img src={segmentIcon} alt="icon" className="mr-5" />
          <h2 className="text-5xl font-semibold">{segmentName}</h2>
        </span>

        {reasonsArr.map((reason, index) => (
          <div key={index} className="mt-14 max-w-lg">
            <h5 className="text-2xl">{reason?.title}</h5>
            <p style={{ fontSize: "15px" }}>{reason?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WCSellingPointCard;
