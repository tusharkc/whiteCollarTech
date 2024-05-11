import React from "react";
import { Footer, Header } from "../../../Components";
import ContactUsBanner from "./ContactUsBanner/ContactUsBanner";
import ContactUsForm from "./ContactUsForm/ContactUsForm";
import WcLocations from "./WcLocations/WcLocations";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <ContactUsBanner />

      <div className="container mx-auto">
        <ContactUsForm />
        <WcLocations />
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
