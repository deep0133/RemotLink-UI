import React, { useEffect, useState } from "react";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import Navigation from "../../components/Dashboard/RightCommonComponents/Navigation";
import { DashBoardRightMenu } from "../../data";
import { DashboardIcon, UserEmptyIcon } from "../../assets/constants";
import DashBoardPageHeader from "../../components/Dashboard/DashBoardPageHeader";
import DetailCard from "../../components/Dashboard/DetailCard";
import BarChart from "../../components/Dashboard/BarChart";
import FullCircle from "../../components/Dashboard/FullCircle";
import Loader from "../../components/Loader/Loader";
import useFetch from "../../hooks/useFetch";
import CardSkeletonLoading from "../../components/loading/CardSkeletonLoading";
import getRandomColor from "../../utils/getRandomColors";

export default function Category({ reportSiteData }) {
  const {
    dashboardCategoryCardLoading,
    dashboardCategoryCardData,
    handleFetchDashboardCategory,

    topResourceSubjectLoading,
    topResourceSubjectData,
    handleFetchDashboardCategoryTopResourceSubject,

    dashboardSubjectWiseDistributionLoading,
    dashboardSubjectWiseDistributionData,
    handleFetchDashboardCategorySubjectWiseDistribution,
  } = useFetch();

  const [weekMonth, setWeekMonth] = useState("month");

  useEffect(() => {
    handleFetchDashboardCategory(
      "api/dashboard/categories-cards?metrics=" + weekMonth
    );
  }, [weekMonth]);

  useEffect(() => {
    handleFetchDashboardCategoryTopResourceSubject(
      "api/dashboard/top-resources-by-subject"
    );
    handleFetchDashboardCategorySubjectWiseDistribution(
      "api/dashboard/subject-wise-distribution"
    );
  }, []);

  return (
    <div className=''>
      <Header
        icon={<DashboardIcon />}
        subTitle={"Dashboard"}
        title={"Category"}
      />
      <Navigation data={DashBoardRightMenu} />
      <Details
        siteLoading={topResourceSubjectLoading}
        siteData={topResourceSubjectData}
        weekMonth={weekMonth}
        setWeekMonth={setWeekMonth}
        dashboardCategoryCardData={dashboardCategoryCardData}
        dashboardCategoryCardLoading={dashboardCategoryCardLoading}
        dashboardSubjectWiseDistributionLoading={
          dashboardSubjectWiseDistributionLoading
        }
        dashboardSubjectWiseDistributionData={
          dashboardSubjectWiseDistributionData
        }
      />
    </div>
  );
}

