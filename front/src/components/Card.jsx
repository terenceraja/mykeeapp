import React from "react";
import styles from "../styles/components/Card.module.css";

const Card = ({ title, children }) => {
  return (
    <div className={styles.card_container}>
      <label>{title}</label>
      {children}
    </div>
  );
};

export default Card;
