import React, { useState } from "react";
import homePageCta from "../../../../assets/images/homePageCTA.png";
import { useNavigate } from "react-router-dom";
import appPathName from "../../../../data/appPathName";
import { MessageModal } from "../../../../Components";

const HomePageCTA = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [msgVal, setMsgVal] = useState("");
  const onFormSubmit = (e) => {
    e.preventDefault();

    navigate(appPathName.requestSubmittedSuccessPath);
  };

  return (
    <>
      <div className="flex items-start">
        <img src={homePageCta} />

        <div className="max-w-xl mr-[140px] ml-[150px]">
          <h4 className="text-5xl font-light leading-snug">
            Get personalized assistance!
          </h4>

          <p className="text-light mt-10">
            We're excited for our first virtual meet but before we connect, we'd
            <br />
            love to know a little bit about you. Please fill out the form below.
          </p>

          <form onSubmit={onFormSubmit}>
            <div className="grid grid-cols-12 gap-4 mt-16">
              <input
                required
                className="col-span-6 outline-none border-b-2 border-black p-1 bg-transparent"
                placeholder="Full Name"
                name="fullName"
                id="fullName"
              />
              <input
                required
                className="col-span-6 outline-none border-b-2 border-black p-1 bg-transparent"
                placeholder="Phone Number"
                name="phoneNumber"
                id="phoneNumber"
              />
            </div>

            <input
              required
              name="email"
              id="email"
              placeholder="Email Address"
              className="my-20 active:outline-none focus:outline-none border-b-2 border-black p-2 min-w-full"
            />

            <textarea
              onClick={() => setOpen(true)}
              name="message"
              id="message"
              value={!open && msgVal}
              placeholder="Message (Optional)"
              className="active:outline-none focus:outline-none border-b-2 border-black min-w-full resize-none"
            />

            <label className="flex items-start justify-center gap-2 mt-14">
              <div>
                <input
                  required
                  style={{ height: "25px", width: "25px" }}
                  type="checkbox"
                />
              </div>
              <span className="text-[#9F9F9F] font-light ">
                I have read and agree with White Collar’s stated Privacy Policy
                and Terms Conditions
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

      <MessageModal
        open={open}
        setOpen={setOpen}
        msgVal={msgVal}
        setMsgVal={setMsgVal}
      />
    </>
  );
};

export default HomePageCTA;
