import { api } from "@/redux/api/api";

const OrderSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        url: "https://meat-server-six.vercel.app/api/v1/order/create-order",
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
      query: (id) => ({
        url: `https://meat-server-six.vercel.app/api/v1/order/user-order/${id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      }),
      providesTags: ["order"],
    }),
    getAllOrder: builder.query({
      query: () => ({
        url: `https://meat-server-six.vercel.app/api/v1/order/all-Order`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      }),
      providesTags: ["order"],
    }),
    UpdateOrderStatus: builder.mutation({
      query: (data) => ({
        url: `https://meat-server-six.vercel.app/api/v1/order/order-stutas`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetUserOrderQuery,
  useUpdateOrderStatusMutation,
  useGetAllOrderQuery,
} = OrderSlice;
