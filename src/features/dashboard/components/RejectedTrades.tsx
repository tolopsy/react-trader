import React from "react";
import { useGetRejectedTradesQuery } from "../../../services";
import { DataGrid } from "../../../components";
import { rejectedTradesColDefs } from "../config";
import { DashboardTile } from "./DashboardTile";

export const RejectedTrades: React.FC = (): JSX.Element => {
  const { data, isFetching, isError } = useGetRejectedTradesQuery();
  return (
    <DashboardTile
      title="Rejected Trades"
      minWidth="64%"
      isLoading={isFetching}
      hasError={isError}
    >
      <DataGrid
        colDefs={rejectedTradesColDefs}
        gridData={data || []}
        size={{ width: "100%", height: 400 }}
      />
    </DashboardTile>
  );
};