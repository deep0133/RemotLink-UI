import React from "react";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import { DashboardIcon } from "../../assets/constants";
import Navigation from "../../components/Dashboard/RightCommonComponents/Navigation";
import { DashBoardRightMenu } from "../../data";
import DashBoardPageHeader from "../../components/Dashboard/DashBoardPageHeader";
import DetailCard from "../../components/Dashboard/DetailCard";
import BarChart from "../../components/Dashboard/BarChart";
import SmoothLineChart from "../../components/Dashboard/SmoothLineChart";
import PieChart from "../../components/Dashboard/PieChart";

export default function UserCategory() {
  return (
    <div className=''>
      <Header
        icon={<DashboardIcon />}
        subTitle={"Dashboard"}
        title={"User Category"}
      />
      <Navigation data={DashBoardRightMenu} />
      <Details />
    </div>
  );
}

const Details = () => {
  return (
    <>
      <DashBoardPageHeader />
      <div className='card-container mt-5 grid grid-cols-4 gap-5 '>
        <div className=' p-5 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
          <DetailCard progress={true} />
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
            <div className='text-violet-800 text-[19px] font-semibold font-Poppins leading-7'>
              Active Users Timeline
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

          <div className='max-h-[250px] mt-5 relative'>
            <SmoothLineChart />
          </div>
        </div>

        <div className='right p-5 basis-[40%] flex flex-col bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
          <div className='flex justify-between'>
            <div className='opacity-40 text-violet-800 text-[15px] font-medium font-Poppins leading-normal'>
              Daily Traffic
            </div>
            <div className="text-center text-lime-600 text-xs font-bold font-['DM Sans'] leading-tight">
              +2.45%
            </div>
          </div>
          <div className='flex gap-2 items-baseline'>
            <div className='text-indigo-900 text-[34px] font-semibold font-Poppins leading-[42px]'>
              200+
            </div>
            <div className='text-slate-400 text-sm font-medium font-Poppins leading-normal'>
              Visitors
            </div>
          </div>
          <div className='mt-5'>
            <BarChart
              labels={["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"]}
              datasets={[
                {
                  label: "Day",
                  data: [8, 11, 9, 7, 4, 5, 8],
                  backgroundColor: "#7F56D9",
                  borderColor: "#d03636",
                  borderWidth: 0,
                  borderSkipped: "top bottom",
                  borderRadius: 50,
                  barThickness: 10,
                },
              ]}
            />
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
              name='month'
            >
              <option>Month</option>
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
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className='col-span-full px-5 grid grid-cols-4 gap-3'
                >
                  <div className='text-lime-600 text-xs font-medium font-Poppins leading-normal'>
                    #{index + 1}
                  </div>
                  <div className='text-indigo-900 text-xs font-medium font-Poppins leading-7'>
                    {item.name}
                  </div>
                  <div className='text-indigo-900 text-xs font-medium font-Poppins leading-7'>
                    {item.username}
                  </div>
                  <div className='text-indigo-900 text-center text-xs font-medium font-Poppins leading-normal'>
                    {item.lastActive}
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

const data = [
  {
    id: 1,
    name: "Evan Parker",
    username: "@evanparker",
    lastActive: "22 Jan 2021",
  },
  {
    id: 2,
    name: "Evan Parker",
    username: "@evanparker",
    lastActive: "22 Jan 2021",
  },
  {
    id: 3,
    name: "Evan Parker",
    username: "@evanparker",
    lastActive: "22 Jan 2021",
  },
  {
    id: 4,
    name: "Evan Parker",
    username: "@evanparker",
    lastActive: "22 Jan 2021",
  },
  {
    id: 5,
    name: "Evan Parker",
    username: "@evanparker",
    lastActive: "22 Jan 2021",
  },
];

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
