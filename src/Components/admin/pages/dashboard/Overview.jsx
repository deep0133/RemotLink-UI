import React, { useEffect, useState } from "react";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import {
  ClockIcon,
  DashboardIcon,
  ResourceIcon,
  UserEmptyIcon,
} from "../../assets/constants";
import Navigation from "../../components/Dashboard/RightCommonComponents/Navigation";
import { DashBoardRightMenu } from "../../data";
import HalfCircleChart from "../../components/Dashboard/HalfCircleChart";
import SmoothLineChart from "../../components/Dashboard/SmoothLineChart";
import FullCircle from "../../components/Dashboard/FullCircle";
import BarChart from "../../components/Dashboard/BarChart";
import DashBoardPageHeader from "../../components/Dashboard/DashBoardPageHeader";
import DetailCard from "../../components/Dashboard/DetailCard";
import Loader from "../../components/Loader/Loader";
import useFetch from "../../hooks/useFetch";
import CardSkeletonLoading from "../../components/loading/CardSkeletonLoading";
import VerticalLineSkeleton from "../../components/Loader/VerticalLineSkeleton";
import getRandomColor from "../../utils/getRandomColors";

export default function Overview({
  weekMonth,
  setWeekMonth,
  siteLoading,
  siteData,
  overviewCardData,
  overviewCardDataLoading,
}) {
  const [amPm, setAmPm] = useState("Am");

  return (
    <div className=''>
      <Header icon={<DashboardIcon />} title={"Dashboard"} />
      <Navigation data={DashBoardRightMenu} />
      <Details
        amPm={amPm}
        weekMonth={weekMonth}
        setWeekMonth={setWeekMonth}
        setAmPm={setAmPm}
        siteLoading={siteLoading}
        siteData={siteData && siteData.results}
        overviewCardData={overviewCardData}
        overviewCardDataLoading={overviewCardDataLoading}
      />
    </div>
  );
}

