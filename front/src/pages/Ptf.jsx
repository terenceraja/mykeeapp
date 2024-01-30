import styles from "../styles/pages/Ptf.module.css";
import React from "react";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// UTILS FUNCTIONS
import {
  formatISO,
  getUniqueLanguesWithSum,
  getUniqueDevWithSum,
} from "../utils/functions";

// REDUCERS
import {
  addIdCtraPtfToStore,
  addActivePtfToStore,
  addTotalMVToStore,
} from "../reducers/primaryKeys";

// HTTP REQUEST
import { fetchPtf, fetchOpe, fetchLign } from "../utils/http";

//CHARTJS & TABULATOR
import { columnsPtf, columnsOpe, optionsTable } from "../data/TabulatorData";
import { optionsPie, labels } from "../data/ChartData";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { ReactTabulator } from "react-tabulator";

const Ptf = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [dataPtf, setdataPtf] = useState([]);
  const [dataOpe, setdataOpe] = useState([]);
  const [dataClasses, setDataClasses] = useState({});
  const [dataDevises, setDataDevises] = useState({});
  const [error, setError] = useState("");
  const IdCtraCli = useSelector((state) => state.keys.value.IdCtraCli);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //CHARTJS DOUGHNUT LABELS AND DATA
  const dataSetClasses = {
    // labels: dataClasses.uniqueLangues, // SWITCH IF NEEDED
    labels: labels,
    datasets: [
      {
        data: dataClasses.adjustedSumByLangue,
        backgroundColor: [
          "rgba(75, 192, 192, 0.4)",
          "rgba(65, 105, 225, 0.4)",
          "rgba(255, 192, 203, 0.4)",
          "rgba(255, 165, 0, 0.4)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 0.8)",
          "rgba(65, 105, 225, 0.8)",
          "rgba(255, 192, 203, 0.8)",
          "rgba(255, 165, 0, 0.8)",
        ],
      },
    ],
  };

  const dataSetDevises = {
    labels: dataDevises.uniqueLangues,
    datasets: [
      {
        data: dataDevises.adjustedSumByLangue,
        backgroundColor: [
          "rgba(75, 192, 192, 0.4)",
          "rgba(65, 105, 225, 0.4)",
          "rgba(255, 192, 203, 0.4)",
          "rgba(255, 165, 0, 0.4)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 0.8)",
          "rgba(65, 105, 225, 0.8)",
          "rgba(255, 192, 203, 0.8)",
          "rgba(255, 165, 0, 0.8)",
        ],
      },
    ],
  };

  // GET FETCHING EXAMPLE
  useEffect(() => {
    const fetchDataFromServer = async () => {
      setIsFetching(true);

      try {
        //PORTFOLIOS
        const responsePtf = await fetchPtf({ IdCtraCli });
        console.log(responsePtf);
        const IdCtraPtf = responsePtf.data.map((obj) => {
          return obj.IdCtraPtf;
        });
        dispatch(addIdCtraPtfToStore(IdCtraPtf));
        dispatch(addTotalMVToStore(responsePtf.totMV));
        setdataPtf(responsePtf.data);

        console.log("Ptf IDs", IdCtraPtf);

        //OPERATIONS
        const responseOpe = await fetchOpe({ IdCtraPtf });
        console.log(responseOpe);
        const updateDataOpe = formatISO(responseOpe.data, "DateCptaOPE_lsd");
        setdataOpe(updateDataOpe);

        //LIGNES CLASSES FOR DOUGHNUT
        const responseLignPtf = await fetchLign({ IdCtraPtf });
        const labelsAndDataClasses = getUniqueLanguesWithSum(
          responseLignPtf.data,
          responsePtf.totMV
        );
        setDataClasses(labelsAndDataClasses);

        //LIGNES DEVISES FOR DOUGHNUT
        const labelsAndDataDevises = getUniqueDevWithSum(
          responseLignPtf.data,
          responsePtf.totMV
        );
        setDataDevises(labelsAndDataDevises);
      } catch (error) {
        setError({ message: error.message || "custom error message" });
      } finally {
        setIsFetching(false);
      }
    };

    fetchDataFromServer(); // Call the renamed local function
  }, []);

  // ROW CLICK TABULATOR
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
            data={dataSetClasses}
            width={300}
            height={300}
            options={optionsPie}
            style={{ backgroundColor: "white", borderRadius: "5px" }}
          />
        </Card>

        <Card title="DEVISES">
          <Doughnut
            data={dataSetDevises}
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
