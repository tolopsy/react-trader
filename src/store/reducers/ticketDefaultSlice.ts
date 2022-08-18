import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITicketDefaults, TicketStatus, TransactionTypes } from "../types";
import { addBusinessDays, differenceInBusinessDays } from "date-fns";
import { purgeAction } from "../actions";

const initialState: ITicketDefaults = {
  transactionType: TransactionTypes.ReverseRepo,
  startDate: new Date().getTime(),
  endDate: addBusinessDays(new Date(), 1).getTime(),
  fixed: true,
  trader: "Demo",
  ticketStatus: TicketStatus.New,
  duration: 1
}

type DatePayload = {
  startDate?: number;
  endDate?: number;
}

export const ticketDefaultSlice = createSlice({
  name: "TicketDefaultReducer",
  initialState,
  reducers: {
    updateTicketData(state, action: PayloadAction<Partial<ITicketDefaults>>) {
      return { ...state, ...action.payload }
    },

    updateTicketDates(state, action: PayloadAction<DatePayload>) {
      const { startDate, endDate } = action.payload;
      const _startDate = startDate || state.startDate;
      const _endDate = endDate || state.endDate;
      return {
        ...state, startDate: _startDate, endDate: _endDate,
        duration: differenceInBusinessDays(_endDate, _startDate)
      }
    },
    updateFixedOpen(state, action: PayloadAction<Partial<ITicketDefaults>>) {
      state.fixed = action.payload.fixed as boolean;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(purgeAction, (state: ITicketDefaults) => {
      return { ...state, ...initialState}
    })
  }
})

export const { updateTicketData, updateTicketDates, updateFixedOpen } = ticketDefaultSlice.actions
