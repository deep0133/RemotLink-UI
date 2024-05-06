import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";
import PropTypes from "prop-types";
Chart.register([ArcElement, Tooltip]);

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

const FullCircle = ({ myData }) => {
  const labelName = myData && myData.map((item) => item.site__name);
  const labelData = myData && myData.map((item) => item.access_percentage);

  const data = {
    labels: labelName,
    datasets: [
      {
        label: "Dataset",
        data: labelData, // Adjust values as needed
        backgroundColor: ["#7F56D9", "#9E77ED", "#F4EBFF"],
        borderWidth: 0,
        hoverOffset: 2,
      },
    ],
  };

  return (
    <div className='shrink-0 relative pr-4'>
      <div style={{ width: "100%" }}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default FullCircle;

FullCircle.propTypes = {
  myData: PropTypes.object,
};
