import styles from "../styles/pages/DetPtf.module.css";

import React from "react";

import { columnsLignPtf, optionsTable } from "../data/TabulatorData";

import { optionsBar } from "../data/ChartData";

import { useNavigate } from "react-router-dom";

import {
  formatISO,
  PCTValCalc,
  PCTCalc,
  getUniqueLanguesWithSum,
} from "../utils/functions";

import Card from "../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { addActiveLignToStore } from "../reducers/primaryKeys";
import { fetchLign } from "../utils/http";
import { useState, useEffect } from "react";

//CHARTJS & TABULATOR
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { ReactTabulator } from "react-tabulator";

const Cons = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [dataLignPtf, setDataLignPtf] = useState([]);
  const [dataBar, setDataBar] = useState({});
  const [error, setError] = useState("");

  const dataBarChart = {
    labels: dataBar.uniqueLangues,
    datasets: [
      {
        data: dataBar.adjustedSumByLangue,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        label: "My Dataset",
        barThickness: 50,
      },
    ],
  };

  const IdCtraPtf = useSelector((state) => state.keys.value.IdCrtaPTF);
  const totalMV = useSelector((state) => state.keys.value.TotalMV);

  console.log("IdCtraPtfArray", IdCtraPtf);
  console.log(totalMV);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  // GET FETCHING EXAMPLE
  useEffect(() => {
    const fetchDataFromServer = async () => {
      setIsFetching(true);

      try {
        const responseLignPtf = await fetchLign({ IdCtraPtf });
        console.log(responseLignPtf);
        //CALCULATE +/- VALUE
        const dataWithPCTVal = PCTValCalc(responseLignPtf.data);
        console.log("PCTVAL", dataWithPCTVal);
        //

        //CALCULATE %
        const dataWithPCT = PCTCalc(dataWithPCTVal, totalMV);
        console.log("%", dataWithPCTVal);
        //

        //DATE FORMAT
        const dataDateFormat = formatISO(dataWithPCT, "DateMaturite_lsd");
        console.log("Final", dataDateFormat);
        ///

        //GET LABELS
        const labels = getUniqueLanguesWithSum(dataDateFormat, totalMV);
        setDataBar(labels);
        //

        setDataLignPtf(dataDateFormat);
      } catch (error) {
        setError({ message: error.message || "custom error message" });
      } finally {
        setIsFetching(false);
      }
    };

    fetchDataFromServer(); // Call the renamed local function
  }, []);
  //

  const rowClick = (e, row) => {
    console.log(row.getData());
    const IdAsset = row.getData().IdAsset;
    const activeLign = { IdCtraPtf: IdCtraPtf, IdAsset: IdAsset };
    dispatch(addActiveLignToStore(activeLign));
    navigate("/Mvt");
  };
  return (
    <div className={styles.content}>
      <Card title="CLASSES D'ACTIF">
        <Bar
          options={optionsBar}
          data={dataBarChart}
          height={300}
          style={{ backgroundColor: "white", borderRadius: "5px" }}
        />
      </Card>
      <Card title="Consolidations">
        <ReactTabulator
          data={dataLignPtf}
          columns={columnsLignPtf}
          options={optionsTable}
          events={{
            rowClick: rowClick,
          }}
        />
      </Card>
    </div>
  );
};

export default Cons;
