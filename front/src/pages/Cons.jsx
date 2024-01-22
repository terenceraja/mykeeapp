import styles from "../styles/pages/Cons.module.css";
import Card from "../components/Card";

import React from "react";

const Cons = () => {
  return (
    <div className={styles.content}>
      <Card title="table">TABLE</Card>
      <Card title="table">TABLE</Card>
    </div>
  );
};

export default Cons;
