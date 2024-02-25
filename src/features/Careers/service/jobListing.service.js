import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const careerListingApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BACKEND_BASE_URL}/api/job`,
  }),

  reducerPath: "careerListingApi",
  tagTypes: ["careerListing"],

  endpoints: (builder) => ({
    getAllCareers: builder.query({
      query: ({ jobCategory }) => ({
        url: "/getAllCareers",
        params: { jobCategory },
      }),
      providesTags: ["careerListing"],
    }),
  }),
});

export const { useGetAllCareersQuery } = careerListingApi;
