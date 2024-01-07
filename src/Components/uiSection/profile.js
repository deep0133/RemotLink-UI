import React from "react";
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
import AccountSettings from "../uiGroup/accountSettings";

function Profile() {
  const [activeTab, setActiveTab] = useState("Profileoverview");
  return (
    <div>
      <>
        <Header />
        <div className=" flex">
          <Sidebar />
          <span className=" flex flex-col w-[100%] ">
            <span
              className=" flex items-center  sm:px-[50px]  px-3 justify-between "
              style={{
                borderBottom: "1px solid lightgray",
                height: "100px",
                //   background: "grey",
              }}
            >
              <div className=" flex items-center">
                <div
                  className=" p-3 rounded-full   bg-gray-100 mr-2 "
                  //   style={{ border: "1px solid grey" }}
                >
                  <img
                    src={profileIcon}
                    className=" h-5 w-5 "
                    alt="book-icon"
                  />
                </div>

                <span className=" whitespace-nowrap text-[#1F5095] font-semibold text-[15px]">
                  My Profile
                </span>
              </div>
            </span>
            <div className="px-[60px] py-8 border-b   h-[200px] flex justify-between items-start bg-img">
              <div className=" flex text-white ">
                <img src={profilepic} alt="profilepic" />
                <div className=" flex flex-col  mt-8">
                  <span className="mb-[6px] text-[22px] font-semibold leading-[20px]">
                    Sushant Jadhav
                  </span>
                  <span className="mb-4 text-[15px] font-medium leading-[20px]">
                    Write a description regardng you anything you can write
                  </span>
                  <span className=" flex  items-center">
                    {" "}
                    <span>
                      <img src={mappin} alt="mappin" />
                    </span>
                    <span className=" ml-2"> Maharashtra , India</span>
                  </span>
                </div>
              </div>
              <button className=" border-[#314FD3] border-4 w-[90px] h-[36px] rounded-md text-[12px] font-medium bg-white text-black ">
                {" "}
                Edit Cover
              </button>
            </div>
            <div className="   px-[60px]  border-b">
              <div className=" flex w-[25%]  justify-around ">
                <div
                  onClick={() => setActiveTab("Profileoverview")}
                  className={` ${
                    activeTab == "Profileoverview"
                      ? "border-b-2 border-[#1F5095]"
                      : "text-[#454545] text-[14px] font-Poppins font-semibold opacity-[40%]"
                  } pt-8 pb-3 pl-3 pr-3  text-[#1F5095] text-[14px] font-Poppins font-semibold cursor-pointer`}
                >
                  Profile Overview
                </div>

                <div
                  className={` ${
                    activeTab == "Accountsettings"
                      ? "border-b-2 border-[#1F5095]"
                      : "text-[#454545] text-[14px] font-Poppins font-semibold opacity-[40%]"
                  } pt-8 pb-3 pl-3 pr-3  text-[#1F5095] text-[14px] font-Poppins font-semibold cursor-pointer`}
                  onClick={() => setActiveTab("Accountsettings")}
                >
                  Account Settings
                </div>
              </div>
            </div>
            {activeTab == "Profileoverview" && (
              <div className=" px-[50px] py-6">
                <div className=" flex  justify-between">
                  <div className=" border h-[186px]  py-6 pl-10 pr-24  w-[50%] mr-4 rounded-lg">
                    <h1 className=" text-[#1F5095] text-[18px]  leading-[20px]  font-semibold mb-8">
                      Personal Details
                    </h1>
                    <div className=" flex justify-between">
                      <div className="flex flex-col">
                        <span className=" text-[14px] font-medium text-[#A0A0A0] font-Poppins">
                          Name
                        </span>
                        <span className="text-[14px] font-medium text-[#292D32] font-Poppins leading-[24px] mt-3">
                          Sushant Jadhav
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className=" text-[14px] font-medium text-[#A0A0A0] font-Poppins">
                          {" "}
                          Email
                        </span>
                        <span className="text-[14px] font-medium text-[#292D32] font-Poppins leading-[24px] mt-3">
                          sushant@xd.com
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className=" text-[14px] font-medium text-[#A0A0A0] font-Poppins">
                          Phone number
                        </span>
                        <span className="text-[14px] font-medium text-[#292D32] font-Poppins leading-[24px] mt-3">
                          +91 99993333388
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className=" border h-[186px]  py-6 pl-10 pr-24  w-[50%] mr-4 rounded-lg">
                    <h1 className=" text-[#1F5095] text-[18px]  leading-[20px]  font-semibold mb-8">
                      Academic Details
                    </h1>
                    <div className=" flex justify-between">
                      <div className="flex flex-col">
                        <span className=" text-[14px] font-medium text-[#A0A0A0] font-Poppins">
                          College
                        </span>
                        <span className="text-[14px] font-medium text-[#292D32] font-Poppins leading-[24px] mt-3">
                          IIT Bombay
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className=" text-[14px] font-medium text-[#A0A0A0] font-Poppins">
                          {" "}
                          Batch Year
                        </span>
                        <span className="text-[14px] font-medium text-[#292D32] font-Poppins leading-[24px] mt-3">
                          IIT Bombay
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className=" text-[14px] font-medium text-[#A0A0A0] font-Poppins">
                          Course Name
                        </span>
                        <span className="text-[14px] font-medium text-[#292D32] font-Poppins leading-[24px] mt-3">
                          Computer Science
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex  justify-between mt-4">
                  <div className=" border h-[272px]  py-6 pl-10 pr-24  w-[50%] mr-4 rounded-lg">
                    <h1 className=" text-[#1F5095] text-[18px]  leading-[20px]  font-semibold mb-8">
                      Location and Address
                    </h1>
                    <div className=" flex justify-between">
                      <div className="flex flex-col">
                        <span className=" text-[14px] font-medium text-[#A0A0A0] font-Poppins">
                          Address
                        </span>
                        <span className="text-[14px] font-medium text-[#292D32] font-Poppins leading-[24px] mt-3">
                          Room No.306, 3rd Floor Varunalaya Ph-II, Jhandewalan,
                          Karol Bagh, New Delhi, Delhi 110005
                        </span>
                        <span className=" text-[14px] font-medium text-[#A0A0A0] font-Poppins mt-4">
                          State and Country
                        </span>
                        <span className="text-[14px] font-medium text-[#292D32] font-Poppins leading-[24px] mt-3">
                          Delhi , India
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className=" border h-[272px]  py-6 pl-10  w-[50%] mr-4 rounded-lg">
                    <h1 className=" text-[#1F5095] text-[18px]  leading-[20px]  font-semibold mb-12">
                      Social Media Handles
                    </h1>
                    <div className=" flex w-[526px] flex-wrap ">
                      <div className=" flex items-center mb-4 mr-8">
                        <div className=" border rounded-full flex justify-center items-center  h-[39px] w-[37px] mr-4">
                          <img
                            src={instagramicon}
                            alt="socialmedia-logo"
                            className="h-[20px] w-[20px] "
                          />
                        </div>
                        <div>
                          <div className=" w-[194px] h-[44px] border rounded-md  text-left px-6 py-2 text-[#8C8C8C] text-[14px]">
                            @Alex0239
                          </div>
                        </div>
                      </div>
                      <div className=" flex items-center mb-4 ">
                        <div className=" border rounded-full flex justify-center items-center  h-[39px] w-[37px] mr-4">
                          <img
                            src={xicon}
                            alt="socialmedia-logo"
                            className="h-[20px] w-[20px] "
                          />
                        </div>
                        <div>
                          <div className=" w-[194px] h-[44px] border rounded-md text-left px-6 py-2 text-[#8C8C8C] text-[14px]">
                            @Alex0239
                          </div>
                        </div>
                      </div>
                      <div className=" flex items-center mr-8">
                        <div className=" border rounded-full flex justify-center items-center  h-[39px] w-[37px] mr-4">
                          <img
                            src={linkedinicon}
                            alt="socialmedia-logo"
                            className="h-[20px] w-[20px] "
                          />
                        </div>
                        <div>
                          <div className=" w-[194px] h-[44px] border rounded-md text-left px-6 py-2 text-[#8C8C8C] text-[14px]">
                            @Alex0239
                          </div>
                        </div>
                      </div>
                      <div className=" flex items-center ">
                        <div className=" border rounded-full flex justify-center items-center  h-[39px] w-[37px] mr-4">
                          <img
                            src={facebookicon}
                            alt="socialmedia-logo"
                            className="h-[20px] w-[20px] "
                          />
                        </div>
                        <div>
                          <div className=" w-[194px] h-[44px] border rounded-md text-left px-6 py-2 text-[#8C8C8C] text-[14px]">
                            @Alex0239
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab == "Accountsettings" && (
              <div className=" px-[50px] py-6">
                {" "}
                <AccountSettings />
              </div>
            )}
          </span>
        </div>
        <Footer />
      </>
    </div>
  );
}

export default Profile;
