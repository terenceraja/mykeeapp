import styles from "../styles/pages/Cons.module.css";
import Card from "../components/Card";

// import { optionsBar } from "../data/ChartData";

import React from "react";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels"; // Import the datalabels plugin

ChartJS.register(ChartDataLabels); // Register the datalabels plugin

//DUMMY DATA BAR
const optionsBar = {
  maintainAspectRatio: false, // Don't maintain w/h ratio
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  scales: {
    y: {
      grid: {
        display: false, // Disable grid lines on the y-axis
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      anchor: "end", // Adjust the anchor point for the data labels
      align: "end",
      color: "black",
      font: {
        size: 12,
      },
    },
  },
};

const labels = [
  "Equities",
  "Fonds alternatifs",
  "Liquidités",
  ["Obligations &", "fonds obligata"],
];

const data = {
  labels,
  datasets: [
    {
      data: [10, 20, 35, 50],
    },
  ],
};

const Cons = () => {
  return (
    <div className={styles.content}>
      <Card title="bar">
        <Bar
          options={optionsBar}
          data={data}
          height={300}
          style={{ backgroundColor: "white", borderRadius: "5px" }}
        />
      </Card>
    </div>
  );
};

export default Cons;
