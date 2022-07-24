import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const tradesApi = createApi({
  reducerPath: 'tradesApi',
  keepUnusedDataFor: 3600,
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  endpoints: (builder) => ({
    getTrades: builder.query<any[], void>({
      query: () => 'trades'
    })
  })
})

export const { useGetTradesQuery } = tradesApi;
