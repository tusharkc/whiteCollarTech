import { configureStore } from "@reduxjs/toolkit";
import { jobApi } from "./features/AddOrEditJob/service/jobs.service";
import { adminUserJobs } from "./features/AdminJobs/service/adminJob.service";
import { careerListingApi } from "./features/Careers/service/jobListing.service";
import { adminUserJobApplications } from "./features/JobApplications/service/jobApplications.service";
import { jobDetailApi } from "./features/JobDetail/services/jobDetail.service";
import appAuthorizedUserSlice from "./services/appAuthorizedUser.slice";
import { appUserApi } from "./services/user.services";

export const store = configureStore({
  reducer: {
    appAuthorizedUserSlice: appAuthorizedUserSlice,
    [appUserApi.reducerPath]: appUserApi.reducer,
    [jobApi.reducerPath]: jobApi.reducer,
    [careerListingApi.reducerPath]: careerListingApi.reducer,
    [adminUserJobs.reducerPath]: adminUserJobs.reducer,
    [jobDetailApi.reducerPath]: jobDetailApi.reducer,
    [adminUserJobApplications.reducerPath]: adminUserJobApplications.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      appUserApi.middleware,
      jobApi.middleware,
      careerListingApi.middleware,
      adminUserJobs.middleware,
      jobDetailApi.middleware,
      adminUserJobApplications.middleware
    ),
});
