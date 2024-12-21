import Header from "../../components/Dashboard/RightCommonComponents/Header";
import Navigation from "../../components/Dashboard/RightCommonComponents/Navigation";
import Hero from "../../components/category/Hero";
import { ExportIcon, ReportIcon } from "../../assets/constants";
import { ReportsRightMenu } from "../../data";
import { formatDate } from "../../utils/formateData";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loader/Loader";

import Buttons from "../../components/reports/Buttons";
import Pagination from "../../components/Pagination";
export default function UserReports({
  data,
  fetchLoading,
  onPageChange,
  fromTo,
  filterHandler,
}) {
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
        btnLink={"api/report/user/?excel"}
        downloadLink={true}
      />
      <Buttons
        fromTo={fromTo}
        filterHandler={filterHandler}
        type1={"user__first_name"}
        type2={"sessions__login"}
      />

      <UserLogList
        data={data}
        openLogs={openLogs}
        fetchLoading={fetchLoading}
      />
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

const UserLogList = ({ data, openLogs, fetchLoading }) => {
  return (
    <div
      style={{
        border: "1px solid rgba(34, 31, 185, 0.14)",
        boxShadow: "0px 13px 35px 1px rgba(112, 144, 176, 0.10)",
      }}
      className='rounded-lg p-3 mt-5 ml-3 '
    >
      <div className='row-1 grid grid-cols-12 w-full px-2 pb-5 gap-3'>
        <div className='text-slate-400 col-span-1 text-sm font-medium font-Poppins leading-normal'>
          Number
        </div>
        <div className='text-slate-400 line-clamp-1 col-span-2 text-sm font-medium font-Poppins leading-normal'>
          Name
        </div>
        <div className='text-slate-400 -ml-0.5 line-clamp-1 col-span-2 text-sm font-medium font-Poppins leading-normal'>
          Email
        </div>
        <div className='text-slate-400 col-span-1 -ml-1 text-sm font-medium font-Poppins leading-normal'>
          No. of Session
        </div>
        <div className='text-slate-400 col-span-2 -ml-1 text-sm font-medium font-Poppins leading-normal'>
          Session Started on
        </div>
        <div className='text-slate-400 col-span-2 -ml-1.5 text-sm font-medium font-Poppins leading-normal'>
          Session Ended on
        </div>
        <div className='text-slate-400 text-center col-span-2 text-sm -ml-1.5 font-medium font-Poppins leading-normal'>
          Last Session IP
        </div>
      </div>
      <div className='card-container w-full max-h-[380px] overflow-auto'>
        {!fetchLoading ? (
          data && data.length > 0 ? (
            data.map((val, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    openLogs(val.id);
                  }}
                  className='card cursor-pointer list flex-1 flex p-2'
                >
                  <div className='grid grid-cols-12 w-full gap-3'>
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
                    <div className='text-indigo-900 line-clamp-1 col-span-1 flex-1 text-sm font-medium font-Poppins leading-7'>
                      {val.sessions.length > 0 ? val.sessions.length : "-"}
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
          ) : (
            <div className='text-lg p-3'> No Data Found</div>
          )
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};
