import React from "react";
import { Bar } from "react-chartjs-2";
import { BarElement, Chart, CategoryScale, LinearScale } from "chart.js";
Chart.register(BarElement, CategoryScale, LinearScale);

const options = {
  maintainAspectRatio: false,
  responsive: true,
  indexAxis: "x",
  scales: {
    x: {
      stacked: false,
      grid: {
        display: false,
      },
    },
    y: {
      stacked: false,
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    title: {
      display: true,
      text: "Active Hours",
    },
    legend: {
      display: true,
    },
    tooltip: {
      enabled: true,
      mode: "nearest",
    },
  },
};

const BarChart = ({ data }) => {
  return (
    <div className='shrink-0 relative pr-4'>
      <div className='pr-8' style={{ width: "100%", height: "150" }}>
        {data ? <Bar data={data} options={options} /> : ""}
      </div>
    </div>
  );
};

export default BarChart;
