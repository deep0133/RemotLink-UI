import React, { useState } from "react";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import { DashboardIcon } from "../../assets/constants";
import Navigation from "../../components/Dashboard/RightCommonComponents/Navigation";
import { DashBoardRightMenu } from "../../data";

export default function Overview() {
  const [selected, setSelected] = useState(0);

  const changeHandler = (index) => {
    setSelected(index);
  };
  return (
    <div className=''>
      <Header icon={<DashboardIcon />} title={"Dashboard"} />
      <Navigation
        data={DashBoardRightMenu}
        selected={selected}
        onChange={changeHandler}
      />
      <Details />
    </div>
  );
}

const Details = () => {
  return (
    <>
      <div className='mx-3 mt-5 metric flex justify-between items-center'>
        <h2 className=' text-violet-800 text-[22px] font-semibold font-Poppins leading-[33px]'>
          Metrics
        </h2>
        <select
          style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
          className='focus:outline-none space-y-2  bg-white rounded-[5px] border border-blue-800 border-opacity-10 text-violet-800 text-[13px] font-medium px-3 py-1 font-Poppins leading-normal'
          name='month'
        >
          <option>Month</option>
        </select>
      </div>

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
          </div>
        </div>
      </div>

      {/* --------- Section 2 ------------ */}
      <div className='mt-5 p-5 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
        <div className='text-violet-800 text-[22px] font-semibold font-Poppins leading-[33px]'>
          Resources Utilisation Trend
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
          <ul className='space-y-3 mt-4 list-disc list-inside'>
            <li className='text-gray-500 text-sm font-normal font-Poppins leading-tight'>
              High Engament Users
            </li>
            <li className='text-gray-500 text-sm font-normal font-Poppins leading-tight'>
              Medium Enagagement Users
            </li>
            <li className='text-gray-500 text-sm font-normal font-Poppins leading-tight'>
              Low Engagement Users
            </li>
          </ul>

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
              <div className='w-[34.15px] h-[34px] items-center justify-center flex relative  bg-violet-800 rounded-[28px] border border-blue-800 border-opacity-10 text-white text-xs font-medium font-Poppins leading-normal'>
                AM
              </div>
              <div className='w-[34.15px] h-[34px] items-center justify-center flex relative  bg-violet-800 rounded-[28px] border border-blue-800 border-opacity-10 text-white text-xs font-medium font-Poppins leading-normal'>
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
        </div>
      </div>

      {/* bg-blue-800 bg-opacity-0 rounded-[10px] border border-blue-800 border-opacity-70 */}
      {/* -------- Section 4 ------------ : Categroy ---*/}
      <div className='category mt-5 gap-5 w-full flex'>
        <div className='p-5 basis-[40%] flex flex-col bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
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
        <div className='basis-3/5 p-5 bg-white rounded-[10px] border border-blue-800 border-opacity-10'>
          <div className='flex justify-between'>
            <div className='opacity-40 text-violet-800 text-[15px] font-medium font-Poppins leading-normal'>
              Live Hourly Active Usage Trends
            </div>
            <div className='flex gap-3'>
              {" "}
              <div className='w-[34.15px] h-[34px] items-center justify-center flex relative  bg-violet-800 rounded-[28px] border border-blue-800 border-opacity-10 text-white text-xs font-medium font-Poppins leading-normal'>
                AM
              </div>
              <div className='w-[34.15px] h-[34px] items-center justify-center flex relative  bg-violet-800 rounded-[28px] border border-blue-800 border-opacity-10 text-white text-xs font-medium font-Poppins leading-normal'>
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
        </div>
      </div>
    </>
  );
};

const DetailCard = ({ progress = false }) => {
  return (
    <div className=''>
      <div className='flex flex-col gap-3'>
        <div className='flex gap-3 items-center'>
          {/* Logo */}
          <div className='w-[50px] h-[50px] opacity-10 bg-blue-600 rounded-[3px]' />
          {/* Name */}
          <div className='w-[78px] h-11 flex-col justify-start items-start inline-flex'>
            <div className='text-gray-900 text-sm font-medium font-Poppins leading-snug'>
              Total Users
            </div>
            <div className='text-gray-500 text-sm font-medium font-Poppins leading-snug'>
              This week
            </div>
          </div>
        </div>

        {/* Numbers */}
        <div className='w-[154px] h-[22px] justify-start items-center gap-3 inline-flex'>
          <div className='text-gray-900 text-2xl font-semibold font-Poppins leading-snug'>
            100000
          </div>
          <div className='justify-start items-center gap-1 flex'>
            <div className='text-green-600 text-sm font-medium font-Poppins leading-snug'>
              0.39%
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        {progress && (
          <div>
            <span className='sr-only'>Loading</span>

            <span role='progressbar' className='block rounded-full bg-gray-200'>
              <span
                className='block h-1.5  rounded-full bg-indigo-600'
                style={{ width: "75%" }}
              ></span>
            </span>
          </div>
        )}
      </div>
    </div>
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
