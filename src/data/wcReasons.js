import clientIcon from "../assets/icons/clientSegmentIcon.svg";
import employeeSegmentIcon from "../assets/icons/employeeSegmentIcon.svg";

const wcReasons = [
  {
    segmentIcon: clientIcon,
    segmentName: "Clients",
    reasonsArr: [
      {
        title: "White Glove Delivery",
        description:
          "We provide assistance starting from resume to relocation with consistent support for ensuring a seamless HR workflow.",
      },
      {
        title: "Relevant Experience",
        description:
          "Our team comes with relevant industry experience that spans multiple domains, functions, and technologies.",
      },
      {
        title: "Process Driven",
        description:
          "We are process driven and a perfect combination of a small and large enterprise. We are professionals first and recruiters second.",
      },
    ],
  },
  {
    segmentIcon: employeeSegmentIcon,
    segmentName: "Employees",
    reasonsArr: [
      {
        title: "Smooth Learning Curve",
        description:
          "You get professional mentorship from industry experts directly from the start to ensure you are set up for success.",
      },
      {
        title: "Upskilling Opportunities",
        description:
          "You get a chance to showcase as well as grow your pool of skills by working on top-notch projects.",
      },
      {
        title: "The Whole Package",
        description:
          "You get opportunities to grow your skills and a chance to work with Fortune 500 clients along with additional perks.",
      },
    ],
  },
];

export default wcReasons;
