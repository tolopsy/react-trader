export enum TransactionTypes {
  Repo = "Repo",
  ReverseRepo = "Reverse Repo",
}

export enum TicketStatus {
  New = "New",
  Existing = "Existing",
  Rejected = "Rejected",
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
