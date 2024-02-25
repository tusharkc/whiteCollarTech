import React from "react";
import { useDeleteJobApplicationMutation } from "../service/jobApplications.service";

const IndividualJobApplicationCard = ({ application }) => {
  const [declineApplication] = useDeleteJobApplicationMutation();

  return (
    <div className="flex items-center justify-between py-8 border-b border-[#0055A5]">
      <div className="space-y-8">
        <p className="text-[1.8rem]">
          {application?.candidateFirstName} {application?.candidateLastName}
        </p>
        <div className="flex items-center space-x-16">
          <span className="flex items-center space-x-4">
            <p>{application?.candidateEmail}</p>
          </span>
          <span className="flex items-center space-x-4">
            <p>{application?.candidateNumber}</p>
          </span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button
          className="bg-[#0055A5] text-white px-6 py-2 rounded-lg"
          onClick={async () => {
            window.open(application?.candidateResumeFilePath, "_blank");
          }}
        >
          Download Resume
        </button>

        <button
          className="bg-red-500 text-white px-6 py-2 rounded-lg"
          onClick={async () => {
            await declineApplication({ applicationId: application.id });
          }}
        >
          Decline Application
        </button>
      </div>
    </div>
  );
};

export default IndividualJobApplicationCard;
