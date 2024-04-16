import React from "react";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import { DashboardIcon } from "../../assets/constants";
import { DashBoardRightMenu } from "../../data";
import Navigation from "../../components/Dashboard/RightCommonComponents/Navigation";
import DashBoardPageHeader from "../../components/Dashboard/DashBoardPageHeader";
import DetailCard from "../../components/Dashboard/DetailCard";
import HalfCircleChart from "../../components/Dashboard/HalfCircleChart";
import FullCircle from "../../components/Dashboard/FullCircle";
import BarChart from "../../components/Dashboard/BarChart";

export default function Resources() {
  return (
    <>
      <Header
        icon={<DashboardIcon />}
        subTitle={"Dashboard"}
        title={"e-Resources"}
      />
      <Navigation data={DashBoardRightMenu} />
      <Details />
    </>
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
        <div className='p-5 col-span-2 flex gap-3 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
          <div className='left w-1/2'>
            <DetailCard />
          </div>
          <div className='right w-1/2 relative overflow-hidden'>
            {/* ------- Curve Line ----------- */}
            <HalfCircleChart />
          </div>
        </div>
      </div>

      <div className='flex mt-5 gap-5'>
        <div className='left basis-3/5 p-5 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
          <div className='flex justify-between'>
            <div className='text-violet-700 text-[19px] font-semibold font-Poppins leading-7'>
              Database Usage{" "}
            </div>
            <select
              style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
              className='focus:outline-none space-y-2  bg-white rounded-[5px] border border-blue-800 border-opacity-10 text-violet-800 text-[13px] font-medium px-3 py-1 font-Poppins leading-normal'
              name='month'
            >
              <option>Today</option>
            </select>
          </div>

          {/* -------------- Radio Buttons -------------- */}
          <div className='flex gap-3 my-5'>
            <label htmlFor='scopio' className='flex gap-2'>
              <input type='radio' name='usage' />
              <div className='text-gray-900 text-[13px] font-medium font-Poppins leading-snug'>
                Scopis
              </div>
            </label>
            <label htmlFor='scopio' className='flex gap-2'>
              <input type='radio' name='usage' />
              <div className='text-gray-900 text-[13px] font-medium font-Poppins leading-snug'>
                DVL
              </div>
            </label>
            <label htmlFor='scopio' className='flex gap-2'>
              <input type='radio' name='usage' />
              <div className='text-gray-900 text-[13px] font-medium font-Poppins leading-snug'>
                PreQuest
              </div>
            </label>
          </div>

          <div className='bar-chart'>
            <BarChart
              labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]}
              datasets={[
                {
                  label: "Active Hours",
                  data: [3, 7, 2, 4, 5, 6, 8],
                  backgroundColor: "#7F56D9",
                  borderColor: "#d03636",
                  borderWidth: 0,
                  borderSkipped: "bottom",
                  borderRadius: 50,
                  barThickness: 10,
                },
                {
                  label: "Active Hours",
                  data: [8, 3, 5, 1, 7, 2, 5],
                  backgroundColor: "#d03636",
                  borderColor: "#d03636",
                  borderWidth: 0,
                  borderSkipped: "bottom",
                  borderRadius: 50,
                  barThickness: 10,
                },
              ]}
            />
          </div>
        </div>

        <div className='right p-5 basis-2/5 flex flex-col bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
          <div className='flex justify-between'>
            <div className='text-violet-700 text-[19px] font-semibold font-Poppins leading-7'>
              Subject Distribution
            </div>
          </div>
          <div className='mt-5 flex gap-3 '>
            <div className='basis-[40%] ml-8 flex justify-center items-center overflow-hidden'>
              <FullCircle />
            </div>
            <ul className='grow list-disc space-y-2'>
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
                    {item.title}
                  </div>
                  <div className='text-indigo-900 text-xs font-medium font-Poppins leading-7'>
                    {item.subject}
                  </div>
                  <div className='text-indigo-900 items-center justify-center flex gap-1 text-center text-xs font-medium font-Poppins leading-normal'>
                    {item.access_rate}
                    <progress
                      className=' w-3/5 h-2 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-[#546eff82] [&::-webkit-progress-value]:bg-[#546FFF] [&::-moz-progress-bar]:bg-[#546FFF]'
                      max='100'
                      value={item.access_rate}
                    ></progress>
                  </div>
                  <div className='text-indigo-900 text-center text-xs font-medium font-Poppins leading-normal'>
                    {item.save_count}
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
            <RecentlyTopCard />
            <RecentlyTopCard />
            <RecentlyTopCard />
            <RecentlyTopCard />
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

const RecentlyTopCard = () => {
  return (
    <div className='card w-full flex gap-3 border-b pb-3'>
      <img
        className='w-[52px] h-[59px] rounded-[5px]'
        src='https://via.placeholder.com/52x59'
        alt=''
      />
      <div className='content space-y-1'>
        <div className='text-indigo-500 text-sm font-medium font-Poppins leading-tight'>
          Prostodontics
        </div>
        <div className='text-blue-900 text-[15px] font-medium font-Poppins leading-[15px]'>
          Medical is the best field
        </div>
        <div className='text-slate-400 text-[13px] font-normal font-Poppins leading-tight'>
          Publisher Name
        </div>
      </div>
    </div>
  );
};
