//FOR ALL
export const optionsPie = {
  maintainAspectRatio: false, // Don't maintain w/h ratio
};

// PAGE MVT
export const optionsBar = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
};

export const labels = [
  "Equities",
  "Fonds alternatifs",
  "Liquidités",
  "Obligations & fonds obligata",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [10, 20, 35, 50],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
