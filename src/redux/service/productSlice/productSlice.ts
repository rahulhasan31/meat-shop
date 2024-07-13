import { api } from "@/redux/api/api";

export const PURL = "api/v1/product";
const ProdcutSlice = api.injectEndpoints({
  endpoints: builder => ({
    getAllProduct: builder.query({
      query: () => ({
        url: `${PURL}/all-products`,
      }),
      providesTags: ["product"],
    }),
    getSingleProduct: builder.query({
      query: id => ({
        url: `${PURL}/single-product/${id}`,
      }),
      providesTags: ["product"],
    }),
  }),
});

export const { useGetAllProductQuery, useGetSingleProductQuery } = ProdcutSlice;
