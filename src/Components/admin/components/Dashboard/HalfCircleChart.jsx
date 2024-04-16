import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";
Chart.register([ArcElement, Tooltip]);
const data = {
  labels: ["yellow", "blue", "green", "red"],
  datasets: [
    {
      label: "Dataset",
      data: [1, 2, 3, 4], // Adjust values as needed
      backgroundColor: ["yellow", "blue", "green", "red"],
      borderWidth: 0,
      hoverOffset: 8,
    },
  ],
};

const options = {
  // maintainAspectRatio: false,
  responsive: true,
  cutout: "85%",
  circumference: 180,
  rotation: -90,
  layout: {
    padding: 0,
  },
  interaction: {
    intersect: true,
  },
  x: {
    stacked: true,
  },
  y: {
    stacked: false,
  },
  tooltip: {
    enabled: true,
    callbacks: {
      label: function (context) {
        const label = context.dataset.label || "";
        if (label) {
          return label + ": " + context.parsed.y;
        }
        return context.parsed.y;
      },
    },
  },
};

const HalfCircleChart = () => {
  return (
    <div className='shrink-0 h-[120px] overflow-hidden relative m-0 p-0'>
      <div
        className='absolute -top-8'
        style={{ width: "100%", height: "150px" }}
      >
        <Doughnut data={data} options={options} />
      </div>
      <div className='content absolute top-6 left-[18%]'>
        <div className='text-center text-gray-500 text-[11px] font-medium font-Poppins leading-loose'>
          Increase
        </div>
        <div className='text-center text-violet-600 text-3xl font-semibold font-Inter leading-[38px]'>
          78%
        </div>
      </div>
    </div>
  );
};

export default HalfCircleChart;
