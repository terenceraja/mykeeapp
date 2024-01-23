import React from "react";
import styles from "../styles/pages/Log.module.css";
import logo from "../assets/myKeeApp.png";
import Form from "../components/Form";

const Log = () => {
  return (
    <div className={styles.content}>
      <div className={styles.log_card}>
        <section className={styles.logo_section}>
          <img src={logo} alt="logo" id={styles.logo} />
          <h3>Welcome to MyKeeApp</h3>
        </section>

        <Form />
      </div>
    </div>
  );
};

export default Log;
