import React from "react";
import { Footer, Header } from "../../../Components";
import AboutUsBanner from "./AboutUsBanner/AboutUsBanner";
import WCStory from "./WCStory/WCStory";
import VisionMission from "./VisionMission/VisionMission";
import WCTimeLine from "./WCTimeLine/WCTimeLine";
import WCTeam from "./WCTeam/WCTeam";

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
