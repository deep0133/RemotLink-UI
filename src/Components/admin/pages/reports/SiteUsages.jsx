import { DeleteIcon, ExportIcon, ReportIcon } from "../../assets/constants";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import Navigation from "../../components/Dashboard/RightCommonComponents/Navigation";
import Pagination from "../../components/Pagination";
import Hero from "../../components/category/Hero";
import Buttons from "../../components/reports/Buttons";
import { ReportsRightMenu } from "../../data";

export default function SiteUsages({
  data,
  onPageChange,
  fromTo,
  filterHandler,
}) {
  return (
    <>
      <Header icon={<ReportIcon />} title={"Reports"} />
      <Navigation data={ReportsRightMenu} />
      <Hero
        name={"Site Usage Reports"}
        description={`Manage the site usage reports here.`}
        icon={<ExportIcon />}
        btnText={`Export`}
        btnLink={"api/report/site/?excel"}
        downloadLink={true}
      />
      <Buttons
        fromTo={fromTo}
        filterHandler={filterHandler}
        type1={"site__name"}
        type2={"access_count"}
      />
      <SiteUsageList data={data} />
      {data && data.count > 0 && (
        <Pagination
          previousLink={data && data.previous ? data.previous : null}
          nextLink={data && data.next ? data.next : null}
          totalItems={data && data.count}
          itemsPerPage={10}
          onPageChange={onPageChange}
        />
      )}
    </>
  );
}

const SiteUsageList = ({ data }) => {
  return (
    <div
      style={{
        border: "1px solid rgba(34, 31, 185, 0.14)",
        boxShadow: "0px 13px 35px 1px rgba(112, 144, 176, 0.10)",
      }}
      className='rounded-lg p-3 mt-5 ml-3 '
    >
      <div className='row-1 grid grid-cols-12 gap-5 w-full px-2 pb-5'>
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
        {data && data.results?.length > 0
          ? data.results.map((val, index) => {
              return (
                <div key={index} className='card list flex-1 flex p-2'>
                  <div className='grid grid-cols-12 gap-5 w-full '>
                    <div className='text-indigo-900 col-span-1 line-clamp-1 text-sm font-medium font-Poppins leading-7'>
                      {index + 1}
                    </div>
                    <div className='text-indigo-900 inline text-nowrap line-clamp-1 col-span-2 text-sm font-medium font-Poppins leading-7'>
                      {val.site__name}
                    </div>
                    <div className='text-indigo-900 line-clamp-1 text-nowrap col-span-3 flex-1 text-sm font-medium font-Poppins leading-7'>
                      {val.site__base_url}
                    </div>
                    <div className='text-indigo-900 line-clamp-1 text-nowrap col-span-2 flex-1 text-sm font-medium font-Poppins leading-7'>
                      {val.site__category__name
                        ? val.site__category__name
                        : "---"}
                    </div>

                    <div className='flex justify-center col-span-2'>
                      <div className=' px-2 py-0.5 w-10 h-10 shrink-0 bg-indigo-500 bg-opacity-10 rounded-full justify-center items-center inline-flex'>
                        <div className='text-center line-clamp-1 flex-shrink-0 text-indigo-500 text-xs font-medium font-Inter leading-[18px]'>
                          {val.access_count}
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
