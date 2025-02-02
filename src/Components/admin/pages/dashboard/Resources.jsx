import React, { useEffect, useState } from "react";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import {
  ClockIcon,
  DashboardIcon,
  NewlyResourceAddedIcon,
  ResourceIcon,
} from "../../assets/constants";
import { DashBoardRightMenu } from "../../data";
import Navigation from "../../components/Dashboard/RightCommonComponents/Navigation";
import DashBoardPageHeader from "../../components/Dashboard/DashBoardPageHeader";
import DetailCard from "../../components/Dashboard/DetailCard";
import HalfCircleChart from "../../components/Dashboard/HalfCircleChart";
import FullCircle from "../../components/Dashboard/FullCircle";
import BarChart from "../../components/Dashboard/BarChart";
import useFetch from "../../hooks/useFetch";
import CardSkeletonLoading from "../../components/loading/CardSkeletonLoading";
import getRandomColor from "../../utils/getRandomColors";
import { BlueRectangleImage } from "../../assets/images";
import Loader from "../../components/Loader/Loader";
import DataBaseCard from "../../components/Dashboard/DataBaseCard";
import clientUseFetch from "../../../../../src/hooks/useFetch";
export default function Resources({ siteData, siteLoading }) {
  const {
    dashboardResourceCardLoading,
    dashboardResourceCardData,
    handleFetchDashboardResourceCard,

    overviewDatabaseUsageData,
    overviewDatabaseUsageDataLoading,
    handleFetchOverallDashboardDatabaseUsageData,

    dashboardCategoryCardLoading,
    dashboardCategoryCardData,
    handleFetchDashboardCategory,

    dashboardSubjectWiseDistributionLoading,
    dashboardSubjectWiseDistributionData,
    handleFetchDashboardCategorySubjectWiseDistribution,

    dashboardResourcePopularUserLoading,
    dashboardResourcePopularUserData,
    handleFetchDashboardResourcePopularUser,
  } = useFetch();

  const {
    featureResourceLoading,
    featureResourceData,
    landingPageFeaturedResourcesFetch,
  } = clientUseFetch();

  const [weekMonth, setWeekMonth] = useState("month");

  const [resourceType, setResourceType] = useState("Journal");
  const [subjectType, setSubjectType] = useState("");
  useEffect(() => {
    handleFetchDashboardResourceCard(
      "api/dashboard/resources-cards?metrics=" + weekMonth
    );
  }, [weekMonth]);

  useEffect(() => {
    handleFetchDashboardResourcePopularUser(
      "api/dashboard/popular-among-users"
    );
  }, []);

  useEffect(() => {
    landingPageFeaturedResourcesFetch(
      `api/sites/recent-subject-resources/?resource_type=${resourceType}`
    );
  }, [resourceType]);

  return (
    <>
      <Header
        icon={<DashboardIcon />}
        subTitle={"Dashboard"}
        title={"e-Resources"}
      />
      <Navigation data={DashBoardRightMenu} />
      <Details
        weekMonth={weekMonth}
        setWeekMonth={setWeekMonth}
        cardData={dashboardResourceCardData}
        cardLoading={dashboardResourceCardLoading}
        overviewDatabaseUsageData={overviewDatabaseUsageData}
        overviewDatabaseUsageDataLoading={overviewDatabaseUsageDataLoading}
        handleFetchOverallDashboardDatabaseUsageData={
          handleFetchOverallDashboardDatabaseUsageData
        }
        dashboardCategoryCardLoading={dashboardCategoryCardLoading}
        dashboardCategoryCardData={dashboardCategoryCardData}
        handleFetchDashboardCategory={handleFetchDashboardCategory}
        dashboardSubjectWiseDistributionLoading={
          dashboardSubjectWiseDistributionLoading
        }
        dashboardSubjectWiseDistributionData={
          dashboardSubjectWiseDistributionData
        }
        handleFetchDashboardCategorySubjectWiseDistribution={
          handleFetchDashboardCategorySubjectWiseDistribution
        }
        dashboardResourcePopularUserLoading={
          dashboardResourcePopularUserLoading
        }
        dashboardResourcePopularUserData={dashboardResourcePopularUserData}
        siteData={siteData}
        siteLoading={siteLoading}
        featureResourceLoading={featureResourceLoading}
        featureResourceData={featureResourceData}
        resourceType={resourceType}
        setResourceType={setResourceType}
        subjectType={subjectType}
        setSubjectType={setSubjectType}
      />
    </>
  );
}

