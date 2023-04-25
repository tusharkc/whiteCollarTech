import React from "react";
import { Link } from "react-router-dom";

import arrowIcon from "../../../../assets/icons/arrowIcon.svg";

const WCKPICard = ({ image, title, description, ctaLink }) => {
  return (
    <div>
      <div className="bg-[#F7F7F7] flex items-center justify-center rounded-2xl cursor-pointer">
        <div className="mx-auto p-7">
          <img src={image} alt="kpi" className="object-cover min-w-full" />

          <h4 className="py-7 text-3xl font-light">{title}</h4>
          <p className="text-sm font-light">{description}</p>
          <Link to={ctaLink} className="text-[#0055A5] flex items-center mt-6">
            <p className="mr-4 hover:mr-12 transition-all">Explore</p>
            <img src={arrowIcon} alt="arrowIcon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WCKPICard;