const Details = ({
  siteLoading,
  siteData,
  weekMonth,
  setWeekMonth,
  dashboardCategoryCardLoading,
  dashboardCategoryCardData,
  dashboardSubjectWiseDistributionLoading,
  dashboardSubjectWiseDistributionData,
}) => {
  const [fullCircleChartData, setFullCircleChartData] = useState(null);
  const [selectedTopCategory, setSelectedTopCategory] = useState("");

  const [
    fullCircleChartSubjectWiseDisData,
    setFullCircleChartSubjectWiseDisData,
  ] = useState(null);
  const [fullCircleChartOptionData, setFullCircleChartOptionData] =
    useState(null);

  const [barChartData, setBarChartData] = useState(null);

  useEffect(() => {
    if (dashboardCategoryCardData) {
      const data = {
        labels: Object.keys(dashboardCategoryCardData),
        datasets: [
          {
            label: "Total Count",
            data: Object.values(dashboardCategoryCardData)?.map(
              (item) => item.percentage_wise_distribution
            ),
            backgroundColor: ["#7F56D9", "#9E77ED", "#F4EBFF"],
            borderWidth: 0,
            hoverOffset: 2,
          },
        ],
      };
      setFullCircleChartData(data);
    }
  }, [dashboardCategoryCardData]);

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

      const options = {
        maintainAspectRatio: false,
        responsive: true,
        cutout: "55%",
        layout: {
          padding: 0,
        },
        plugins: {
          tooltip: {
            enabled: true,
            callbacks: {
              label: function (context) {
                const item =
                  dashboardSubjectWiseDistributionData[context.dataIndex];
                return `${item.subject.trim()}: ${item.count} (${
                  item.percentage
                }%)`;
              },
            },
          },
          legend: {
            position: "top",
          },
        },
      };
      // Bar Chart Data
      const barChartData = {
        labels,
        datasets: [
          {
            label: "Total Count",
            data: counts,
            backgroundColor: "#2F80ED",
            borderColor: "#15b40aed",
            borderWidth: 0,
            borderSkipped: "top bottom",
            borderRadius: {
              topLeft: 10,
              topRight: 10,
            },
            barThickness: 40,
          },
        ],
      };
      setFullCircleChartOptionData(options);
      setFullCircleChartSubjectWiseDisData(fullCircleChartData);

      setBarChartData(barChartData);
    }
  }, [dashboardSubjectWiseDistributionData]);

  useEffect(() => {
    if (siteData) {
      const keys = Object.keys(siteData);
      setSelectedTopCategory(keys[0]);
    }
  }, [siteData]);

  return (
    <>
      <DashBoardPageHeader setWeekMonth={setWeekMonth} />
      <div className='card-container mt-5 grid grid-cols-4 gap-5 w-full '>
        {dashboardCategoryCardLoading ? (
          Array.from([1, 2, 3, 4]).map((val, i) => {
            return <CardSkeletonLoading />;
          })
        ) : (
          <>
            <div className=' p-5 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
              <DetailCard
                progress={true}
                progressColor={"#3758F9"}
                name={"e-Journals"}
                weekMonth={weekMonth}
                icon={<UserEmptyIcon />}
                data1={
                  dashboardCategoryCardData &&
                  dashboardCategoryCardData?.journals?.total_journals
                }
                data4={
                  dashboardCategoryCardData &&
                  dashboardCategoryCardData.journals?.change_percentage
                }
              />
            </div>
            <div className='p-5 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
              <DetailCard
                progress={true}
                progressColor={"#3758F9"}
                name={"e-Books"}
                weekMonth={weekMonth}
                icon={<UserEmptyIcon />}
                data1={
                  dashboardCategoryCardData &&
                  dashboardCategoryCardData?.books?.total_books
                }
                data4={
                  dashboardCategoryCardData &&
                  dashboardCategoryCardData.books?.change_percentage
                }
              />
            </div>
            <div className=' p-5 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
              <DetailCard
                progress={true}
                progressColor={"#3758F9"}
                name={"e-Videos"}
                weekMonth={weekMonth}
                icon={<UserEmptyIcon />}
                data1={
                  dashboardCategoryCardData &&
                  dashboardCategoryCardData?.videos?.total_videos
                }
                data4={
                  dashboardCategoryCardData &&
                  dashboardCategoryCardData.videos?.change_percentage
                }
              />
            </div>
            <div className='p-5 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
              <DetailCard
                progress={true}
                progressColor={"#3758F9"}
                name={"e-other_resources"}
                weekMonth={weekMonth}
                icon={<UserEmptyIcon />}
                data1={
                  dashboardCategoryCardData &&
                  dashboardCategoryCardData?.other_resources
                    ?.total_other_resources
                }
                data4={
                  dashboardCategoryCardData &&
                  dashboardCategoryCardData.other_resources?.change_percentage
                }
              />
            </div>
          </>
        )}
      </div>

      <div className='grid grid-cols-12 mt-5 gap-5  '>
        <div className='left col-span-7 grow p-5  bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
          <div className='flex justify-between pb-3'>
            <div>
              <p className='text-violet-800 text-[19px] font-semibold font-Poppins leading-7'>
                Subject Categorical Distribution
              </p>
            </div>
            {/* <select
              style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
              className='focus:outline-none space-y-2  bg-white rounded-[5px] border border-blue-800 border-opacity-10 text-violet-800 text-[13px] font-medium px-3 py-1 font-Poppins leading-normal'
              name='month'
            >
              <option>Today</option>
            </select> */}
          </div>

          <div className='max-h-[250px] relative'>
            <BarChart data={barChartData} />
          </div>
        </div>

        <div className='right p-5 grow col-span-5 flex flex-col bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
          <div className='flex justify-between'>
            <div className='text-violet-800 text-[19px] font-semibold font-Poppins leading-7'>
              e-Resources Distribution
            </div>
          </div>
          <div className='mt-5 flex gap-3 '>
            <div className='basis-[40%] ml-8 flex justify-center items-center overflow-hidden'>
              <FullCircle myData={fullCircleChartData} />
            </div>
            <ul className='grow list-disc '>
              {dashboardCategoryCardData &&
                Object.keys(dashboardCategoryCardData)?.map((val, i) => {
                  return (
                    <li
                      key={i}
                      className='text-gray-500 text-sm font-normal font-Poppins leading-tight'
                    >
                      {val}
                    </li>
                  );
                })}
            </ul>
          </div>
          {/* <div className='text-lime-600 mt-5 text-xs font-medium font-Poppins leading-7'>
            e-Journals are the max present in the portal
          </div> */}
        </div>
      </div>

      <div className='flex mt-5 gap-5'>
        <div className='basis-1/2 flex flex-col bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
          <div className='px-5 pt-5 flex justify-between items-center'>
            <div className='text-violet-800 text-[19px] font-semibold font-Poppins leading-7'>
              Top e-Resource in subject
            </div>
            <select
              style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
              className='focus:outline-none space-y-2  bg-white rounded-[5px] border border-blue-800 border-opacity-10 text-violet-800 text-[13px] font-medium px-3 py-1 font-Poppins leading-normal'
              onChange={(e) => {
                const { value } = e.target;
                setSelectedTopCategory(value);
              }}
            >
              {siteData &&
                Object.keys(siteData)?.map((val, i) => {
                  return (
                    <option key={i} value={val}>
                      {val}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className='relative grid grid-cols-4 gap-4 max-h-56 overflow-auto'>
            <div className='pt-4 bg-white sticky top-0 z-50 px-5 py-2 shadow col-span-full grid grid-cols-4 gap-3'>
              <div className='text-slate-400 text-xs font-medium font-Poppins leading-normal'>
                Sr.no
              </div>
              <div className='text-slate-400 col-span-2 text-xs font-medium font-Poppins leading-normal'>
                Subject Name
              </div>
              <div className='text-slate-400 text-center text-xs font-medium font-Poppins leading-normal'>
                Accessed By
              </div>
            </div>
            {siteLoading && <Loader />}
            {siteData &&
              siteData[selectedTopCategory]?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className='col-span-full px-5 grid grid-cols-4 gap-3 z-10'
                  >
                    <div className='text-lime-600 text-xs font-medium font-Poppins leading-normal'>
                      {index + 1}
                    </div>
                    <div className='text-indigo-900 col-span-2 text-xs font-medium font-Poppins leading-7'>
                      {item.title}
                    </div>
                    <div className='text-indigo-900 text-center text-xs font-medium font-Poppins leading-normal'>
                      {item.access_count}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className='basis-3/5 p-5 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
          <div className='text-violet-800 text-[19px] font-semibold font-Poppins leading-7'>
            Subject-wise Distribution
          </div>

          <div className='bar-chart flex mt-8 flex-wrap'>
            <div className='basis-1/2 grow-0 overflow-hidden'>
              <FullCircle
                myData={fullCircleChartSubjectWiseDisData}
                myOption={true}
                optData={fullCircleChartOptionData}
              />
            </div>
            <div className='basis-1/2 flex gap-5'>
              {/* ---- CARD---- */}
              <ul className='grow space-y-3 max-h-48 overflow-auto list-disc'>
                {dashboardSubjectWiseDistributionData &&
                  dashboardSubjectWiseDistributionData?.map((val, i) => {
                    return (
                      <li
                        key={i}
                        className='text-gray-500 line-clamp-1 text-sm font-normal font-Poppins leading-tight'
                      >
                        {val.subject}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
