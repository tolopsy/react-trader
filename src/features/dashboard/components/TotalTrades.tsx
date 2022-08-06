import { Typography } from "@mui/material";
import React from "react";
import { useGetTotalTradesQuery } from "../../../services";
import { DashboardTile } from "./DashboardTile";

export const TotalTrades: React.FC = (): JSX.Element => {
  const { data, isFetching, isError } = useGetTotalTradesQuery();
  return (
    <DashboardTile
      title="Total Trades"
      minWidth="15%"
      isLoading={isFetching}
      hasError={isError}
    >
      <Typography variant="h2" sx={{ color: "#5d71e2"}}>
        {data?.totalTrades}
      </Typography>
    </DashboardTile>
  )
}