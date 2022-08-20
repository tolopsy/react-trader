import React from "react";
import { Divider, Stack, Typography } from "@mui/material";
import { RepoFormField } from "../../../components";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { updateEconomics } from "../../../store/reducers/economicsSlice";

export const RepoLeg: React.FC = () => {
  const dispatch = useAppDispatch();
  const { economicsState } = useAppSelector((state) => state);

  const handleEconomicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateEconomics({
        [event.target.name as string]: Number(event.target.value),
      })
    );
  };

  return (
    <div>
      <Typography component="p" color="textPrimary" variant="subtitle1">
        Leg
      </Typography>
      <Divider sx={{ m: 2 }} />
      <Stack spacing={2}>
        <RepoFormField
          name="cleanPrice"
          label="Clean Price"
          onChange={handleEconomicChange}
          value={economicsState.cleanPrice}
        />
        <RepoFormField
          name="yield"
          label="Yield"
          onChange={handleEconomicChange}
          value={economicsState.yieldValue}
          disabled
        />
        <RepoFormField
          name="dirtyPrice"
          label="Dirty Price"
          onChange={handleEconomicChange}
          value={economicsState.dirtyPrice}
          disabled
        />
        <RepoFormField
          name="haircut"
          label="Hairucut %"
          onChange={handleEconomicChange}
          value={economicsState.haircut}
        />
        <RepoFormField
          name="startCash"
          label="Start Cash"
          onChange={handleEconomicChange}
          value={economicsState.startCash}
        />
        <RepoFormField
          name="endCash"
          label="End Cash"
          onChange={handleEconomicChange}
          value={economicsState.endCash}
          disabled
        />
      </Stack>
    </div>
  );
};
