import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";
Chart.register([ArcElement, Tooltip]);
const data = {
  labels: ["yellow", "blue", "green", "red"],
  datasets: [
    {
      label: "Dataset",
      data: [1, 2, 3], // Adjust values as needed
      backgroundColor: ["#7F56D9", "#9E77ED", "#F4EBFF"],
      borderWidth: 0,
      hoverOffset: 2,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  responsive: true,
  cutout: "55%",
  layout: {
    padding: 0,
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

const FullCircle = () => {
  const [borderColor, setBorderColor] = useState();

  return (
    <div className='shrink-0 relative pr-4'>
      <div style={{ width: "100%" }}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default FullCircle;
