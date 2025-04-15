import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const api = 'api/Resources/GetJournals?subjectIds=' + id
const url = "";

export const data = createApi({
  reducerPath: "fetchData",
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getFavoriteUsers: builder.query({
      query: (id) => `api/user/favourites/`,
    }),
  }),
});

export const { useGetFavoriteUsersQuery } = data;
