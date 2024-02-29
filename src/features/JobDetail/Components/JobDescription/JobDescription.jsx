import React, { useEffect, useRef } from "react";
import "react-quill/dist/quill.snow.css";
import parse from "html-react-parser";

const JobDescription = ({ jobData }) => {
  const jobDescriptionContainerRef = useRef(null);
  const rolesAndResponsibilitiesContainerRef = useRef(null);
  const qualificationsContainerRef = useRef(null);

  useEffect(() => {
    if (jobDescriptionContainerRef.current && jobData?.jobDescription) {
      const container = jobDescriptionContainerRef.current;
      setTimeout(() => {
        container
          .querySelectorAll("h1")
          .forEach((el) => el.classList.add("custom-h1"));
        container
          .querySelectorAll("h2")
          .forEach((el) => el.classList.add("custom-h2"));
        container
          .querySelectorAll("h3")
          .forEach((el) => el.classList.add("custom-h3"));
        container
          .querySelectorAll("ol")
          .forEach((el) => el.classList.add("custom-ol"));
        container
          .querySelectorAll("ul")
          .forEach((el) => el.classList.add("custom-ul"));
      }, 0);
    }
  }, [jobData?.jobDescription]);

  useEffect(() => {
    if (
      rolesAndResponsibilitiesContainerRef.current &&
      jobData?.rolesAndResponsibilities
    ) {
      const container = rolesAndResponsibilitiesContainerRef.current;
      setTimeout(() => {
        container
          .querySelectorAll("h1")
          .forEach((el) => el.classList.add("custom-h1"));
        container
          .querySelectorAll("h2")
          .forEach((el) => el.classList.add("custom-h2"));
        container
          .querySelectorAll("h3")
          .forEach((el) => el.classList.add("custom-h3"));
        container
          .querySelectorAll("ol")
          .forEach((el) => el.classList.add("custom-ol"));
        container
          .querySelectorAll("ul")
          .forEach((el) => el.classList.add("custom-ul"));
      }, 0);
    }
  }, [jobData?.rolesAndResponsibilities]);

  useEffect(() => {
    if (qualificationsContainerRef.current && jobData?.qualifications) {
      const container = qualificationsContainerRef.current;
      setTimeout(() => {
        container
          .querySelectorAll("h1")
          .forEach((el) => el.classList.add("custom-h1"));
        container
          .querySelectorAll("h2")
          .forEach((el) => el.classList.add("custom-h2"));
        container
          .querySelectorAll("h3")
          .forEach((el) => el.classList.add("custom-h3"));
        container
          .querySelectorAll("ol")
          .forEach((el) => el.classList.add("custom-ol"));
        container
          .querySelectorAll("ul")
          .forEach((el) => el.classList.add("custom-ul"));
      }, 0);
    }
  }, [jobData?.qualifications]);

  return (
    <div className="container mx-auto flex items-center justify-center">
      <div className="py-16 px-4 md:px-0 md:mx-[80px] space-y-24">
        {/* Job Overview */}
        <div className="py-16" ref={jobDescriptionContainerRef}>
          {parse(`${jobData?.jobDescription}`)}
        </div>

        {/* Roles and Responsibilities*/}

        <div className="space-y-6">
          <p className="text-[2.5rem] font-light">Roles + Responsibilities:</p>

          <div className="py-16" ref={rolesAndResponsibilitiesContainerRef}>
            {parse(`${jobData?.rolesAndResponsibilities}`)}
          </div>
        </div>
        {/* Qualification */}
        <div className="space-y-6">
          <p className="text-[2.5rem] font-light">
            What it takes to be one of us!
          </p>

          <div className="py-16" ref={qualificationsContainerRef}>
            {parse(`${jobData?.qualifications}`)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
