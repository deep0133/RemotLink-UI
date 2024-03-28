import {
  CalenderIcon,
  ChevlonIcon,
  DeleteIcon,
  ExportIcon,
  FilterIcon,
  ReportIcon,
  SortIcon,
} from "../../assets/constants";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import Navigation from "../../components/Dashboard/RightCommonComponents/Navigation";
import Hero from "../../components/category/Hero";
import { ReportsRightMenu, SiteUsageListData } from "../../data";

export default function SiteUsages() {
  return (
    <>
      <Header icon={<ReportIcon />} title={"Reports"} />
      <Navigation data={ReportsRightMenu} />
      <Hero
        name={"Site Usage Reports"}
        description={`Manage the site usage reports here.`}
        icon={<ExportIcon />}
        btnText={`Export`}
        btnLink={""}
      />
      <Buttons />
      <SiteUsageList data={SiteUsageListData} />
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

const SiteUsageList = ({ data }) => {
  return (
    <div
      style={{
        border: "1px solid rgba(34, 31, 185, 0.14)",
        boxShadow: "0px 13px 35px 1px rgba(112, 144, 176, 0.10)",
      }}
      className='rounded-lg p-3 mt-5 ml-3 '
    >
      <div className='row-1 grid grid-cols-12 w-full px-2 pb-5'>
        <div className='text-slate-400 col-span-1 text-sm font-medium font-Poppins leading-normal'>
          Number
        </div>
        <div className='text-slate-400 col-span-2 text-sm font-medium font-Poppins leading-normal'>
          Site
        </div>
        <div className='text-slate-400 -ml-0.5 col-span-3 text-sm font-medium font-Poppins leading-normal'>
          Site URL
        </div>
        <div className='text-slate-400 col-span-2 -ml-1 text-sm font-medium font-Poppins leading-normal'>
          Category
        </div>
        <div className='text-slate-400 text-center col-span-2 -ml-1.5 text-sm font-medium font-Poppins leading-normal'>
          Access Count
        </div>
        <div className='text-slate-400 text-center  col-span-2 text-sm -ml-1.5 font-medium font-Poppins leading-normal'>
          Action
        </div>
      </div>
      <div className='card-container flex-1 w-full max-h-[380px] overflow-auto'>
        {data?.length > 0
          ? data.map((val, index) => {
              return (
                <div key={index} className='card list flex-1 flex p-2'>
                  <div className='grid grid-cols-12 w-full '>
                    <div className='text-indigo-900 col-span-1 text-sm font-medium font-Poppins leading-7'>
                      {index + 1}
                    </div>
                    <div className='text-indigo-900 col-span-2 text-sm font-medium font-Poppins leading-7'>
                      {val.site}
                    </div>
                    <div className='text-indigo-900 col-span-3 flex-1 text-sm font-medium font-Poppins leading-7'>
                      {val.siteUrl}
                    </div>
                    <div className='text-indigo-900 col-span-2 flex-1 text-sm font-medium font-Poppins leading-7'>
                      {val.category}
                    </div>

                    <div className='flex justify-center col-span-2'>
                      <div className=' px-2 py-0.5 w-8 h-8 shrink-0 bg-indigo-500 bg-opacity-10 rounded-2xl justify-center items-center inline-flex'>
                        <div className='text-center text-indigo-500 text-xs font-medium font-Inter leading-[18px]'>
                          {val.accessCount}
                        </div>
                      </div>
                    </div>
                    <div className='text-indigo-900 col-span-2 flex-1 text-sm font-medium font-Poppins leading-7'>
                      <div className=' mx-auto w-fit'>
                        <DeleteIcon />
                      </div>
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
