import styles from "../styles/pages/Log.module.css";
import logo from "../assets/myKeeApp.png";
import { useState, useEffect } from "react";
import { fetchGET, fetchPOST } from "../utils/http";

import React from "react";

const dummyForm = { login: "terence", password: "yolo" };

const Log = () => {
  //FORM POST
  const [form, setForm] = useState({
    login: "",
    password: "",
  });

  // FETCH STATES
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState("");

  // // GET FETCHING EXAMPLE
  // useEffect(() => {
  //   const fetchDataFromServer = async () => {
  //     setIsFetching(true);

  //     try {
  //       const data = await fetchGET(); // Use the imported fetchData function
  //       console.log(data);
  //     } catch (error) {
  //       setError({ message: error.message || "custom error message" });
  //     } finally {
  //       setIsFetching(false);
  //     }
  //   };

  //   fetchDataFromServer(); // Call the renamed local function
  // }, []);

  // POST FETCHING EXAMPLE
  const fetchDataFromServer = async () => {
    setIsFetching(true);

    try {
      const response = await fetchPOST(form);
      console.log(response);
    } catch (error) {
      setError({ message: error.message || "custom error message" });
    }
  };

  // INPUT ONCHANGE
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  //HANDLE LOGIN CLICK
  const handleLogin = (e) => {
    e.preventDefault();
    fetchDataFromServer();
    console.log("click");
  };

  return (
    <div className={styles.content}>
      <div className={styles.log_card}>
        <section className={styles.logo_section}>
          <img src={logo} alt="logo" id={styles.logo} />
          <h3>Welcome to MyKeeApp</h3>
        </section>

        <form
          className={styles.submit_section}
          onSubmit={(e) => handleLogin(e)}
        >
          <input
            onChange={(e) => handleOnChange(e)}
            type="text"
            placeholder="Login"
            name="login"
            required
          />
          <input
            onChange={(e) => handleOnChange(e)}
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <button>LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Log;
