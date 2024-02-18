import React from "react";
import IndividualJob from "./IndividualJob";

const Jobs = ({ jobsData = [] }) => {
  return (
    <>
      {jobsData?.map((job) => (
        <IndividualJob key={job.id} job={job} />
      ))}
    </>
  );
};

export default Jobs;
