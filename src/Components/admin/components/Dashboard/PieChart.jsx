import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, Tooltip, ArcElement } from "chart.js";

Chart.register([Tooltip, ArcElement]);

const PieChart = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100, 40, 120, 80],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#2E8B57",
          "#8A2BE2",
          "#FFA500",
        ],
      },
    ],
  };

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
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
