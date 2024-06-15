import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";
Chart.register([ArcElement, Tooltip]);

function nextNumberEndingInZero(n) {
  // Find the order of magnitude (number of digits - 1)
  if (n === 0) {
    return 0;
  }
  if (n < 0) {
    n = -n;
  }
  const magnitude = Math.pow(10, Math.floor(Math.log10(n)));

  // Find the ceiling to the next number ending in zero
  const result = Math.ceil(n / magnitude) * magnitude;

  return result;
}

const HalfCircleChart = ({ percentage }) => {
  const dataValue = nextNumberEndingInZero(percentage); // Calculate the value based on the percentage

  const remainingValue =
    dataValue === percentage
      ? dataValue === 0
        ? 100
        : dataValue * 10
      : dataValue - percentage;

  const data = {
    labels: ["Increased", "Remaining"],
    datasets: [
      {
        label: "By",
        data: [dataValue, remainingValue],
        backgroundColor: [percentage >= 0 ? "#9447F6" : "red", "lightgray"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "80%",
    circumference: 180,
    rotation: -90,
    layout: {
      padding: 0,
    },
    interaction: {
      intersect: true,
    },
    plugins: {
      tooltip: {
        filter: function (tooltipItem) {
          return tooltipItem.label !== "Remaining";
        },
        callbacks: {
          label: function (context) {
            if (context.label === "Remaining") {
              return "";
            }
            const ans =
              context.dataset.label +
              ": " +
              (percentage >= 0 ? "" : "-") +
              context.raw +
              "%";
            return ans;
          },
        },
      },
    },
  };

  return (
    <div className='shrink-0 max-h-[120px] relative m-0 p-0 z-50'>
      <div
        className='absolute -top-8'
        style={{ width: "100%", maxHeight: "150px" }}
      >
        <Doughnut data={data} options={options} />
      </div>
      <div
        className={`content absolute top-6 z-40`}
        style={{
          left: percentage >= 0 ? "18%" : "14%",
        }}
      >
        <div className='text-center text-gray-500 text-[11px] z-0 font-medium font-Poppins leading-loose'>
          {percentage >= 0 ? "Increase" : "Decrease"}
        </div>
        <div
          style={{
            color: percentage >= 0 ? "#7c3aed" : "red",
          }}
          className='text-center text-3xl font-semibold font-Inter leading-[38px]'
        >
          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default HalfCircleChart;
