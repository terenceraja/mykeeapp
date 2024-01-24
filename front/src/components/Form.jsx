import React from "react";

import styles from "../styles/components/Form.module.css";

import { useNavigate } from "react-router-dom";

import { useState } from "react";

import { fetchId } from "../utils/http";
import { useDispatch, useSelector } from "react-redux";
import { addIdCtraCliToStore } from "../reducers/primaryKeys";

const Form = () => {
  // FETCH STATES
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");

  // FORM
  const [form, setForm] = useState({
    login: "",
    password: "",
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const keys = useSelector((state) => state.keys.value);

  // POST FETCHING EXAMPLE
  const fetchDataFromServer = async () => {
    setIsFetching(true);

    try {
      const response = await fetchId(form);
      return response;
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
  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetchDataFromServer();

    if (response.IdCtraCli) {
      console.log(response);
      dispatch(addIdCtraCliToStore(response.IdCtraCli));
      navigate("/ptf");
    } else {
      console.log(response.message);
    }
  };

  return (
    <form className={styles.submit_section} onSubmit={(e) => handleLogin(e)}>
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
      <button className={styles.loginBtn}>LOGIN</button>
    </form>
  );
};

export default Form;
