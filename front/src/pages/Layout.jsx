import React from "react";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import NavBarMobile from "../components/NavBarMobile";

import "../styles/index.css";

const Layout = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 745px)",
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
