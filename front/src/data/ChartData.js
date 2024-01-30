//DOUGHNUT CHART OPTIONS

export const optionsPie = {
  maintainAspectRatio: false, // Don't maintain w/h ratio
  plugins: {
    legend: {
      display: true,
      position: "left", // Position the legend at the bottom
      labels: {
        padding: 20,
        font: {
          size: 12,
        },
      },
    },
    datalabels: {
      formatter: (val) => {
        return `${Math.ceil(val * 100) / 100}` + " %";
      },
      anchor: "end", // Adjust the anchor point for the data labels
      align: "end",

      font: {
        size: 12,
      },
    },
  },
  layout: {
    padding: {
      top: 30,
      bottom: 20,
      left: 50,
      right: 50,
    },
  },
};

// //BAR CHART OPTIONS
export const optionsBar = {
  maintainAspectRatio: false, // Don't maintain w/h ratio
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  scales: {
    y: {
      grid: {
        display: false, // Disable grid lines on the y-axis
      },
    },
  },
  plugins: {
    tooltip: {},
    legend: {
      display: false,
    },
    datalabels: {
      formatter: (val) => {
        return `${Math.ceil(val * 100) / 100}` + " %";
      },
      anchor: "center", // Adjust the anchor point for the data labels
      align: "center",
      color: "black",
      font: {
        size: 12,
      },
    },
  },
};

export const labels = [
  "Equities",
  "Fonds alternatifs",
  "Liquidités",
  ["Obligations &", "fonds obligataires"],
];
