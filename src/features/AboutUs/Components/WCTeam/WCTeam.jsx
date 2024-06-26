import React from "react";
import wcTeamData from "../../../../data/wcTeamData";
import WcTeamMembers from "./components/WcTeamMembers";

const WCTeam = () => {
  return (
    <div className="mb-20 sm:mb-36 mx-0 sm:mx-36 px-6 sm:px-0">
      <h1 className="text-4xl sm:text-5xl font-light">
        The success you see, the faces you don’t!
      </h1>

      <p className="font-light text-lg mt-5 mb-12">
        Our organization is run by some extremely creative, talented, and
        <br className="hidden md:block" /> skilled individuals. Have a look and
        see for yourself!
      </p>

      <div className="grid grid-cols-12 gap-4">
        {wcTeamData.map((member, index) => (
          <div key={index} className="col-span-12 sm:col-span-4">
            <WcTeamMembers {...member} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WCTeam;
