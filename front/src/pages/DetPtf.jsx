import styles from "../styles/pages/DetPtf.module.css";
import React from "react";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// ULTILS FUNCTIONS
import {
  formatISO,
  PCTValCalc,
  PCTCalc,
  getUniqueLanguesWithSum,
} from "../utils/functions";

//REDUCERS
import { addActiveLignToStore } from "../reducers/primaryKeys";

// HTTP REQUEST
import { fetchLign } from "../utils/http";

//CHARTJS & TABULATOR
import { columnsLignPtf, optionsTable } from "../data/TabulatorData";
import { optionsBar } from "../data/ChartData";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { ReactTabulator } from "react-tabulator";

const Ptf = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [dataLignPtf, setDataLignPtf] = useState([]);
  const [dataBar, setDataBar] = useState({});
  const [error, setError] = useState("");

  // BAR CHART DATASETS
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
        ],
        borderColor: [
          "rgba(75, 192, 192, 0.8)",
          "rgba(65, 105, 225, 0.8)",
          "rgba(255, 192, 203, 0.8)",
          "rgba(255, 165, 0, 0.8)",
        ],
        borderWidth: 1,
        label: "My Dataset",
        barThickness: 50,
      },
    ],
  };

  const ptfInfos = useSelector((state) => state.keys.value.activePtf);
  console.log("totMV", ptfInfos.MktValAaiDevCLIAuc_lcn);

  console.log("ptfInfos", ptfInfos);
  const {
    IdCtraPtf,
    NumeroPtfDep_lmt,
    RaisonSociale_lmt,
    MktValAaiDevCLIAuc_lcn,
  } = ptfInfos;
  console.log("id", IdCtraPtf);
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
        console.log("new", dataWithPCTVal);
        //

        //CALCULATE %
        const dataWithPCT = PCTCalc(dataWithPCTVal, MktValAaiDevCLIAuc_lcn);
        console.log("new", dataWithPCTVal);
        //

        //DATE FORMAT
        const dataDateFormat = formatISO(dataWithPCT, "DateMaturite_lsd");
        console.log("Final", dataDateFormat);
        //

        //GET LABELS
        const labels = getUniqueLanguesWithSum(
          dataDateFormat,
          MktValAaiDevCLIAuc_lcn
        );
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

  // ROW CLICK TABULATOR
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
      <Card
        title={`Market Value: ${MktValAaiDevCLIAuc_lcn}`}
        // title={`Dépositaires: ${NumeroPtfDep_lmt} Numéro: ${RaisonSociale_lmt} Market Value: ${MktValAaiDevCLIAuc_lcn}`}
      >
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

export default Ptf;
