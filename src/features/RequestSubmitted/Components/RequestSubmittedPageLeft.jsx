import React from "react";
import { useNavigate } from "react-router-dom";

const RequestSubmittedPageLeft = () => {
  const navigate = useNavigate();

  return (
    <div className="col-span-12 sm:col-span-6">
      <h2 className="font-light text-5xl">Thank You!</h2>

      <p className="font-light mt-7 leading-7">
        We can’t wait to get started on our conversation and really appreciate
        you reaching out to us. We typically take 1 to 2 business days to get
        back to you. Meanwhile, we would love for you to explore our website,
        check out our other services as well as go through our socials.
      </p>
      <p className="font-light mt-5 leading-7">
        We believe this will get you familiar with us and you would be able to
        understand us a lot better. Feel free to ask us if you have any queries
        or questions. We are looking forward to speaking with you and are more
        than happy to answer any questions you may have.
      </p>

      <button
        onClick={() => navigate(-1)}
        className="my-12 bg-[#0055A5] text-white hover:bg-[#141414] px-4 py-2 rounded-lg transition-all"
      >
        Return To Previous Page
      </button>
    </div>
  );
};

export default RequestSubmittedPageLeft;
