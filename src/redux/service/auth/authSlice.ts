import { api } from "@/redux/api/api";

const authURL = "api/v1/auth";
const authSlice = api.injectEndpoints({
  endpoints: builder => ({
    createUser: builder.mutation({
      query: data => ({
        url: "http://localhost:5000/api/v1/auth/signup",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    userLogin: builder.mutation({
      query: data => ({
        url: "http://localhost:5000/api/v1/auth/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    refreshUser: builder.mutation({
      query: data => ({
        url: "http://localhost:5000/api/v1/auth/refresh-token",
        method: "POST",
        body: data,
      }),
    }),
    getSingleUser: builder.query({
      query: id => ({
        url: `http://localhost:5000/api/v1/auth/single-user/${id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      }),
      providesTags: ["user"],
    }),
    getAllUser: builder.query({
      query: () => ({
        url: `http://localhost:5000/api/v1/auth/all-user`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      }),
      providesTags: ["user"],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useUserLoginMutation,
  useGetSingleUserQuery,
  useRefreshUserMutation,
  useGetAllUserQuery,
} = authSlice;
