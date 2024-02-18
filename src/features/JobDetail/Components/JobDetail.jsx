import React from "react";
import { Footer, Header } from "../../../Components";
import JobDetailBanner from "./JobDetailBanner/JobDetailBanner";
import JobApply from "./JobApply/JobApply";
import JobDescription from "./JobDescription/JobDescription";

const JobDetail = () => {
  return (
    <>
      <Header />
      <JobDetailBanner />
      <JobDescription />
      <JobApply />
      <Footer />
    </>
  );
};

export default JobDetail;
