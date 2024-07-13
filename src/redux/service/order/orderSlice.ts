import { api } from "@/redux/api/api";

const OrderSlice = api.injectEndpoints({
  endpoints: builder => ({
    createOrder: builder.mutation({
      query: data => ({
        url: `http://localhost:5000/api/v1/order/create-order`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
        data: data,
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = OrderSlice;
