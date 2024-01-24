//FOR ALL TABLES
export const optionsTable = {
  movableColumns: true,
  layout: "fitDataFill",
  responsiveLayout: "hide",
  paginationButtonCount: 3,
  pagination: true,
  paginationSize: 10,
  paginationSizeSelector: [10, 20, 50],
};
//

// TABLE VOS PORTEFEUILLE PAGE PTF
export const columnsPtf = [
  {
    title: "DEPOSITAIRES",
    field: "RaisonSociale_lmt",
    responsive: 0,
    resizable: true,
    minWidth: 100,
  },
  {
    title: "NUMERO",
    field: "NumeroPtfDep_lmt",
    responsive: 0,
    resizable: true,
    minWidth: 150,
  },
  {
    title: "PROFILE",
    field: "NomLocalProfil_lmt",
    responsive: 1,
    resizable: true,
    minWidth: 150,
  },
  {
    title: "MARKET VALUE",
    field: "MktValAaiDevCLIAuc_lcn",
    responsive: 0,
    minWidth: 150,
    formatter: "money",
    formatterParams: {
      decimal: ",",
      thousand: " ",
      negativeSign: true,
    },
    resizable: true,
    headerHozAlign: "right",
    hozAlign: "right",
  },
];
//

//TABLE OPERATIONS PAGE PTF
export const columnsOpe = [
  {
    title: "DATE",
    field: "Date",
    responsive: 0,
    resizable: false,
    minWidth: 100,
    sorter: "date",
    sorterParams: {
      format: "dd/mm/yyyy",
    },
  },
  {
    title: "OPERATION",
    field: "Operation",
    responsive: 0,
    resizable: false,
    minWidth: 200,
  },
  {
    title: "ASSET",
    field: "Asset",
    responsive: 0,
    resizable: true,
    minWidth: 200,
  },
  {
    title: "ISIN",
    field: "Isin",
    responsive: 0,
    resizable: false,
    minWidth: 150,
  },
  {
    title: "DEVISE",
    field: "Devise",
    responsive: 1,
    resizable: false,
    minWidth: 80,
  },
  {
    title: "PRIX",
    field: "Prix",
    responsive: 2,
    headerHozAlign: "right",
    hozAlign: "right",
    formatter: "money",
    formatterParams: {
      decimal: ",",
      thousand: " ",
      negativeSign: true,
    },
    resizable: false,
    minWidth: 120,
  },
  {
    title: "QUANTITE",
    field: "Quantite",
    responsive: 0,
    headerHozAlign: "right",
    hozAlign: "right",
    formatter: "money",
    formatterParams: {
      decimal: ",",
      thousand: " ",
      negativeSign: true,
      precision: 4,
    },
    resizable: false,
    minWidth: 120,
  },
  {
    title: "MONTANT",
    field: "Montant",
    responsive: 3,
    formatter: "money",
    formatterParams: {
      decimal: ",",
      thousand: " ",
      negativeSign: true,
    },
    resizable: false,
    minWidth: 120,
    headerHozAlign: "right",
    hozAlign: "right",
  },
];
