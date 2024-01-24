import styles from "../styles/pages/Ptf.module.css";
import React from "react";

import { columnsPtf, columnsOpe, optionsTable } from "../data/TabulatorData";
import { optionsChart } from "../data/ChartData";

import Card from "../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { addIdCtraPtfToStore } from "../reducers/primaryKeys";
import { fetchPtf, fetchId } from "../utils/http";
import { useState, useEffect } from "react";

//CHARTJS & TABULATOR
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { ReactTabulator } from "react-tabulator";

//CUSTOM DATA
//CHARTJS
const data = {
  labels: ["a", "b", "c"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3],
    },
  ],
};
//TABULATOR
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
  const [dataPtf, setdataPtf] = useState([]);
  const [dataOpe, setdataOpe] = useState([]);
  const [error, setError] = useState("");
  const IdCtraCli = useSelector((state) => state.keys.value.IdCtraCli);
  console.log(IdCtraCli);
  const dispatch = useDispatch();

  console.log("state", dataPtf);
  // GET FETCHING EXAMPLE
  useEffect(() => {
    const fetchDataFromServer = async () => {
      setIsFetching(true);

      try {
        const responsePtf = await fetchPtf({ IdCtraCli });
        console.log("response data", responsePtf.data);
        const IdCtraPtfArray = responsePtf.data.map((obj) => {
          return obj.IdCtraPtf;
        });

        console.log("map", IdCtraPtfArray);
        dispatch(addIdCtraPtfToStore(IdCtraPtfArray));
        setdataPtf(responsePtf.data);
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
        <ReactTabulator
          data={dataPtf}
          columns={columnsPtf}
          options={optionsTable}
        />
      </Card>
      <section className={styles.charts_container}>
        <Card title="CLASSES D'ACTIF">
          <Doughnut
            data={data}
            width={300}
            height={300}
            options={optionsChart}
            style={{ backgroundColor: "white", borderRadius: "5px" }}
          />
        </Card>

        <Card title="DEVISES">
          <Doughnut
            data={data}
            width={300}
            height={300}
            options={optionsChart}
            style={{ backgroundColor: "white", borderRadius: "5px" }}
          />
        </Card>
      </section>
      <Card title="OPERATIONS">
        <ReactTabulator
          data={dataTable}
          columns={columnsOpe}
          options={optionsTable}
        />
      </Card>
    </div>
  );
};

export default Ptf;
