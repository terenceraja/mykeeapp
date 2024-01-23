import React from "react";
import { NavBarData } from "../data/NavBarData";
import { Link } from "react-router-dom";

import styles from "../styles/components/NavBarMobile.module.css";

const NavBarMobile = () => {
  const navList = NavBarData.map((item, key) => {
    return (
      <li key={key}>
        <Link to={item.path}>
          <img src={item.icon} className={styles.icons} alt="navLogo" />
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

export default NavBarMobile;
