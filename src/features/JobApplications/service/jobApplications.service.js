import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminUserJobApplications = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BACKEND_BASE_URL}/api/jobApplication`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().appAuthorizedUserSlice.appToken;
      headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),

  reducerPath: "adminUserJobApplications",
  tagTypes: ["adminJobsApplications"],

  endpoints: (builder) => ({
    getJobApplications: builder.query({
      query: ({ query }) => ({
        url: "/getJobApplications",
        params: query,
      }),
      providesTags: ["adminJobsApplications"],
    }),

    deleteJobApplication: builder.mutation({
      query: ({ applicationId }) => ({
        url: `/deleteJobApplication/${applicationId}`,
        method: "DELETE",
      }),

      invalidatesTags: ["adminJobsApplications"],
    }),
  }),
});

export const { useGetJobApplicationsQuery, useDeleteJobApplicationMutation } =
  adminUserJobApplications;
