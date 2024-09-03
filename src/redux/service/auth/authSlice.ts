import { api } from "@/redux/api/api";

const authURL = "api/v1/auth";
const authSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => ({
        url: "https://meat-server-six.vercel.app/api/v1/auth/signup",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    userLogin: builder.mutation({
      query: (data) => ({
        url: "https://meat-server-six.vercel.app/api/v1/auth/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    refreshUser: builder.mutation({
      query: (data) => ({
        url: "https://meat-server-six.vercel.app/api/v1/auth/refresh-token",
        method: "POST",
        body: data,
      }),
    }),
    getSingleUser: builder.query({
      query: (id) => ({
        url: `https://meat-server-six.vercel.app/api/v1/auth/single-user/${id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      }),
      providesTags: ["user"],
    }),
    getAllUser: builder.query({
      query: () => ({
        url: `https://meat-server-six.vercel.app/api/v1/auth/all-user`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      }),
      providesTags: ["user"],
    }),
    UpdateRole: builder.mutation({
      query: (data) => ({
        url: `https://meat-server-six.vercel.app/api/v1/auth/update-role`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `https://meat-server-six.vercel.app/api/v1/auth/user-delete/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useUserLoginMutation,
  useGetSingleUserQuery,
  useRefreshUserMutation,
  useGetAllUserQuery,
  useUpdateRoleMutation,
  useDeleteUserMutation,
} = authSlice;
