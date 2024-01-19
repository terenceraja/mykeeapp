import styles from "../styles/pages/Ptf.module.css";
import React from "react";

import Table from "../components/Table";
import Chart from "../components/Chart";

const Ptf = () => {
  return (
    <div className={styles.content}>
      <Table />
      <section className={styles.charts_container}>
        <Chart />
        <Chart />
      </section>
      <Table />
    </div>
  );
};

export default Ptf;
