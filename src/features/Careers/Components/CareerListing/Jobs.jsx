import React from "react";
import IndividualJob from "./IndividualJob";

const Jobs = ({ jobsData = [] }) => {
  return (
    <>
      {jobsData.length > 0 ? (
        jobsData?.map((job) => <IndividualJob key={job.id} job={job} />)
      ) : (
        <p className="p-4 rounded-lg bg-slate-200 border border-black">
          No job yet
        </p>
      )}
    </>
  );
};

export default Jobs;