const Details = ({
  weekMonth,
  setWeekMonth,
  cardLoading,
  cardData,
  overviewDatabaseUsageData,
  overviewDatabaseUsageDataLoading,
  handleFetchOverallDashboardDatabaseUsageData,
  dashboardCategoryCardLoading,
  dashboardCategoryCardData,
  handleFetchDashboardCategory,

  dashboardSubjectWiseDistributionLoading,
  dashboardSubjectWiseDistributionData,
  handleFetchDashboardCategorySubjectWiseDistribution,
  dashboardResourcePopularUserData,
  dashboardResourcePopularUserLoading,

  featureResourceLoading,
  featureResourceData,
  resourceType,
  setResourceType,

  siteData,
  siteLoading,
  subjectType,
  setSubjectType,
}) => {
  const colorPalette = ["#546FFF", "#A5D9FF", "#91A9FF"];
  const [databaseUsageStateData, setDatabaseUsageStateData] = useState(null);
  const [databaseUsageWeekMonth, setDatabaseUsageWeekMonth] = useState("week");

  const [
    fullCircleChartSubjectWiseDisData,
    setFullCircleChartSubjectWiseDisData,
  ] = useState(null);

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

  const handleTwoDifferentData = (data, splitNo, setState) => {
    if (data) {
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

  useEffect(() => {
    handleFetchDashboardCategorySubjectWiseDistribution(
      "api/dashboard/subject-wise-distribution"
    );
  }, []);

  useEffect(() => {
    if (dashboardSubjectWiseDistributionData) {
      const labels = dashboardSubjectWiseDistributionData.map(
        (val) => val.subject
      );
      const counts = dashboardSubjectWiseDistributionData.map(
        (item) => item.count
      );
      // Full Circle Chart Data
      const fullCircleChartData = {
        labels,
        datasets: [
          {
            label: "Total Count",
            data: counts,
            backgroundColor: labels.map((val) => getRandomColor()),
            borderWidth: 0,
            hoverOffset: 2,
          },
        ],
      };

      setFullCircleChartSubjectWiseDisData(fullCircleChartData);
    }
  }, [dashboardSubjectWiseDistributionData]);

  useEffect(() => {
    handleFetchDashboardCategory(
      "api/dashboard/categories-cards?metrics=" + weekMonth
    );
  }, [weekMonth]);

  return (
    <>
      <DashBoardPageHeader setWeekMonth={setWeekMonth} />
      <div className='card-container mt-5 grid grid-cols-4 gap-5 '>
        {cardLoading ? (
          Array.from([1, 2, 3, 4]).map((val, i) => {
            return <CardSkeletonLoading />;
          })
        ) : (
          <>
            <div className=' p-5 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
              <DetailCard
                progress={true}
                progressColor={"#3758F9"}
                name={"Top Resources"}
                weekMonth={weekMonth}
                icon={<ResourceIcon fill='blue' />}
                data1={
                  cardData &&
                  cardData?.total_resources?.total_resources_this_metric
                }
                data4={
                  cardData &&
                  cardData?.total_resources?.change_percentage_from_last_metric
                }
              />
            </div>
            <div className='p-5 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
              <DetailCard
                progress={true}
                progressColor={"#F2994A"}
                name={"Newly Added Resources"}
                weekMonth={weekMonth}
                icon={<NewlyResourceAddedIcon />}
                data1={
                  cardData &&
                  cardData?.added_resources?.total_resources_this_metric
                }
                data4={
                  cardData &&
                  cardData?.added_resources?.change_percentage_from_last_metric
                }
              />
            </div>
            <div className='p-5 col-span-2 flex gap-3 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
              <div className='left w-1/2'>
                <DetailCard
                  progressColor={"#3758F9"}
                  name={"Resource Spent Time"}
                  weekMonth={weekMonth}
                  icon={<ClockIcon />}
                  data1={
                    cardData &&
                    cardData?.added_resources?.total_resources_this_metric
                  }
                  data4={
                    cardData &&
                    cardData?.added_resources
                      ?.change_percentage_from_last_metric
                  }
                />
              </div>
              <div className='right w-1/2 relative overflow-hidden'>
                <HalfCircleChart
                  percentage={
                    cardData &&
                    cardData?.added_resources
                      ?.change_percentage_from_last_metric
                  }
                />
              </div>
            </div>
          </>
        )}
      </div>

      <div className='flex mt-5 gap-5'>
        <div className='left basis-3/5 p-5 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
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
                    style={
                      {
                        // background: colorPalette[2],
                      }
                    }
                  ></p>
                </div>
                <div className='text-gray-900 text-[13px] font-medium font-Poppins leading-snug'>
                  {/* Scopus */}
                  {databaseUsageStateData?.datasets[0]?.label}
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
                  {databaseUsageStateData?.datasets[1]?.label}
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
                  {databaseUsageStateData?.datasets[2]?.label}
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
        </div>

        <div className='right p-5 basis-2/5 flex flex-col bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
          <div className='flex justify-between'>
            <div className='text-violet-700 text-[19px] font-semibold font-Poppins leading-7'>
              Subject Distribution
            </div>
          </div>
          <div className='mt-5 flex gap-3 grow'>
            <div className='basis-[40%] grow-0 ml-8 flex justify-center items-center overflow-hidden'>
              <FullCircle myData={fullCircleChartSubjectWiseDisData} />
            </div>

            <ul className='grow list-inside pt-4 basis-[60%] list-disc items-center space-y-2'>
              {dashboardSubjectWiseDistributionData &&
                dashboardSubjectWiseDistributionData.slice(0, 5).map((name) => {
                  return (
                    <li className='text-gray-500 text-sm font-normal font-Poppins leading-tight'>
                      {name?.subject}
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className='text-lime-600 mt-5 text-xs font-medium font-Poppins leading-7'>
            Life Science is having most number of resources
          </div>
        </div>
      </div>

      <div className='flex mt-5 gap-5'>
        <div className='left basis-3/5 flex flex-col bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
          <div className='px-5 pt-5 flex justify-between items-center'>
            <div className='text-violet-700 text-[19px] font-semibold font-Poppins leading-7'>
              Top Readers
            </div>
            <select
              style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
              className='focus:outline-none space-y-2  bg-white rounded-[5px] border border-blue-800 border-opacity-10 text-violet-800 text-[13px] font-medium px-3 py-1 font-Poppins leading-normal'
              name='month'
            >
              <option>Month</option>
            </select>
          </div>
          <div className=' grid grid-cols-4 gap-3'>
            <div className='mt-4 px-5 py-2 shadow col-span-full grid grid-cols-5 gap-3'>
              <div className='text-slate-400 text-xs font-medium font-Poppins leading-normal'>
                Sr.no
              </div>
              <div className='text-slate-400 text-xs font-medium font-Poppins leading-normal'>
                Title
              </div>
              <div className='text-slate-400 text-xs font-medium font-Poppins leading-normal'>
                Subject
              </div>
              <div className='text-slate-400 text-center text-xs font-medium font-Poppins leading-normal'>
                Access Rate
              </div>
              <div className='text-slate-400 text-center text-xs font-medium font-Poppins leading-normal'>
                Save Count
              </div>
            </div>
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className='col-span-full px-5 grid grid-cols-5 gap-3'
                >
                  <div className='text-lime-600 text-xs font-medium font-Poppins leading-normal'>
                    #{index + 1}
                  </div>
                  <div className='text-indigo-900 text-xs font-medium font-Poppins leading-7'>
                    {item?.title}
                  </div>
                  <div className='text-indigo-900 text-xs font-medium font-Poppins leading-7'>
                    {item?.subject}
                  </div>
                  <div className='text-indigo-900 items-center justify-center flex gap-1 text-center text-xs font-medium font-Poppins leading-normal'>
                    {item?.access_rate}
                    <progress
                      className=' w-3/5 h-2 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-[#546eff82] [&::-webkit-progress-value]:bg-[#546FFF] [&::-moz-progress-bar]:bg-[#546FFF]'
                      max='100'
                      value={item?.access_rate}
                    ></progress>
                  </div>
                  <div className='text-indigo-900 text-center text-xs font-medium font-Poppins leading-normal'>
                    {item?.save_count}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className='right basis-2/5 p-5 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
          <div className=' text-violet-800 text-lg font-semibold font-Poppins leading-[27px]'>
            Popular among Users
          </div>

          <div className='card-container w-full space-y-3  flex mt-6 flex-wrap'>
            {dashboardResourcePopularUserData &&
            dashboardResourcePopularUserData.length > 0
              ? dashboardResourcePopularUserData?.map((val, i) => (
                  <RecentlyTopCard key={i} val={val} />
                ))
              : "No Data Found"}
          </div>
        </div>
      </div>

      {/* Top Databases */}
      <div className='mt-5 grid grid-cols-12 gap-5'>
        <div className='left col-span-5 p-5 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
          <h3 className=' text-violet-800 mb-3 text-lg font-semibold font-Poppins leading-[27px]'>
            Top Databases
          </h3>
          {siteLoading ? (
            <Loader />
          ) : (
            <div className='right card-container grid grid-cols-3 gap-3'>
              {siteData && siteData?.results?.length > 0
                ? siteData.results?.map((site, index) => {
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
          )}
        </div>

        <div className='right col-span-7 p-5 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
          <div className=' flex justify-between items-center'>
            <h3 className=' text-violet-800 text-lg font-semibold font-Poppins leading-[27px]'>
              Top Resources
            </h3>
            <div className='flex gap-4'>
              <select
                style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
                className='focus:outline-none space-y-2  bg-white rounded-[5px] border border-blue-800 border-opacity-10 text-violet-800 text-[13px] font-medium px-3 py-1 font-Poppins leading-normal'
                onClick={(e) => {
                  setSubjectType(e.target.value);
                }}
              >
                {featureResourceData &&
                  Object.keys(featureResourceData)?.map((val, i) => (
                    <option value={val} key={i}>
                      {val}
                    </option>
                  ))}
              </select>
              <select
                style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
                className='focus:outline-none space-y-2  bg-white rounded-[5px] border border-blue-800 border-opacity-10 text-violet-800 text-[13px] font-medium px-3 py-1 font-Poppins leading-normal'
                onClick={(e) => {
                  setResourceType(e.target.value);
                }}
              >
                <option value={"Journal"}>Journal</option>
                <option value={"Book"}>Book</option>
                <option value={"Video"}>Video</option>
              </select>
            </div>
          </div>
          <div className='card-container w-full space-y-3  flex mt-6 flex-wrap max-h-80 overflow-auto'>
            {featureResourceLoading
              ? "Loading..."
              : featureResourceData &&
                featureResourceData[
                  subjectType === ""
                    ? Object.keys(featureResourceData)[0]
                    : subjectType
                ]?.length > 0
              ? featureResourceData[
                  subjectType === ""
                    ? Object.keys(featureResourceData)[0]
                    : subjectType
                ]?.map((val, i) => <RecentlyTopCard key={i} val={val} />)
              : "No Data Found"}
          </div>
        </div>
      </div>
    </>
  );
};

const data = [
  {
    id: 1,
    title: "Journal Name",
    subject: "Evan Parker",
    access_rate: 75,
    save_count: 44,
  },
  {
    id: 2,
    title: "Journal Name",
    subject: "Evan Parker",
    access_rate: 45,
    save_count: 44,
  },
  {
    id: 3,
    title: "Journal Name",
    subject: "Evan Parker",
    access_rate: 75,
    save_count: 44,
  },
  {
    id: 4,
    title: "Journal Name",
    subject: "Evan Parker",
    access_rate: 35,
    save_count: 44,
  },
  {
    id: 1,
    title: "Journal Name",
    subject: "Evan Parker",
    access_rate: 85,
    save_count: 44,
  },
  {
    id: 2,
    title: "Journal Name",
    subject: "Evan Parker",
    access_rate: 75,
    save_count: 44,
  },
  {
    id: 3,
    title: "Journal Name",
    subject: "Evan Parker",
    access_rate: 75,
    save_count: 44,
  },
  {
    id: 4,
    title: "Journal Name",
    subject: "Evan Parker",
    access_rate: 75,
    save_count: 44,
  },
];

const RecentlyTopCard = ({ val }) => {
  return (
    <div className='card w-full flex gap-3 border-b pb-3'>
      <BlueRectangleImage />
      <div className='content space-y-1'>
        <div className='text-indigo-500 text-sm font-medium font-Poppins leading-tight'>
          {val?.subject}
        </div>
        <div className='text-blue-900 text-[15px] font-medium font-Poppins leading-[15px]'>
          {val?.title}
        </div>
        <div className='text-slate-400 text-[13px] font-normal font-Poppins leading-tight'>
          {val?.author}
        </div>
      </div>
    </div>
  );
};
