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

export default function Category({ reportSiteLoading, reportSiteData }) {
  const {
    dashboardUserCategoryLoading,
    dashboardUserCategoryData,
    handleFetchDashboardUserCategoryCard,
  } = useFetch();

  const [weekMonth, setWeekMonth] = useState("month");

  useEffect(() => {
    handleFetchDashboardUserCategoryCard(
      "api/dashboard/user_metrics_cards?metrics=" + weekMonth
    );
  }, [weekMonth]);

  return (
    <div className=''>
      <Header
        icon={<DashboardIcon />}
        subTitle={"Dashboard"}
        title={"Category"}
      />
      <Navigation data={DashBoardRightMenu} />
      <Details
        siteLoading={reportSiteLoading}
        siteData={reportSiteData}
        weekMonth={weekMonth}
        dashboardUserCategoryData={dashboardUserCategoryData}
      />
    </div>
  );
}

const Details = ({
  siteLoading,
  siteData,
  weekMonth,
  dashboardUserCategoryData,
}) => {
  let renderIndex = 1;
  return (
    <>
      <DashBoardPageHeader />
      <div className='card-container mt-5 grid grid-cols-4 gap-5 '>
        <div className=' p-5 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
          {/* <DetailCard progress={true} /> */}
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
                ?.change_percentage_from_last_metric
            }
          />
        </div>
        <div className='p-5 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
          <DetailCard progress={true} />
        </div>
        <div className=' p-5 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
          <DetailCard progress={true} />
        </div>
        <div className='p-5 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
          <DetailCard progress={true} />
        </div>
      </div>

      <div className='flex mt-5 gap-5'>
        <div className='left basis-3/5 p-5 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
          <div className='flex justify-between'>
            <div>
              <p className='text-violet-800 text-[19px] font-semibold font-Poppins leading-7'>
                Active Users Timeline
              </p>
            </div>
            {/* <div className='flex gap-3'> */}
            <select
              style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
              className='focus:outline-none space-y-2  bg-white rounded-[5px] border border-blue-800 border-opacity-10 text-violet-800 text-[13px] font-medium px-3 py-1 font-Poppins leading-normal'
              name='month'
            >
              <option>Today</option>
            </select>
            {/* </div> */}
          </div>

          <div className='max-h-[250px] relative'>
            <BarChart
              labels={[
                "Subject 1",
                "Subject 2",
                "Subject 3",
                "Subject 4",
                "Subject 5",
                "Subject 6",
                "Subject 7",
                "Subject 8",
              ]}
              datasets={[
                {
                  label: "Day",
                  data: [5, 1, 9, 7, 4, 8, 3, 5],
                  backgroundColor: "#7F56D9",
                  barThickness: 40,
                  borderRadius: 10,
                },
              ]}
            />
          </div>
        </div>

        <div className='right p-5 basis-[40%] flex flex-col bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
          <div className='flex justify-between'>
            <div className='text-violet-800 text-[19px] font-semibold font-Poppins leading-7'>
              e-Resources Distribution
            </div>
          </div>
          <div className='mt-5 flex gap-3 '>
            <div className='basis-[40%] ml-8 flex justify-center items-center overflow-hidden'>
              <FullCircle />
            </div>
            <ul className='grow list-disc '>
              <li className='text-gray-500 text-sm font-normal font-Poppins leading-tight'>
                e-Journal
              </li>
              <li className='text-gray-500 text-sm font-normal font-Poppins leading-tight'>
                e-Book{" "}
              </li>
              <li className='text-gray-500 text-sm font-normal font-Poppins leading-tight'>
                Videos / Audios{" "}
              </li>
              <li className='text-gray-500 text-sm font-normal font-Poppins leading-tight'>
                Other resources{" "}
              </li>
            </ul>
          </div>
          <div className='text-lime-600 mt-5 text-xs font-medium font-Poppins leading-7'>
            e-Journals are the max present in the portal
          </div>
        </div>
      </div>

      <div className='flex mt-5 gap-5'>
        <div className='basis-1/2 flex flex-col bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
          <div className='px-5 pt-5 flex justify-between items-center'>
            <div className='text-violet-800 text-[19px] font-semibold font-Poppins leading-7'>
              Top in Categories
            </div>
            <select
              style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
              className='focus:outline-none space-y-2  bg-white rounded-[5px] border border-blue-800 border-opacity-10 text-violet-800 text-[13px] font-medium px-3 py-1 font-Poppins leading-normal'
              name='month'
            >
              <option>Month</option>
            </select>
          </div>
          <div className=' grid grid-cols-4 gap-4'>
            <div className='mt-4 px-5 py-2 shadow col-span-full grid grid-cols-4 gap-3'>
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
              siteData.results?.map((item, index) => {
                if (!item.site__category__name || renderIndex > 4) return null;
                const currentIndex = renderIndex++;

                return (
                  <div
                    key={index}
                    className='col-span-full px-5 grid grid-cols-4 gap-3'
                  >
                    <div className='text-lime-600 text-xs font-medium font-Poppins leading-normal'>
                      #{currentIndex}
                    </div>
                    <div className='text-indigo-900 col-span-2 text-xs font-medium font-Poppins leading-7'>
                      {item.site__category__name}
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
              {/* <PieChart /> */}
              <FullCircle />
            </div>
            <div className='basis-1/2 flex gap-5'>
              {/* ---- CARD---- */}
              <ul className='grow basis-1/2 list-disc space-y-2'>
                <li className='text-gray-500 text-sm font-normal font-Poppins leading-tight'>
                  Anatomy
                </li>
                <li className='text-gray-500 text-sm font-normal font-Poppins leading-tight'>
                  Orthalmology
                </li>
                <li className='text-gray-500 text-sm font-normal font-Poppins leading-tight'>
                  Life Science{" "}
                </li>
                <li className='text-gray-500 text-sm font-normal font-Poppins leading-tight'>
                  Engineering{" "}
                </li>
                <li className='text-gray-500 text-sm font-normal font-Poppins leading-tight'>
                  Ortho{" "}
                </li>
              </ul>
              <ul className='grow basis-1/2 list-disc space-y-2'>
                <li className='text-gray-500 text-sm font-normal font-Poppins leading-tight'>
                  Anatomy
                </li>
                <li className='text-gray-500 text-sm font-normal font-Poppins leading-tight'>
                  Orthalmology
                </li>
                <li className='text-gray-500 text-sm font-normal font-Poppins leading-tight'>
                  Life Science{" "}
                </li>
                <li className='text-gray-500 text-sm font-normal font-Poppins leading-tight'>
                  Engineering{" "}
                </li>
                <li className='text-gray-500 text-sm font-normal font-Poppins leading-tight'>
                  Ortho{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const data = [
  {
    id: 1,
    subject_name: "Evan Parker",
    accessd_by: 800,
  },
  {
    id: 2,
    subject_name: "John Marshall",
    accessd_by: 800,
  },
  {
    id: 3,
    subject_name: "Evan Parker",
    accessd_by: 800,
  },
  {
    id: 4,
    subject_name: "John Marshall",
    accessd_by: 800,
  },
];
