import React from "react";
import { Footer, Header } from "../../../Components";
import CareerBanner from "./CareerBanner/CareerBanner";
import CareerAdvantageGrid from "./CareerAdvantageGrid/CareerAdvantageGrid";
import CareerListing from "./CareerListing/CareerListing";

const Career = () => {
  return (
    <>
      <Header />
      <CareerBanner />
      <CareerAdvantageGrid />
      <CareerListing />
      <Footer />
    </>
  );
};

export default Career;
