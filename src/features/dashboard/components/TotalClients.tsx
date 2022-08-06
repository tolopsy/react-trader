import { Typography } from "@mui/material";
import React from "react";
import { useGetTotalClientsQuery } from "../../../services";
import { DashboardTile } from "./DashboardTile";

export const TotalClients: React.FC = (): JSX.Element => {
  const { data, isFetching, isError } = useGetTotalClientsQuery();
  return (
    <DashboardTile
      title="Total Clients"
      minWidth="15%"
      isLoading={isFetching}
      hasError={isError}
    >
      <Typography variant="h2" sx={{ color: "#5d71e2" }}>
        {data?.totalClients}
      </Typography>
    </DashboardTile>
  )
}