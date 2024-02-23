import React from "react";
import { Footer, Header } from "../../../Components";
import JobDetailBanner from "./JobDetailBanner/JobDetailBanner";
import JobApply from "./JobApply/JobApply";
import JobDescription from "./JobDescription/JobDescription";
import { useGetCareerByIdQuery } from "../../Careers/service/jobListing.service";
import { useParams } from "react-router-dom";

const JobDetail = () => {
  const { id } = useParams();
  const { data } = useGetCareerByIdQuery({ id });

  return (
    <>
      <Header />
      <JobDetailBanner jobData={data?.data} />
      <JobDescription jobData={data?.data} />
      <JobApply />
      <Footer />
    </>
  );
};

export default JobDetail;
