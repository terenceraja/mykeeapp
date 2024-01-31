// REACT
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "../styles/components/NavBar.module.css";
import { NavBarData, NavBarData2 } from "../data/NavBarData.jsx";
//MODAL LOGOUT
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

//REDUCERS
import { clearStore } from "../reducers/primaryKeys";

import LogoutIcon from "@mui/icons-material/Logout";
const logoutCSS = {
  fontSize: "20px",
  color: "#06171f",
  margin: "0px 25px",
};

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleCloseModal = () => {
    setOpen(false);
  };

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
      setOpen(false);
      navigate("/");
    }, 1200);
  };

  const handleOpenModal = () => {
    setOpen(true);
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
          onClick={() => handleOpenModal()} // HANDLE MODAALL
          id={styles.logoutBtn}
          className={styles.link}
        >
          <LogoutIcon sx={logoutCSS} />
          <h2>DECONNEXION</h2>
        </button>
      </ul>

      <>
        <Dialog
          open={open}
          onClose={handleCloseModal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Cette action mettra fin à votre session. Êtes-vous certain(e) de
              vouloir vous déconnecter ?
              {isLoggingOut && (
                <Box sx={{ width: "100%" }}>
                  <LinearProgress color="warning" />
                </Box>
              )}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal}>Anuller</Button>
            <Button color="warning" onClick={handleLogout} autoFocus>
              Se Deconnecter
            </Button>
          </DialogActions>
        </Dialog>
      </>
    </nav>
  );
};

export default NavBar;
