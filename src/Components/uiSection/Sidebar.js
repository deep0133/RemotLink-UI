import React from "react";
// import Home_Icon from "../images/category-2.svg";
import Home_Icon from "../../images/category-2.svg";
import Resources_Icon from "../../images/book-saved.svg";
import Favorites_Icon from "../../images/book-saved.svg";
import Search_Icon from "../../images/search-normal.svg";
import help_Icon from "../../images/message-question.svg";
import question_Icon from "../../images/Question.svg";
const Sidebar = () => {
  return (
    <>
      <div className="w-[96px] h-[4440px] flex flex-shrink-0 flex-col items-center p-4 border border-solid border-color-p3   shadow-md no-scrollbar ">
        <div className="w-[42px] h-[42px] flex items-center justify-center flex-col mt-[22px]  ">
          <img className="pb-[7px]" src={Home_Icon} alt="Home Icon" />
          <h1 className="text-blue-500 text-center font-poppins text-[10px] font-semibold">
            Home
          </h1>
        </div>

        <div className="w-[42px] h-[42px] flex items-center justify-center flex-col mt-[22px]">
          <img className="pb-[7px]" src={Resources_Icon} alt="Resources Icon" />
          <h1 className="text-gray-600 text-center font-poppins text-xs font-medium">
            Resources
          </h1>
        </div>

        <div className="w-[42px] h-[42px] flex items-center justify-center flex-col  mt-[22px]">
          <img className="pb-[7px]" src={Favorites_Icon} alt="Favorites Icon" />
          <h1 className="text-gray-600 text-center font-poppins text-xs font-medium">
            My Favorites
          </h1>
        </div>

        <div className="w-[42px] h-[42px] flex items-center justify-center flex-col  mt-[29px]">
          <img className="pb-[7px]" src={Search_Icon} alt="Search Icon" />
          <h1 className="text-gray-600 text-center font-poppins text-xs font-medium">
            Search
          </h1>
        </div>

        <div className=" flex items-center justify-normal flex-col mt-[160px] ">
          <img
            className="w-[60px] h-[60px]"
            src={question_Icon}
            alt="Help Icon"
          />
          <img
            className="relative bottom-[35px] w-[18px] h-[18px] flex justify-normal items-center flex-shrink-0"
            src={help_Icon}
            alt="Help Icon"
          />
          <h1 className="text-blue-500 font-poppins text-center text-xs font-medium w-[56px] h-[18px] relative bottom-5">
            Help
          </h1>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
