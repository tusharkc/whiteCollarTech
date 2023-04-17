import React from "react";
import wctLogoLight from "../../../assets/images/wctLogoWhite.svg";

const Footer = () => {
  return (
    <div className="bg-[#141414] text-white">
      <div className="mx-[140px] pt-24 py-8">
        <div className="grid grid-cols-12 gap-28">
          <div className="col-span-3 bg-red-200">
            <img src={wctLogoLight} />

            <p className="mt-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="col-span-9 bg-orange-300">Hello</div>
        </div>
      </div>

      <div style={{ height: "1px", backgroundColor: "white" }} />

      <div className="mx-[140px] flex items-center justify-between py-8">
        <p className="">Copyright © 2023 White Collar</p>

        <div>
          <p className="inline-block mx-9">Privacy Policy</p>
          <p className="inline-block">Terms & Services</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
