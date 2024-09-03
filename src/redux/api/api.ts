import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://meat-server-six.vercel.app",
  }),
  tagTypes: ["product", "review", "order", "user"],

  endpoints: () => ({}),
});
