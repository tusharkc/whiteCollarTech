import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageModal } from "../../../../Components";
import homePageCta from "../../../../assets/images/homePageCTA.png";
import appPathName from "../../../../data/appPathName";
import { useSendMessageMutation } from "../../../../services/contact.services";

const HomePageCTA = () => {
  const navigate = useNavigate();
  const [sendMessage] = useSendMessageMutation();
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    agreeToTerms: "",
  });

  const [open, setOpen] = useState(false);
  const [msgVal, setMsgVal] = useState("");

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const formDataPayload = {
      fullName: formData.name,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      message: msgVal,
      agreeToTerms: true,
    };

    try {
      await sendMessage(formDataPayload).unwrap();
      navigate(appPathName.requestSubmittedSuccessPath);
    } catch (error) {}

    navigate(appPathName.requestSubmittedSuccessPath);
  };

  return (
    <>
      <div id="homePageContact" className="grid grid-cols-12">
        <img src={homePageCta} className="hidden sm:block col-span-5" />

        <div className="col-span-12 sm:col-span-7 place-self-center">
          <div className="max-w-xl px-6">
            <h4 className="text-4xl sm:text-5xl font-light leading-snug text-center sm:text-left">
              Get personalized assistance!
            </h4>

            <p className="text-light mt-10 text-center sm:text-left px-6 sm:px-0">
              We're excited for our first virtual meet but before we connect,
              we'd
              <br className="hidden sm:block" />
              love to know a little bit about you. Please fill out the form
              below.
            </p>

            <form onSubmit={onFormSubmit}>
              <div className="mt-16">
                <div className="grid grid-cols-12 gap-4">
                  <input
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="col-span-6 outline-none border-b-2 border-black p-1 bg-transparent"
                    placeholder="Full Name"
                  />
                  <input
                    required
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, phoneNumber: e.target.value })
                    }
                    className="col-span-6 outline-none border-b-2 border-black p-1 bg-transparent"
                    placeholder="Phone Number"
                  />
                </div>
                <input
                  required
                  className="outline-none border-b-2 border-black p-1 bg-transparent w-full my-16"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <textarea
                  onClick={() => setOpen(true)}
                  value={!open && msgVal}
                  className="outline-none border-b-2 border-black p-1 bg-transparent w-full resize-none"
                  placeholder="Message (Optional)"
                />

                <label className="flex items-start justify-center my-12">
                  <div>
                    <input
                      value={formData.agreeToTerms}
                      required
                      style={{ height: "22px", width: "22px" }}
                      type="checkbox"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          agreeToTerms: e.target.value,
                        })
                      }
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
