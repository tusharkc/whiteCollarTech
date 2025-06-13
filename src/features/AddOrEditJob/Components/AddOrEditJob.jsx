import { CloseCircleOutlined } from "@ant-design/icons";
import { IconButton } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import {
  useAddJobMutation,
  useEditJobMutation,
  useGetJobByIdQuery,
} from "../service/jobs.service";

const AddOrEditJob = () => {
  const { id } = useParams();
  const isEditingAJob = id ? true : false;
  const [addJob] = useAddJobMutation();
  const { data: existingJobData } = useGetJobByIdQuery(
    { jobId: id },
    { skip: !id }
  );
  const [editJob] = useEditJobMutation();
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    title: "",
    jobDescription: "",
    rolesAndResponsibilities: "",
    qualifications: "",
    minYearExperience: 0,
    maxYearExperience: 1,
    jobType: "Full-Time",
    city: "",
    jobCategory: "Development",
  });

  const [formHasError, setFormHasError] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setFormHasError(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEditorChange = (content, editorName) => {
    setFormState((prevState) => ({
      ...prevState,
      [editorName]: content,
    }));
  };

  const maxYearExperienceOptions = () => {
    const start = parseInt(formState.minYearExperience || 0, 10);
    return Array.from({ length: 51 - start }, (_, i) => (
      <option key={i + start} value={i + start}>
        {i + start}
      </option>
    ));
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const hasEmptyField = Object.values(formState).some(
      (value) => value === ""
    );

    if (hasEmptyField) {
      setFormHasError(true);
    } else if (isEditingAJob) {
      await editJob({ id: id, data: formState });
    } else {
      await addJob(formState);
    }

    navigate(-1);
    window.location.reload();
  };

  useEffect(() => {
    if (isEditingAJob) {
      Object.entries(existingJobData?.data || {}).forEach((formItem) => {
        setFormState((prevState) => ({
          ...prevState,
          [formItem[0]]: formItem[1],
        }));
      });
    }
  }, [existingJobData?.data]);

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseCircleOutlined fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <Snackbar
        open={formHasError}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Invalid or improper information provided"
        action={action}
      />

      <div className="container mx-auto py-8">
        <form onSubmit={onFormSubmit} className="space-y-12">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Job Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter job title"
              value={formState.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              Job Ciy
            </label>
            <input
              type="text"
              name="city"
              id="city"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter job City"
              value={formState.city}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label
              htmlFor="jobDescription"
              className="block text-sm font-medium text-gray-700"
            >
              Job Description
            </label>
            <ReactQuill
              value={formState.jobDescription}
              onChange={(content) =>
                handleEditorChange(content, "jobDescription")
              }
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="rolesAndResponsibilities"
              className="block text-sm font-medium text-gray-700"
            >
              Roles & Responsibilities
            </label>
            <ReactQuill
              value={formState.rolesAndResponsibilities}
              onChange={(content) =>
                handleEditorChange(content, "rolesAndResponsibilities")
              }
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="qualifications"
              className="block text-sm font-medium text-gray-700"
            >
              Qualifications
            </label>
            <ReactQuill
              value={formState.qualifications}
              onChange={(content) =>
                handleEditorChange(content, "qualifications")
              }
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex items-center justify-center space-x-8">
            <div className="w-6/12">
              <label
                htmlFor="minYearExperience"
                className="block text-sm font-medium text-gray-700"
              >
                Minimum Years of Experience
              </label>
              <select
                name="minYearExperience"
                id="minYearExperience"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={formState.minYearExperience}
                onChange={handleInputChange}
              >
                {Array.from({ length: 51 }, (_, i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-6/12">
              <label
                htmlFor="maxYearExperience"
                className="block text-sm font-medium text-gray-700"
              >
                Maximum Years of Experience
              </label>
              <select
                name="maxYearExperience"
                id="maxYearExperience"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={formState.maxYearExperience}
                onChange={handleInputChange}
              >
                {maxYearExperienceOptions()}

                {/* {Array.from({ length: 51 }, (_, i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))} */}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="jobType"
              className="block text-sm font-medium text-gray-700"
            >
              Job Type
            </label>
            <select
              name="jobType"
              id="jobType"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={formState.jobType}
              onChange={handleInputChange}
            >
              <option value="Full-Time">Full-time</option>
              <option value="Part-Time">Part-time</option>
              <option value="Freelancer">Freelancer</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="jobType"
              className="block text-sm font-medium text-gray-700"
            >
              Job Category
            </label>
            <select
              name="jobCategory"
              id="jobCategory"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={formState.jobCategory}
              onChange={handleInputChange}
            >
              <option value="Sales">Sales</option>
              <option value="Design">Design</option>
              <option value="Development">Development</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddOrEditJob;
