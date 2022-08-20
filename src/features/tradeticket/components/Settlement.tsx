import React, { useCallback } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { DropDownList, RepoFormField } from "../../../components";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  updateSettlement,
  repoYearBasisOptions,
  repoRateOptions,
} from "../../../store/reducers/settlementSlice";
import { RepoYearBasis, RepoRateType } from "../../../store/types";
import { CurrencyResponse } from "../../../types";

interface Props {
  currencyList?: CurrencyResponse[];
}

export const Settlement: React.FC<Props> = ({ currencyList }): JSX.Element => {
  const dispatch = useAppDispatch();
  const { repoYearBasis, repoRateType, repoRate } = useAppSelector(
    (state) => state.settlementState
  );

  const handleYearBasisChange = (event: SelectChangeEvent<RepoYearBasis>) =>
    dispatch(
      updateSettlement({ repoYearBasis: event.target.value as RepoYearBasis })
    );

  const handleRateTypeChange = (event: SelectChangeEvent<RepoRateType>) =>
    dispatch(
      updateSettlement({ repoRateType: event.target.value as RepoRateType })
    );

  const handleRepoRateChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(
      updateSettlement({ repoRate: event.target.value as unknown as number })
    );

  const onCcySelection = useCallback(
    (event: React.SyntheticEvent, value: CurrencyResponse | null) => {
      console.log(value);
      if (value) dispatch(updateSettlement({ settlementCcy: value.code }));
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
        data={currencyList}
        onSelected={onCcySelection}
        label="Settlement Currency"
        filterKey="code"
      />
      <FormControl fullWidth sx={{ padding: 0 }}>
        <InputLabel id="repo-year-basis">Repo Year</InputLabel>
        <Select
          labelId="repo-year-basis"
          value={repoYearBasis}
          variant="outlined"
          fullWidth
          size={"small"}
          onChange={handleYearBasisChange}
          required
        >
          {repoYearBasisOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="repo-rate-type">Repo Rate Type</InputLabel>
        <Select
          id="repo-rate-type"
          labelId="repo-rate-type"
          value={repoRateType}
          variant="outlined"
          fullWidth
          size={"small"}
          onChange={handleRateTypeChange}
          required
        >
          {repoRateOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <RepoFormField
        label="Repo Rate (%)"
        value={repoRate}
        onChange={handleRepoRateChange}
      />
    </Stack>
  );
};
