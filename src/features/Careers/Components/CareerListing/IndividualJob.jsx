import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { Link } from "react-router-dom";

const IndividualJob = ({ job }) => {
  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between py-8 border-b border-[#0055A5] space-y-4 md:space-y-0">
      {/* job description */}

      <div className="space-y-4 md:space-y-8">
        <p className="text-[1.8rem]"> {job?.title}</p>
        <div className="flex items-center space-x-4 md:space-x-16">
          <span className="flex items-center space-x-2 md:space-x-4">
            <WorkOutlineOutlinedIcon style={{ color: "#0054a4" }} />
            {job?.maxYearExperience > 0 ? (
              <p>
                {job?.minYearExperience} - {job?.maxYearExperience} Years
              </p>
            ) : (
              <p>No Experience Required</p>
            )}
          </span>
          <span className="flex items-center space-x-2 md:space-x-4">
            <LocationOnOutlinedIcon style={{ color: "#0054a4" }} />
            <p>{job?.city}</p>
          </span>
          <span className="flex items-center space-x-2 md:space-x-4">
            <AccessTimeOutlinedIcon style={{ color: "#0054a4" }} />
            <p>{job?.jobType}</p>
          </span>
        </div>
      </div>
      {/* view detail button */}

      <Link to={`/career/${job?.id}`}>
        <button className="bg-[#0055A5] text-white px-6 py-2 rounded-lg w-full">
          View Detail
        </button>
      </Link>
    </div>
  );
};

export default IndividualJob;
