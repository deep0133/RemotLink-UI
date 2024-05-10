import React, { useEffect } from "react";
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import profileIcon from "../../images/user-square.png";
import profilepic from "../../images/Profilepic.png";
import mappin from "../../images/MapPin.png";
import facebookicon from "../../images/Facebook.png";
import instagramicon from "../../images/Instagrm.png";
import xicon from "../../images/X.png";
import linkedinicon from "../../images/linkedin.png";
import AccountSettings from "./Accountsettings/accountSettings";
import Mobileaccountsettings from "../mobile/mobileaccountsettings";
import generateUrl from "../admin/utils/urlGenerate";

function Profile({ logutOutHandler, institutionDetails, domain }) {
  const [activeTab, setActiveTab] = useState("Profileoverview");
  const [userDetails, setUserDetails] = useState("");

  const userDetailFetch = async () => {
    try {
      const domain = await generateUrl();
      const token = localStorage.getItem("access_token");

      const response = await fetch(domain + "api/user/current-user/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await response.json();
      setUserDetails(json);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    userDetailFetch();
  }, []);

  return (
    <div>
      <>
        <Header {...{ logutOutHandler, institutionDetails, domain }} />
        <div className=' flex'>
          <span className=' md:block hidden'>
            <Sidebar />
          </span>
          <span className=' flex flex-col w-[100%] '>
            <span
              className=' flex items-center  sm:px-[50px]  px-3 justify-between '
              style={{
                borderBottom: "1px solid lightgray",
                height: "100px",
                //   background: "grey",
              }}
            >
              <div className=' flex items-center'>
                <div
                  className=' p-3 rounded-full   bg-gray-100 mr-2 '
                  //   style={{ border: "1px solid grey" }}
                >
                  <img
                    src={profileIcon}
                    className=' h-5 w-5 '
                    alt='book-icon'
                  />
                </div>

                <span className=' whitespace-nowrap text-[#1F5095] font-semibold text-[15px]'>
                  My Profile
                </span>
              </div>
            </span>
            {/* web view hero image */}
            <div className='hidden sm:flex sm:px-[60px] py-8 border-b  h-[420px] sm:h-[200px] justify-between items-start bg-img'>
              <div className=' flex text-white flex-col sm:flex-row '>
                <img
                  src={profilepic}
                  alt='profilepic'
                  className=' w-[141px] h-[141px]'
                />
                <div className=' flex flex-col  mt-8'>
                  <span className='mb-[6px] text-[22px] font-semibold leading-[20px]'>
                    {userDetails?.first_name} {userDetails?.last_name}
                  </span>
                  <span className='mb-4 text-[15px] font-medium leading-[20px]'>
                    {userDetails?.description}
                  </span>
                  <span className=' flex  items-center'>
                    {" "}
                    <span>
                      <img src={mappin} alt='mappin' />
                    </span>
                    <span className=' ml-2'> {userDetails?.address}</span>
                  </span>
                </div>
              </div>
              <button className=' shadow shadow-slate-300 border-4 w-[90px] h-[36px] rounded-md text-[12px] font-medium bg-white text-black '>
                {" "}
                Edit Cover
              </button>
            </div>
            {/* mobile view profile icon and hero image*/}
            <div className='flex px-8 py-8 border-b  h-[420px] sm:h-[200px] sm:hidden justify-between items-start bg-img-mobile'>
              <div className=' flex text-white flex-col sm:flex-row  mt-5'>
                <img
                  src={profilepic}
                  alt='profilepic'
                  className=' w-[141px] h-[141px]'
                />
                <div className=' flex flex-col'>
                  <span className='mb-[6px] text-[22px] font-semibold leading-[20px]'>
                    {userDetails?.first_name} {userDetails?.last_name}
                  </span>
                  <span className='mb-4 text-[15px] font-medium leading-[20px]'>
                    {userDetails?.description}
                  </span>
                  <span className=' flex  items-center'>
                    {" "}
                    <span>
                      <img src={mappin} alt='mappin' />
                    </span>
                    <span className=' ml-2'> {userDetails?.address}</span>
                  </span>
                </div>
              </div>
              <button className=' shadow shadow-slate-300 border-4 w-[120px] h-[36px] rounded-md text-[12px] font-medium bg-white text-black '>
                {" "}
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
                          {userDetails?.first_name} {userDetails?.last_name}
                        </span>
                      </div>
                      <div className='flex flex-col'>
                        <span className=' text-[14px] font-medium text-[#A0A0A0] font-Poppins'>
                          {" "}
                          Email
                        </span>
                        <span className='text-[14px] font-medium text-[#292D32] font-Poppins leading-[24px] sm:mt-3 mt-2'>
                          {userDetails?.email}
                        </span>
                      </div>
                      <div className='flex flex-col mt-4 sm:mt-0'>
                        <span className=' text-[14px] font-medium text-[#A0A0A0] font-Poppins'>
                          Phone number
                        </span>
                        <span className='text-[14px] font-medium text-[#292D32] font-Poppins leading-[24px] sm:mt-3 mt-2'>
                          {userDetails?.phone_number}
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
                          {userDetails?.institution?.name}
                        </span>
                      </div>
                      <div className='flex flex-col mb-4'>
                        <span className='text-[14px] font-medium text-[#A0A0A0] font-Poppins'>
                          Batch Year
                        </span>
                        <span className='text-[14px] font-medium text-[#292D32] font-Poppins leading-[24px] sm:mt-3 mt-2 '>
                          {userDetails?.batch || "-"}
                        </span>
                      </div>
                      <div className='flex flex-col'>
                        <span className='text-[14px] font-medium text-[#A0A0A0] font-Poppins'>
                          Course Name
                        </span>
                        <span className='text-[14px] font-medium text-[#292D32] font-Poppins leading-[24px] mt-2'>
                          {userDetails?.course}
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
                        {userDetails?.institution?.name || "-"}
                      </span>
                    </div>
                    <div className='flex flex-col mb-4 mr-[43px]'>
                      <span className='text-[14px] font-medium text-[#A0A0A0] font-Poppins'>
                        Batch Year
                      </span>
                      <span className='text-[14px] font-medium text-[#292D32] font-Poppins leading-[24px] mt-2 '>
                        {userDetails?.batch || "-"}
                      </span>
                    </div>
                    <div className='flex flex-col col-span-2'>
                      <span className='text-[14px] font-medium text-[#A0A0A0] font-Poppins'>
                        Course Name
                      </span>
                      <span className='text-[14px] font-medium text-[#292D32] font-Poppins leading-[24px] mt-2'>
                        {userDetails?.course || "-"}
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
                          {userDetails?.address}
                        </span>
                        <span className=' text-[14px] font-medium text-[#A0A0A0] font-Poppins mt-4'>
                          State and Country
                        </span>
                        <span className='text-[14px] font-medium text-[#292D32] font-Poppins leading-[24px] mt-3'>
                          {userDetails?.country + userDetails?.state || "-"}
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
                <div className=' hidden sm:block px-[50px] py-10'>
                  <AccountSettings />
                </div>
                <div className='sm:hidden block px-4 py-10'>
                  <Mobileaccountsettings />
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
