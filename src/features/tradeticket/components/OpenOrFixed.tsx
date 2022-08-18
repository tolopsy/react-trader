import React, { useCallback } from "react";
import { Stack, Typography } from "@mui/material";
import Switch from "@mui/material/Switch";
import { RepoDate } from "../../../components";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  updateFixedOpen,
  updateTicketDates,
} from "../../../store/reducers/ticketDefaultSlice";

export const OpenOrFixed: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { startDate, endDate, fixed } = useAppSelector(
    (state) => state.ticketDefaultState
  );

  const onDateChange =
    (date: Date | null, keyboardInputValue: string | undefined) =>
    (eventId: "startDate" | "endDate") => {
      dispatch(updateTicketDates({ [eventId]: (date as Date).getTime() }));
    };

  const handleFixedChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateFixedOpen({ fixed: event.target.checked as boolean }));
    },
    [dispatch]
  );
  return (
    <Stack direction="row" spacing={2}>
      <RepoDate
        onChange={(...args) => onDateChange(...args)("startDate")}
        date={new Date(startDate)}
        label="Start Date"
      />
      {fixed && (
        <RepoDate
          onChange={(...args) => onDateChange(...args)("endDate")}
          date={new Date(endDate)}
          label="End Date"
        />
      )}
      <Stack direction="row" spacing={1} alignItems="end">
        <Typography>Open</Typography>
        <Switch defaultChecked size="small" onChange={handleFixedChange} />
        <Typography>Fixed</Typography>
      </Stack>
    </Stack>
  );
};
