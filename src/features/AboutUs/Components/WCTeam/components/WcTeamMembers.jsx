import React, { useState } from "react";
import linkedinIcon from "../../../../../assets/icons/linkedinBlue.svg";
const WcTeamMembers = ({
  imgSrc,
  memberName,
  memberDesignation,
  memberInfo,
  linkedInUrl,
}) => {
  const [divHovered, setDivHovered] = useState(false);

  return (
    <>
      <div className="relative">
        <div
          // onMouseEnter={() => setDivHovered(true)}
          // onMouseLeave={() => setDivHovered(false)}
          className="relative overflow-hidden bg-cover bg-no-repeat h-[445px]"
        >
          <img
            className={`w-full transition duration-300 ease-in-out h-full ${
              divHovered ? "scale-110" : ""
            }`}
            src={imgSrc}
          />
          {/* <p
            className={`hidden sm:block absolute z-10 bottom-0 p-3 ${
              divHovered ? "text-white" : "text-transparent"
            }`}
          >
            {memberInfo}
          </p> */}
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-t from-[#000000b8] to-transparent opacity-70 sm:opacity-0 transition duration-300 ease-in-out"></div>
        </div>

        <div className="absolute sm:static bottom-4 left-4 text-white sm:text-black">
          <h4 className="font-semibold text-2xl sm:text-4xl my-2">
            {memberName}
          </h4>

          <p className="text-sm sm:text-xl">{memberDesignation}</p>

          <a target="_blank" href={linkedInUrl}>
            <img src={linkedinIcon} className="mx-0 px-0 mt-3" />
          </a>
        </div>
      </div>
    </>
  );
};

export default WcTeamMembers;
