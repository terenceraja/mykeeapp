import { DateTime } from "luxon";

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
