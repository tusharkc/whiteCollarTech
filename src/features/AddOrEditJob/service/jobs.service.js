import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jobApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BACKEND_BASE_URL}/api/job`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().appAuthorizedUserSlice.appToken;

      headers.set("authorization", `Bearer ${token}`);

      return headers;
    },
  }),

  reducerPath: "jobApi",
  tagTypes: ["jobs"],

  endpoints: (builder) => ({
    getAllJobs: builder.query({
      query: () => ({
        url: "/getAllJobs",
      }),
      providesTags: ["jobs"],
    }),

    getJobById: builder.query({
      query: ({ jobId }) => ({
        url: `/getJobById/${jobId}`,
      }),
      providesTags: ["jobs"],
    }),

    addJob: builder.mutation({
      query: (data) => ({
        url: "/addJob",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["jobs"],
    }),

    editJob: builder.mutation({
      query: ({ id, data }) => ({
        url: `/editJob/${id}`,
        method: "PATCH",
        body: data,
      }),

      invalidatesTags: ["jobs"],
    }),

    deleteJob: builder.mutation({
      query: ({ id }) => ({
        url: `/deleteJob/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["jobs"],
    }),
  }),
});

export const {
  useGetAllJobsQuery,
  useAddJobMutation,
  useGetJobByIdQuery,
  useEditJobMutation,
  useDeleteJobMutation,
} = jobApi;
