import styles from "../styles/pages/Log.module.css";
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
    <div className={styles.content}>
      <div className={styles.log_card}>
        <section className={styles.logo_section}>
          <img src={logo} alt="logo" id={styles.logo} />
          <h3>Welcome to MyKeeApp</h3>
        </section>

        <form className={styles.submit_section}>
          <input
            onChange={(e) => handleOnChange(e)}
            type="text"
            placeholder="Login"
            name="login"
          />
          <input
            onChange={(e) => handleOnChange(e)}
            type="password"
            placeholder="Password"
            name="password"
          />
          <button onClick={() => handleLogin()}>LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Log;
