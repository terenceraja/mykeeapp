import styles from "../styles/pages/DetPtf.module.css";

import React from "react";

import { columnsLignPtf, optionsTable } from "../data/TabulatorData";
// import { optionsBar } from "../data/ChartData";

import { useNavigate } from "react-router-dom";

import Card from "../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { addActiveLignToStore } from "../reducers/primaryKeys";
import { fetchLign } from "../utils/http";
import { useState, useEffect } from "react";

//CHARTJS & TABULATOR
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { ReactTabulator } from "react-tabulator";

const Ptf = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [dataLignPtf, setDataLignPtf] = useState([]);
  const [error, setError] = useState("");

  const ptfInfos = useSelector((state) => state.keys.value.activePtf);

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

        setDataLignPtf(responseLignPtf.data);
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
    const IdLignPtf = row.getData().IdLignPtf;
    const activeLign = { IdCtraPtf: IdCtraPtf, IdLignPtf: IdLignPtf };
    dispatch(addActiveLignToStore(activeLign));
    navigate("/Mvt");
  };
  return (
    <div className={styles.content}>
      <Card title="bar">
        <Bar options={optionsBar} data={data} />
      </Card>
      <Card
        title={`Dépositaires: ${NumeroPtfDep_lmt} Numéro: ${RaisonSociale_lmt} Market Value: ${MktValAaiDevCLIAuc_lcn}`}
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
