import React, { useEffect, useState } from "react";
import lgn_icon from "../../images/Group 2323.svg";
import anmnt_icon from "../../images/notification-status.svg";
import CheckLoginStatus from "../auth/loginStatus";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../admin/hooks/useFetch";

const Landingheader = ({ loginModal, setLoginModal }) => {
  const { loginStatus, isAdmin } = CheckLoginStatus();

  const navigate = useNavigate();

  const [announcementModal, setAnnouncementModal] = useState(false);

  const { notificationLoading, notificationData, handleFetctNotifications } =
    useFetch();

  useEffect(() => {
    handleFetctNotifications("api/announcement");
  }, []);

  return (
    <>
      <div className='w-full relative min-h-[52px]  bg-[#1F1B25] light:bg-secondary flex  items-center justify-between z-50'>
        <div className=' flex  items-center justify-center ml-6  md:max-xl:ml-16 xl:ml-32'>
          <h1>👋</h1>
          <h1 className='hidden lg:block  text-white font-AnekLatin light:font-Outfit purple:font-Sora text-base purple:text-[14px] font-normal leading-normal whitespace-nowrap'>
            Hello Visitor , Please Login To Access The Library
          </h1>
          <h1 className='lg:hidden text-nowrap line-clamp-1 text-white font-AnekLatin light:font-Outfit purple:font-Sora text-base purple:text-[14px] font-normal leading-normal min-[400px]:whitespace-nowrap'>
            Hello Visitor , Please Login...
          </h1>
        </div>
        <div className='flex items-center justify-center z-50'>
          {isAdmin && (
            <Link to={"/admin"}>
              <div className=' w-16 lg:w-36 h-[52px] bg-[#000000] light:bg-btn flex  items-center justify-center mr-3 md:mr-1 hover:bg-[#0B2E78] focus:ring-4 focus:outline-none focus:ring-blue-300   '>
                <img src={lgn_icon} alt='login icon' />

                <h1 className='hidden lg:block text-white font-AnekLatin light:font-Outfit purple:font-Sora text-base purple:text-[13px] font-normal leading-5 capitalize ml-3 whitespace-nowrap '>
                  Admin
                </h1>
              </div>
            </Link>
          )}
          <div
            onClick={() => {
              if (!loginStatus) setLoginModal(true);
              else {
                navigate("/home");
              }
            }}
            className='cursor-pointer'
          >
            <div className=' w-16 lg:w-36 h-[52px] bg-[#000000] light:bg-btn flex  items-center justify-center mr-3 md:mr-1 hover:bg-[#0B2E78] focus:ring-4 focus:outline-none focus:ring-blue-300   '>
              <img src={lgn_icon} alt='login icon' />

              <h1 className='hidden lg:block text-white font-AnekLatin light:font-Outfit purple:font-Sora text-base purple:text-[13px] font-normal leading-5 capitalize ml-3 whitespace-nowrap '>
                {loginStatus ? "Logged In" : "  Login Now"}
              </h1>
            </div>
          </div>

          <div
            onMouseEnter={() => setAnnouncementModal(true)}
            onMouseLeave={() => setAnnouncementModal(false)}
            className='w-12 relative z-50 lg:w-44 h-[52px] cursor-pointer bg-[#000000] light:bg-btn flex  items-center justify-center mr-6 md:mr-20 hover:bg-[#0B2E78] focus:ring-4 focus:outline-none focus:ring-blue-300'
          >
            <img src={anmnt_icon} alt='Announcements icon' />
            <h1 className='hidden lg:block text-white font-AnekLatin light:font-Outfit purple:font-Sora text-base purple:text-[13px] font-normal leading-5 capitalize ml-3'>
              Announcements
            </h1>
            {announcementModal && (
              <AnnouncementModal
                notificationData={notificationData}
                notificationLoading={notificationLoading}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const AnnouncementModal = ({ notificationData, notificationLoading }) => {
  return (
    <div className='absolute top-[50px] w-auto space-y-2 right-0 z-50 rounded-md shadow-lg drop-shadow-2xl bg-slate-100 max-h-72 overflow-auto'>
      <ul className=''>
        {notificationLoading
          ? "Loading..."
          : notificationData && notificationData?.announcement?.length > 0
          ? notificationData?.announcement?.map((val, index) => {
              return (
                <li
                  key={index}
                  className='flex flex-col border-b-2 border-slate-400 px-4 py-3'
                >
                  <span className='font-medium grow line-clamp-2'>
                    {val.title}
                  </span>
                  <span className='font-thin text-sm line-clamp-3'>
                    {val.body}
                  </span>
                </li>
              );
            })
          : "No Announcements"}
      </ul>
    </div>
  );
};

export default Landingheader;
