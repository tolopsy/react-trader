import React from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { RouteType } from "../../routes";
import { useNavigate } from "react-router-dom";

interface Props {
  links: RouteType[];
}

export const Menu: React.FC<Props> = ({links}): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div>
      <MenuList>
        {links?.map((link) => (
          <MenuItem key={link.path} onClick={() => navigate(link.path)}>
            <ListItemIcon>{<link.icon fontSize="small" />}</ListItemIcon>
            <ListItemText>{link.label}</ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </div>
  );
};