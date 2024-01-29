import React from "react";
import {
  NavBarData,
  NavBarData2,
  NavBarData2Mobile,
} from "../data/NavBarData.jsx";
import { Link } from "react-router-dom";

import styles from "../styles/components/NavBarMobile.module.css";

const NavBarMobile = () => {
  console.log(NavBarData2);
  const navList = NavBarData2Mobile.map((item, key) => {
    return (
      <li key={key}>
        <Link to={item.path}>
          {/* <img src={item.icon} className={styles.icons} alt="navLogo" /> */}
          {item.icon}
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
