import { configureStore } from "@reduxjs/toolkit";
import { dashboardApi } from "../services";
import { tradesApi } from "../services/tradesApi";

export const store = configureStore({
  reducer: {
    [tradesApi.reducerPath]: tradesApi.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    tradesApi.middleware,
    dashboardApi.middleware,
  )
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
