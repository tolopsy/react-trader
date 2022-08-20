import React from "react";
import { Stack } from "@mui/material";
import { RepoFormField } from "../../../components";
import { useAppSelector } from "../../../store/hooks";
import { RepoTypeDropDown } from "./RepoTypeDropDown";
import { OpenOrFixed } from "./OpenOrFixed";
import { BondList } from "./Bond";
import {
  CptyResponse,
  BondListResponse,
  CurrencyResponse,
} from "../../../types";
import { Counterparty } from "./Counterparty";
import { Settlement } from "./Settlement";
import { Quantity } from "./Quantity";
import { RepoLeg } from "./RepoLeg";
import { TicketActionBar } from "./TicketActionBar";


interface Props {
  ticketId?: string;
  bondList?: BondListResponse[];
  cptyList?: CptyResponse[];
  ccyList?: CurrencyResponse[];
}


export const TicketSections: React.FC<Props> = ({ ticketId, bondList, cptyList, ccyList }): JSX.Element => {
  const { trader } = useAppSelector((state) => state.ticketDefaultState);
  return (
    <Stack direction="column" spacing={2}>
      <RepoFormField
        disabled
        name="ticketId"
        label="Ticket Id"
        type="text"
        value={ticketId}
      />
      <RepoFormField
        disabled
        name="traderId"
        label="Trader Id"
        type="text"
        value={trader}
      />
      <RepoTypeDropDown />
      <OpenOrFixed />
      <BondList bondListData={bondList} />
      <Counterparty cptyList={cptyList}/>
      <Settlement currencyList={ccyList} />
      <Quantity />
      <RepoLeg />
      <TicketActionBar />
    </Stack>
  )
}