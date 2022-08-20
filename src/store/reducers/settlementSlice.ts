import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { purgeAction } from "../actions";
import { RepoRateType, RepoYearBasis } from "../types";


export const repoYearBasisOptions: Array<string> = [
  RepoYearBasis.R360,
  RepoYearBasis.R365,
  RepoYearBasis.R3060,
];

export const repoRateOptions: Array<string> = [
  RepoRateType.Fixed,
  RepoRateType.Variable,
  RepoRateType.Indexed,
];

export interface ISettlement {
  quantity: number;
  settlementCcy: string;
  repoYearBasis: RepoYearBasis;
  repoRateType: RepoRateType;
  repoRate: number;
}

let initialState: ISettlement = {
  quantity: NaN,
  settlementCcy: '',
  repoYearBasis: RepoYearBasis.R360,
  repoRateType: RepoRateType.Fixed,
  repoRate: 1.0,
};

type PartialUpdate<T> = {
  [P in keyof T]?: T[P];
};

export const settlementDataSlice = createSlice({
  name: "SettlementReducer",
  initialState,
  reducers: {
    updateSettlement(state, action: PayloadAction<PartialUpdate<ISettlement>>) {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(purgeAction, (state: ISettlement) => {
      return { ...state, ...initialState };
    })
  },
});

export const { updateSettlement } = settlementDataSlice.actions;
