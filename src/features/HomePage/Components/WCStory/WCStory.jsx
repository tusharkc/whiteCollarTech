import React from "react";
import WCStoryLeft from "./WCStoryLeft";
import WCStoryRight from "./WCStoryRight";

const WCStory = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 mx-4 sm:mx-[140px]">
        <WCStoryLeft />
        <WCStoryRight />
      </div>
    </div>
  );
};

export default WCStory;
