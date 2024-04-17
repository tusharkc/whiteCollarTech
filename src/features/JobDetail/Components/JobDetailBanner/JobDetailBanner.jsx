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

const JobDetailBanner = ({ jobData }) => {
  const htmlString = jobData?.jobDescription || "";
  const strippedString = htmlString.replace(/<[^>]*>?/gm, ""); // Remove HTML tags
  const first100Chars = strippedString.slice(0, 100); // Get first  100 characters

  return (
    <div className="relative">
      <img
        src={bannerImage}
        alt=""
        className="w-full h-[70vh] sm:h-auto object-cover"
      />

      <div className="absolute inset-0 flex flex-col text-white justify-center container px-4 md:px-0 md:mx-[140px]">
        <div className="">
          <div className="flex items-center">
            <p className="text-lg md:text-base max-w-prose text-center text-[#818181]">
              Career
            </p>
            <ChevronRightOutlinedIcon className="mx-4 text-[#818181]" />
            <p className="text-lg md:text-base max-w-prose text-center">
              {jobData?.title}
            </p>
          </div>

          <p className="text-[1.5rem] md:text-[2.5rem] mt-20">
            {jobData?.title}
          </p>
          <p className="text-lg max-w-xl my-6">{first100Chars}...</p>

          <button
            className="bg-white text-black py-2 px-4 rounded-lg"
            onClick={() => scrollSectionInView("applyToJob")}
          >
            Apply for {jobData?.title}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetailBanner;
