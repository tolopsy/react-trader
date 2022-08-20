import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { purgeAction } from "../actions";

export interface IBondData {
  isin: string;
  desc: string;
  issueCcy: string;
}

let initialState: IBondData = {
  isin: "",
  desc: "",
  issueCcy: "",
}

export const selectedBondDataSlice = createSlice({
  name: 'BondDataReducer',
  initialState,
  reducers: {
    selectedBond(state, action: PayloadAction<IBondData>) {
      return { ...state, ...action.payload }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(purgeAction, (state: IBondData) => {
      return { ...state, ...initialState }
    })
  }
})

export const { selectedBond } = selectedBondDataSlice.actions;