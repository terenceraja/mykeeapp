import React from "react";
import { NavBarData } from "../data/NavBarData";
import { Link } from "react-router-dom";

import styles from "../styles/components/NavBar.module.css";

const NavBar = () => {
  const navList = NavBarData.map((item, key) => {
    return (
      <li key={key} className={styles.nav_row}>
        <Link to={item.path}>
          <img src={item.icon} className={styles.icons} alt="navLogo" />
          <h2>{item.label}</h2>
        </Link>
      </li>
    );
  });

  return (
    <nav className={styles.nav_Bar}>
      <ul className={styles.nav_rows_container}>{navList}</ul>
    </nav>
  );
};

export default NavBar;
