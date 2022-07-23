import React, { useEffect, useState } from "react";
import { useTheme, styled } from "@mui/material";
import { ColDef, RowClickedEvent, GridApi } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";

const GridStyledWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  padding: theme.spacing(2,1),
  justifyContent: "center",
}));

interface DataGridProps<T> {
  showNoRowsOverlay?: boolean;
  size: { height: number | string; width: number | string };
  gridData: T[];
  colDefs: ColDef[];
  rowClickHandler?: (event: RowClickedEvent) => void;
}

export const DataGrid = <T,>({
  showNoRowsOverlay,
  size,
  gridData,
  colDefs,
  rowClickHandler = undefined,
}: DataGridProps<T>): JSX.Element => {
  const [gridApi, setGridApi] = useState<GridApi>();
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const { palette } = useTheme();
  const onGridReady = (params: any) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  }

  useEffect(() => {
    if (showNoRowsOverlay) {
      gridApi?.showNoRowsOverlay();
    }
  }, [gridApi, showNoRowsOverlay]);

  return (
    <GridStyledWrapper>
      <div
        className={`${
          palette.mode === "dark" ? "ag-theme-alpine-dark" : "ag-theme-alpine" 
        }`}
        style={{...size}}
      >
        <AgGridReact
          rowData={gridData}
          onGridReady={onGridReady}
          rowSelection="single"
          defaultColDef={{
            resizable: true,
            filter: true
          }}
          onRowClicked={rowClickHandler}
          columnDefs={colDefs}
        >
        </AgGridReact>
      </div>
    </GridStyledWrapper>
  )
}
