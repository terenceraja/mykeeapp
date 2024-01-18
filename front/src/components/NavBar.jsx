import React from "react";
import { NavLink } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const NavBar = () => {
  return (
    <Sidebar>
      <Menu>
        <MenuItem> ACCUEIL </MenuItem>
        <MenuItem> CONSOLIDATIONS </MenuItem>
        <MenuItem> PORTEFEUILLES </MenuItem>
        <MenuItem> MOUVEMENTS </MenuItem>
        <MenuItem> DOCUMENTS </MenuItem>
        <MenuItem> QUESTIONNAIRE </MenuItem>
        <MenuItem> NEWSLETTER </MenuItem>
        <MenuItem> MESSAGERIE </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default NavBar;
