import React from "react";
import { Footer, Header } from "../../../Components";
import CareerAdvantageGrid from "./CareerAdvantageGrid/CareerAdvantageGrid";
import CareerBanner from "./CareerBanner/CareerBanner";
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
