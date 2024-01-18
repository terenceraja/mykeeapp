import React from "react";

import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

import "../styles/index.css";

const Layout = () => {
  return (
    <main className="main">
      <NavBar />
      <Outlet />
    </main>
  );
};

export default Layout;
