import { useEffect, useState } from "react";
import { useGetNewTicketIdQuery } from "../../../services";
import { NewTicketIdResponse } from "../../../types";

interface Props {
  loading: boolean;
  hasError: boolean;
  ticketId?: NewTicketIdResponse;
}

export const useTicketApi = (): Props => {
  const { data: ticketId, isError: isTicketIdError, isSuccess: isTicketIdSuccess } = useGetNewTicketIdQuery();
  const [loading, setLoading] = useState<boolean>(true);
  const [hasError, setHasErr] = useState<boolean>(false);

  useEffect(() => {
    if (isTicketIdSuccess) {
      setLoading(false);
    }
  }, [isTicketIdSuccess]);

  useEffect(() => {
    if (isTicketIdError) {
      setLoading(false);
      setHasErr(true);
    }
  }, [isTicketIdError]);

  return { loading, hasError, ticketId }
}
