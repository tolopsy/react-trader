import React, { useCallback, useState } from "react";
import { DataGrid } from "../../components";


export const Blotter: React.FC = (): JSX.Element => {
  const [showNoRowsOverlay, setShowNoRowsOverlay] = useState<boolean>(false);
  const rowClickHandler = useCallback(() => {
    // row click handler
  }, [])
  return (
    <div>
      <DataGrid
        gridData={[{name: "typescript", percent: "89%"}, {name: "golang", percent: "98%"}]}
        colDefs={[{field: "name"}, {field: "percent"}]}
        size={{height: 1000, width: "100%"}}
        showNoRowsOverlay={showNoRowsOverlay}
        rowClickHandler={rowClickHandler}
      ></DataGrid>
    </div>
  )
}
