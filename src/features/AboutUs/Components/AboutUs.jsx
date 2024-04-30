import React from "react";
import { Footer, Header } from "../../../Components";
import AboutUsBanner from "./AboutUsBanner/AboutUsBanner";
import VisionMission from "./VisionMission/VisionMission";
import WCStory from "./WCStory/WCStory";
import WCTeam from "./WCTeam/WCTeam";
import WCTimeLine from "./WCTimeLine/WCTimeLine";

const AboutUs = () => {
  return (
    <>
      <Header />
      <AboutUsBanner />
      <div className="container mx-auto">
        <WCStory />
        <VisionMission />
        <WCTimeLine />
        <WCTeam />
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
