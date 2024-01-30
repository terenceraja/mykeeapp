import React from "react";
import {
  NavBarData,
  NavBarData2,
  NavBarData2Mobile,
} from "../data/NavBarData.jsx";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//REDUCERS
import { clearStore } from "../reducers/primaryKeys";

import styles from "../styles/components/NavBarMobile.module.css";

const iconCssMobileLogout = {
  fontSize: "25px",
  color: "#06171f",
  transition: "color 0.2s ease-in-out", // Add a smooth transition effect
  "&:hover": {
    color: "white",
  },
  padding: "0px 10px",
};

import LogoutIcon from "@mui/icons-material/Logout";

const NavBarMobile = () => {
  console.log(NavBarData2);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // dispatch(clearStore());
    // navigate("/");
  };

  const navList = NavBarData2Mobile.map((item, key) => {
    return (
      <li key={key}>
        <Link className={styles.link} to={item.path}>
          {/* <img src={item.icon} className={styles.icons} alt="navLogo" /> */}
          {item.icon}
        </Link>
      </li>
    );
  });

  return (
    <nav className={styles.nav_Bar}>
      <ul className={styles.nav_rows_container}>{navList}</ul>
      <Link id={styles.logoutBtn}>
        <LogoutIcon sx={iconCssMobileLogout} />
      </Link>
    </nav>
  );
};

export default NavBarMobile;
