import React, { useCallback, useState } from "react";
import { DataGrid } from "../../components";
import { useGetTradesQuery } from "../../services";
import { tradeBlotterColDef } from "./config";


export const Blotter: React.FC = (): JSX.Element => {
  const [showNoRowsOverlay, setShowNoRowsOverlay] = useState<boolean>(false);
  const { data } = useGetTradesQuery(undefined, { pollingInterval: 30000});
  const rowClickHandler = useCallback(() => {
    // row click handler
  }, [])
  return (
    <div>
      <DataGrid
        gridData={data || []}
        colDefs={tradeBlotterColDef}
        size={{height: 1000, width: "100%"}}
        showNoRowsOverlay={showNoRowsOverlay}
        rowClickHandler={rowClickHandler}
      ></DataGrid>
    </div>
  )
}
