import React from "react";
import styles from "../styles/components/Card.module.css";

const Card = ({ title, children }) => {
  return (
    <div className={styles.card_container}>
      <label>{title}</label>
      <div className={styles.content_container}>{children}</div>
    </div>
  );
};

export default Card;
