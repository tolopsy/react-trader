import React from "react";
import { CircularProgress, Divider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTicketApi } from "./hooks/useTicketApi";
import { CloudOff } from "@mui/icons-material";
import { TicketSections } from "./components/TicketSections";



const TicketStyledWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: 20,
  height: "100vh",
  padding: theme.spacing(0, 1),
}));

export const TradeTicket: React.FC = (): JSX.Element => {
  const { loading, hasError, ticketId, bondList, cptyList, ccyList } = useTicketApi();
  return (
    <TicketStyledWrapper>
      <Typography component="div" variant="subtitle1">
        TradeTicket
      </Typography>
      <Divider sx={{m: 2}} />
      {loading && <CircularProgress color="secondary" />}
      {hasError && <CloudOff color="secondary" sx={{fontSize: 50}} />}
      {
        !loading && !hasError && (
        <TicketSections
          ticketId={ticketId?.newId}
          bondList={bondList}
          cptyList={cptyList}
          ccyList={ccyList}
        />
      )}
    </TicketStyledWrapper>
  )
}
