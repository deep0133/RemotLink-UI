import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
// import profileIcon from "../../images/user-square.png";
import { RxAvatar } from "react-icons/rx";
import facebookicon from "../../images/Facebook.png";
import instagramicon from "../../images/Instagrm.png";
import mappin from "../../images/MapPin.png";
import xicon from "../../images/X.png";
import linkedinicon from "../../images/linkedin.png";
import generateUrl from "../admin/utils/urlGenerate";
import AccountSettings from "./Accountsettings/accountSettings";

function Profile({
  logutOutHandler,
  institutionDetails,
  domain,
  notificationData,
}) {
  const [activeTab, setActiveTab] = useState("Profileoverview");
  const [userDetails, setUserDetails] = useState("");

  const userDetailFetch = async () => {
    try {
      const domain = await generateUrl();
      const token = localStorage.getItem("access_token");

      const response = await fetch(domain + "api/user/current-user/", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await response.json();
      setUserDetails(json);
    } catch (error) {
      // console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    userDetailFetch();
  }, []);

  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (userDetails) {
      const fetchUrl = async () => {
        const url = await generateUrl();

        const imageLink = userDetails?.profile_photo
          ? url + userDetails?.profile_photo
          : null;

        setImageUrl(imageLink);
      };

      fetchUrl();
    }
  }, [userDetails]);

  return (
    <div>
      <>
        <Header
          {...{ logutOutHandler, institutionDetails, domain, notificationData }}
        />
        <div className=' flex'>
          <div
            className=' md:block hidden'
            style={{ position: "sticky", top: "0", height: "100vh" }}
          >
            <Sidebar />
          </div>
          <span className=' flex flex-col w-[100%] '>
            <span
              className=' flex items-center  sm:px-[50px]  px-3 justify-between '
              style={{
                borderBottom: "1px solid lightgray",
                height: "100px",
              }}
            >
              <div className=' flex items-center'>
                <div className='p-3 rounded-full bg-gray-100 mr-2 '>
                  {imageUrl ? (
                    <img src={imageUrl} className=' h-5 w-5' alt='profile' />
                  ) : (
                    <RxAvatar className=' h-5 w-5' />
                  )}
                </div>

                <span className=' whitespace-nowrap text-[#1F5095] font-semibold text-[15px]'>
                  My Profile
                </span>
              </div>
            </span>
            {/* web view hero image */}
            <div className='hidden sm:flex sm:px-[60px] py-8 border-b  h-[420px] sm:h-[200px] justify-between items-start bg-img'>
              <div className=' flex text-white flex-col sm:flex-row '>
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt='profilepic'
                    className=' w-[141px] h-[141px] rounded-full'
                  />
                ) : (
                  <RxAvatar className=' w-[141px] opacity-50 h-[141px] rounded-full' />
                )}
                <div className=' flex flex-col  mt-8 ml-3'>
                  <span className='mb-[6px] text-[22px] font-semibold leading-[20px]'>
                    {userDetails?.first_name || "first_name"}{" "}
                    {userDetails?.last_name || "last_name"}
                  </span>
                  <span className='mb-4 text-[15px] font-medium leading-[20px]'>
                    {userDetails?.description || "description"}
                  </span>
                  <span className=' flex  items-center'>
                    {" "}
                    <span>
                      <img src={mappin} alt='mappin' />
                    </span>
                    <span className=' ml-2'>
                      {" "}
                      {userDetails?.address || "address"}
                    </span>
                  </span>
                </div>
              </div>
              {/* <button className=' shadow shadow-slate-300 border-4 w-[90px] h-[36px] rounded-md text-[12px] font-medium bg-white text-black '>
                {" "}
                Edit Cover
              </button> */}
            </div>
            {/* mobile view profile icon and hero image*/}
            <div className='flex px-8 py-8 border-b  h-[420px] sm:h-[200px] sm:hidden justify-between items-start bg-img-mobile'>
              <div className=' flex text-white flex-col sm:flex-row  mt-5'>
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    className=' w-[141px] h-[141px]'
                    alt='profile'
                  />
                ) : (
                  <RxAvatar className=' w-[141px] h-[141px]' />
                )}
                <div className=' flex flex-col'>
                  <span className='mb-[6px] text-[22px] font-semibold leading-[20px]'>
                    {userDetails?.first_name || "first_name"}{" "}
                    {userDetails?.last_name || "last_name"}
                  </span>
                  <span className='mb-4 text-[15px] font-medium leading-[20px]'>
                    {userDetails?.description || "description"}
                  </span>
                  <span className=' flex  items-center'>
                    {" "}
                    <span>
                      <img src={mappin} alt='mappin' />
                    </span>
                    <span className=' ml-2'>
                      {" "}
                      {userDetails?.address || "address"}
                    </span>
                  </span>
                </div>
              </div>
              <button className=' shadow shadow-slate-300 border-4 w-[120px] h-[36px] rounded-md text-[12px] font-medium bg-white text-black '>
                Edit Cover
              </button>
            </div>
            <div className=' px-4  sm:px-[60px]  border-b'>
              <div className=' flex sm:w-[25%]  justify-around '>
                <div
                  onClick={() => setActiveTab("Profileoverview")}
                  className={` ${
                    activeTab === "Profileoverview"
                      ? "border-b-2 border-[#1F5095]"
                      : "text-[#454545] text-[14px] font-Poppins font-semibold opacity-[40%]"
                  } pt-8 pb-3 pl-3 pr-3  text-[#1F5095] text-[14px] font-Poppins font-semibold cursor-pointer whitespace-nowrap`}
                >
                  Profile Overview
                </div>
                <div
                  className={` ${
                    activeTab === "Accountsettings"
                      ? "border-b-2 border-[#1F5095]"
                      : "text-[#454545] text-[14px] font-Poppins font-semibold opacity-[40%]"
                  } pt-8 pb-3 pl-3 pr-3  text-[#1F5095] text-[14px] font-Poppins font-semibold cursor-pointer whitespace-nowrap`}
                  onClick={() => setActiveTab("Accountsettings")}
                >
                  Account Settings
                </div>
              </div>
            </div>
            {activeTab === "Profileoverview" && (
              <div className='px-4 sm:px-[50px] py-6'>
                <div className=' flex  justify-between sm:flex-row flex-col'>
                  <div className=' border-2 p-4 sm:py-6 sm:pl-10 sm:pr-24  sm:w-[50%] sm:mr-4 rounded-lg bg-[#F9F9FE] mb-4 sm:mb-0'>
                    <h1 className=' text-[#1F5095] text-[18px]  leading-[20px]  font-semibold mb-6'>
                      Personal Details
                    </h1>
                    <div className=' flex justify-between flex-wrap'>
                      <div className='flex flex-col'>
                        <span className=' text-[14px] font-medium text-[#A0A0A0] font-Poppins'>
                          Name
                        </span>
                        <span className='text-[14px] font-medium text-[#292D32] font-Poppins leading-[24px] sm:mt-3 mt-2'>
                          {userDetails?.first_name}
                          {"first_name "}
                          {userDetails?.last_name || "last_name"}
                        </span>
                      </div>
                      <div className='flex flex-col'>
                        <span className=' text-[14px] font-medium text-[#A0A0A0] font-Poppins'>
                          {" "}
                          Email
                        </span>
                        <span className='text-[14px] font-medium text-[#292D32] font-Poppins leading-[24px] sm:mt-3 mt-2'>
                          {userDetails?.email || "email"}
                        </span>
                      </div>
                      <div className='flex flex-col mt-4 sm:mt-0'>
                        <span className=' text-[14px] font-medium text-[#A0A0A0] font-Poppins'>
                          Phone number
                        </span>
                        <span className='text-[14px] font-medium text-[#292D32] font-Poppins leading-[24px] sm:mt-3 mt-2'>
                          {userDetails?.phone_number || "phone_number"}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* academic details for web view  */}
                  <div className='hidden border-2 sm:block borderr p-4 sm:py-6 sm:pl-10 sm:pr-24  sm:w-[50%] sm:mr-4 rounded-lg bg-[#F9F9FE]'>
                    <h1 className=' text-[#1F5095] text-[18px]  leading-[20px]  font-semibold mb-6'>
                      Academic Details
                    </h1>
                    <div className='flex justify-between flex-wrap'>
                      <div className='flex flex-col mb-4'>
                        <span className='text-[14px] font-medium text-[#A0A0A0] font-Poppins'>
                          College
                        </span>
                        <span className='text-[14px] font-medium text-[#292D32] font-Poppins leading-[24px] sm:mt-3 mt-2'>
                          {userDetails?.institution?.name || "institution_name"}
                        </span>
                      </div>
                      <div className='flex flex-col mb-4'>
                        <span className='text-[14px] font-medium text-[#A0A0A0] font-Poppins'>
                          Batch Year
                        </span>
                        <span className='text-[14px] font-medium text-[#292D32] font-Poppins leading-[24px] sm:mt-3 mt-2 '>
                          {userDetails?.batch || "batch"}
                        </span>
                      </div>
                      <div className='flex flex-col'>
                        <span className='text-[14px] font-medium text-[#A0A0A0] font-Poppins'>
                          Course Name
                        </span>
                        <span className='text-[14px] font-medium text-[#292D32] font-Poppins leading-[24px] mt-2'>
                          {userDetails?.course || "-"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/*  academic details for mobile view*/}
                  <div className='sm:hidden border-2 grid grid-cols-1 sm:grid-cols-2 gap-1 borderr h-[237px] sm:h-[186px] p-4 sm:py-6 sm:pl-10 sm:pr-24 sm:w-[50%] sm:mr-4 rounded-lg bg-[#F9F9FE]'>
                    <div className='col-span-2 mb-6'>
                      <h1 className='text-[#1F5095] text-[18px] leading-[20px] font-semibold'>
                        Academic Details
                      </h1>
                    </div>
                    <div className='flex flex-col mb-4'>
                      <span className='text-[14px] font-medium text-[#A0A0A0] font-Poppins'>
                        College
                      </span>
                      <span className='text-[14px] font-medium text-[#292D32] font-Poppins leading-[24px] mt-2'>
                        {userDetails?.institution?.name || "institution_name"}
                      </span>
                    </div>
                    <div className='flex flex-col mb-4 mr-[43px]'>
                      <span className='text-[14px] font-medium text-[#A0A0A0] font-Poppins'>
                        Batch Year
                      </span>
                      <span className='text-[14px] font-medium text-[#292D32] font-Poppins leading-[24px] mt-2 '>
                        {userDetails?.batch || "batch"}
                      </span>
                    </div>
                    <div className='flex flex-col col-span-2'>
                      <span className='text-[14px] font-medium text-[#A0A0A0] font-Poppins'>
                        Course Name
                      </span>
                      <span className='text-[14px] font-medium text-[#292D32] font-Poppins leading-[24px] mt-2'>
                        {userDetails?.course || "course"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className=' flex border-2 justify-between mt-4 sm:flex-row flex-col '>
                  <div className=' border sm:py-6 sm:pl-10 sm:pr-24 p-4 sm:w-[50%] sm:mr-4 rounded-lg bg-[#F9F9FE]'>
                    <h1 className=' text-[#1F5095] text-[18px]  leading-[20px]  font-semibold mb-6'>
                      Location and Address
                    </h1>
                    <div className=' flex justify-between'>
                      <div className='flex flex-col'>
                        <span className=' text-[14px] font-medium text-[#A0A0A0] font-Poppins'>
                          Address
                        </span>
                        <span className='text-[14px] font-medium text-[#292D32] font-Poppins leading-[24px] mt-3'>
                          {userDetails?.address || "address"}
                        </span>
                        <span className=' text-[14px] font-medium text-[#A0A0A0] font-Poppins mt-4'>
                          State and Country
                        </span>
                        <span className='text-[14px] font-medium text-[#292D32] font-Poppins leading-[24px] mt-3'>
                          {(userDetails?.state || "-") +
                            " " +
                            (userDetails?.country || "-")}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* social media icon */}
                  <div className='mt-4 sm:mt-0 border  py-6 p-4 sm:pl-10  sm:w-[50%] sm:mr-4 rounded-lg bg-[#F9F9FE]'>
                    <h1 className=' text-[#1F5095] text-[18px]  leading-[20px]  font-semibold mb-6'>
                      Social Media Handles
                    </h1>
                    <div className='grid lg:grid-cols-2 gap-5 pr-5'>
                      <div className='flex items-center'>
                        <div className='border rounded-full flex justify-center items-center  h-[39px] w-[37px] mr-4'>
                          <img
                            src={instagramicon}
                            alt='socialmedia-logo'
                            className='h-[20px] w-[20px] '
                          />
                        </div>
                        <div className='w-full'>
                          <div className='h-[44px] w-full grow border rounded-md  text-left px-6 py-2 text-[#8C8C8C] text-[14px]'>
                            {userDetails?.instagram || "-"}
                          </div>
                        </div>
                      </div>
                      <div className='flex items-center'>
                        <div className=' border rounded-full flex justify-center items-center  h-[39px] w-[37px] mr-4'>
                          <img
                            src={xicon}
                            alt='socialmedia-logo'
                            className='h-[20px] w-[20px] '
                          />
                        </div>
                        <div className='w-full'>
                          <div className=' h-[44px] grow border rounded-md text-left px-6 py-2 text-[#8C8C8C] text-[14px]'>
                            {userDetails?.twitter || "-"}
                          </div>
                        </div>
                      </div>
                      <div className='flex items-center'>
                        <div className='border rounded-full flex justify-center items-center  h-[39px] w-[37px] mr-4'>
                          <img
                            src={linkedinicon}
                            alt='socialmedia-logo'
                            className='h-[20px] w-[20px] '
                          />
                        </div>
                        <div className='w-full h-[44px] border rounded-md text-left px-6 py-2 text-[#8C8C8C] text-[14px]'>
                          {userDetails?.linkedin || "-"}
                        </div>
                      </div>
                      <div className='flex items-center'>
                        <div className=' border rounded-full flex justify-center items-center  h-[39px] w-[37px] mr-4'>
                          <img
                            src={facebookicon}
                            alt='socialmedia-logo'
                            className='h-[20px] w-[20px] '
                          />
                        </div>
                        <div className='w-full h-[44px] border rounded-md text-left px-6 py-2 text-[#8C8C8C] text-[14px]'>
                          {userDetails?.facebook || "-"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "Accountsettings" && (
              <>
                <div className='block px-4 sm:px-[50px] py-10'>
                  <AccountSettings userDetails={userDetails} />
                </div>
              </>
            )}
          </span>
        </div>
        <Footer {...{ institutionDetails, domain }} />
      </>
    </div>
  );
}

export default Profile;
