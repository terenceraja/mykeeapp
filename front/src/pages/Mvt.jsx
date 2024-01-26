import styles from "../styles/pages/Mvt.module.css";
import React from "react";
import Card from "../components/Card";
import { useState, useEffect } from "react";

// UTILS FUNCTIONS
import { formatISO } from "../utils/functions";

// REDUCER
import { useSelector } from "react-redux";

//HTTP REQUESTS
import { fetchMvt } from "../utils/http";

//CHARTJS & TABULATOR
import { columnsMvt, optionsTable } from "../data/TabulatorData";
import { ReactTabulator } from "react-tabulator";

const Mvt = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [dataMvt, setDataMvt] = useState([]);
  const [error, setError] = useState("");

  // STORE
  const lignInfos = useSelector((state) => state.keys.value.activeLign);

  console.log("lignInfos", lignInfos);

  // GET FETCHING EXAMPLE
  useEffect(() => {
    const fetchDataFromServer = async () => {
      setIsFetching(true);

      try {
        const responseMvt = await fetchMvt(lignInfos);
        console.log("response", responseMvt);

        const updateData = formatISO(
          responseMvt.data,
          "CptaDateOPE_lsd",
          "CptaDateValeur_lsd"
        );
        console.log("update", updateData);
        setDataMvt(updateData);
      } catch (error) {
        setError({ message: error.message || "custom error message" });
      } finally {
        setIsFetching(false);
      }
    };

    fetchDataFromServer(); // Call the renamed local function
  }, []);
  //
  return (
    <div className={styles.content}>
      <Card title="Mouvement comptable - Année en cours">
        <ReactTabulator
          data={dataMvt}
          columns={columnsMvt}
          options={optionsTable}
        />
      </Card>
    </div>
  );
};
export default Mvt;
