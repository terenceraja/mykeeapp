import React, { useEffect } from "react";
import { NavBarData, NavBarData2 } from "../data/NavBarData.jsx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import styles from "../styles/components/NavBar.module.css";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { NavLink } from "react-router-dom";

//REDUCERS
import { clearStore } from "../reducers/primaryKeys";

import LogoutIcon from "@mui/icons-material/Logout";
const logoutCSS = {
  fontSize: "20px",
  color: "#06171f",
  margin: "0px 25px",
};

const NavBar = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggingOut(false);
  }, []);

  const handleLogout = () => {
    setIsLoggingOut((prev) => !prev);
    dispatch(clearStore());
    setTimeout(() => {
      setIsLoggingOut((prev) => !prev);
      navigate("/");
    }, 1200);
  };

  const navList = NavBarData2.map((item, key) => {
    return (
      <li key={key} className={styles.nav_row}>
        <NavLink
          className={styles.link}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#8e8f91" : "",
          })}
          to={item.path}
        >
          {/* <img src={item.icon} className={styles.icons} alt="navLogo" /> */}
          {item.icon}

          <h2>{item.label}</h2>
        </NavLink>
      </li>
    );
  });

  return (
    <nav className={styles.nav_Bar}>
      <ul className={styles.nav_rows_container}>
        {navList}
        <button
          onClick={() => handleLogout()}
          id={styles.logoutBtn}
          className={styles.link}
        >
          <LogoutIcon sx={logoutCSS} />
          <h2>DECONNEXION</h2>
        </button>
      </ul>
      {isLoggingOut && (
        <Box sx={{ width: "100%" }}>
          <LinearProgress color="warning" />
        </Box>
      )}
    </nav>
  );
};

export default NavBar;
