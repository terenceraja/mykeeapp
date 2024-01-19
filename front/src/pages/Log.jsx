import "../styles/pages/Log.css";
import logo from "../assets/myKeeApp.png";
import { useState } from "react";

import React from "react";

const Log = () => {
  //FORM POST
  const [form, setForm] = useState({
    login: "",
    password: "",
  });

  // INPUT ONCHANGE
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  //HANDLE LOGIN CLICK
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
          <input
            onChange={(e) => handleOnChange(e)}
            type="text"
            placeholder="Login"
            name="login"
          />
          <input
            onChange={(e) => handleOnChange(e)}
            type="text"
            placeholder="Password"
            name="password"
          />
          <button onClick={() => handleLogin()}>LOGIN</button>
        </section>
      </div>
    </div>
  );
};

export default Log;
