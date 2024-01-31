import styles from "../styles/pages/DetPtf.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//UTILS FUNCTIONS
import {
  formatISO,
  PCTValCalc,
  PCTCalc,
  getUniqueLanguesWithSum,
  YTDTimes100,
} from "../utils/functions";

// REDUCERS
import { addActiveLignToStore } from "../reducers/primaryKeys";

//HTTP REQUESTS
import { fetchLign } from "../utils/http";

//CHARTJS & TABULATOR
import { columnsLignPtf, optionsTable } from "../data/TabulatorData";
import { optionsBar } from "../data/ChartData";
import { Bar } from "react-chartjs-2";
import { ReactTabulator } from "react-tabulator";

const Cons = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [dataLignPtf, setDataLignPtf] = useState([]);
  const [dataBar, setDataBar] = useState({});
  const [error, setError] = useState("");

  //STORE
  const dispatch = useDispatch();
  const IdCtraPtf = useSelector((state) => state.keys.value.IdCrtaPTF);
  const totalMV = useSelector((state) => state.keys.value.TotalMV);

  // NAVIGATE
  const navigate = useNavigate();

  // BAR CHARTJS DATASETS
  const dataBarChart = {
    labels: dataBar.uniqueLangues,
    datasets: [
      {
        data: dataBar.adjustedSumByLangue,
        backgroundColor: [
          "rgba(75, 192, 192, 0.4)",
          "rgba(65, 105, 225, 0.4)",
          "rgba(255, 192, 203, 0.4)",
          "rgba(255, 165, 0, 0.4)",
          "rgba(255, 99, 71, 0.4)",
          "rgba(128, 0, 128, 0.4)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 0.8)",
          "rgba(65, 105, 225, 0.8)",
          "rgba(255, 192, 203, 0.8)",
          "rgba(255, 165, 0, 0.8)",
          "rgba(255, 99, 71, 0.4)",
          "rgba(128, 0, 128, 0.4)",
        ],
        borderWidth: 1,

        barThickness: 50,
      },
    ],
  };

  console.log("IdCtraPtfArray", IdCtraPtf);
  console.log(totalMV);

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
        console.log("dateformat", dataDateFormat);
        ///

        //YTD * 100 CALC
        const finalData = YTDTimes100(dataDateFormat);
        console.log("final", finalData);
        //

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

  //TABULATOR ROW CLICK
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
