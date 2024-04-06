import { useEffect } from "react";
import { ExportIcon, ReportIcon } from "../../assets/constants";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import Navigation from "../../components/Dashboard/RightCommonComponents/Navigation";
import Hero from "../../components/category/Hero";
import { ReportsRightMenu } from "../../data";
import useFetch from "../../hooks/useFetch";
import { formatDate } from "../../utils/formateData";
import Loading from "../../components/Loader/Loader";
export default function UserLogs() {
  const { loginLogsLoading, loginLogsData, handleFetctLoginLogs } = useFetch();

  useEffect(() => {
    const path = window.location.pathname.split("/");
    const id = path[path.length - 1];

    const apiUrl = `api/report/login-log/${id}`;
    handleFetctLoginLogs(apiUrl);
  }, []);

  return (
    <>
      <Header icon={<ReportIcon />} title={"User Logs"} subTitle={"Reports"} />
      <Navigation data={ReportsRightMenu} />
      <Hero
        name={"User Login Logs"}
        description={`Manage the user logs here.`}
        icon={<ExportIcon />}
        btnText={`Export`}
        btnLink={"api/report/login-log/2/?excel"}
        downloadLink={true}
      />
      <div className='name-email ml-3 opacity-75'>
        <h3 className='font-Poppins text-sm '>
          Name : {loginLogsData && loginLogsData.user?.first_name}{" "}
          {loginLogsData && loginLogsData.user?.last_name}
        </h3>
        <h3 className='font-Poppins text-sm '>
          Email : {loginLogsData && loginLogsData.user?.email}
        </h3>
      </div>
      <UserLogList
        data={loginLogsData}
        path={""}
        fetchLoading={loginLogsLoading}
      />
    </>
  );
}
const UserLogList = ({ data, fetchLoading }) => {
  return (
    <div
      style={{
        border: "1px solid rgba(34, 31, 185, 0.14)",
        boxShadow: "0px 13px 35px 1px rgba(112, 144, 176, 0.10)",
      }}
      className='rounded-lg p-3 mt-5 ml-3 '
    >
      <div className='row-1 grid grid-cols-10 w-full px-2 pb-5'>
        <div className='text-slate-400 col-span-1 text-sm font-medium font-Poppins leading-normal'>
          Number
        </div>
        <div className='text-slate-400 col-span-3 text-sm font-medium font-Poppins leading-normal'>
          Session Started on
        </div>
        <div className='text-slate-400 -ml-0.5 col-span-3 text-sm font-medium font-Poppins leading-normal'>
          Session Ended on
        </div>
        <div className='text-slate-400 col-span-3 -ml-1 text-sm font-medium font-Poppins leading-normal'>
          IP Address
        </div>
      </div>
      <div className='card-container flex-1 w-full max-h-[380px] overflow-auto'>
        {!fetchLoading ? (
          data && data.sessions?.length > 0 ? (
            data.sessions.map((session, index) => {
              return (
                <div key={index} className='card list flex-1 flex p-2'>
                  <div className='grid grid-cols-10 w-full '>
                    <div className='text-indigo-900 col-span-1 text-sm font-medium font-Poppins leading-7'>
                      {index + 1}
                    </div>
                    <div className='text-indigo-900 col-span-3 flex-1 text-sm font-medium font-Poppins leading-7'>
                      {session.login
                        ? session.login
                          ? formatDate(session.login)
                          : "---"
                        : "---"}
                    </div>
                    <div className='text-indigo-900 col-span-3 flex-1 text-sm font-medium font-Poppins leading-7'>
                      {session.logout
                        ? session.logout
                          ? formatDate(session.logout)
                          : "---"
                        : "---"}
                    </div>
                    <div className='text-indigo-900 col-span-3 text-sm font-medium font-Poppins leading-7'>
                      {session.ip}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className='text-lg p-3'>No Data Found</div>
          )
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};
