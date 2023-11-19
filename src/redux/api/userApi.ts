import { baseApi } from "./baseApi";

const USER_URL = "/user";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/signup`,
        method: "POST",
        data: data,
      }),
    }),
    signIn: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/signin`,
        method: "POST",
        data: data,
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = userApi;
