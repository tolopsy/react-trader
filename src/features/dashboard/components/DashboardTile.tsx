import React from "react";
import { Card, CardContent, Typography, CircularProgress } from "@mui/material";
import CloudOffIcon from "@mui/icons-material/CloudOff";


interface DashboardTileProps {
  minWidth: string | number;
  title: string;
  subTitle?: string;
  isLoading: boolean;
  hasError?: boolean;
  children: React.ReactNode;
}

export const DashboardTile: React.FC<DashboardTileProps> = ({
  minWidth,
  title,
  subTitle,
  isLoading = false,
  hasError = false,
  children,
}): JSX.Element => {
  return (
    <Card raised sx={{ minWidth: { minWidth }, textAlign: "center" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondar">
          {subTitle}
        </Typography>
        {isLoading && <CircularProgress color="secondary" />}
        {hasError && <CloudOffIcon color="secondary" sx={{ fontSize: 50}}/>}
        {!isLoading && !hasError && children}
      </CardContent>
    </Card>
  )
}