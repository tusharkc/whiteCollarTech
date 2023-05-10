import React from "react";
import RequestSubmittedPageLeft from "./RequestSubmittedPageLeft";
import RequestSubmittedPageRight from "./RequestSubmittedPageRight";

const RequestSubmittedPage = () => {
  return (
    <div className="container mx-auto h-screen">
      <div className="mx-36 flex items-center justify-center h-full">
        <div className="grid grid-cols-12 place-items-center">
          <RequestSubmittedPageLeft />
          <RequestSubmittedPageRight />
        </div>
      </div>
    </div>
  );
};

export default RequestSubmittedPage;