const Details = ({
  amPm,
  weekMonth,
  setWeekMonth,
  setAmPm,
  siteLoading,
  siteData,
  overviewCardData,
  overviewCardDataLoading,
}) => {
  const [userEngagWeekMonth, setUserEngagWeekMonth] = useState("month");
  const [recentlyWeekMonth, setRecentlyWeekMonth] = useState("month");

  const [recentlyTop, setRecentlyTop] = useState("recently");

  const {
    overviewUserEngageData,
    overviewUserEngageDataLoading,
    // overviewRecentlyUpdatedDataLoading,
    overviewUtilizationDataLoading,
    overviewHourlyDataLoading,
    overviewRecentlyUpdatedData,
    reportSiteData,
    overviewUtilizationData,
    overviewHourlyData,
    handleFetchOverallDashboardUserEngagement,
    handleFetchOverallDashboardRecentlyUpdated,
    handleFetchOverallDashboardUtilizationData,
    handleFetchOverallDashboardHourlyData,
    handleFetctSiteReports,
    overviewDatabaseUsageData,
    overviewDatabaseUsageDataLoading,
    handleFetchOverallDashboardDatabaseUsageData,
  } = useFetch();

  useEffect(() => {
    handleFetchOverallDashboardUserEngagement(
      "api/dashboard/user_engagement?metrics=" + userEngagWeekMonth
    );
  }, [userEngagWeekMonth]);

  useEffect(() => {
    if (recentlyTop === "recently") {
      handleFetchOverallDashboardRecentlyUpdated(
        "api/dashboard/recently_updated?metrics=" + recentlyWeekMonth
      );
    } else if (recentlyTop === "top") {
      popularSiteDataHandle();
    }
  }, [recentlyWeekMonth]);

  const [hourlyweek, setHourlyWeek] = useState("hour");

  useEffect(() => {
    handleFetchOverallDashboardHourlyData(
      "api/dashboard/hourly_active_users?metrics=" + hourlyweek
    );
  }, [hourlyweek]);

  useEffect(() => {
    if (overviewHourlyData) {
      formatChartData(overviewHourlyData.hourly_data, "am");
    }
  }, [overviewHourlyData, amPm]);

  useEffect(() => {
    popularSiteDataHandle();
    handleFetchOverallDashboardUtilizationData(
      "api/dashboard/resource_utilization?metrics=month"
    );
  }, []);

  const [userEngagmentChartData, setUserEngagmentChartData] = useState(null);

  useEffect(() => {
    if (overviewUserEngageData) {
      const data = {
        labels: overviewUserEngageData?.map((item) => item.site__name),
        datasets: [
          {
            label: "Dataset",
            data: overviewUserEngageData?.map((item) => item.access_percentage),
            backgroundColor: overviewUserEngageData?.map(() =>
              getRandomColor()
            ),
            borderWidth: 0,
            hoverOffset: 2,
          },
        ],
      };
      setUserEngagmentChartData(data);
    }
  }, [overviewUserEngageData]);

  const popularSiteDataHandle = () => {
    const currentDate = Date.now();

    let startDate;

    let seconds = 2592000000;

    if (recentlyWeekMonth === "week") {
      seconds = 604800000;
    }

    startDate = new Date(currentDate - seconds);

    const startDay = startDate.getDate();
    const startMonth = startDate.getMonth() + 1;
    const startYear = startDate.getFullYear();

    const startDateFormate = startDay + "/" + startMonth + "/" + startYear;

    const currentDateFormate = new Date(currentDate);
    // Extract day, month, and year
    const currentDay = currentDateFormate.getDate();
    const currentMonth = currentDateFormate.getMonth() + 1;
    const currentYear = currentDateFormate.getFullYear();

    const endDate = currentDay + "/" + currentMonth + "/" + currentYear;

    handleFetctSiteReports(
      `api/report/site/?start=${startDateFormate}&end=${endDate}`
    );
  };

  // -----------------line Chart---------------
  const [chartData, setChartData] = useState();

  const [maxY, setMaxY] = useState(100);

  useEffect(() => {
    handleTwoDifferentData(overviewUtilizationData, 5, setChartData);
  }, [overviewUtilizationData]);

  const [modifyHourlyData, setModifyHournlyData] = useState(null);

  // formate ------- Hourly Data---------
  function formatChartData(hourlyData) {
    const filteredData = hourlyData.filter((data) => {
      const hour = parseInt(data.metric.split(":")[0], 10);
      return amPm.toLowerCase() === "am" ? hour < 12 : hour >= 12;
    });

    // Format the labels to display in 12-hour format with AM/PM suffix
    let labels = filteredData.map((data) => {
      const hour = parseInt(data.metric.split(":")[0], 10);
      const formattedHour = hour;
      return formattedHour + ":00" + amPm;
    });

    const data = filteredData.map((data) => data.active_users);

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

    setModifyHournlyData(formattedData);
  }

  // -----Database Usage--------
  const [databaseUsageWeekMonth, setDatabaseUsageWeekMonth] = useState("week");

  const [databaseUsageStateData, setDatabaseUsageStateData] = useState(null);
  useEffect(() => {
    handleFetchOverallDashboardDatabaseUsageData(
      "api/dashboard/resource_utilization?metrics=" + databaseUsageWeekMonth
    );
  }, [databaseUsageWeekMonth]);

  useEffect(() => {
    handleTwoDifferentData(
      overviewDatabaseUsageData,
      3,
      setDatabaseUsageStateData
    );
  }, [overviewDatabaseUsageData]);

  const colorPalette = ["#546FFF", "#A5D9FF", "#91A9FF"];
  const handleTwoDifferentData = (data, splitNo, setState) => {
    if (data) {
      let maxAccessCount = 0;

      // Iterate through the data to find the maximum access_count
      for (const month in data) {
        for (let i = 0; i < data[month].length; i++) {
          if (data[month][i].access_count > maxAccessCount) {
            maxAccessCount = data[month][i].access_count;
          }
        }
      }
      setMaxY(maxAccessCount);

      const extractUniqueSiteNames = (data) => {
        const uniqueSiteNames = new Set();
        for (const month in data) {
          data[month].forEach((item) => {
            uniqueSiteNames.add(item.site__name);
          });
        }
        return Array.from(uniqueSiteNames);
      };

      // Extract unique site names
      const uniqueSiteNames = extractUniqueSiteNames(data);
      // Create datasets for each unique site name
      const datasets =
        uniqueSiteNames &&
        uniqueSiteNames.map((siteName, index) => {
          const mydata =
            data &&
            Object.values(data).map((monthData) => {
              const foundSite = monthData.find(
                (item) => item.site__name === siteName
              );
              return foundSite ? foundSite.access_count : 0;
            });

          let backgroundColor = "transparent";
          if (splitNo === 3 && index < 3) {
            backgroundColor = colorPalette[index];
          }

          const dataset = {
            label: siteName,
            data: mydata,
            fill: true,
            tension: 0.4,
            borderColor: "rgb(148, 71, 246)",
            backgroundColor: splitNo === 3 ? backgroundColor : "transparent",
          };

          if (splitNo === 3) {
            Object.assign(dataset, {
              borderWidth: 0,
              borderSkipped: "bottom",
              borderRadius: 50,
              barThickness: 10,
            });
          }

          return dataset;
        });

      let finalDatasets = [...datasets].splice(0, splitNo);
      let finalLabels = Object.keys(data);

      if (splitNo === 3) {
        finalLabels = finalLabels.reverse();
        finalDatasets = finalDatasets.reverse();
      }
      setState({
        labels: finalLabels,
        datasets: finalDatasets,
      });
    }
  };

  return (
    <>
      <DashBoardPageHeader setWeekMonth={setWeekMonth} />
      {/* -------- Section 1 ------------ */}
      <div className='card-container mt-5 grid grid-cols-4 gap-5 '>
        {overviewCardDataLoading ? (
          Array.from([1, 2, 3, 4]).map((val, i) => {
            return <CardSkeletonLoading />;
          })
        ) : (
          <>
            {" "}
            <div className=' p-5 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
              <DetailCard
                progress={true}
                progressColor={"#3758F9"}
                name={"Total Users"}
                weekMonth={weekMonth}
                icon={<UserEmptyIcon />}
                data1={
                  overviewCardData && overviewCardData.total_users?.total_users
                }
                data2={
                  overviewCardData &&
                  overviewCardData.total_users?.total_users_created_this_metric
                }
                data3={
                  overviewCardData &&
                  overviewCardData.total_users?.change_from_last_metric
                }
                data4={
                  overviewCardData &&
                  overviewCardData.total_users
                    ?.change_percentage_from_last_metric
                }
              />
            </div>
            <div className='p-5 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
              <DetailCard
                progress={true}
                progressColor={"#F2994A"}
                name={"Total Resources"}
                weekMonth={weekMonth}
                icon={<ResourceIcon />}
                data1={
                  overviewCardData &&
                  overviewCardData.total_resources?.total_sites
                }
                data2={
                  overviewCardData &&
                  overviewCardData.total_resources
                    ?.total_sites_introduces_this_metric
                }
                data3={
                  overviewCardData &&
                  overviewCardData.total_resources?.change_from_last_metric
                }
                data4={
                  overviewCardData &&
                  overviewCardData.total_resources
                    ?.change_percentage_from_last_metric
                }
              />
            </div>
            <div className='p-5 col-span-2 flex gap-3 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
              <div className='left w-1/2'>
                <DetailCard
                  name={"Total Active Hours"}
                  weekMonth={weekMonth}
                  icon={<ClockIcon />}
                  data1={
                    overviewCardData &&
                    overviewCardData.total_active_hours &&
                    Number(
                      overviewCardData.total_active_hours
                        .total_active_hours_this_metric
                    ).toFixed(2)
                  }
                  data2={
                    overviewCardData &&
                    overviewCardData.total_active_hours
                      ?.total_users_created_this_month
                  }
                  data3={
                    overviewCardData &&
                    overviewCardData.total_active_hours &&
                    overviewCardData.total_active_hours.change_from_last_metric
                  }
                  data4={
                    overviewCardData &&
                    overviewCardData.total_active_hours &&
                    overviewCardData.total_active_hours
                      .change_percentage_from_last_metric
                  }
                />
              </div>
              <div className='right w-1/2 relative '>
                {/* ------- Curve Line ----------- */}
                <HalfCircleChart
                  percentage={
                    overviewCardData &&
                    overviewCardData.total_active_hours &&
                    overviewCardData.total_active_hours
                      .change_percentage_from_last_metric
                  }
                />
              </div>
            </div>
          </>
        )}
      </div>

      {/* --------- Section 2 ------------ */}
      <div className='mt-5 p-5 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
        <div className='text-violet-800 text-[22px] font-semibold font-Poppins leading-[33px]'>
          Resources Utilisation Trend
        </div>
        <div className='max-h-[250px] relative'>
          {overviewUtilizationDataLoading ? (
            "Loading..."
          ) : (
            <SmoothLineChart chartData={chartData} maxY={maxY} />
          )}
        </div>
      </div>
      {/* --------- Section 3 ------------ */}
      <div className='flex mt-5 gap-5'>
        <div className='p-5 basis-[40%] flex flex-col bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
          <div className=' flex justify-between items-center'>
            <div className='text-violet-800 text-[22px] font-semibold font-Poppins leading-[33px]'>
              User Engagement
            </div>
            <select
              style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
              className='focus:outline-none space-y-2  bg-white rounded-[5px] border border-blue-800 border-opacity-10 text-violet-800 text-[13px] font-medium px-3 py-1 font-Poppins leading-normal'
              name='month'
              onChange={(e) => {
                setUserEngagWeekMonth(e.target.value);
              }}
            >
              <option value={"month"}>Month</option>
              <option value={"week"}>Week</option>
            </select>
          </div>
          {overviewUserEngageData && overviewUserEngageData.length > 0 ? (
            <div className='flex gap-3 mt-4'>
              <ul className='space-y-3 basis-1/2 shrink-0 list-disc list-inside'>
                {overviewUserEngageData &&
                  overviewUserEngageData.slice(0, 5).map((name) => {
                    return (
                      <li className='text-gray-500 text-sm font-normal font-Poppins leading-tight'>
                        {name && name.site__name}
                      </li>
                    );
                  })}
              </ul>
              <div className='doughnet-chart overflow-hidden basis-1/2 shrink-0 grow-0'>
                {overviewUserEngageDataLoading ? (
                  "Loading..."
                ) : (
                  <FullCircle myData={userEngagmentChartData} />
                )}
              </div>
            </div>
          ) : (
            <h3 className='mt-6 font-medium'>No Data Found</h3>
          )}

          <div className='success relative'>
            <div className=' left-[25px] mt-8 text-lime-600 text-xs font-medium font-Poppins leading-[18px]'>
              Medium Engagement
              <br />
              is the maximum in past 1 month
            </div>
            {/* <div className='w-4 h-4 left-0 top-[2px] absolute bg-lime-600 rounded-[46px]'>
                <div className='w-[11px] h-[11px] left-[2.70px] top-[2.32px] absolute' />
              </div> */}
          </div>
        </div>
        <div className='basis-3/5 p-5 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
          <div className='flex justify-between'>
            <div className='opacity-40 text-violet-800 text-[15px] font-medium font-Poppins leading-normal'>
              Live Hourly Active Usage Trends
            </div>
            <div className='flex gap-3'>
              {" "}
              <div
                onClick={() => {
                  setAmPm("Am");
                }}
                style={{
                  backgroundColor: amPm === "Am" ? "#5b21b6" : "",
                  color: amPm === "Am" ? "white " : "black",
                }}
                className='w-[34.15px] h-[34px] cursor-pointer items-center justify-center flex relative rounded-[28px] border border-blue-800 border-opacity-10 text-xs font-medium font-Poppins leading-normal'
              >
                AM
              </div>
              <div
                onClick={() => {
                  setAmPm("Pm");
                }}
                style={{
                  backgroundColor: amPm === "Pm" ? "#5b21b6" : "",
                  color: amPm === "Pm" ? "white " : "black",
                }}
                className='w-[34.15px] h-[34px] cursor-pointer items-center justify-center flex relative rounded-[28px] border border-blue-800 border-opacity-10 text-xs font-medium font-Poppins leading-normal'
              >
                PM
              </div>
              <select
                style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
                className='focus:outline-none space-y-2  bg-white rounded-[5px] border border-blue-800 border-opacity-10 text-violet-800 text-[13px] font-medium px-3 py-1 font-Poppins leading-normal'
                onChange={(e) => {
                  setHourlyWeek(e.target.value);
                }}
              >
                <option value={"hour"}>Hourly</option>
                <option value={"yesterday"}>Yesterday</option>
              </select>
            </div>
          </div>
          <div className='text-indigo-900 text-[23px] font-semibold font-Poppins leading-[42px]'>
            Most Active:{" "}
            {amPm.toLowerCase() === "am" ? "11 " + amPm : "12 " + amPm}
          </div>

          <div className='bar-chart h-full'>
            {overviewHourlyDataLoading ? (
              <VerticalLineSkeleton />
            ) : (
              <BarChart data={modifyHourlyData} />
            )}
          </div>
        </div>
      </div>

      {/* -------- Section 4 ------------ : Categroy ---*/}
      <div className='category mt-5 gap-5 w-full flex py-3 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
        <div className='left p-5 basis-[40%] flex flex-col border-r'>
          <div className='text-violet-800 text-[22px] font-semibold font-Poppins leading-[33px]'>
            Categories
          </div>

          <div className='card-container mt-5 gap-4 grid grid-cols-2'>
            <CategoryCard title={"eJournals"} value={"2500"} percent={"20"} />
            <CategoryCard title={"eBooks"} value={"4800"} percent={"30"} />
            <CategoryCard title={"eArticles"} value={"8000"} percent={"35"} />
            <CategoryCard
              title={"other e-resources"}
              value={"1000"}
              percent={"15"}
            />
          </div>

          <div className='success relative'>
            <div className=' left-[25px] mt-8 text-lime-600 text-xs font-medium font-Poppins leading-[18px]'>
              Medium Engagement
              <br />
              is the maximum in past 1 month
            </div>
            {/* <div className='w-4 h-4 left-0 top-[2px] absolute bg-lime-600 rounded-[46px]'>
                <div className='w-[11px] h-[11px] left-[2.70px] top-[2.32px] absolute' />
              </div> */}
          </div>
        </div>
        <div className='right basis-3/5 p-5'>
          <div className='flex justify-between'>
            <div className=' flex'>
              <div
                onClick={() => {
                  setRecentlyTop("recently");
                }}
                style={{ opacity: recentlyTop === "top" ? 0.4 : 1 }}
                className='text-violet-800 cursor-pointer pr-3 py-1 pl-5 border-b-2 text-base font-medium font-Poppins leading-7'
              >
                Recently Updated
              </div>
              <div
                onClick={() => {
                  setRecentlyTop("top");
                }}
                style={{ opacity: recentlyTop !== "top" ? 0.4 : 1 }}
                className=' pr-5 pl-3 py-1 cursor-pointer border-b-2 text-violet-800 text-base font-medium font-Poppins leading-7'
              >
                Top Resources
              </div>
            </div>
            <select
              style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
              className='focus:outline-none space-y-2  bg-white rounded-[5px] border border-blue-800 border-opacity-10 text-violet-800 text-[13px] font-medium px-3 py-1 font-Poppins leading-normal'
              name='month'
              onChange={(e) => {
                setRecentlyWeekMonth(e.target.value);
              }}
            >
              <option value={"week"}>Last Week</option>
              <option value={"month"}>Last Month</option>
            </select>
          </div>

          {recentlyTop === "recently" && (
            <div className='card-container grid grid-cols-2 gap-5 mt-5'>
              {overviewRecentlyUpdatedData &&
                overviewRecentlyUpdatedData.slice(0, 6).map((item) => {
                  return (
                    <RecentlyTopCard
                      image={item && item.image ? item.image : null}
                      title={item && item.name ? item.name : "---"}
                      desc={item && item.description ? item.description : "---"}
                    />
                  );
                })}
            </div>
          )}

          {recentlyTop === "top" && (
            <div className='card-container grid grid-cols-2 gap-5 mt-5'>
              {reportSiteData &&
              reportSiteData.results &&
              reportSiteData.results.length > 0 ? (
                reportSiteData.results.slice(0, 6).map((item) => {
                  return (
                    <RecentlyTopCard
                      image={item && item.site__image ? item.site__image : null}
                      title={item && item.site__name ? item.site__name : "---"}
                      desc={item && item.description ? item.description : "---"}
                    />
                  );
                })
              ) : (
                <div className='p-5 ml-5'>No Data Found</div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* --------- Section 5 ------------ */}
      <div className='flex mt-5 gap-5'>
        <div className='left basis-3/5 p-5 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
          <div className='flex justify-between'>
            <div>
              <span className='text-violet-800 text-[22px] font-semibold font-Poppins leading-[33px]'>
                Database Usage{" "}
              </span>
              <span className='text-violet-800 text-opacity-40 text-base font-medium font-Poppins leading-normal'>
                Top 3
              </span>
            </div>
            {/* <div className='flex gap-3'> */}
            <select
              style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
              className='focus:outline-none space-y-2  bg-white rounded-[5px] border border-blue-800 border-opacity-10 text-violet-800 text-[13px] font-medium px-3 py-1 font-Poppins leading-normal'
              onClick={(e) => {
                setDatabaseUsageWeekMonth(e.target.value);
              }}
            >
              <option value={"week"}>Weekly</option>
              <option value={"month"}>Monthly</option>
            </select>
            {/* </div> */}
          </div>

          {/* -------------- Radio Buttons -------------- */}
          <div className='flex gap-3 my-5'>
            <label htmlFor='Scopus' className='flex gap-2'>
              <div className='w-4 h-4 rounded-full  border border-slate-400 overflow-hidden p-0.5 flex-shrink-0'>
                <p
                  className='w-full h-full rounded-full grow'
                  style={{
                    background: colorPalette[2],
                  }}
                ></p>
              </div>
              <div className='text-gray-900 text-[13px] font-medium font-Poppins leading-snug'>
                {/* Scopus */}
                {databaseUsageStateData?.datasets[0].label}
              </div>
            </label>
            <label htmlFor='dvl' className='flex gap-2'>
              <div className='w-4 h-4 rounded-full  border border-slate-400 overflow-hidden p-0.5 flex-shrink-0'>
                <p
                  className='w-full h-full rounded-full grow'
                  style={{
                    background: colorPalette[1],
                  }}
                ></p>
              </div>
              <div className='text-gray-900 text-[13px] font-medium font-Poppins leading-snug'>
                {/* DVL */}
                {databaseUsageStateData?.datasets[1].label}
              </div>
            </label>
            <label htmlFor='proQuest' className='flex gap-2'>
              <div className='w-4 h-4 rounded-full  border border-slate-400 overflow-hidden p-0.5 flex-shrink-0'>
                <p
                  className='w-full h-full rounded-full grow'
                  style={{
                    background: colorPalette[0],
                  }}
                ></p>
              </div>
              <div className='text-gray-900 text-[13px] font-medium font-Poppins leading-snug'>
                {/* ProQuest */}
                {databaseUsageStateData?.datasets[2].label}
              </div>
            </label>
          </div>

          <div className='bar-chart'>
            {overviewDatabaseUsageDataLoading ? (
              "Loading..."
            ) : (
              <BarChart data={databaseUsageStateData} />
            )}
          </div>
        </div>

        <div className='right p-5 basis-[40%] flex flex-col bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
          <div className='left text-violet-800 text-[22px] font-semibold font-Poppins leading-[33px]'>
            Databased Subscribed
          </div>
          {siteLoading && <Loader />}
          <div className='right card-container grid grid-cols-3 gap-3'>
            {siteData && siteData.length > 0
              ? siteData.map((site, index) => {
                  return (
                    <DataBaseCard
                      key={index}
                      name={site.name}
                      image={site.image}
                    />
                  );
                })
              : "No Data Found"}
          </div>
        </div>
      </div>
    </>
  );
};

const CategoryCard = ({ title, value, percent }) => {
  return (
    <div className='bg-white relative px-2 py-3 bg-opacity-5 flex gap-3 rounded-[10px] border duration-200 hover:border-opacity-70 border-blue-800  border-opacity-10'>
      <div className='w-[47px] h-[47px] relative'>
        <div className='w-[47px] h-[47px] left-0 top-0 absolute bg-purple-100 rounded-full' />
      </div>
      <div className='flex flex-col'>
        <div className='text-violet-800 text-sm font-medium font-DM-Sans leading-normal'>
          {title}
        </div>
        <div className='text-indigo-800 text-xl font-bold font-DM-Sans leading-loose'>
          {value}
        </div>
      </div>
      <div className="text-lime-600 absolute bottom-2 right-3 text-xl font-bold font-['DM Sans'] leading-loose">
        {percent}%
      </div>
    </div>
  );
};

const RecentlyTopCard = ({ image, title, desc }) => {
  return (
    <div className='card flex gap-3 '>
      <img
        className='w-[52px] h-[59px] rounded-[5px] shrink-0 object-cover'
        src={image ? image : "https://via.placeholder.com/52x59"}
        alt=''
      />
      <div className='content space-y-1'>
        <div className='text-indigo-500 text-sm font-medium font-Poppins leading-tight'>
          {title}
        </div>
        <div className='text-blue-900 text-[15px] font-medium font-Poppins leading-[15px]'>
          {desc}
        </div>
        {/* <div className='text-slate-400 text-[13px] font-normal font-Poppins leading-tight'>
          Publisher Name
        </div> */}
      </div>
    </div>
  );
};

const DataBaseCard = ({ name, image }) => {
  return (
    <div className='card flex gap-3 items-center p-2 duration-300 rounded-[10px] hover:shadow'>
      <img
        className=' rounded-[32px] w-[42px] h-[42px] object-cover border border-blue-800 border-opacity-10'
        src={image ? image : "https://via.placeholder.com/42x42"}
        alt=''
      />
      <div className=' text-blue-900 text-[15px] line-clamp-1 font-medium font-Poppins leading-snug'>
        {name ? name : "---"}
      </div>
    </div>
  );
};
