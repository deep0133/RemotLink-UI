import React from "react";

import logo from "../../images/Ellipse 1.svg";
import search_logo from "../../images/search-normal.svg";
import circle from "../../images/Group 1000002822.svg";
import bell_icon from "../../images/Notification.svg";
import Flag_icon from "../../images/United.svg";
import down_icon from "../../images/chevron-down.svg";
import user_pic from "../../images/photo.svg";

const Header = () => {
  return (
    <>
      <div className="w-[1440px] h-[35px] bg-blue-900 flex items-center justify-evenly">
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
      <div className="flex justify-between flex-shrink-0 items-center border-r border-solid border-blue-500 border-opacity-10 bg-white shadow-md h-[71px] w-[1440px]">
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

        <div className="flex justify-center items-center pr-[11px]">
          <img
            src={circle}
            alt="ciricle wrapper"
            className="relative left-9 top-2"
          />
          <div className=" w-[20px] h-[20px] flex justify-center items-center relative left-[-14px] top-1  p-[1.667px] px-[2.917px]">
            <img src={bell_icon} alt="ciricle wrapper" />
          </div>
        </div>

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
        <div className="pr-[15px] pl-[25px] ">
          <img
            src={user_pic}
            alt="UserPicture"
            className="w-[38px] h-[38px] flex-shrink-0 rounded-[38px]"
          />
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
