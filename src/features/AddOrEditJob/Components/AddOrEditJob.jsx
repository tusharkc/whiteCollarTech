import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { IconButton } from "@mui/material";
import { CloseCircleOutlined } from "@ant-design/icons";
import Snackbar from "@mui/material/Snackbar";
import { useAddJobMutation } from "../service/jobs.service";

const AddOrEditJob = () => {
  const { id } = useParams();
  const isEditingAJob = id ? true : false;
  const [addJob] = useAddJobMutation();

  const [formState, setFormState] = useState({
    title: "",
    jobDescription: "",
    rolesAndResponsibilities: "",
    qualifications: "",
    minYearExperience: "",
    maxYearExperience: "",
    jobType: "",
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
    const start = parseInt(formState.minYearExperience || 0, 10) + 1;
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

    console.log("formState", formState);
    if (hasEmptyField) {
      setFormHasError(true);
    } else {
      await addJob(formState);
    }
  };

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
              <option value="fulltime">Full-time</option>
              <option value="parttime">Part-time</option>
              <option value="freelancer">Freelancer</option>
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
