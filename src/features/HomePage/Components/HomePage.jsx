import React from "react";
import { Footer, Header } from "../../../Components";
import WCStory from "./WCStory/WCStory";
import WCKPI from "./WCKPI/WCKPI";
import PartnerWithUs from "./PartnerWithUs/PartnerWithUs";
import WCAchivment from "./WCAchivement/WCAchivment";
import WCSellingPoints from "./SelllingPoints/WCSellingPoints";
import Testimonial from "./Testimonial/Testimonial";

const HomePage = () => {
  return (
    <>
      <Header />
      <WCStory />
      <WCKPI />
      <PartnerWithUs />
      <WCAchivment />
      <WCSellingPoints />
      <Testimonial />
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
