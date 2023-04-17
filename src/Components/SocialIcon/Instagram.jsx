import React, { useState } from "react";
import instagram from "../../assets/icons/instagram.svg";
import instagramHovered from "../../assets/icons/instagramHovered.svg";

const Instagram = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src={hovered ? instagramHovered : instagram} />
      </div>
    </>
  );
};

export default Instagram;
