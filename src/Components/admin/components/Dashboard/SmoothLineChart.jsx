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

const SmoothLineChart = ({ chartData, maxY = 100 }) => {
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
        grid: {
          drawBorder: false,
          drawOnChartArea: false,
          borderColor: "transparent",
        },
      },
      y: {
        suggestedMin: 0,
        suggestedMax: maxY,
        ticks: {
          stepSize: 20,
          callback: function (value, index, values) {
            return value;
          },
        },
        grid: {
          drawBorder: true,
          drawOnChartArea: true,
          borderColor: "",
        },
      },
    },
    onHover: (event) => {
      const chartInstance = event.chart;
      if (chartInstance) {
        const datasetIndex = chartInstance.getElementsAtEventForMode(
          event,
          "nearest",
          { intersect: true },
          false
        )[0]?.datasetIndex;
        if (datasetIndex !== undefined) {
          const dataset = chartInstance.data.datasets[datasetIndex];
          if (dataset) {
            if (!chartInstance.__originalBorderColors) {
              chartInstance.__originalBorderColors = [
                ...chartInstance.data.datasets.map((ds) => ds.borderColor),
              ];
            }
            const hoverColor = "rgb(100, 20, 246)"; // Change this to the desired hover color
            chartInstance.data.datasets.forEach((ds, index) => {
              ds.borderColor =
                index === datasetIndex
                  ? hoverColor
                  : chartInstance.__originalBorderColors[index];
            });
            chartInstance.update();
          }
        }
      }
    },
  };

  return (
    <div className='relative' style={{ width: "100%", height: "100%" }}>
      {chartData && <Line data={chartData} options={options} />}
    </div>
  );
};

export default SmoothLineChart;
