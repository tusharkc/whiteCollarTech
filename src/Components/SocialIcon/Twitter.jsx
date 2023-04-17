import React, { useState } from "react";

const Twitter = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      id="Component_26_9"
      data-name="Component 26 – 9"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="32"
      viewBox="0 0 30 32"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <g
        id="Group_685"
        data-name="Group 685"
        transform="translate(3.629 6.822)"
      >
        <g id="Group_684" data-name="Group 684">
          <g id="Group_683" data-name="Group 683">
            <path
              id="Path_1341"
              data-name="Path 1341"
              d="M1014.368,261.8a13.185,13.185,0,0,0,13.275-13.275q0-.3-.013-.6a9.5,9.5,0,0,0,2.328-2.416,9.3,9.3,0,0,1-2.679.735,4.683,4.683,0,0,0,2.052-2.581,9.353,9.353,0,0,1-2.963,1.133,4.67,4.67,0,0,0-7.951,4.255,13.246,13.246,0,0,1-9.617-4.875,4.669,4.669,0,0,0,1.444,6.229,4.634,4.634,0,0,1-2.113-.584c0,.02,0,.039,0,.06a4.668,4.668,0,0,0,3.743,4.574,4.661,4.661,0,0,1-2.107.08,4.671,4.671,0,0,0,4.359,3.241,9.362,9.362,0,0,1-5.795,2,9.465,9.465,0,0,1-1.113-.065,13.208,13.208,0,0,0,7.152,2.1"
              transform="translate(-1007.216 -243.321)"
              fill={hovered ? "#5A99EC" : "#fff"}
            />
          </g>
        </g>
      </g>
      <g
        id="Rectangle_71"
        data-name="Rectangle 71"
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

export default Twitter;
