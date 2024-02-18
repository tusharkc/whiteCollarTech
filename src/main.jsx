import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { appPathName } from "./data";
import {
  AboutUs,
  Career,
  ContactUs,
  HomePage,
  JobDetail,
  RequestSubmittedPage,
} from "./features";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const router = createBrowserRouter([
  {
    path: appPathName.homePagePath,
    element: <HomePage />,
  },

  {
    path: appPathName.aboutUsPath,
    element: <AboutUs />,
  },

  {
    path: appPathName.contactUsPath,
    element: <ContactUs />,
  },
  {
    path: appPathName.requestSubmittedSuccessPath,
    element: <RequestSubmittedPage />,
  },
  {
    path: appPathName.careerPath,
    element: <Career />,
  },
  {
    path: appPathName.jobDetailPath,
    element: <JobDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
