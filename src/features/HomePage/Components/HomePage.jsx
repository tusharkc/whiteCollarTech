import React from "react";
import { Footer, Header } from "../../../Components";
import WCStory from "./WCStory/WCStory";
import WCKPI from "./WCKPI/WCKPI";
import PartnerWithUs from "./PartnerWithUs/PartnerWithUs";
import WCAchivment from "./WCAchievement/WCAchievement";
import WCSellingPoints from "./SellingPoints/WCSellingPoints";
import Testimonial from "./Testimonial/Testimonial";
import HomePageCTA from "./HomePageCTA/HomePageCTA";
import HomePageHeader from "./HomePageHeader/HomePageHeader";

const HomePage = () => {
  return (
    <>
      <Header />
      <HomePageHeader />
      <WCStory />
      <WCKPI />
      <PartnerWithUs />
      <WCAchivment />
      <WCSellingPoints />
      <Testimonial />
      <HomePageCTA />
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
