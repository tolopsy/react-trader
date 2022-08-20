import { useEffect, useState } from "react";
import {
  useGetNewTicketIdQuery,
  useGetBondListQuery,
  useGetCptysQuery,
  useGetCurrencyListQuery
} from "../../../services";
import {
  NewTicketIdResponse,
  CptyResponse,
  BondListResponse,
  CurrencyResponse,
} from "../../../types";

interface Props {
  loading: boolean;
  hasError: boolean;
  ticketId?: NewTicketIdResponse;
  bondList?: BondListResponse[];
  cptyList?: CptyResponse[];
  ccyList?: CurrencyResponse[];
}

export const useTicketApi = (): Props => {
  const { data: ticketId, isError: isTicketIdError, isSuccess: isTicketIdSuccess } = useGetNewTicketIdQuery();
  const { data: bondList, isError: isBondListError, isSuccess: isBondListSuccess } = useGetBondListQuery();
  const { data: cptyList, isError: isCptyError, isSuccess: isCptySuccess } = useGetCptysQuery();
  const { data: ccyList, isError: isCcyError, isSuccess: isCcySuccess } = useGetCurrencyListQuery();

  const [loading, setLoading] = useState<boolean>(true);
  const [hasError, setHasErr] = useState<boolean>(false);

  useEffect(() => {
    if (isTicketIdSuccess && isBondListSuccess && isCptySuccess && isCcySuccess) {
      setLoading(false);
    }
  }, [isTicketIdSuccess, isBondListSuccess, isCptySuccess, isCcySuccess]);

  useEffect(() => {
    if (isTicketIdError || isBondListError || isCptyError || isCcyError) {
      setLoading(false);
      setHasErr(true);
    }
  }, [isTicketIdError, isBondListError, isCptyError, isCcyError]);

  return { loading, hasError, ticketId, bondList, cptyList, ccyList }
}
