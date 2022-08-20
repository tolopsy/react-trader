import React, { useCallback, useEffect } from "react";
import { Stack, Button } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useNavigate } from "react-router";
import { useGetNewTicketIdQuery, useLazyCalculateEconomicsQuery, useLazyExecuteTradeQuery } from "../../../services";
import { usePayloadValidation, ValidationType } from "../hooks/usePayloadValidation";
import { updateEconomics } from "../../../store/reducers/economicsSlice";
import { BLOTTER } from "../../../routes";
import { purgeAction } from "../../../store/actions";


export const TicketActionBar = () => {
  const navigate = useNavigate();
  const { validatePayload } = usePayloadValidation();
  const dispatch = useAppDispatch();
  const {
    ticketDefaultState,
    selectedBondState,
    counterPartyState,
    settlementState,
    economicsState,
  } = useAppSelector((state) => state);

  const { cleanPrice, haircut, startCash } = { ...economicsState };
  const { duration, transactionType, fixed } = { ...ticketDefaultState };
  const { quantity, repoRate, repoRateType, repoYearBasis } = { ...settlementState };
  const { isin } = { ...selectedBondState };

  const { data: ticketId } = useGetNewTicketIdQuery();
  const [executeTradeTrigger, executeResult] = useLazyExecuteTradeQuery();
  const [calculateTradeTrigger, calculateResult] = useLazyCalculateEconomicsQuery();

  const onCalculate = useCallback(async (event: React.MouseEvent) => {
    const payload = {
      cleanPrice,
      haircut,
      startCash,
      duration,
      transactionType,
      fixed,
      quantity,
      repoRate,
      repoRateType,
      repoYearBasis,
      isin,
    }
    const validation = await validatePayload(payload, ValidationType.CalculationRequestPayload);
    if (validation.error) {
      console.error(validation.error)
    }
    if (validation.valid) calculateTradeTrigger(payload)
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [
    cleanPrice,
    haircut,
    startCash,
    duration,
    transactionType,
    fixed,
    quantity,
    repoRate,
    repoRateType,
    repoYearBasis,
    isin,
    calculateTradeTrigger,
  ]);

  const onExecute = useCallback(async (event: React.MouseEvent) => {
    const payload = {
      ...economicsState,
      ...ticketDefaultState,
      ...settlementState,
      ...selectedBondState,
      fullname: counterPartyState.fullname,
      ticketId: ticketId?.newId
    }
    const validation = await validatePayload(payload, ValidationType.ExecutionRequestPayload);
    if (validation.error) {
      // TODO: Show error popup
      console.error(validation.error)
    }
    if (validation.valid) executeTradeTrigger(payload)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    economicsState,
    ticketDefaultState,
    settlementState,
    selectedBondState,
    counterPartyState.fullname,
    ticketId?.newId,
    executeTradeTrigger,
  ]);

  useEffect(() => {
    dispatch(updateEconomics({ ...calculateResult.data }))
  }, [calculateResult, dispatch]);

  useEffect(() => {
    if (executeResult.data?.status === "success") {
      setTimeout(() => {
        navigate(BLOTTER);
        dispatch(purgeAction());
        // TODO: show trade confirmation popup 
      }, 3000)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [executeResult, navigate])
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="center"
    >
      <Button color="primary" variant="contained" onClick={onCalculate}>
        Calculate
      </Button>
      <Button color="primary" variant="contained" onClick={onExecute}>
        Execute
      </Button>
    </Stack>
  );
};