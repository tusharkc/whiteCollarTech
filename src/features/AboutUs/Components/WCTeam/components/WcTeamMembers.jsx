import React, { useState } from "react";
import linkedinIcon from "../../../../../assets/icons/linkedinBlue.svg";
const WcTeamMembers = ({
  imgSrc,
  memberName,
  memberDesignation,
  memberInfo,
}) => {
  const [divHovered, setDivHovered] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setDivHovered(true)}
        onMouseLeave={() => setDivHovered(false)}
        className="relative overflow-hidden bg-cover bg-no-repeat"
      >
        <img
          className={`w-full transition duration-300 ease-in-out ${
            divHovered ? "scale-110" : ""
          }`}
          src={imgSrc}
        />
        <p
          className={`absolute z-10 bottom-0 p-3 ${
            divHovered ? "text-white" : "text-transparent"
          }`}
        >
          {memberInfo}
        </p>
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-t from-[#000000b8] to-transparent opacity-0 transition duration-300 ease-in-out hover:opacity-70 rounded-3xl"></div>
      </div>

      <h4 className="font-semibold text-4xl my-2">{memberName}</h4>

      <p className="text-xl">{memberDesignation}</p>

      <img src={linkedinIcon} className="mx-0 px-0 mt-3" />
    </>
  );
};

export default WcTeamMembers;
