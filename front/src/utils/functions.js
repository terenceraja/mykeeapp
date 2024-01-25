import { DateTime } from "luxon";

// DATE FORMATING
export const formatISO = (arr, col1, col2) => {
  if (col1 && col2) {
    return arr.map((obj) => {
      const luxonDateOPE = obj[col1] ? DateTime.fromISO(obj[col1]) : null;
      const luxonDateValeur = obj[col2] ? DateTime.fromISO(obj[col2]) : null;

      return {
        ...obj,
        [col1]: luxonDateOPE ? luxonDateOPE.toFormat("dd/MM/yyyy") : null,
        [col2]: luxonDateValeur ? luxonDateValeur.toFormat("dd/MM/yyyy") : null,
      };
    });
  } else {
    return arr.map((obj) => {
      const luxonDateOPE = obj[col1] ? DateTime.fromISO(obj[col1]) : null;

      return {
        ...obj,
        [col1]: luxonDateOPE ? luxonDateOPE.toFormat("dd/MM/yyyy") : null,
      };
    });
  }
};

// CALCULATE +/- VALUE TABLE LIGNEPTF
export const PCTValCalc = (arr) =>
  arr.map((obj) => {
    // Extract the necessary values from the object
    const MktCOTDevLIGN = parseFloat(obj.MktCOTDevLIGN_lsn);
    const PMA = parseFloat(obj.PMA_lsn);

    // Calculate the "Value" based on the provided formula
    const Value = (MktCOTDevLIGN / PMA - 1) * 100;

    // Create a new object with the existing properties and the new "Value" property
    return {
      ...obj,
      Value: isNaN(Value) ? null : Value.toFixed(2), // Handle potential NaN values and round to 2 decimal places
    };
  });

// CACULATE % TABLES LIGNEPTF

export const PCTCalc = (arr, totMV) =>
  arr.map((obj) => {
    const MVAaiJCptaDevPTF_lsn = parseFloat(obj.MVAaiJCptaDevPTF_lsn) || 0;
    const PCT = ((MVAaiJCptaDevPTF_lsn / totMV) * 100).toFixed(2);

    return {
      ...obj,
      PCT: isNaN(PCT) ? null : PCT,
    };
  });
