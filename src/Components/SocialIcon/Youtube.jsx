import React, { useState } from "react";

const Youtube = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <svg
      id="Component_28_9"
      data-name="Component 28 – 9"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="32"
      viewBox="0 0 30 32"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <g id="Group_686" data-name="Group 686" transform="translate(3.286 7.8)">
        <path
          id="Path_1342"
          data-name="Path 1342"
          d="M577.938,443.525a2.934,2.934,0,0,0-2.071-2.071c-1.827-.49-9.153-.49-9.153-.49s-7.326,0-9.153.49a2.934,2.934,0,0,0-2.071,2.071,32.717,32.717,0,0,0,0,11.278,2.935,2.935,0,0,0,2.071,2.071c1.827.489,9.153.489,9.153.489s7.326,0,9.153-.489a2.934,2.934,0,0,0,2.071-2.071,32.717,32.717,0,0,0,0-11.278Zm-13.567,9.153V445.65l6.087,3.514Z"
          transform="translate(-555 -440.964)"
          fill={hovered ? "#DA0000" : "#fff"}
        />
      </g>
      <g
        id="Rectangle_75"
        data-name="Rectangle 75"
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

export default Youtube;
