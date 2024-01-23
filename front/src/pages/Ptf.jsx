import styles from "../styles/pages/Ptf.module.css";
import React from "react";

import Card from "../components/Card";
import { useSelector } from "react-redux";
import { fetchPtf, fetchId } from "../utils/http";
import { useState, useEffect } from "react";

//CHARTJS & TABULATOR
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { ReactTabulator } from "react-tabulator";

//CUSTOM DATA
//CHARTJS
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

// TABULATOR
const columns = [
  { title: "Name", field: "name", width: 150 },
  { title: "Age", field: "age", hozAlign: "left", formatter: "progress" },
  { title: "Favourite Color", field: "col" },
  { title: "Date Of Birth", field: "dob", hozAlign: "center" },
  { title: "Rating", field: "rating", hozAlign: "center", formatter: "star" },
  {
    title: "Passed?",
    field: "passed",
    hozAlign: "center",
    formatter: "tickCross",
  },
];

const dataTable = [
  { id: 1, name: "Oli Bob", age: "12", col: "red", dob: "" },
  { id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
  {
    id: 3,
    name: "Christine Lobowski",
    age: "42",
    col: "green",
    dob: "22/05/1982",
  },
  {
    id: 4,
    name: "Brendon Philips",
    age: "125",
    col: "orange",
    dob: "01/08/1980",
  },
  {
    id: 5,
    name: "Margret Marmajuke",
    age: "16",
    col: "yellow",
    dob: "31/01/1999",
  },
];

const Ptf = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [resData, setResData] = useState(null);
  const [error, setError] = useState("");
  const IdCtraCli = useSelector((state) => state.keys.value.IdCtraCli);

  console.log(resData);
  // GET FETCHING EXAMPLE
  useEffect(() => {
    const fetchDataFromServer = async () => {
      setIsFetching(true);

      try {
        const responsePtf = await fetchPtf({ IdCtraCli });
        setResData(responsePtf.data);
      } catch (error) {
        setError({ message: error.message || "custom error message" });
      } finally {
        setIsFetching(false);
      }
    };

    fetchDataFromServer(); // Call the renamed local function
  }, []);
  return (
    <div className={styles.content}>
      <Card title="VOS PORTEFEUILLES">
        <ReactTabulator data={dataTable} columns={columns} layout={"fitData"} />
      </Card>
      <section className={styles.charts_container}>
        <Card title="CLASSES D'ACTIF">
          <Doughnut data={data} width={300} height={300} options={options} />
        </Card>

        <Card title="DEVISES">
          <Doughnut data={data} width={300} height={300} options={options} />
        </Card>
      </section>
      <Card title="OPERATIONS">
        {" "}
        <ReactTabulator data={dataTable} columns={columns} layout={"fitData"} />
      </Card>
    </div>
  );
};

export default Ptf;
