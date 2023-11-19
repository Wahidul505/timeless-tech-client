import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const PRODUCT_API = "/product";

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    products: build.query({
      query: () => ({
        url: `${PRODUCT_API}`,
        method: "GET",
      }),
      providesTags: [tagTypes.product],
    }),
    singleProduct: build.query({
      query: (id: string) => ({
        url: `${PRODUCT_API}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.product],
    }),
  }),
});

export const { useProductsQuery, useSingleProductQuery } = productApi;
