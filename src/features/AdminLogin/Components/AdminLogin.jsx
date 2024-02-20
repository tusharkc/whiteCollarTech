import React, { useState } from "react";
import { adminCredentials as adminCredentialsData } from "../../../data/adminCredentials";
import { useNavigate } from "react-router-dom";
import appPathName from "../../../data/appPathName";
import Snackbar from "@mui/material/Snackbar";
import { IconButton } from "@mui/material";
import { CloseCircleOutlined } from "@ant-design/icons";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [adminCredentials, setAdminCredentials] = useState({
    email: "",
    password: "",
  });

  const [openErrorSnackBar, setOpenErrorSnackBar] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenErrorSnackBar(false);
  };

  const handleFormSubmit = () => {
    const isVerifiedAdmin = adminCredentialsData?.find(
      (i) =>
        i.email === adminCredentials?.email &&
        i.password === adminCredentials?.password
    );

    if (isVerifiedAdmin) {
      navigate(appPathName.jobsDashboardPath);
    } else {
      setOpenErrorSnackBar(true);
    }
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseCircleOutlined fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <Snackbar
        open={openErrorSnackBar}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Invalid email or password"
        action={action}
      />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in as admin
            </h2>
          </div>
          <form
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              handleFormSubmit();
            }}
            className="mt-8 space-y-6"
          >
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>

                <input
                  onChange={(e) => {
                    setAdminCredentials({
                      ...adminCredentials,
                      email: e.target.value,
                    });
                  }}
                  value={adminCredentials.email}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  onChange={(e) => {
                    setAdminCredentials({
                      ...adminCredentials,
                      password: e.target.value,
                    });
                  }}
                  value={adminCredentials.password}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
