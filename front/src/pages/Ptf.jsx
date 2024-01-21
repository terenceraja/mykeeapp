import styles from "../styles/pages/Ptf.module.css";
import React from "react";

import Card from "../components/Card";

const Ptf = () => {
  return (
    <div className={styles.content}>
      <Card title="table">content</Card>
      <section className={styles.charts_container}>
        <Card title="chart" />
        <Card title="chart" />
      </section>
      <Card title="table" />
    </div>
  );
};

export default Ptf;
