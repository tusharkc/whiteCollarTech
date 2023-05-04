import React from "react";
import ContactUsLeft from "./Components/ContactUsLeft";
import "./contactUsFormStyles.css";
import ContactUsRight from "./Components/ContactUsRight";

const ContactUsForm = () => {
  return (
    <div className="mx-36 mt-20">
      <div className="grid grid-cols-12 gap-24">
        <div className="col-span-4">
          <ContactUsLeft />
        </div>
        <div className="col-span-8 justify-self-end">
          <ContactUsRight />
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
