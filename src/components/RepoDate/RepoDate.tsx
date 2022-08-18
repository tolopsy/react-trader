import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TextField } from "@mui/material";

interface Props {
  date: Date;
  label: string;
  onChange: (
    date: Date | null,
    keyboardInputValue?: string | undefined
  ) => void;
}
export const RepoDate: React.FC<Props> = ({
  date,
  onChange,
  label,
}: Props): JSX.Element => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={date}
        onChange={onChange}
        renderInput={(params: any) => (
          <TextField
            {...params}
            size="medium"
            variant="outlined"
            sx={{ minWidth: "30%" }}
          />
        )}
      />
    </LocalizationProvider>
  );
};
