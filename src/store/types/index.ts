export enum TransactionTypes {
  Repo = "Repo",
  ReverseRepo = "Reverse Repo",
}

export enum TicketStatus {
  New = "New",
  Existing = "Existing",
  Rejected = "Rejected",
}

export enum RepoYearBasis {
  R360 = "360",
  R365 = "365",
  R3060 = "30/360"
}

export enum RepoRateType {
  Fixed = "Fixed",
  Indexed = "Indexed",
  Variable = "Variable"
}

export interface ITicketDefaults {
  transactionType: TransactionTypes;
  startDate: number;
  endDate: number;
  fixed: boolean;
  trader: string;
  ticketStatus: TicketStatus;
  duration: number;
}
