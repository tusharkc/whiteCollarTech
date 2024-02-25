import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import applyNowCta from "../../../../assets/images/applyNowCta.png";
import { appPathName } from "../../../../data";
import uploadResumeBg from "../../../../assets/images/uploadResumeBg.png";
import CloseIcon from "@mui/icons-material/Close";
import { useSendJobApplicationMutation } from "../../services/jobDetail.service";
import { IconButton, Snackbar } from "@mui/material";
import { CloseCircleOutlined } from "@ant-design/icons";

const JobApply = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [resumeFile, setResumeFile] = useState();
  const [formValue, setFormValue] = useState({
    candidateFirstName: "",
    candidateLastName: "",
    candidateEmail: "",
    candidateNumber: "",
    policyConsent: false,
  });
  const [formHasError, setFormHasError] = useState(false);
  const [uploadErrorMessage, setUploadErrorMessage] = useState("");
  const [sendApplication] = useSendJobApplicationMutation();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileSizeInMB = file.size / (1024 * 1024);
      const fileType = file.type;
      const validFileType = fileType === "application/pdf";
      const validFileSize = fileSizeInMB <= 5;

      if (!validFileType) {
        setUploadErrorMessage("Please upload a PDF file.");
        setFormHasError(true);
        return;
      }

      if (!validFileSize) {
        setUploadErrorMessage("The file size should not exceed  5MB.");
        setFormHasError(true);
        return;
      }

      setResumeFile(file);
      setUploadErrorMessage(""); // Clear the error message if the file is valid
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setFormHasError(false);
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

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const hasEmptyField = Object.values(formValue).some(
        (value) => value === "" || value === false
      );
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (
        hasEmptyField ||
        !resumeFile ||
        !emailRegex.test(formValue.candidateEmail)
      ) {
        setFormHasError(true);
      } else {
        const formData = new FormData();
        Object.entries(formValue).forEach((item) => {
          formData.append(item[0], item[1]);
        });
        formData.append("resume", resumeFile);
        formData.append("jobId", id);
        await sendApplication({ data: formData });
        navigate(appPathName.requestSubmittedSuccessPath);
      }
    } catch (error) {
      setFormHasError(true);
      console.log("error", error);
    }
  };

  return (
    <>
      <Snackbar
        ContentProps={{ sx: { background: "#eb4646" } }}
        open={formHasError}
        autoHideDuration={6000}
        onClose={handleClose}
        message={
          uploadErrorMessage || "Invalid or improper information provided"
        }
        action={action}
      />

      <input
        type="file"
        id="resumeUpload"
        name="resume"
        className="hidden"
        accept=".pdf,.doc,.docx"
        onChange={handleResumeUpload}
      />

      <div className="grid grid-cols-12" id="applyToJob">
        <img src={applyNowCta} className="hidden sm:block col-span-5" />

        <div className="col-span-12 sm:col-span-7 place-self-center">
          <div className="max-w-xl px-6">
            <h4 className="text-4xl sm:text-5xl font-light leading-snug text-center sm:text-left">
              Lorem ipsum dolor sit
            </h4>

            <p className="text-light mt-10 text-center sm:text-left px-6 sm:px-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <div
              style={{
                backgroundImage: `url(${uploadResumeBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="bg-gradient-to-r from-black to-white p-4 text-white rounded-lg mt-10 flex items-center justify-between"
            >
              <div>
                <p className="text-[1.5rem] py-2">
                  {!resumeFile ? "Upload Resume" : "Added successfully"}
                </p>
                <p className="font-light">
                  {!resumeFile ? (
                    <>Please upload your Resume or CV for evaluation.</>
                  ) : (
                    <>
                      You can delete and upload <br /> another document.
                    </>
                  )}
                </p>
              </div>

              {!resumeFile ? (
                <label
                  htmlFor="resumeUpload"
                  className="cursor-pointer text-[15px] whitespace-nowrap bg-white text-black p-2 rounded-lg"
                >
                  <button
                    onClick={() =>
                      document.getElementById("resumeUpload").click()
                    }
                  >
                    Upload Resume
                  </button>
                </label>
              ) : (
                <button
                  onClick={() => setResumeFile()}
                  className="cursor-pointer text-[15px] whitespace-nowrap bg-white text-black p-2 rounded-lg"
                >
                  {resumeFile?.name}
                  <CloseIcon />
                </button>
              )}
            </div>

            <form noValidate onSubmit={onFormSubmit}>
              <div className="grid grid-cols-12 gap-4 mt-16">
                <input
                  required
                  className="col-span-12 sm:col-span-6 outline-none border-b-2 border-black p-1 bg-transparent"
                  placeholder="First Name"
                  name="candidateFirstName"
                  id="candidateFirstName"
                  type="text"
                  value={formValue.candidateFirstName}
                  onChange={handleInputChange}
                />
                <input
                  required
                  className="col-span-12 sm:col-span-6 outline-none border-b-2 border-black p-1 bg-transparent"
                  placeholder="Last Name"
                  name="candidateLastName"
                  id="candidateLastName"
                  type="text"
                  value={formValue.candidateLastName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid grid-cols-12 gap-4 mt-16">
                <input
                  required
                  className="col-span-12 sm:col-span-6 outline-none border-b-2 border-black p-1 bg-transparent"
                  placeholder="Email"
                  name="candidateEmail"
                  id="candidateEmail"
                  type="text"
                  value={formValue.candidateEmail}
                  onChange={handleInputChange}
                />
                <input
                  required
                  className="col-span-12 sm:col-span-6 outline-none border-b-2 border-black p-1 bg-transparent"
                  placeholder="Phone Number"
                  name="candidateNumber"
                  id="candidateNumber"
                  onChange={handleInputChange}
                  value={formValue.candidateNumber}
                />
              </div>

              <label className="flex items-start justify-center gap-2 mt-14">
                <div>
                  <input
                    name="policyConsent"
                    id="policyConsent"
                    value={formValue.policyConsent}
                    required
                    onChange={(e) =>
                      setFormValue((prevState) => ({
                        ...prevState,
                        policyConsent: !formValue.policyConsent,
                      }))
                    }
                    style={{ height: "25px", width: "25px" }}
                    type="checkbox"
                  />
                </div>
                <span className="text-[#9F9F9F] font-light text-xs">
                  I have read and agree with White Collar’s stated Privacy
                  Policy and Terms Conditions
                </span>
              </label>

              <button
                type="submit"
                className="my-6 bg-[#0055A5] text-white hover:bg-[#141414] px-4 py-2 rounded-lg transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobApply;
