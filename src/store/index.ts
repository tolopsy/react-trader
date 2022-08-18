import { configureStore } from "@reduxjs/toolkit";
import { dashboardApi, tradesApi, ticketApi } from "../services";
import { ticketDefaultSlice } from "./reducers/ticketDefaultSlice";

export const store = configureStore({
  reducer: {
    [tradesApi.reducerPath]: tradesApi.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    [ticketApi.reducerPath]: ticketApi.reducer,
    ticketDefaultState: ticketDefaultSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    tradesApi.middleware,
    dashboardApi.middleware,
    ticketApi.middleware,
  )
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
