import styles from "../styles/pages/Ptf.module.css";
import React from "react";

import { columnsPtf, columnsOpe, optionsTable } from "../data/TabulatorData";
import { optionsChart } from "../data/ChartData";

import Card from "../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { addIdCtraPtfToStore } from "../reducers/primaryKeys";
import { fetchPtf, fetchOpe } from "../utils/http";
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

const Ptf = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [dataPtf, setdataPtf] = useState([]);
  const [dataOpe, setdataOpe] = useState([]);
  const [error, setError] = useState("");
  const IdCtraCli = useSelector((state) => state.keys.value.IdCtraCli);

  const dispatch = useDispatch();

  // GET FETCHING EXAMPLE
  useEffect(() => {
    const fetchDataFromServer = async () => {
      setIsFetching(true);

      try {
        const responsePtf = await fetchPtf({ IdCtraCli });
        console.log(responsePtf);
        const IdCtraPtfArray = responsePtf.data.map((obj) => {
          return obj.IdCtraPtf;
        });

        console.log("Ptf IDs", IdCtraPtfArray);
        dispatch(addIdCtraPtfToStore(IdCtraPtfArray));
        const responseOpe = await fetchOpe({ IdCtraPtfArray });
        console.log(responseOpe);
        setdataOpe(responseOpe.data);
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
          data={dataOpe}
          columns={columnsOpe}
          options={optionsTable}
        />
      </Card>
    </div>
  );
};

export default Ptf;
