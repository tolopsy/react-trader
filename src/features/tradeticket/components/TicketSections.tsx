import React from "react";
import { Stack } from "@mui/material";
import { RepoFormField } from "../../../components";


interface Props {
  ticketId?: string;
}

export const TicketSections: React.FC<Props> = ({ ticketId }): JSX.Element => {
  return (
    <Stack direction="column" spacing={2}>
      <RepoFormField
        disabled
        name="ticketId"
        label="Ticket Id"
        type="text"
        value={ticketId}
      />
    </Stack>
  )
}