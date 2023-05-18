import React from "react";
import wcStoryVideo from "../../../../assets/videos/wcStoryVideo.mp4";

const WCStoryRight = () => {
  return (
    <div className="col-span-12 sm:col-span-6 flex items-center justify-end">
      <video
        width="474"
        height="285"
        className="object-cover"
        controls={false}
        muted
        loop
        playsInline
        autoPlay={true}
      >
        <source defer src={wcStoryVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default WCStoryRight;
