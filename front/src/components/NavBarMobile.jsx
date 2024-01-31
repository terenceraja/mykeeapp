// REACT
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  NavBarData,
  NavBarData2,
  NavBarData2Mobile,
} from "../data/NavBarData.jsx";
//REDUCERS
import { clearStore } from "../reducers/primaryKeys";

//MODAL LOGOUT
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

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
  const [open, setOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  console.log(NavBarData2);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggingOut((prev) => !prev);
    dispatch(clearStore());
    setTimeout(() => {
      setIsLoggingOut((prev) => !prev);
      setOpen(false);
      navigate("/");
    }, 1200);
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
        <LogoutIcon
          onClick={() => handleOpenModal()}
          sx={iconCssMobileLogout}
        />
      </Link>

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

export default NavBarMobile;
