import React from "react";
import AdminJobCard from "./AdminJobCard/AdminJobCard";
import { useNavigate } from "react-router-dom";
import appPathName from "../../../data/appPathName";
import { useGetAllJobsQuery } from "../service/adminJob.service";
import { useDispatch } from "react-redux";
import { logOutAdminUser } from "../../../services/appAuthorizedUser.slice";

const AdminJobsDashboard = () => {
  const navigate = useNavigate();
  const { data } = useGetAllJobsQuery({}, { refetchOnMountOrArgChange: true });
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto space-y-8 py-8">
      <div className="flex items-center justify-end space-x-4">
        <button
          className="bg-white border border-black p-3 rounded-lg"
          onClick={() => navigate(appPathName.addAJob)}
        >
          Add Job
        </button>

        <button
          className="bg-white border border-black p-3 rounded-lg"
          onClick={() => {
            dispatch(logOutAdminUser());
            navigate(appPathName.homePagePath);
          }}
        >
          Log out
        </button>
      </div>

      {data?.data?.length > 0 ? (
        data?.data?.map((job) => <AdminJobCard job={job} />)
      ) : (
        <p className="p-8 bg-neutral-200 rounded-lg shadow-xl border border-zinc-500">
          No job added yet
        </p>
      )}
    </div>
  );
};

export default AdminJobsDashboard;
