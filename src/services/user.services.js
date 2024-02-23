import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appUserApi = createApi({
  reducerPath: "appUserApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BACKEND_BASE_URL}/api/user`,
  }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: "/signUp",
        method: "POST",
        body: data,
      }),
    }),
    logIn: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSignUpMutation, useLogInMutation } = appUserApi;
