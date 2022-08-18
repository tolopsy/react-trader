import React from "react";
import { Stack } from "@mui/material";
import { RepoFormField } from "../../../components";
import { useAppSelector } from "../../../store/hooks";
import { RepoTypeDropDown } from "./RepoTypeDropDown";
import { OpenOrFixed } from "./OpenOrFixed";


interface Props {
  ticketId?: string;
}

export const TicketSections: React.FC<Props> = ({ ticketId }): JSX.Element => {
  const { trader } = useAppSelector((state) => state.ticketDefaultState);
  return (
    <Stack direction="column" spacing={2}>
      <RepoFormField
        disabled
        name="ticketId"
        label="Ticket Id"
        type="text"
        value={ticketId}
      />
      <RepoFormField
        disabled
        name="traderId"
        label="Trader Id"
        type="text"
        value={trader}
      />
      <RepoTypeDropDown />
      <OpenOrFixed />
    </Stack>
  )
}