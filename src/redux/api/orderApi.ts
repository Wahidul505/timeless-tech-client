import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const ORDER_API = "/order";

export const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    placeOrder: build.mutation({
      query: (data) => ({
        url: `${ORDER_API}`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.order],
    }),

    singleOrder: build.query({
      query: (id: string) => ({
        url: `${ORDER_API}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.order],
    }),
  }),
});

export const { usePlaceOrderMutation, useSingleOrderQuery } = orderApi;
