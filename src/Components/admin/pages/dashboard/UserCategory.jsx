import React, { useEffect, useState } from "react";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import { DashboardIcon, UserEmptyIcon } from "../../assets/constants";
import Navigation from "../../components/Dashboard/RightCommonComponents/Navigation";
import { DashBoardRightMenu } from "../../data";
import DashBoardPageHeader from "../../components/Dashboard/DashBoardPageHeader";
import DetailCard from "../../components/Dashboard/DetailCard";
import BarChart from "../../components/Dashboard/BarChart";
import SmoothLineChart from "../../components/Dashboard/SmoothLineChart";
import PieChart from "../../components/Dashboard/PieChart";
import useFetch from "../../hooks/useFetch";
import CardSkeletonLoading from "../../components/loading/CardSkeletonLoading";
import VerticalLineSkeleton from "../../components/Loader/VerticalLineSkeleton";

export default function UserCategory() {
  const [graphWeekMonth, setGraphWeekMonth] = useState("month");
  const {
    dashboardUserCategoryLoading,
    dashboardUserCategoryData,
    handleFetchDashboardUserCategoryCard,

    activeUserTimelineGraphLoading,
    activeUserTimelineGraphData,
    handleFetchDashboardActiveUserTimelineGraph,

    overviewHourlyDataLoading,
    overviewHourlyData,
    handleFetchOverallDashboardHourlyData,

    topReadersData,
    topReadersLoading,
    handleFetchDashboardTopReaders,
  } = useFetch();

  const [weekMonth, setWeekMonth] = useState("month");

  const [dailyTrafficGraphData, setDailyTrafficGraphData] = useState(null);

  useEffect(() => {
    handleFetchDashboardUserCategoryCard(
      "api/dashboard/user_metrics_cards?metrics=" + weekMonth
    );
  }, [weekMonth]);

  useEffect(() => {
    handleFetchDashboardActiveUserTimelineGraph(
      "api/dashboard/active_user_graph?metrics=" + graphWeekMonth
    );
  }, [graphWeekMonth]);

  useEffect(() => {
    handleFetchOverallDashboardHourlyData(
      "api/dashboard/hourly_active_users?metrics=week"
    );
  }, []);

  useEffect(() => {
    if (overviewHourlyData) {
      formatChartData(overviewHourlyData.hourly_data);
    }
  }, [overviewHourlyData]);

  function formatChartData(hourlyData) {
    const labels = hourlyData.map((entry) => entry.metric);
    const data = hourlyData.map((data) => data.active_users);

    const formattedData = {
      labels,
      datasets: [
        {
          label: "Active Hours",
          data,
          backgroundColor: (context) => {
            const value = context.raw;
            if (value === 0) return "transparent";
            return value < 10 ? "#7F56D9" : "#15b40aed";
          },
          borderColor: "#15b40aed",
          borderWidth: 0,
          borderSkipped: "top bottom",
          borderRadius: 50,
          barThickness: 10,
        },
      ],
    };
    setDailyTrafficGraphData(formattedData);
  }

  const [topreaderWeekMonth, setTopreaderWeekMonth] = useState("month");
  useEffect(() => {
    handleFetchDashboardTopReaders(
      "api/dashboard/top_readers?metrics=" + topreaderWeekMonth
    );
  }, [topreaderWeekMonth]);

  return (
    <div className=''>
      <Header
        icon={<DashboardIcon />}
        subTitle={"Dashboard"}
        title={"User Category"}
      />
      <Navigation data={DashBoardRightMenu} />
      <Details
        weekMonth={weekMonth}
        setWeekMonth={setWeekMonth}
        dashboardUserCategoryData={dashboardUserCategoryData}
        dashboardUserCategoryLoading={dashboardUserCategoryLoading}
        activeUserTimelineGraphData={activeUserTimelineGraphData}
        setGraphWeekMonth={setGraphWeekMonth}
        dailyTrafficGraphData={dailyTrafficGraphData}
        overviewHourlyDataLoading={overviewHourlyDataLoading}
        overviewHourlyData={overviewHourlyData}
        setTopreaderWeekMonth={setTopreaderWeekMonth}
        topReadersData={topReadersData}
        topReadersLoading={topReadersLoading}
      />
    </div>
  );
}

