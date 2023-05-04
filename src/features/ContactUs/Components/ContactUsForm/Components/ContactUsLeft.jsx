import React from "react";

const ContactUsLeft = () => {
  return (
    <div>
      <h1 className="font-light text-5xl tracking-normal">
        So what <br /> happens next?
      </h1>
      <p className="text-lg mt-2 font-light">
        We follow a specific process when it comes to our interactions.
      </p>

      <ul className="contactUsLeftStepsContainer mt-16">
        <li className="contactUsLeftStepsItem">
          <p className="font-semibold text-[22px]">1. We’ll reach out!</p>
          <p className="font-light text-sm mt-4 max-w-[308px]">
            Once you fill up the form on this page, we will go through your
            message to understand your perspective and reach out to you for our
            first introductory call.
          </p>
        </li>
        <li className="contactUsLeftStepsItem my-16">
          <p className="font-semibold text-[22px]">2. More Conversations</p>
          <p className="font-light text-sm mt-4 max-w-[308px]">
            After having the initial conversation, we’ll have a better idea of
            the challenges faced by you and your requirements for which we will
            connect again to discuss solutions.
          </p>
        </li>
        <li className="contactUsLeftStepsItem">
          <p className="font-semibold text-[22px]">3. We’re already friends!</p>
          <p className="font-light text-sm mt-4 max-w-[308px]">
            Once our solutions meet your requirements, we’ll onboard you and
            start a new working relationship.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ContactUsLeft;
