import React from "react";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import NavBarMobile from "../components/NavBarMobile";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import "../styles/index.css";

const Layout = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1025px)",
  });

  return (
    <main className="main">
      {isMobile ? <NavBarMobile /> : <NavBar />}
      <div className="outlet">
        <Outlet />
      </div>
    </main>
  );
};
// };

export default Layout;
