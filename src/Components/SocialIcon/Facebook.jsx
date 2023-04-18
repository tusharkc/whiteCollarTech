import React, { useState } from "react";

const Facebook = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      id="Component_25_9"
      data-name="Component 25 – 9"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="32"
      viewBox="0 0 30 32"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <g id="Group_690" data-name="Group 690" transform="translate(8.61 3.979)">
        <path
          id="Path_1347"
          data-name="Path 1347"
          d="M135.926,247.734l.662-4.318h-4.143v-2.8a2.159,2.159,0,0,1,2.434-2.333h1.884V234.6a22.98,22.98,0,0,0-3.344-.292c-3.412,0-5.643,2.068-5.643,5.812v3.291h-3.793v4.318h3.793v10.439a15.1,15.1,0,0,0,4.668,0V247.734Z"
          transform="translate(-123.984 -234.313)"
          fill={hovered ? "#4676ED" : "#fff"}
        />
      </g>
      <g
        id="Rectangle_72"
        data-name="Rectangle 72"
        fill="none"
        stroke="#707070"
        stroke-width="1"
        opacity="0"
      >
        <rect width="30" height="32" stroke="none" />
        <rect x="0.5" y="0.5" width="29" height="31" fill="none" />
      </g>
    </svg>
  );
};

export default Facebook;
