import React, { useState } from "react";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import { DashboardIcon } from "../../assets/constants";
import Navigation from "../../components/Dashboard/RightCommonComponents/Navigation";
import { DashBoardRightMenu } from "../../data";
import HalfCircleChart from "../../components/Dashboard/HalfCircleChart";
import SmoothLineChart from "../../components/Dashboard/SmoothLineChart";
import FullCircle from "../../components/Dashboard/FullCircle";
import BarChart from "../../components/Dashboard/BarChart";
import DashBoardPageHeader from "../../components/Dashboard/DashBoardPageHeader";
import DetailCard from "../../components/Dashboard/DetailCard";
import Loader from "../../components/Loader/Loader";

export default function Overview({ siteLoading, siteData }) {
  const [amPm, setAmPm] = useState("Am");

  return (
    <div className=''>
      <Header icon={<DashboardIcon />} title={"Dashboard"} />
      <Navigation data={DashBoardRightMenu} />
      <Details
        amPm={amPm}
        setAmPm={setAmPm}
        siteLoading={siteLoading}
        siteData={siteData && siteData.results}
      />
    </div>
  );
}

const Details = ({ amPm, setAmPm, siteLoading, siteData }) => {
  return (
    <>
      <DashBoardPageHeader />
      {/* -------- Section 1 ------------ */}
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

      {/* --------- Section 2 ------------ */}
      <div className='mt-5 p-5 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
        <div className='text-violet-800 text-[22px] font-semibold font-Poppins leading-[33px]'>
          Resources Utilisation Trend
        </div>
        <div className='max-h-[250px] relative'>
          <SmoothLineChart />
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
            >
              <option>Month</option>
            </select>
          </div>
          <div className='flex gap-3 mt-4'>
            <ul className='space-y-3 basis-1/2 shrink-0 list-disc list-inside'>
              <li className='text-gray-500 text-sm font-normal font-Poppins leading-tight'>
                High Engament Users
              </li>
              <li className='text-gray-500 text-sm font-normal font-Poppins leading-tight'>
                Medium Enagagement Users
              </li>
              <li className='text-gray-500  text-sm font-normal font-Poppins leading-tight'>
                Low Engagement Users
              </li>
            </ul>
            <div className='doughnet-chart overflow-hidden basis-1/2 shrink-0 grow-0'>
              <FullCircle />
            </div>
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
                name='month'
              >
                <option>Today</option>
              </select>
            </div>
          </div>
          <div className='text-indigo-900 text-[23px] font-semibold font-Poppins leading-[42px]'>
            Most Active: 12 pm
          </div>

          <div className='bar-chart'>
            <BarChart
              amPm={amPm}
              labels={[
                "12 " + amPm,
                "1 " + amPm,
                "2 " + amPm,
                "3 " + amPm,
                "4 " + amPm,
                "5 " + amPm,
                "6 " + amPm,
                "7 " + amPm,
                "8 " + amPm,
                "9 " + amPm,
                "10 " + amPm,
                "11 " + amPm,
              ]}
              datasets={[
                {
                  label: "Active Hours",
                  data: [8, 11, 9, 7, 4, 5, 8, 10, 9, 7, 4, 2],
                  backgroundColor: (context) => {
                    const value = context.raw;
                    if (value === 0) return "transparent"; // If value is 0, make the bar transparent
                    return value < 8 ? "#7F56D9" : "#d03636";
                  },
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

      {/* -------- Section 4 ------------ : Categroy ---*/}
      <div className='category mt-5 gap-5 w-full flex py-3 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
        <div className='left p-5 basis-[40%] flex flex-col border-r'>
          <div className='text-violet-800 text-[22px] font-semibold font-Poppins leading-[33px]'>
            Categories
          </div>

          <div className='card-container mt-5 gap-4 grid grid-cols-2'>
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
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
              <div className='text-violet-800 pr-3 py-1 pl-5 border-b-2 text-base font-medium font-Poppins leading-7'>
                Recently Updated
              </div>
              <div className='opacity-40 pr-5 pl-3 py-1 border-b-2 text-violet-800 text-base font-medium font-Poppins leading-7'>
                Top Resources
              </div>
            </div>
            <select
              style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
              className='focus:outline-none space-y-2  bg-white rounded-[5px] border border-blue-800 border-opacity-10 text-violet-800 text-[13px] font-medium px-3 py-1 font-Poppins leading-normal'
              name='month'
            >
              <option>Last Week</option>
            </select>
          </div>

          <div className='card-container grid grid-cols-2 gap-5 mt-5'>
            <RecentlyTopCard />
            <RecentlyTopCard />
            <RecentlyTopCard />
            <RecentlyTopCard />
            <RecentlyTopCard />
            <RecentlyTopCard />
            <RecentlyTopCard />
            <RecentlyTopCard />
          </div>
        </div>
      </div>

      {/* --------- Section 5 ------------ */}
      <div className='flex mt-5 gap-5'>
        <div className='left basis-3/5 p-5 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
          <div className='flex justify-between'>
            <div>
              <span className='text-violet-800 text-[22px] font-semibold font-Poppins leading-[33px]'>
                Dastabase Usage{" "}
              </span>
              <span className='text-violet-800 text-opacity-40 text-base font-medium font-Poppins leading-normal'>
                Top 3
              </span>
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
              amPm={amPm}
              labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]}
              datasets={[
                {
                  label: "Active Hours",
                  data: [3, 7, 2, 4, 5, 6, 8],
                  // backgroundColor: (context) => {
                  //   const value = context.raw;
                  //   if (value === 0) return "transparent";
                  //   return value < 8 ? "#7F56D9" : "#d03636";
                  // },
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
                  // backgroundColor: (context) => {
                  //   const value = context.raw;
                  //   if (value === 0) return "transparent";
                  //   return value < 8 ? "#7F56D9" : "#d03636";
                  // },
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

        <div className='right p-5 basis-[40%] flex flex-col bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
          <div className='left text-violet-800 text-[22px] font-semibold font-Poppins leading-[33px]'>
            Dastabased Subscribed
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

const CategoryCard = () => {
  return (
    <div className='bg-white relative px-2 py-3 bg-opacity-5 flex gap-3 rounded-[10px] border border-blue-800 border-opacity-10'>
      <div className='w-[47px] h-[47px] relative'>
        <div className='w-[47px] h-[47px] left-0 top-0 absolute bg-purple-100 rounded-full' />
      </div>
      <div className='flex flex-col'>
        <div className='text-violet-800 text-sm font-medium font-DM-Sans leading-normal'>
          e-Journals
        </div>
        <div className='text-indigo-800 text-xl font-bold font-DM-Sans leading-loose'>
          25000
        </div>
      </div>
      <div className="text-lime-600 absolute bottom-2 right-3 text-xl font-bold font-['DM Sans'] leading-loose">
        20%
      </div>
    </div>
  );
};

const RecentlyTopCard = () => {
  return (
    <div className='card flex gap-3 '>
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
