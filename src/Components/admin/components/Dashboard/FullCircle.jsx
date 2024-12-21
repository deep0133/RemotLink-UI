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

const FullCircle = ({ myData, myOption = false, optData }) => {
  return (
    <div className='shrink-0 relative pr-4'>
      <div style={{ width: "100%", padding: "20px" }}>
        {myData ? (
          <Doughnut data={myData} options={myOption ? optData : options} />
        ) : (
          "No Data Found"
        )}
      </div>
    </div>
  );
};

export default FullCircle;

FullCircle.propTypes = {
  myData: PropTypes.object,
};
