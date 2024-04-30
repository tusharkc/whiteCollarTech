import React from "react";
import { Footer, Header } from "../../../Components";
import HomePageCTA from "./HomePageCTA/HomePageCTA";
import HomePageHeader from "./HomePageHeader/HomePageHeader";
import PartnerWithUs from "./PartnerWithUs/PartnerWithUs";
import WCSellingPoints from "./SellingPoints/WCSellingPoints";
import Testimonial from "./Testimonial/Testimonial";
import WCAchivment from "./WCAchievement/WCAchievement";
import WCKPI from "./WCKPI/WCKPI";
import WCStory from "./WCStory/WCStory";

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
      <Footer />
    </>
  );
};

export default HomePage;
