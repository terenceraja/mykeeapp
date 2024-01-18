import React from "react";

import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import NavBar2 from "../components/NavBar2";

import "../styles/index.css";

const Layout = () => {
  return (
    <main className="main">
      <NavBar2 />
      <Outlet />
    </main>
  );
};

export default Layout;
