import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

Chart.register([
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
]);

const SmoothLineChart = () => {
  const [borderColor1, setBorderColor1] = useState("#B692F6");
  const [borderColor2, setBorderColor2] = useState("#B692F6");

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Data",
        data: [10, 10, 55, 40, 50, 35],
        fill: false,
        borderColor: borderColor1,
        tension: 0.4,
      },
      {
        label: "Data 2",
        data: [5, 7, 50, 25, 45, 33],
        fill: false,
        borderColor: borderColor2,
        tension: 0.4,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Chart.js Line Chart - Cubic interpolation mode",
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
    },
    scales: {
      x: {
        ticks: {
          values: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        },
        grid: {
          drawBorder: false,
          drawOnChartArea: false,
          borderColor: "transparent",
        },
      },

      y: {
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          stepSize: 20,
          callback: function (value, index, values) {
            return value + "%";
          },
        },
        grid: {
          drawBorder: true,
          drawOnChartArea: true,
          borderColor: "",
        },
      },
    },
    onHover: (event, chartElement) => {
      if (chartElement.length) {
        if (chartElement[0].datasetIndex === 0) setBorderColor1("#7F56D9");
        else setBorderColor2("#7F56D9");
      } else {
        setBorderColor1("#B692F6");
        setBorderColor2("#B692F6");
      }
    },
  };

  return (
    <div className='relative' style={{ width: "100%", height: "100%" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default SmoothLineChart;
