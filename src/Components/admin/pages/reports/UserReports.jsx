import React from "react";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import Navigation from "../../components/Dashboard/RightCommonComponents/Navigation";
import Hero from "../../components/category/Hero";
import {
  CalenderIcon,
  ChevlonIcon,
  ExportIcon,
  FilterIcon,
  ReportIcon,
  SortIcon,
} from "../../assets/constants";
import { ReportsRightMenu } from "../../data";
import { formatDate } from "../../utils/formateData";
import { useNavigate } from "react-router-dom";

export default function UserReports({ data }) {
  const navigate = useNavigate();

  const openLogs = (id) => {
    navigate("/admin/reports/user/login-logs/" + id);
  };
  return (
    <>
      <Header icon={<ReportIcon />} title={"Reports"} />
      <Navigation data={ReportsRightMenu} />
      <Hero
        name={"User Reports"}
        description={`Manage the user reports here.`}
        icon={<ExportIcon />}
        btnText={`Export`}
        btnLink={""}
      />
      <Buttons />
      <UserLogList data={data} openLogs={openLogs} />
    </>
  );
}

const Buttons = () => {
  return (
    <div className='flex justify-end gap-5'>
      <button
        style={{ border: "1px solid rgba(34, 31, 185, 0.14)" }}
        className='bg-white gap-2 flex flex-row shrink-0 items-center rounded-[5px] px-3 py-2'
      >
        <CalenderIcon />
        <div>
          <span className='text-black text-opacity-25 text-[13px] font-medium font-Poppins leading-normal'>
            From :{" "}
          </span>
          <span className='text-black text-[13px] font-medium font-Poppins leading-normal'>
            08/05/2023{" "}
          </span>
        </div>
        <div className='w-1 border-l h-full'></div>
        <div>
          <span className='text-black text-opacity-25 text-[13px] font-medium font-Poppins leading-normal'>
            To :{" "}
          </span>
          <span className='text-black text-[13px] font-medium font-Poppins leading-normal'>
            08/05/2023{" "}
          </span>
        </div>
      </button>
      <button
        style={{ border: "1px solid rgba(34, 31, 185, 0.14)" }}
        className='bg-white gap-2 flex flex-row shrink-0 items-center rounded-[5px] px-3 py-2'
      >
        <SortIcon />
        <p className='font-Poppins text-[13px] font-medium leading-6'>
          Sort By
        </p>
        <div className='mt-0.5'>
          <ChevlonIcon />
        </div>
      </button>

      <button
        style={{ border: "1px solid rgba(34, 31, 185, 0.14)" }}
        className='bg-white gap-2 flex flex-row shrink-0 items-center rounded-[5px] px-3 py-2'
      >
        <FilterIcon />
        <p className='font-Poppins text-[13px] font-medium leading-6'>
          Filter By
        </p>
        <div className='mt-0.5'>
          <ChevlonIcon />
        </div>
      </button>
    </div>
  );
};

const UserLogList = ({ data, openLogs }) => {
  // "/admin/reports/user/logs",
  return (
    <div
      style={{
        border: "1px solid rgba(34, 31, 185, 0.14)",
        boxShadow: "0px 13px 35px 1px rgba(112, 144, 176, 0.10)",
      }}
      className='rounded-lg p-3 mt-5 ml-3 '
    >
      <div className='row-1 grid grid-cols-11 w-full px-2 pb-5 gap-3'>
        <div className='text-slate-400 col-span-1 text-sm font-medium font-Poppins leading-normal'>
          Number
        </div>
        <div className='text-slate-400 col-span-2 text-sm font-medium font-Poppins leading-normal'>
          Name
        </div>
        <div className='text-slate-400 -ml-0.5 line-clamp-1 col-span-2 text-sm font-medium font-Poppins leading-normal'>
          Email
        </div>
        <div className='text-slate-400 col-span-2 -ml-1 text-sm font-medium font-Poppins leading-normal'>
          Session Started on
        </div>
        <div className='text-slate-400 col-span-2 -ml-1.5 text-sm font-medium font-Poppins leading-normal'>
          Session Ended on
        </div>
        <div className='text-slate-400 text-center col-span-2 text-sm -ml-1.5 font-medium font-Poppins leading-normal'>
          IP Address
        </div>
      </div>
      <div className='card-container flex-1 w-full max-h-[380px] overflow-auto'>
        {data?.length > 0
          ? data.map((val, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    openLogs(val.id);
                  }}
                  className='card cursor-pointer list flex-1 flex p-2'
                >
                  <div className='grid grid-cols-11 w-full gap-3'>
                    <div className='text-indigo-900 col-span-1 text-sm font-medium font-Poppins leading-7'>
                      {index + 1}
                    </div>
                    <div className='text-indigo-900 line-clamp-1 col-span-2 text-sm font-medium font-Poppins leading-7'>
                      {val.user
                        ? val.user.first_name
                          ? val.user.first_name
                          : "---"
                        : "---"}{" "}
                      {val.user
                        ? val.user.last_name
                          ? val.user.last_name
                          : ""
                        : ""}
                    </div>
                    <div className='text-indigo-900 line-clamp-1 col-span-2 flex-1 text-sm font-medium font-Poppins leading-7'>
                      {val.user.email ? val.user.email : "---"}
                    </div>
                    <div className='text-indigo-900 col-span-2 line-clamp-1 flex-1 text-sm font-medium font-Poppins leading-7'>
                      {val.sessions.length >= 0 && val.sessions
                        ? val.sessions[0].login
                          ? formatDate(val.sessions[0].login)
                          : "---"
                        : "---"}
                    </div>
                    <div className='text-indigo-900 col-span-2 line-clamp-1 flex-1 text-sm font-medium font-Poppins leading-7'>
                      {val.sessions && val.sessions.length >= 0
                        ? val.sessions[0].logout
                          ? formatDate(val.sessions[0].logout)
                          : "---"
                        : "---"}
                    </div>
                    <div className='text-indigo-900  line-clamp-1 text-center col-span-2 flex-1 text-sm font-medium font-Poppins leading-7'>
                      {val.sessions
                        ? val.sessions[0].ip
                          ? val.sessions[0].ip
                          : "---"
                        : "---"}
                    </div>
                  </div>
                </div>
              );
            })
          : "No Data Found"}
      </div>
    </div>
  );
};
