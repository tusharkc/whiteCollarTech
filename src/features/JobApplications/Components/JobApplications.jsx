import React from "react";
import { useGetJobApplicationsQuery } from "../service/jobApplications.service";
import { useParams } from "react-router-dom";
import IndividualJobApplicationCard from "./IndividualJobApplicationCard";

const JobApplications = () => {
  const { id } = useParams();
  const { data } = useGetJobApplicationsQuery({ query: { jobId: id } });

  return (
    <div className="container mx-auto p-6">
      {data?.data?.length > 0 ? (
        data?.data?.map((application) => (
          <IndividualJobApplicationCard
            application={application}
            key={application.id}
          />
        ))
      ) : (
        <>
          <p className="p-8 bg-neutral-200 rounded-lg shadow-xl border border-zinc-500">
            No application received yet.
          </p>
        </>
      )}
    </div>
  );
};

export default JobApplications;
