import React, { useCallback } from "react";
import { Stack } from "@mui/material";
import { DropDownList, RepoFormField } from "../../../components";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { ICounterParty, selectedCounterParty } from "../../../store/reducers/counterpartyDataSlice";
import { CptyResponse } from "../../../types";

interface Props {
  cptyList?: CptyResponse[]
}

export const Counterparty: React.FC<Props> = ({ cptyList }): JSX.Element => {
  const dispatch = useAppDispatch();
  const { cparty } = useAppSelector((state) => state.counterPartyState);
  const onCptySelection = useCallback(
    (event: React.SyntheticEvent, value: ICounterParty | null) => {
      if (value) dispatch(selectedCounterParty(value));
    },
  [dispatch]
  );

  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="space-between"
    >
      <DropDownList
        data={cptyList}
        onSelected={onCptySelection}
        label="Counterparty"
        filterKey="fullname"
      />
      <RepoFormField disabled label="Cpty ID" value={cparty} type="text" />
    </Stack>
  )
}