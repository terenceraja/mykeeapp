import React from "react";
import { NavBarData } from "../data/NavBarData";
import { Link } from "react-router-dom";

import "../styles/components/NavBar.css";

const NavBar2 = () => {
  const navList = NavBarData.map((item) => {
    return (
      <li key={item.title} className={item.cName}>
        <Link to={item.path}>
          <span>{item.title}</span>
        </Link>
      </li>
    );
  });

  return (
    <nav className="nav-menu">
      <ul className="nav-menu-items">{navList}</ul>
    </nav>
  );
};

export default NavBar2;
