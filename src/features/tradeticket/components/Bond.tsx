import React, { useCallback } from "react";
import { Stack } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { BondListResponse } from "../../../types";
import { DropDownList, RepoFormField } from "../../../components";
import { IBondData, selectedBond } from "../../../store/reducers/selectedBondDataSlice";


interface Props {
  bondListData?: BondListResponse[]
}


export const BondList: React.FC<Props> = ({ bondListData }): JSX.Element => {
  const dispatch = useAppDispatch();
  const { issueCcy } = useAppSelector((state) => state.selectedBondState);
  const onBondSelection = useCallback((event: React.SyntheticEvent, value: IBondData | null) => {
    if (value) dispatch(selectedBond(value))
  }, [dispatch])
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="space-between"
    >
      <DropDownList data={bondListData} onSelected={onBondSelection} filterKey="isin" label="Security ID" />
      <RepoFormField disabled label="Issue CCY" value={issueCcy} type="text" />
    </Stack>
  )
}