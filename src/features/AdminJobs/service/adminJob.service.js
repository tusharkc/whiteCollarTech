import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminUserJobs = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BACKEND_BASE_URL}/api/job`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().appAuthorizedUserSlice.appToken;
      headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),

  reducerPath: "adminUserJobs",
  tagTypes: ["adminJobs"],

  endpoints: (builder) => ({
    getAllJobs: builder.query({
      query: () => ({
        url: "/getAllJobs",
      }),
      providesTags: ["adminJobs"],
    }),
  }),
});

export const { useGetAllJobsQuery } = adminUserJobs;
