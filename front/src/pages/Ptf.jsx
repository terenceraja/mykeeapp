import styles from "../styles/pages/Ptf.module.css";
import React from "react";

import { columnsPtf, columnsOpe, optionsTable } from "../data/TabulatorData";
import { optionsPie } from "../data/ChartData";

import { useNavigate } from "react-router-dom";

import Card from "../components/Card";
import { useSelector, useDispatch } from "react-redux";
import {
  addIdCtraPtfToStore,
  addActivePtfToStore,
} from "../reducers/primaryKeys";
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

  const navigate = useNavigate();

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

  const rowClick = (e, row) => {
    const activePtf = row.getData();
    dispatch(addActivePtfToStore(activePtf));
    navigate("/DetPtf");
  };
  return (
    <div className={styles.content}>
      <Card title="VOS PORTEFEUILLES">
        <ReactTabulator
          data={dataPtf}
          columns={columnsPtf}
          options={optionsTable}
          events={{
            rowClick: rowClick,
          }}
        />
      </Card>
      <section className={styles.charts_container}>
        <Card title="CLASSES D'ACTIF">
          <Doughnut
            data={data}
            width={300}
            height={300}
            options={optionsPie}
            style={{ backgroundColor: "white", borderRadius: "5px" }}
          />
        </Card>

        <Card title="DEVISES">
          <Doughnut
            data={data}
            width={300}
            height={300}
            options={optionsPie}
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
