import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jobDetailApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BACKEND_BASE_URL}/api`,
  }),

  reducerPath: "jobDetailApi",
  tagTypes: ["jobDetail"],

  endpoints: (builder) => ({
    getCareerById: builder.query({
      query: ({ id }) => ({
        url: `/job/getCareerById/${id}`,
      }),
      providesTags: ["careerListing"],
    }),

    sendJobApplication: builder.mutation({
      query: ({ data }) => ({
        url: `/jobApplication/sendJobApplication`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetCareerByIdQuery, useSendJobApplicationMutation } =
  jobDetailApi;
