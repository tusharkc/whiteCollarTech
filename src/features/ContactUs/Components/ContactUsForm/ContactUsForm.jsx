import React from "react";
import ContactUsLeft from "./Components/ContactUsLeft";
import "./contactUsFormStyles.css";
import ContactUsRight from "./Components/ContactUsRight";

const ContactUsForm = () => {
  return (
    <div className="mx-0 sm:mx-36 mt-0 sm:mt-20">
      <div className="grid grid-cols-12 gap-0 sm:gap-24">
        <div className="col-span-12 sm:col-span-4 order-2 sm:order-1 mt-20 sm:mt-0 px-6 sm:px-0">
          <ContactUsLeft />
        </div>
        <div className="col-span-12 sm:col-span-8 justify-self-end order-1 sm:order-2">
          <ContactUsRight />
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
