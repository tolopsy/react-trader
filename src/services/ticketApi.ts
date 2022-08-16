import { createApi } from "@reduxjs/toolkit/query/react";
import * as types from "../types"
import { rawBaseQuery } from "./shared";
import { TICKET_API } from "./constants";

export const ticketApi = createApi({
  reducerPath: TICKET_API,
  baseQuery: rawBaseQuery,
  endpoints: (builder) => ({
    getNewTicketId: builder.query<types.NewTicketIdResponse, void>({
      query: () => "new_trade_id",
      keepUnusedDataFor: 0,
    })
  })
})

export const { useGetNewTicketIdQuery } = ticketApi;