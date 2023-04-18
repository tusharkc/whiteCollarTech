import React, { useState } from "react";

const Linkdin = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      id="Component_27_9"
      data-name="Component 27 – 9"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="32"
      viewBox="0 0 30 32"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <g id="Group_689" data-name="Group 689" transform="translate(5 5)">
        <g id="Group_688" data-name="Group 688">
          <g id="Group_687" data-name="Group 687">
            <path
              id="Path_1343"
              data-name="Path 1343"
              d="M817.634,456.963c.289-.324.526-.653.823-.933a4.515,4.515,0,0,1,3.247-1.282,7.518,7.518,0,0,1,2.042.249,3.991,3.991,0,0,1,2.834,2.981,12.5,12.5,0,0,1,.377,3.415c0,2.427-.007,4.854,0,7.282,0,.227-.063.287-.287.285q-1.875-.016-3.751,0c-.22,0-.268-.066-.267-.274q.01-3.465,0-6.929a6.232,6.232,0,0,0-.2-1.72,1.934,1.934,0,0,0-2.127-1.508,2.325,2.325,0,0,0-2.443,2.321,8.659,8.659,0,0,0-.066,1.083c0,2.246,0,4.492.006,6.738,0,.224-.055.29-.284.288q-1.889-.017-3.779,0c-.2,0-.26-.053-.26-.257q.009-6.67,0-13.341c0-.22.072-.271.28-.269q1.794.013,3.588,0c.22,0,.277.069.272.278C817.626,455.9,817.634,456.431,817.634,456.963Z"
              transform="translate(-806.134 -448.193)"
              fill={hovered ? "#4467AD" : "#fefefe"}
            />
            <path
              id="Path_1344"
              data-name="Path 1344"
              d="M790.8,463.015c0,2.2,0,4.4.005,6.6,0,.244-.06.318-.313.315-1.25-.014-2.5-.01-3.75,0-.2,0-.26-.049-.26-.256q.009-6.682,0-13.363c0-.184.044-.25.24-.249,1.268.008,2.536.011,3.8,0,.243,0,.277.092.276.3Q790.793,459.688,790.8,463.015Z"
              transform="translate(-786.149 -449.163)"
              fill={hovered ? "#4467AD" : "#fefefe"}
            />
            <path
              id="Path_1345"
              data-name="Path 1345"
              d="M790.2,432.049a2.5,2.5,0,1,1-2.492-2.484A2.5,2.5,0,0,1,790.2,432.049Z"
              transform="translate(-785.21 -429.565)"
              fill={hovered ? "#4467AD" : "#fefefe"}
            />
          </g>
        </g>
      </g>
      <g
        id="Rectangle_74"
        data-name="Rectangle 74"
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

export default Linkdin;
