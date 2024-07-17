import { api } from "@/redux/api/api";

export const RURL = "api/v1/review";
const reviewSlice = api.injectEndpoints({
  endpoints: builder => ({
    createReview: builder.mutation({
      query: data => ({
        url: "http://localhost:5000/api/v1/review/create-review",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
        body: data,
      }),
      invalidatesTags: ["review"],
    }),
    deleteReview: builder.mutation({
      query: id => ({
        url: `http://localhost:5000/api/v1/review/review-delete/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      }),
      invalidatesTags: ["review"],
    }),
    updateReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `http://localhost:5000/api/v1/review/review-update/${id}`,

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["review"],
    }),
    getSingleReview: builder.query({
      query: id => ({
        url: `${RURL}//${id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      }),
    }),
    getReview: builder.query({
      query: id => ({
        url: `http://localhost:5000/api/v1/review/get-review/${id}`,
      }),
      providesTags: ["review"],
    }),
  }),
});

export const {
  useCreateReviewMutation,
  useGetReviewQuery,
  useDeleteReviewMutation,
  useUpdateReviewMutation,
} = reviewSlice;
