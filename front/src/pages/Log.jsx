import "../styles/pages/Log.css";
import logo from "../assets/myKeeApp.png";
import { useState } from "react";

import React from "react";

const Log = () => {
  const [login, setLogin] = useState("");

  const handleLogin = () => {
    console.log("click");
  };

  return (
    <div className="content">
      <div className="log_card">
        <section className="logo_section">
          <img src={logo} alt="logo" id="logo" />
          <h3>Welcome to MyKeeApp</h3>
        </section>

        <section className="submit_section">
          <input type="text" placeholder="Login" value={login} />
          <input type="text" placeholder="Password" />
          <button onClick={() => handleLogin()}>LOGIN</button>
        </section>
      </div>
    </div>
  );
};

export default Log;
