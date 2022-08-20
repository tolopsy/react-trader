import { createApi } from "@reduxjs/toolkit/query/react";
import {
  BondListResponse,
  CalculateEconomicsPayload,
  CalculateEconomicsResponse,
  CptyResponse,
  CurrencyResponse,
  NewTicketIdResponse,
  TradeExecutionRequestPayload,
  TradeExecutionResponse,
} from "../types"
import { rawBaseQuery } from "./shared";
import { TICKET_API } from "./constants";

export const ticketApi = createApi({
  reducerPath: TICKET_API,
  baseQuery: rawBaseQuery,
  endpoints: (builder) => ({
    getNewTicketId: builder.query<NewTicketIdResponse, void>({
      query: () => "new_trade_id",
      keepUnusedDataFor: 0,
    }),
    getBondList: builder.query<BondListResponse[], void>({
      query: () => "bondlist",
      keepUnusedDataFor: 3600,
    }),
    getCptys: builder.query<CptyResponse[], void>({
      query: () => "counterparties",
      keepUnusedDataFor: 3600,
    }),
    getCurrencyList: builder.query<CurrencyResponse[], void>({
      query: () => "ccy",
      keepUnusedDataFor: 3600,
    }),
    calculateEconomics: builder.query<CalculateEconomicsResponse, CalculateEconomicsPayload>({
      query: (trade) => ({ url: 'calculate', method: 'POST', body: trade, headers: { 'Content-Type': 'application/json'}}),
      keepUnusedDataFor: 0,
    }),
    executeTrade: builder.query<TradeExecutionResponse, TradeExecutionRequestPayload>({
      query: (trade) => ({ url: 'execute', method: 'POST', body: trade, headers: { 'Content-Type': 'application/json'}}),
      keepUnusedDataFor: 0,
    })
  })
})

export const {
  useGetNewTicketIdQuery,
  useGetBondListQuery,
  useGetCptysQuery,
  useGetCurrencyListQuery,
  useLazyCalculateEconomicsQuery,
  useLazyExecuteTradeQuery,
} = ticketApi;