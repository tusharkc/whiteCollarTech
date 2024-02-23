import { configureStore } from "@reduxjs/toolkit";
import appAuthorizedUserSlice from "./services/appAuthorizedUser.slice";
import { appUserApi } from "./services/user.services";
import { jobApi } from "./features/AddOrEditJob/service/jobs.service";
import { careerListingApi } from "./features/Careers/service/jobListing.service";

export const store = configureStore({
  reducer: {
    appAuthorizedUserSlice: appAuthorizedUserSlice,
    [appUserApi.reducerPath]: appUserApi.reducer,
    [jobApi.reducerPath]: jobApi.reducer,
    [careerListingApi.reducerPath]: careerListingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      appUserApi.middleware,
      jobApi.middleware,
      careerListingApi.middleware
    ),
});
