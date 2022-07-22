import React from "react";
import {
  AppBar,
  IconButton,
  Switch as ThemeSwitch,
  Toolbar,
  Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"


interface Props {
  handleMenuToggle: () => void;
  onThemeChange: () => void;
  isDarkMode: boolean;
  isSideBarOpen: boolean
}

export const AppBarComponent: React.FC<Props> = ({handleMenuToggle, onThemeChange, isDarkMode, isSideBarOpen}): JSX.Element => {
  return (
    <div>
      <AppBar position="static" variant="elevation">
        <Toolbar variant="dense">
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleMenuToggle}
            sx={{ mr: 2, ...(isSideBarOpen && {display: "none"})}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="subtitle1" component="div" sx={{flexGrow: 1}}>React Trader</Typography>
          {isDarkMode ? <DarkModeIcon /> : null}
          <ThemeSwitch size="small" onChange={onThemeChange} color="default" />
          {!isDarkMode ? <LightModeIcon /> : null}
        </Toolbar>
      </AppBar>
    </div>
  );
}
