import styles from "../styles/pages/Ptf.module.css";
import React from "react";
import { useState } from "react";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Card from "../components/Card";

const Ptf = () => {
  const options = {
    maintainAspectRatio: false, // Don't maintain w/h ratio
  };

  const data = {
    labels: ["a", "b", "c"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3],
      },
    ],
  };
  return (
    <div className={styles.content}>
      <Card title="table">TABLE</Card>
      <section className={styles.charts_container}>
        <Card title="chart">
          <Doughnut data={data} options={options} />
        </Card>

        <Card title="chart">
          <Doughnut data={data} options={options} />
        </Card>
      </section>
      <Card title="table">TABLE</Card>
    </div>
  );
};

export default Ptf;
