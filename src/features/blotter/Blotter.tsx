import React, { useCallback, useState } from "react";
import { DataGrid } from "../../components";
import { useGetTradesQuery } from "../../services";
import { tradeBlotterColDefs } from "./config";


export const Blotter: React.FC = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showNoRowsOverlay, setShowNoRowsOverlay] = useState<boolean>(false);
  const { data } = useGetTradesQuery(undefined, { pollingInterval: 30000});
  const rowClickHandler = useCallback(() => {
    // row click handler
  }, [])
  return (
    <div>
      <DataGrid
        gridData={data || []}
        colDefs={tradeBlotterColDefs}
        size={{height: 1000, width: "100%"}}
        showNoRowsOverlay={showNoRowsOverlay}
        rowClickHandler={rowClickHandler}
      ></DataGrid>
    </div>
  )
}
