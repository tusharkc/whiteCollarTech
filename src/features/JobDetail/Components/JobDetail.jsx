import React from "react";
import { useParams } from "react-router-dom";
import { Footer, Header } from "../../../Components";
import { useGetCareerByIdQuery } from "../services/jobDetail.service";
import JobApply from "./JobApply/JobApply";
import JobDescription from "./JobDescription/JobDescription";
import JobDetailBanner from "./JobDetailBanner/JobDetailBanner";

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
