import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { appPathName } from "./data";
import {
  AboutUs,
  AddOrEditJob,
  AdminJobsDashboard,
  AdminLogin,
  Career,
  ContactUs,
  HomePage,
  JobApplications,
  JobDetail,
  RequestSubmittedPage,
} from "./features";
import { Provider } from "react-redux";
import { store } from "./store";
import "slick-carousel/slick/slick.css"; // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme styles

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
  {
    path: appPathName.adminLoginPath,
    element: <AdminLogin />,
  },
  {
    path: appPathName.jobsDashboardPath,
    element: <AdminJobsDashboard />,
  },
  {
    path: appPathName.addAJob,
    element: <AddOrEditJob />,
  },
  {
    path: appPathName.editJob,
    element: <AddOrEditJob />,
  },
  {
    path: appPathName.viewJobApplication,
    element: <JobApplications />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
