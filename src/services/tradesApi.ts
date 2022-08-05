import { createApi } from "@reduxjs/toolkit/query/react";
import { rawBaseQuery } from "./shared";
import { TRADES_API } from "./constants";

export const tradesApi = createApi({
  reducerPath: TRADES_API,
  keepUnusedDataFor: 3600,
  baseQuery: rawBaseQuery,
  endpoints: (builder) => ({
    getTrades: builder.query<any[], void>({
      query: () => 'trades'
    })
  })
})

export const { useGetTradesQuery } = tradesApi;
