import React from "react";
import { Link } from "react-router-dom";
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
      <div
        className='w-[96px] flex flex-col space-y-5 items-center p-4 border border-solid shadow-md no-scrollbar '
        style={{ position: "sticky", top: "0", height: "100dvh" }}
      >
        <Link to='/Home'>
          <div className='w-[42px] flex items-center justify-center flex-col  '>
            <img className='pb-[7px]' src={Home_Icon} alt='Home Icon' />
            <h1 className='text-blue-500 text-center font-poppins text-[10px] font-semibold'>
              Home
            </h1>
          </div>
        </Link>
        <Link to='/resources'>
          <div className='w-[42px] flex items-center justify-center flex-col'>
            <img
              className='pb-[7px]'
              src={Resources_Icon}
              alt='Resources Icon'
            />
            <h1 className='text-gray-600 text-center font-poppins text-xs font-medium'>
              Resources
            </h1>
          </div>
        </Link>

        <Link to='/savedresources'>
          <div className='w-[42px] flex items-center justify-center flex-col'>
            <img
              className='pb-[7px]'
              src={Favorites_Icon}
              alt='Favorites Icon'
            />
            <h1 className='text-gray-600 text-center font-poppins text-xs font-medium'>
              My Favorites
            </h1>
          </div>
        </Link>
        <Link to='/searchview'>
          <div className='w-[42px] flex items-center justify-center flex-col'>
            <img className='pb-[7px]' src={Search_Icon} alt='Search Icon' />
            <h1 className='text-gray-600 text-center font-poppins text-xs font-medium'>
              Search
            </h1>
          </div>
        </Link>
        <div className='pt-24'>
          <Link to={"/help"}>
            <div className=' flex items-center justify-normal flex-col '>
              <img
                className='w-[60px] h-[60px]'
                src={question_Icon}
                alt='Help Icon'
              />
              <img
                className='relative bottom-[35px] w-[18px] h-[18px] flex justify-normal items-center flex-shrink-0'
                src={help_Icon}
                alt='Help Icon'
              />
              <h1 className='text-blue-500 font-poppins text-center text-xs font-medium w-[56px] h-[18px] relative bottom-5'>
                Help
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
