import bannerImage from "../../../../assets/images/jobDetailBanner.png";
import React from "react";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

const scrollSectionInView = (sectionName) => {
  setTimeout(() => {
    document
      .getElementById(sectionName)
      ?.scrollIntoView({ behavior: "smooth" });
  }, 400);
};

const JobDetailBanner = () => {
  return (
    <div className="relative">
      <img
        src={bannerImage}
        alt=""
        className="w-full h-[70vh] sm:h-auto object-cover"
      />

      <div className="absolute inset-0 flex flex-col text-white justify-center container mx-[140px]">
        <div className="">
          <div className="flex items-center">
            <p className="text-lg md:text-base max-w-prose text-center text-[#818181]">
              Career
            </p>
            <ChevronRightOutlinedIcon className="mx-4 text-[#818181]" />
            <p className="text-lg md:text-base max-w-prose text-center">
              UI/UX Designer
            </p>
          </div>

          <p className="text-[2.5rem] mt-20">UI/UX Designer</p>
          <p className="text-lg max-w-xl my-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <button
            className="bg-white text-black py-2 px-4 rounded-lg"
            onClick={() => scrollSectionInView("applyToJob")}
          >
            Apply for UI/UX Designer
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetailBanner;
