import { currencyFormatter, dateFormatter } from '../../../utils'

export const tradeBlotterColDef = [
  { field: 'ticketId', sortable: true },
  { field: 'startDate', sortable: true, filter: "agDateColumnFilter", valueFormatter: (params: any) => dateFormatter(params.value) },
  { field: 'endDate', sortable: true, filter: "agDataColumnFilter", valueFormatter: (params: any) => dateFormatter(params.value) },
  { field: 'fullname', headerName: 'Cpty' },
  { field: 'quantity', filter: "agNumberColumnFilter" },
  { field: 'fixed' },
  { field: 'isin' },
  { field: 'haircut', filter: "agNumberColumnFilter" },
  { field: 'dirtyPrice', filter: "agNumberColumnFilter" },
  { field: 'cleanPrice', filter: "agNumberColumnFilter" },
  { field: 'startCash', filter: "agNumberColumnFilter", valueFormatter: (params: any) => currencyFormatter.format(params.value) },
  { field: 'endCash', filter: "agNumberColumnFilter", valueFormatter: (params: any) => currencyFormatter.format(params.value) },
  { field: 'repoRate', filter: "agNumberColumnFilter" },
  { field: 'repoRateType' },
  { field: 'repoYearBasis' },
  { field: 'settlementCcy' },
  { field: 'trader' },
  { field: 'yieldValue' },
]
