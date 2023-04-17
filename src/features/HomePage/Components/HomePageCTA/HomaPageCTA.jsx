import React from "react";
import homePageCta from "../../../../assets/images/homePageCTA.png";

const HomaPageCTA = () => {
  return (
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

        <form>
          <div>
            <div className="flex items-center gap-4 mt-16">
              <input
                name="fullName"
                id="fullName"
                placeholder="Full Name"
                className="active:outline-none focus:outline-none p-2 border-b-2 border-black max-w-[49%]"
              />
              <input
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Phonenumber"
                className="active:outline-none focus:outline-none p-2 border-b-2 border-black max-w-[49%]"
              />
            </div>

            <input
              name="email"
              id="email"
              placeholder="Email Address"
              className="my-20 active:outline-none focus:outline-none border-b-2 border-black p-2 min-w-full"
            />

            <input
              name="message"
              id="message"
              placeholder="Message (Optional)"
              className="active:outline-none focus:outline-none border-b-2 border-black min-w-full"
            />

            <label className="flex items-start justify-center gap-2 mt-14">
              <div>
                <input
                  style={{ height: "25px", width: "25px" }}
                  type="checkbox"
                />
              </div>
              <span className="text-[#9F9F9F] font-light ">
                I have read and agree with White Collar’s stated Privacy Policy
                and Terms Conditions
              </span>
            </label>

            <button className="my-12 bg-[#0055A5] text-white hover:bg-[#141414] px-4 py-2 rounded-lg transition-all">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomaPageCTA;