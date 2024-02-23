import { createSlice } from "@reduxjs/toolkit";
import { appUserApi } from "./user.services";

const initialState = {
  appToken: localStorage.getItem("appToken") || "",
  user: JSON.parse(localStorage.getItem("appUser")) || {},
};

export const appAuthorizedUser = createSlice({
  name: "appAuthorizedUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        appUserApi.endpoints.signUp.matchFulfilled,
        (state, action) => {
          state.appToken = action.payload.token;
          state.user = action.payload.user;
          localStorage.setItem("appToken", action.payload.token);
          localStorage.setItem(
            "appUser",
            JSON.stringify({ ...action.payload.user })
          );
        }
      )
      .addMatcher(
        appUserApi.endpoints.logIn.matchFulfilled,
        (state, action) => {
          state.appToken = action.payload.token;
          state.user = action.payload.user;
          localStorage.setItem(
            "appUser",
            JSON.stringify({ ...action.payload.user })
          );
          localStorage.setItem("appToken", action.payload.token);
        }
      );
  },
});

export default appAuthorizedUser.reducer;
