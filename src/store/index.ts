import { configureStore } from "@reduxjs/toolkit";
import { tradesApi } from "../services/tradesApi";

export const store = configureStore({
  reducer: {
    [tradesApi.reducerPath]: tradesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    tradesApi.middleware,
  )
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