const Details = ({
  weekMonth,
  setWeekMonth,
  dashboardUserCategoryLoading,
  dashboardUserCategoryData,
  activeUserTimelineGraphData,
  setGraphWeekMonth,
  dailyTrafficGraphData,
  overviewHourlyDataLoading,
  overviewHourlyData,
  setTopreaderWeekMonth,
  topReadersData,
  topReadersLoading,
}) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const { active_users_data } = activeUserTimelineGraphData || {};
    if (active_users_data) {
      const labels = Object.keys(active_users_data);
      const values = Object.values(active_users_data);

      setChartData({
        labels,
        datasets: [
          {
            label: "Active Users",
            data: values,
            borderColor: "rgba(75,192,192,1)",
            backgroundColor: "rgba(75,192,192,0.2)",
            tension: 0.4,
          },
        ],
      });
    }
  }, [activeUserTimelineGraphData]);
  return (
    <>
      <DashBoardPageHeader setWeekMonth={setWeekMonth} />
      <div className='card-container mt-5 grid grid-cols-4 gap-5 '>
        {dashboardUserCategoryLoading ? (
          Array.from([1, 2, 3, 4]).map((val, i) => {
            return <CardSkeletonLoading />;
          })
        ) : (
          <>
            <div className=' p-5 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
              <DetailCard
                progress={true}
                progressColor={"#3758F9"}
                name={"Total Users"}
                weekMonth={weekMonth}
                icon={<UserEmptyIcon />}
                data1={
                  dashboardUserCategoryData &&
                  dashboardUserCategoryData.total_users?.total_users
                }
                data2={
                  dashboardUserCategoryData &&
                  dashboardUserCategoryData.total_users
                    ?.total_users_created_this_metric
                }
                data3={
                  dashboardUserCategoryData &&
                  dashboardUserCategoryData.total_users?.change_from_last_metric
                }
                data4={
                  dashboardUserCategoryData &&
                  dashboardUserCategoryData.total_users
                    ?.change_percentage_last_metric &&
                  Math.round(
                    dashboardUserCategoryData.total_users
                      .change_percentage_last_metric
                  )
                }
              />
            </div>
            <div className='p-5 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
              {/* <DetailCard progress={true} /> */}
              <DetailCard
                progress={true}
                progressColor={"#3758F9"}
                name={"Active Users"}
                weekMonth={weekMonth}
                icon={<UserEmptyIcon />}
                data1={
                  dashboardUserCategoryData &&
                  dashboardUserCategoryData.active_users
                    ?.total_users_active_this_metric
                }
                data2={
                  dashboardUserCategoryData &&
                  dashboardUserCategoryData.active_users
                    ?.total_users_created_this_metric
                }
                data3={
                  dashboardUserCategoryData &&
                  dashboardUserCategoryData.active_users
                    ?.change_from_last_metric
                }
                data4={
                  dashboardUserCategoryData &&
                  dashboardUserCategoryData.active_users
                    ?.change_percentage_last_metric &&
                  Math.round(
                    dashboardUserCategoryData.total_users
                      .change_percentage_last_metric
                  )
                }
              />
            </div>
            <div className='p-5 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
              <DetailCard
                progress={true}
                progressColor={"#3758F9"}
                name={"Deactivated User"}
                weekMonth={weekMonth}
                icon={<UserEmptyIcon />}
                data1={
                  dashboardUserCategoryData &&
                  dashboardUserCategoryData.inactive_users?.total_users
                }
                data2={
                  dashboardUserCategoryData &&
                  dashboardUserCategoryData.inactive_users
                    ?.total_users_created_this_metric
                }
                data3={
                  dashboardUserCategoryData &&
                  dashboardUserCategoryData.inactive_users
                    ?.change_from_last_metric
                }
                data4={
                  dashboardUserCategoryData &&
                  dashboardUserCategoryData.inactive_users
                    ?.change_percentage_last_metric &&
                  Math.round(
                    dashboardUserCategoryData.inactive_users
                      .change_percentage_last_metric
                  )
                }
              />
            </div>
          </>
        )}
      </div>

      <div className='flex mt-5 gap-5'>
        <div className='left basis-3/5 p-5 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
          <div className='flex justify-between'>
            <div className='text-violet-800 text-[19px] font-semibold font-Poppins leading-7'>
              Active Users Timeline
            </div>
            <select
              style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
              className='focus:outline-none space-y-2  bg-white rounded-[5px] border border-blue-800 border-opacity-10 text-violet-800 text-[13px] font-medium px-3 py-1 font-Poppins leading-normal'
              onChange={(e) => setGraphWeekMonth(e.target.value)}
            >
              <option value={"month"}>Month</option>
              <option value={"week"}>Week</option>
            </select>
          </div>

          <div className='max-h-[250px] mt-5 relative'>
            <SmoothLineChart chartData={chartData} maxY={100} />
          </div>
        </div>

        <div className='right p-5 basis-[40%] flex flex-col bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
          <div className='flex justify-between'>
            <div className='opacity-40 text-violet-800 text-[15px] font-medium font-Poppins leading-normal'>
              Daily Traffic
            </div>
            {/* <div className="text-center text-lime-600 text-xs font-bold font-['DM Sans'] leading-tight">
              +2.45%
            </div> */}
          </div>
          <div className='flex gap-2 items-baseline'>
            <div className='text-indigo-900 text-[34px] font-semibold font-Poppins leading-[42px]'>
              {/* 200+ */}
              {overviewHourlyData && overviewHourlyData.total_active_users}+
            </div>
            <div className='text-slate-400 text-sm font-medium font-Poppins leading-normal'>
              Visitors
            </div>
          </div>
          <div className='mt-5'>
            <div className='bar-chart h-full'>
              {overviewHourlyDataLoading ? (
                <VerticalLineSkeleton />
              ) : (
                <BarChart data={dailyTrafficGraphData} />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='flex mt-5 gap-5'>
        <div className='basis-1/2 flex flex-col bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
          <div className='px-5 pt-5 flex justify-between items-center'>
            <div className='text-violet-800 text-[19px] font-semibold font-Poppins leading-7'>
              Top Readers
            </div>
            <select
              style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
              className='focus:outline-none space-y-2  bg-white rounded-[5px] border border-blue-800 border-opacity-10 text-violet-800 text-[13px] font-medium px-3 py-1 font-Poppins leading-normal'
              onChange={(e) => setTopreaderWeekMonth(e.target.value)}
            >
              <option value={"month"}>Month</option>
              <option value={"week"}>Week</option>
            </select>
          </div>
          <div className=' grid grid-cols-4 gap-3'>
            <div className='mt-4 px-5 py-2 shadow col-span-full grid grid-cols-4 gap-3'>
              <div className='text-slate-400 text-xs font-medium font-Poppins leading-normal'>
                Sr.no
              </div>
              <div className='text-slate-400 text-xs font-medium font-Poppins leading-normal'>
                Name
              </div>
              <div className='text-slate-400 text-xs font-medium font-Poppins leading-normal'>
                Username
              </div>
              <div className='text-slate-400 text-center text-xs font-medium font-Poppins leading-normal'>
                Last Active
              </div>
            </div>
            {topReadersLoading
              ? "Loading..."
              : topReadersData &&
                topReadersData.length > 0 &&
                topReadersData.slice(0, 5).map((item, index) => {
                  return (
                    <div
                      key={index}
                      className='col-span-full px-5 grid grid-cols-4 gap-3'
                    >
                      <div className='text-lime-600 text-xs font-medium font-Poppins leading-normal'>
                        #{index + 1}
                      </div>
                      <div className='text-indigo-900 text-xs font-medium font-Poppins leading-7'>
                        {item?.name}
                      </div>
                      <div className='text-indigo-900 line-clamp-1 text-nowrap text-xs font-medium font-Poppins leading-7'>
                        {item?.username}
                      </div>
                      <div className='text-indigo-900 line-clamp-1 text-nowrap text-center text-xs font-medium font-Poppins leading-normal'>
                        {item?.last_active && formatDate(item?.last_active)}
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>

        <div className='basis-3/5 p-5 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
          <div className='flex justify-between'>
            <div className='text-violet-800 text-[19px] font-semibold font-Poppins leading-7'>
              Users Distributions
            </div>
            <select
              style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
              className='focus:outline-none space-y-2  bg-white rounded-[5px] border border-blue-800 border-opacity-10 text-violet-800 text-[13px] font-medium px-3 py-1 font-Poppins leading-normal'
              name='month'
            >
              <option>Monthly</option>
            </select>
          </div>

          <div className='bar-chart flex mt-8 flex-wrap'>
            <div className='basis-1/3 grow-0 overflow-hidden'>
              <PieChart />
            </div>
            <div className='basis-2/3 flex flex-wrap gap-5'>
              <DistributionCard />
              <DistributionCard />
              <DistributionCard />
              <DistributionCard />
              <DistributionCard />
              <div className='basis-full mt-5 relative'>
                <div className=" text-lime-600 text-sm font-medium font-['Poppins'] leading-7">
                  Batch 2023 are the most accesing users
                </div>
                <div className=' bg-lime-600 rounded-[46px]'>
                  <div className='w-[11px] h-[11px] left-[2.70px] top-[2.32px] absolute' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const DistributionCard = () => {
  return (
    <div className='card px-6 py-2 rounded-md bg-white shadow w-fit'>
      <div className='flex gap-2 items-center '>
        <div className='w-2 h-2 bg-indigo-800 rounded-full' />
        <div className="text-indigo-400 text-xs font-normal font-['Poppins'] leading-tight">
          Faculty
        </div>
      </div>
      <div className="text-indigo-900 text-xl font-semibold font-['Poppins'] leading-[30px]">
        25.5%
      </div>
    </div>
  );
};

const formatDate = (dateString) => {
  if (!dateString) return "---";

  const date = new Date(dateString);

  // Get the day, month, and year components
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  // Define an array of month names
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get the formatted month name using the month index
  const monthName = monthNames[monthIndex];

  // Get the hours and minutes components
  let hours = date.getHours();
  const minutes = date.getMinutes();

  // Convert hours to 12-hour format and determine am/pm
  const amPm = hours >= 12 ? "pm" : "am";
  hours %= 12;
  hours = hours || 12; // If hours is 0, set it to 12

  // Construct the formatted date string
  const formattedDate = `${year} ${day} ${monthName} ${hours}.${minutes
    .toString()
    .padStart(2, "0")} ${amPm}`;

  return formattedDate;
};
