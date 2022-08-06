import { ColDef } from "ag-grid-community";
import { currencyFormatter } from "../../../utils";

export const rejectedTradesColDefs: ColDef[] = [
    { field: 'ticketId' },
    { field: 'cptyName', headerName: 'Counterparty', sortable: true, sort: 'asc' },
    { field: 'isin', sortable: true, headerName: 'Bond Id' },
    { field: 'ticketStatus', headerName: 'Ticket status' },
    { field: 'error' },
]

export const topTradesColDefs: ColDef[] = [
    { field: "tradeId", flex: 2 },
    {
        field: "value",
        headerName: "Amounts",
        filter: "agNumberColumnFilter",
        valueFormatter: (params: any) =>
            currencyFormatter.format(params.value),
        flex: 1,
        type: "leftAligned",
    },
]
