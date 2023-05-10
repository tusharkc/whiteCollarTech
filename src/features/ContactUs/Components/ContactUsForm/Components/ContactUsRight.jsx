import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { appPathName } from "../../../../../data";
import { MessageModal } from "../../../../../Components";

const ContactUsRight = () => {
  const navigate = useNavigate();
  const onFormSubmit = (e) => {
    e.preventDefault();

    navigate(appPathName.requestSubmittedSuccessPath);
  };

  const [open, setOpen] = useState(false);
  const [msgVal, setMsgVal] = useState("");

  return (
    <>
      <div className="bg-[#F7F7F7] max-w-2xl rounded-2xl">
        <div className="p-7">
          <h2 className="font-light text-[45px] mb-4">
            Let’s get to know <br /> each other?
          </h2>
          <p className="font-light">
            We’d love to know more about you and talk about how we can help you.
            All you have to do is take the first step of filling out this form
            for us and we’ll reach out very soon.
          </p>

          <form onSubmit={onFormSubmit}>
            <div className="mt-16">
              <div className="grid grid-cols-12 gap-4">
                <input
                  className="col-span-6 outline-none border-b-2 border-black p-1 bg-transparent"
                  placeholder="Full Name"
                />
                <input
                  className="col-span-6 outline-none border-b-2 border-black p-1 bg-transparent"
                  placeholder="Phone Number"
                />
              </div>
              <input
                className="outline-none border-b-2 border-black p-1 bg-transparent w-full my-16"
                placeholder="Email"
              />
              <textarea
                onClick={() => setOpen(true)}
                value={!open && msgVal}
                className="outline-none border-b-2 border-black p-1 bg-transparent w-full"
                placeholder="Message (Optional)"
              />

              <label className="flex items-start justify-center my-12">
                <div>
                  <input
                    style={{ height: "22px", width: "22px" }}
                    type="checkbox"
                  />
                </div>
                <span className="text-[#9F9F9F] font-ligh ml-4">
                  I have read and agree with White Collar’s stated Privacy
                  Policy and Terms Conditions
                </span>
              </label>

              <button
                type="submit"
                className="bg-[#0055A5] text-white hover:bg-[#141414] px-4 py-2 rounded-lg transition-all"
              >
                Submit
              </button>
            </div>
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

export default ContactUsRight;
