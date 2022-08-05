import { XrangePointOptionsObject } from "highcharts";
//import { ICounterParty } from "../store/reducers/counterpartyDataSlice";
//import { IEconomics } from "../store/reducers/economicsSlice";
//import { ISettlement } from "../store/reducers/settlementSlice";
// import { ITicketDefaults } from "../store/types";
export interface NewTicketIdResponse {
    newId: string;
}

export interface BondListResponse {
    bondId: number | string;
    isin: string,
    desc: string,
    issueCcy: string
}
export interface CptyResponse {
    counterpartyId: number | string;
    cparty: string,
    fullname: string,
    nick: string
}
export interface CurrencyResponse {
    symbol: string,
    name: string,
    decimal_digits: number,
    rounding: number,
    code: string,
}

export interface CalculateEconomicsResponse {
    endCash: number;
    startCash: number;
    cleanPrice: number;
    dirtyPrice: number;
    yieldValue: number;
}

//type EcnomicsCalculatePayload = Pick<IEconomics, 'haircut'>
//type BondCalculatePayload = Pick<ISettlement, 'quantity' | 'repoRate' | 'repoRateType' | 'repoYearBasis'>
//type TicketInfoCalculatePayload = Pick<ITicketDefaults, 'transactionType' | 'fixed'>
/*
export type CalculateEconomicsPayload =
    EcnomicsCalculatePayload &
    BondCalculatePayload &
    BondCalculatePayload &
    TicketInfoCalculatePayload


export type TradeExecutionRequestPayload =
    ITicketDefaults &
    ISettlement &
    Pick<ICounterParty, 'fullname'> &
    IEconomics &
    { ticketId: string | undefined }

export type ExistingDeal = TradeExecutionRequestPayload; */
export interface TradeExecutionResponse {
    ticketId: string;
    status: 'success' | 'failed';
}

export interface TradeUpdatePayload {
    ticketId: string;
    updatedQuantity: number;
    updatedRepoRate: number;
}

export interface TotalTradesApiResponse {
    totalTrades: number;
}
export interface TotalClientsApiResponse {
    totalClients: number;
}
export interface TopTradesObject {
    tradeId: string;
    value: number;
}
export interface TopTradesApiResponse {
    topTrades: TopTradesObject[];
}
export interface RejectedTradesApiResponse {
    tradeId: string;
    cptyName: string;
    ticketStatus: string;
    isin: string;
    error: string;
}

export interface CashByMonthApiResponse {
    name: 'Repo' | 'Reverse Repo' | 'Sell Buy' | 'Buy Sell',
    data: XrangePointOptionsObject[];
    color?: string;
    type?: any;
}
