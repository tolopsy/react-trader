import React from "react";
import { useGetTopTradesQuery } from "../../../services";
import { DataGrid } from "../../../components";
import { topTradesColDefs } from "../config";
import { DashboardTile } from "./DashboardTile";

export const TopTrades: React.FC = (): JSX.Element => {
  const { data, isFetching, isError } = useGetTopTradesQuery();
  return (
    <DashboardTile
      title="Top Trades"
      minWidth="35%"
      isLoading={isFetching}
      hasError={isError}
    >
      <DataGrid
        gridData={data?.topTrades || []}
        colDefs={topTradesColDefs}
        size={{ width: "100%", height: 400 }}
      />
    </DashboardTile>
  )
}
