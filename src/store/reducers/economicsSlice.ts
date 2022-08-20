import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { purgeAction } from "../actions";

export interface IEconomics {
    cleanPrice: number;
    dirtyPrice: number;
    yieldValue: number;
    haircut: number;
    startCash: number;
    endCash: number;
}

let initialState: IEconomics = {
    cleanPrice: NaN,
    dirtyPrice: NaN,
    yieldValue: NaN,
    haircut: 10,
    startCash: NaN,
    endCash: NaN,
}

type PartialUpdate<T> = {
    [P in keyof T]?: T[P]
}

export const economicsDataSlice = createSlice({
    name: 'EconomicsReducer',
    initialState,
    reducers: {
        updateEconomics(state, action: PayloadAction<PartialUpdate<IEconomics>>) {
            return { ...state, ...action.payload }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(purgeAction, (state: IEconomics) => {
            return { ...state, ...initialState };
        })
    }
})

export const { updateEconomics } = economicsDataSlice.actions;