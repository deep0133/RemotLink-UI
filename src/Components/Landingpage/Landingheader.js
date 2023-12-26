import React from "react";
import lgn_icon from "../../images/Group 2323.svg";
import anmnt_icon from "../../images/notification-status.svg";

import { Link } from "react-router-dom";

const Landingheader = () => {
  return (
    <>
      <div className="w-full min-h-[52px]  bg-[#1F1B25] light:bg-secondary flex  items-center justify-between overflow-y-scroll no-scrollbar">
        <div className=" flex  items-center justify-center ml-6  md:max-xl:ml-16 xl:ml-32"  >
          <h1>👋</h1>
          <h1 className="hidden lg:block  text-white font-AnekLatin light:font-Outfit purple:font-Sora text-base purple:text-[14px] font-normal leading-normal whitespace-nowrap">
            Hello Visitor , Please Login To Access The Library
          </h1>
          <h1 className="lg:hidden text-white font-AnekLatin light:font-Outfit purple:font-Sora text-base purple:text-[14px] font-normal leading-normal min-[400px]:whitespace-nowrap">
            Hello Visitor , Please Login...
          </h1>
          
        </div>
        <div className="flex items-center justify-center">
        <Link to={"Home"}>
        <div className=" w-16 lg:w-36 h-[52px] bg-[#000000] light:bg-btn flex  items-center justify-center mr-3 md:mr-1 hover:bg-[#0B2E78] focus:ring-4 focus:outline-none focus:ring-blue-300   ">
        
          <img src={lgn_icon} alt="login icon" />
          
            <h1 className="hidden lg:block text-white font-AnekLatin light:font-Outfit purple:font-Sora text-base purple:text-[13px] font-normal leading-5 capitalize ml-3 whitespace-nowrap ">
              Login Now
            </h1>
          
        </div>
        </Link>

        <div className="w-12 lg:w-44 h-[52px] bg-[#000000] light:bg-btn flex  items-center justify-center mr-6 md:mr-20 hover:bg-[#0B2E78] focus:ring-4 focus:outline-none focus:ring-blue-300">
          <img src={anmnt_icon} alt="Announcements icon" />
          <h1 className="hidden lg:block text-white font-AnekLatin light:font-Outfit purple:font-Sora text-base purple:text-[13px] font-normal leading-5 capitalize ml-3">
            Announcements
          </h1>
        </div>
        
        </div>
        
      </div>
    </>
  );
};

export default Landingheader;
