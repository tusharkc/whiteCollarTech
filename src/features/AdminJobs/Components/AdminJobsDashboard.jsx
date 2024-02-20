import React from "react";
import AdminJobCard from "./AdminJobCard/AdminJobCard";
import { useNavigate } from "react-router-dom";
import appPathName from "../../../data/appPathName";

const dummyData = [
  {
    id: "0",
    title: "Computer System Analysts",
    jobType: "Full Time",
    experienceRequired: "2 - 5 Years",
    location: "Nazareth PA",
  },

  {
    id: "1",
    title: "Computer System Analysts",
    jobType: "Full Time",
    experienceRequired: "2 - 5 Years",
    location: "Nazareth PA",
  },

  {
    id: "2",
    title: "Computer System Analysts",
    jobType: "Full Time",
    experienceRequired: "2 - 5 Years",
    location: "Nazareth PA",
  },
];

const AdminJobsDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto space-y-8 py-8">
      <div className="flex items-center justify-end">
        <button
          className="bg-white border border-black p-3 rounded-lg"
          onClick={() => navigate(appPathName.addAJob)}
        >
          Add Job
        </button>
      </div>

      {dummyData?.map((job) => (
        <AdminJobCard job={job} />
      ))}
    </div>
  );
};

export default AdminJobsDashboard;
