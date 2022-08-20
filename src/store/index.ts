import { configureStore } from "@reduxjs/toolkit";
import { dashboardApi, tradesApi, ticketApi } from "../services";
import { ticketDefaultSlice } from "./reducers/ticketDefaultSlice";
import { selectedBondDataSlice } from "./reducers/selectedBondDataSlice";
import { counterPartyDataSlice } from "./reducers/counterpartyDataSlice";
import { settlementDataSlice } from "./reducers/settlementSlice";
import { economicsDataSlice } from "./reducers/economicsSlice";

export const store = configureStore({
  reducer: {
    [tradesApi.reducerPath]: tradesApi.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    [ticketApi.reducerPath]: ticketApi.reducer,
    ticketDefaultState: ticketDefaultSlice.reducer,
    selectedBondState: selectedBondDataSlice.reducer,
    counterPartyState: counterPartyDataSlice.reducer,
    settlementState: settlementDataSlice.reducer,
    economicsState: economicsDataSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    tradesApi.middleware,
    dashboardApi.middleware,
    ticketApi.middleware,
  )
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
