import React from "react";
import { NavBarData } from "../data/NavBarData";
import { Link } from "react-router-dom";

import "../styles/components/NavBar.css";

const NavBar = () => {
  const navList = NavBarData.map((item) => {
    return (
      <li key={item.title} className={item.cName}>
        <Link to={item.path}>
          <img src={item.icon} width="16" alt="Logo" />
          <h2>{item.label}</h2>
        </Link>
      </li>
    );
  });

  return (
    <nav className="nav-bar">
      <ul className="nav-rows-container">{navList}</ul>
    </nav>
  );
};

export default NavBar;
