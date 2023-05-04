import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { appPathName } from "./data";
import { AboutUs, ContactUs, HomePage } from "./features";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const router = createBrowserRouter([
  {
    path: appPathName.homePagePath,
    element: <HomePage />,
  },

  { path: appPathName.aboutUsPath, element: <AboutUs /> },

  { path: appPathName.contactUsPath, element: <ContactUs /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
