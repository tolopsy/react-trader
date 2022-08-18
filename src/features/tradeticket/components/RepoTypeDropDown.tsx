import React, { useCallback } from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { repoTransactionType } from "../config";
import { TransactionTypes } from "../../../store/types";
import { updateTicketData } from "../../../store/reducers/ticketDefaultSlice";

export const RepoTypeDropDown: React.FC = (): JSX.Element => {
  const { transactionType } = useAppSelector((state) => state.ticketDefaultState);
  const dispatch = useAppDispatch();

  const handleTransactionChange = useCallback((event: SelectChangeEvent<TransactionTypes>) => {
    dispatch(
      updateTicketData({
          transactionType: event.target.value as TransactionTypes,
      })
    )
  }, [dispatch])

  return (
    <div>
      <FormControl sx={{ minWidth: "100%"}}>
        <InputLabel id="repoType">Transaction Type</InputLabel>
        <Select
          value={transactionType}
          onChange={handleTransactionChange}
          variant="outlined"
          labelId="repoType"
          label="Transaction Type"
        >
          {repoTransactionType.map((repoType) => (
            <MenuItem key={repoType} value={repoType}>
              {repoType}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
