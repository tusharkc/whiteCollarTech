import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import applyNowCta from "../../../../assets/images/applyNowCta.png";
import { appPathName } from "../../../../data";
import uploadResumeBg from "../../../../assets/images/uploadResumeBg.png";
import CloseIcon from "@mui/icons-material/Close";

const JobApply = () => {
  const navigate = useNavigate();
  const [resumeFile, setResumeFile] = useState();

  const handleResumeUpload = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    navigate(appPathName.requestSubmittedSuccessPath);
  };

  return (
    <>
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

            <form onSubmit={onFormSubmit}>
              <div className="grid grid-cols-12 gap-4 mt-16">
                <input
                  required
                  className="col-span-12 sm:col-span-6 outline-none border-b-2 border-black p-1 bg-transparent"
                  placeholder="First Name"
                  name="firstName"
                  id="firstName"
                />
                <input
                  required
                  className="col-span-12 sm:col-span-6 outline-none border-b-2 border-black p-1 bg-transparent"
                  placeholder="Last Name"
                  name="lastName"
                  id="lastName"
                />
              </div>

              <div className="grid grid-cols-12 gap-4 mt-16">
                <input
                  required
                  className="col-span-12 sm:col-span-6 outline-none border-b-2 border-black p-1 bg-transparent"
                  placeholder="Email"
                  name="email"
                  id="email"
                />
                <input
                  required
                  className="col-span-12 sm:col-span-6 outline-none border-b-2 border-black p-1 bg-transparent"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  id="phoneNumber"
                />
              </div>

              <label className="flex items-start justify-center gap-2 mt-14">
                <div>
                  <input
                    required
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
