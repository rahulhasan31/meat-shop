import { api } from "@/redux/api/api";

const OrderSlice = api.injectEndpoints({
  endpoints: builder => ({
    createOrder: builder.mutation({
      query: data => ({
        url: "http://localhost:5000/api/v1/order/create-order",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
        body: data,
      }),
      invalidatesTags: ["order"],
    }),

    getUserOrder: builder.query({
      query: id => ({
        url: `http://localhost:5000/api/v1/order/user-order/${id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      }),
      providesTags: ["order"],
    }),
  }),
});

export const { useCreateOrderMutation, useGetUserOrderQuery } = OrderSlice;
