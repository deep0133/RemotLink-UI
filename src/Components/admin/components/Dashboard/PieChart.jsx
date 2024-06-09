import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, Tooltip, ArcElement } from "chart.js";

Chart.register([Tooltip, ArcElement]);

const PieChart = ({ dataset }) => {
  const options = {
    maintainAspectRatio: false,
    responsve: true,
    plugins: {
      title: {
        display: true,
        text: "Pie Chart",
        font: {
          size: 16, // Adjust font size
        },
      },
      legend: {
        display: true,
        position: "right",
        labels: {
          font: {
            size: 12, // Adjust legend font size
          },
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.formattedValue || "";
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "100%" }}>
      {dataset && <Pie data={dataset} options={options} />}
    </div>
  );
};

export default PieChart;
