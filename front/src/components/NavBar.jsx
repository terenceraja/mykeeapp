import React from "react";
import { NavBarData } from "../data/NavBarData";
import { Link } from "react-router-dom";

import "../styles/components/NavBar.css";

const NavBar = () => {
  const navList = NavBarData.map((item, key) => {
    return (
      <li key={key} className={item.cName}>
        <Link to={item.path}>
          <img src={item.icon} className="icons" alt="navLogo" />
          <h2>{item.label}</h2>
        </Link>
      </li>
    );
  });

  return (
    <nav className="nav_Bar">
      <ul className="nav_rows_container">{navList}</ul>
    </nav>
  );
};

export default NavBar;
