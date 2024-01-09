import React from "react";
import { useState } from "react";
import logo from "../../images/Ellipse 1.svg";
import search_logo from "../../images/search-normal.svg";
import circle from "../../images/Group 1000002822.svg";
import bell_icon from "../../images/Notification.svg";
import Flag_icon from "../../images/United.svg";
import down_icon from "../../images/chevron-down.svg";
import user_pic from "../../images/photo.svg";
import { Link } from "react-router-dom";
import profileIcon from "../../images/user-square.png";
import bookIcon from "../../images/Group 1000003119.png";
import messagequestion from "../../images/message-question.png";
import teacher from "../../images/teacher.png";
import logout from "../../images/logout.png";
import whitebell from "../../images/whitenotif.png";
const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const href = window.location.pathname;
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <>
      <div className="w-full h-[35px] bg-blue-900 flex items-center justify-evenly">
        <p className="text-white font-inter text-[13px] font-medium  font-inter  ">
          8 positieve podcasts om je door{" "}
          <span className="underline">2021 te slepen - Harper's …</span>
        </p>
        <p className="text-white font-inter text-xs font-medium  font-inter  ">
          8 positieve podcasts om je door{" "}
          <span className="underline">2021 te slepen - Harper's …</span>
        </p>
        <p className="text-white font-inter text-xs font-medium  font-inter  ">
          8 positieve podcasts om je door{" "}
          <span className="underline">2021 te slepen - Harper's …</span>
        </p>
      </div>
      <div className="flex justify-between flex-shrink-0 items-center border-r border-solid border-blue-500 border-opacity-10 bg-white shadow-md h-[71px] w-full">
        <div className="flex pl-[56px] pr-[12px]">
          <img
            src={logo}
            alt="logo"
            className=" relative left-5 bottom-[4px]"
          />
          <img src={logo} alt="logo" className="-rotate-90" />
        </div>
        <div
          className="text-blue-900 font-poppins text-base  font-semibold not-italic leading-normal w-[219px] pr-[]
    "
        >
          Indian Institute of Technlogy Mumbai
        </div>
        <div className="flex items-center justify-between rounded-md border border-solid border-gray-200 w-[552px] h-auto p-[14px] px-[28px] gap-[301px] ">
          <input
            className=" flex flex-col items-center flex-shrink-0 text-blue-gray-700 font-poppins text-xs font-normal tracking-tighter w-[172px] h-[24px]"
            placeholder="Search any resources here ..."
          />
          <img
            src={search_logo}
            alt="Search logo"
            className="w-[20px] h-[20px]"
          />
        </div>
        <Link to="/notifications">
          <div
            className={`flex justify-center items-center border rounded-full p-3
            ${href.includes("notifications") ? "bg-[#4477bf]" : ""}
             `}
          >
            {href.includes("notifications") ? (
              <img
                src={whitebell}
                alt="ciricle wrapper"
                className=" w-[20px] h-[20px]"
              />
            ) : (
              <img
                src={bell_icon}
                alt="ciricle wrapper"
                className=" w-[20px] h-[20px]"
              />
            )}
          </div>
        </Link>

        <div className="w-[121px] h-[38px] flex  flex-shrink-0 justify-evenly items-center rounded-[20px] border border-solid border-blue-500 border-opacity-10 bg-white shadow-md ">
          <img
            src={Flag_icon}
            alt="Flag icon"
            className="w-[22px] h-[22px] flex-shrink-0 "
          />
          <h3 className="text-gray-700 font-inter text-xs font-medium p-2 text-[12px]">
            Eng (IN)
          </h3>
          <img
            src={down_icon}
            alt="down icon"
            className="w-[20px] h-[20px] flex-shrink-0"
          />
        </div>

        <div
          className="pr-[15px] pl-[25px] relative cursor-pointer "
          onClick={toggleDropdown}
        >
          <img
            src={user_pic}
            alt="UserPicture"
            className="w-[38px] h-[38px] flex-shrink-0 rounded-full"
          />
          {showDropdown && (
            <div className="absolute top-[56px] left-[-30px] mt-2  z-40 border border-solid border-gray-200 rounded-md shadow-md bg-white">
              <div className="p-4 h-[250px] w-[220px]">
                <Link to="/profile">
                  <div className=" flex items-center justify-start mb-6">
                    <span className=" mr-3">
                      {" "}
                      <img
                        src={profileIcon}
                        alt="icons"
                        className=" w-[22px] h-[22px]"
                      />
                    </span>
                    <span className=" text-sm font-medium  text-[#6F6C90]">
                      My Profile
                    </span>
                  </div>
                </Link>

                <Link to="/savedresources">
                  <div className=" flex items-center justify-start mb-6">
                    <span className=" mr-3">
                      {" "}
                      <img
                        src={bookIcon}
                        alt="icons"
                        className=" w-[22px] h-[22px]"
                      />
                    </span>
                    <span className=" text-sm font-medium  text-[#6F6C90]">
                      Saved Resources
                    </span>
                  </div>
                </Link>
                <div className=" flex items-center justify-start mb-6">
                  <span className=" mr-3">
                    {" "}
                    <img
                      src={messagequestion}
                      alt="icons"
                      className=" w-[22px] h-[22px]"
                    />
                  </span>
                  <span className=" text-sm font-medium  text-[#6F6C90]">
                    Help Center
                  </span>
                </div>
                <div className=" flex items-center justify-start mb-4">
                  <span className=" mr-3">
                    {" "}
                    <img
                      src={teacher}
                      alt="icons"
                      className=" w-[22px] h-[22px]"
                    />
                  </span>
                  <span className=" text-sm font-medium  text-[#6F6C90]">
                    Tutorial
                  </span>
                </div>
                <hr />
                <div className=" flex items-center justify-start mt-4">
                  <span className=" mr-3">
                    {" "}
                    <img
                      src={logout}
                      alt="icons"
                      className=" w-[22px] h-[22px]"
                    />
                  </span>
                  <span className=" text-sm font-medium  text-[#E1735B]">
                    Sign out
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="pr-[80px]">
          <h3 className="text-blue-gray-900 font-poppins text-[13px] font-semibold leading-6">
            Hi Alex{" "}
          </h3>
          <h6 className="text-blue-gray-700 font-poppins text-[12px] font-normal leading-5">
            alex0901@xd.com
          </h6>
        </div>
      </div>
    </>
  );
};

export default Header;
