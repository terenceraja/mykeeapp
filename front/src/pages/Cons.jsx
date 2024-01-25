import styles from "../styles/pages/Cons.module.css";

import React from "react";

import { columnsLignPtf, optionsTable } from "../data/TabulatorData";
import { labels, optionsBar } from "../data/ChartData";

import { useNavigate } from "react-router-dom";

import { formatISO, PCTValCalc, PCTCalc } from "../utils/functions";

import Card from "../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { addActiveLignToStore } from "../reducers/primaryKeys";
import { fetchLign } from "../utils/http";
import { useState, useEffect } from "react";

//CHARTJS & TABULATOR
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { ReactTabulator } from "react-tabulator";

//DUMMY DATA BAR

const dummyData = {
  labels,
  datasets: [
    {
      data: [10, 25, 39, 78],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
      label: "My Dataset",
    },
  ],
};

const Cons = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [dataLignPtf, setDataLignPtf] = useState([]);
  const [error, setError] = useState("");

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
        const responseLignPtf = await fetchLignCons({ IdCtraPtf });
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
        ///
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
      <Card title="bar">
        <Bar
          options={optionsBar}
          data={dummyData}
          height={300}
          style={{ backgroundColor: "white", borderRadius: "5px" }}
        />
      </Card>
      <Card title="Consolidation">
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
