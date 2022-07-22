import React from "react";
import { Drawer, IconButton, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { ChevronLeft, ChevronRight} from "@mui/icons-material"


const DrawerHeader = styled("div")(({ theme}) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const LogoStyled = styled("div")(({ theme}) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

interface Props {
  isOpen: boolean;
  handleSidebarToggle: () => void;
  children: React.ReactNode;
}

const DRAWER_WIDTH = 240;

export const SideBar: React.FC<Props> = ({
  isOpen,
  handleSidebarToggle,
  children,
}): JSX.Element => {
  const theme = useTheme();
  return (
    <>
      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          "& .MUIDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-boc",
          }
        }}
        variant="persistent"
        anchor="left"
        open={isOpen}
      >
        <DrawerHeader>
          <LogoStyled>
            <Typography variant="subtitle2" component="div" align="left">
              React Trader
            </Typography>
          </LogoStyled>
          <IconButton onClick={handleSidebarToggle}>
            {theme.direction === "ltr" ? (<ChevronLeft />) : (<ChevronRight />)}
          </IconButton>
        </DrawerHeader>
      </Drawer>
    </>
  );
}