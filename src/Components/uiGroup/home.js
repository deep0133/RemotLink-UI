import React from "react";
import home_image from "../../images/Rectangle 5.png";
import Button from "../uiElemnts/button";
import get_started from "../../images/black button.png";
import { useState, useEffect } from "react";
import cardimage from "../../images/Rectangle 25.png";
import newimg from "../../images/economic.png";
import bookmarkicon from "../../images/Group 1000002939.png";

import firstimg from "../../images/Rectangle 33.png";
import secimg from "../../images/Rectangle 34.png";
import thirdimg from "../../images/Rectangle 35.png";

import { Link } from "react-router-dom";
// import Home_Icon from "../images/category-2.svg";
import Home_Icon from "../../images/category-2.svg";
import Resources_Icon from "../../images/book-saved.svg";
import Favorites_Icon from "../../images/book-saved.svg";
import Search_Icon from "../../images/search-normal.svg";
import help_Icon from "../../images/message-question.svg";
import question_Icon from "../../images/Question.svg";

import Service from "../Webservices/http";

function Home() {
  const services = new Service();

  const [active, setActive] = useState("week");

  const arr = [1, 2, 3, 4, 5];
  const arr3 = [1, 2, 3];
  const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13];

  const box = {
    one: ["Anesthasia", "Health", "Anatomy", "Anesthasia"],
    two: [
      "Life Science",
      "Health",
      "Anatomy",
      "Anesthasia",
      "Life Science",
      "Health",
    ],
    three: ["Dermatalogy", "  Neurology", "  Dermatalogy", "Neurology"],
  };
  const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17];

  return (
    <div className="sm:flex">
      {/* sidenav bar */}
      <div className="hidden sm:flex w-[96px]   flex-shrink-0 flex-col items-center p-4 border border-solid border-color-p3   shadow-md no-scrollbar ">
        <Link to="/Home">
          <div className="w-[42px] h-[42px] flex items-center justify-center flex-col mt-[22px]  ">
            <img className="pb-[7px]" src={Home_Icon} alt="Home Icon" />
            <h1 className="text-blue-500 text-center font-poppins text-[10px] font-semibold">
              Home
            </h1>
          </div>
        </Link>
        <Link to="/resources">
          <div className="w-[42px] h-[42px] flex items-center justify-center flex-col mt-[22px]">
            <img
              className="pb-[7px]"
              src={Resources_Icon}
              alt="Resources Icon"
            />
            <h1 className="text-gray-600 text-center font-poppins text-xs font-medium">
              Resources
            </h1>
          </div>
        </Link>

        <div className="w-[42px] h-[42px] flex items-center justify-center flex-col  mt-[22px]">
          <img className="pb-[7px]" src={Favorites_Icon} alt="Favorites Icon" />
          <h1 className="text-gray-600 text-center font-poppins text-xs font-medium">
            My Favorites
          </h1>
        </div>
        <Link to="/searchview">
          <div className="w-[42px] h-[42px] flex items-center justify-center flex-col  mt-[29px]">
            <img className="pb-[7px]" src={Search_Icon} alt="Search Icon" />
            <h1 className="text-gray-600 text-center font-poppins text-xs font-medium">
              Search
            </h1>
          </div>
        </Link>
        <Link to="/help">
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
        </Link>
      </div>
      <div>
        {/* web view */}
        <div className="sm:block bg-[#3A424D] w-full h-[334px] mt-[62px] hidden relative">
          <div className="flex items-start justify-between flex-col w-[272px] p-10">
            <ul className="flex flex-shrink-0 items-start justify-between flex-col mb-2 ">
              <li>
                <p className="font-poppins font-semibold text-2xl leading-relaxed text-white mb-2 ">
                  Hello Sushant <br /> Welcome Back to Library
                </p>
                {/* <p className="font-poppins font-semibold text-2xl leading-relaxed text-white ">
              Welcome Back to Library
            </p> */}
              </li>
              <li className="flex text-white font-poppins  font-normal text-[15px] leading-relaxed w-[323px]">
                Strong people don’t put others down. they lift them up.
              </li>
              <li className=" ">
                <button className=" rounded-md mt-6 h-[53px] w-[131px] bg-[#36201B] text-white ">
                  Get Started
                </button>
              </li>
            </ul>
          </div>

          <div className="absolute  bottom-0  right-[2%]">
            <img src={home_image} alt="" className=" h-[363px]" />
          </div>
        </div>
        {/* mobile view */}
        <div className="sm:hidden bg-[#3A424D] w-full mt-2 block">
          <div className="">
            <img src={home_image} alt="" className=" h-[191px]" />
          </div>
          <div className="flex items-start justify-between flex-col w-[272px] p-10">
            <ul className="flex flex-shrink-0 items-start justify-between flex-col mb-2 ">
              <li>
                <p className="font-poppins font-semibold text-2xl leading-relaxed text-white mb-2 ">
                  Hello Sushant <br /> Welcome Back to Library
                </p>
                {/* <p className="font-poppins font-semibold text-2xl leading-relaxed text-white ">
              Welcome Back to Library
            </p> */}
              </li>
              <li className="flex text-white font-poppins  font-normal text-[15px] leading-relaxed w-[323px]">
                Strong people don’t put others down. they lift them up.
              </li>
              <li className=" ">
                <button className=" rounded-md mt-6 h-[53px] w-[131px] bg-[#36201B] text-white ">
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="  mt-10">
          <p className=" text-[26px] text-[#1F5095] font-semibold ml-[50px]">
            Discover Your Recent Readings
          </p>
          <p className="text-[14px] text-[#A3AED0]  ml-[50px] leading-[26px] font-medium">
            Explore Your Recent Reads and Gain Fresh Perspectives
          </p>
          <div className=" flex justify-end sm:px-10 px-4 mt-4 sm:mt-0">
            <button
              className={`w-[92px] h-[34px] sm:w-[131px] sm:h-[41px] rounded-md  border text-[11px] sm:text-[14px] ${
                active == "week" ? " bg-black text-white" : ""
              }`}
              onClick={() => setActive("week")}
            >
              This Week
            </button>
            <button
              className={`w-[92px] h-[34px] sm:w-[131px] sm:h-[41px] rounded-md  border text-[11px] sm:text-[14px] ml-2 ${
                active == "days" ? " bg-black text-white" : ""
              }`}
              onClick={() => setActive("days")}
            >
              {" "}
              Last 30 days
            </button>
          </div>
        </div>
        <div className="mt-5 sm:px-10 ">
          <div className="h-[423px] w-auto border py-8 sm:w-[1350px] flex overflow-scroll no-scrollbar ">
            {arr.map((e) => (
              <div className=" w-[276px] h-[358px]  border font-Poppins mr-3">
                <img src={cardimage} alt="card-view" className=" h-[143px]" />
                <div className=" m-5">
                  <p className=" text-[18px]  font-semibold leading-[26px] w-[244px] ">
                    Originator and Biosimilar Biologics: For Patients and
                    Healthcare Providers
                  </p>
                  <p className=" text-[12px]  font-normal leading-[20px] text-[#000000] opacity-[50%] mt-4">
                    Published By : Stanford Life
                  </p>
                </div>
                <button
                  className=" px-[15px] py-2 text-[#F38D15] font-medium  rounded-md mx-5  bg-green-50"
                  style={{ border: "1px solid green" }}
                >
                  Ebook
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 sm:px-[120px] sm:py-[50px] flex w-auto flex-col sm:flex-row p-6 ">
          <div>
            <div className="text-[26px] font-semibold font-Poppins text-[#1F5095] my-4 sm:whitespace-nowrap">
              Embark on a Quest for Knowledge
            </div>
            <p className="w-auto sm:w-auto text-[14px]  font-Poppins text-[#5C78D0] leading-[26px] mt-8">
              Our extensive catalog spans a diverse spectrum of subjects, from
              the foundational to the advanced, from arts to sciences. Immerse
              yourself in the world of knowledge, with subjects meticulously
              curated to inspire and empower. Each subject offers a gateway to a
              treasure trove of e-journals, ebooks, newspapers, videos, and a
              wealth of educational resources, waiting for your exploration
            </p>
          </div>
          {/* for web */}
          <div className="hidden sm:flex  justify-between flex-row w-[100%] mt-8 sm:px-[65px] ">
            <div className=" flex flex-col mt-[80px]">
              {box.one.map((e, index) => (
                <span
                  key={index}
                  className={`w-[161px] h-[55px] border rounded-[5px] mb-3 mr-4 flex justify-center items-center text-[#1F5095] text-[17px] leading-[26px] font-medium ${
                    index === 0 ? " text-white bg-[#1F5095] " : ""
                  }`}
                >
                  {e}
                </span>
              ))}
            </div>
            <div className=" flex flex-col">
              {box.two.map((e) => (
                <span className=" w-[161px] h-[55px] border  rounded-[5px] mb-3 mr-4  flex justify-center items-center text-[#1F5095] text-[17px] leading-[26px] font-medium">
                  {e}
                </span>
              ))}
            </div>{" "}
            <div className=" flex flex-col mt-[40px]">
              {box.three.map((e) => (
                <span className=" w-[161px] h-[55px] border  rounded-[5px] mb-3  flex justify-center items-center text-[#1F5095] text-[17px] leading-[26px] font-medium">
                  {e}
                </span>
              ))}
            </div>
          </div>
          {/* for mobile */}
          <div className="sm:hidden  mt-4  flex  flex-wrap sm:py-6 sm:px-10 justify-center">
            {arr2.map((e, index) => (
              <span
                key={index}
                className={`w-[135px] h-[55px] border rounded-[5px] mb-3 ml-2 flex justify-center items-center text-[#1F5095] text-[17px] leading-[26px] font-medium ${
                  index === 0 ? "text-white bg-[#1F5095]" : ""
                }`}
              >
                Health
              </span>
            ))}
          </div>
        </div>
        <div className="mt-2 sm:mt-5   py-6 px-10">
          <h1 className=" text-[23px] leading-[28px] font-semibold font-Poppins text-[#1F5095]">
            Popular Databases to cater you work research needs{" "}
          </h1>
          <div className=" sm:flex justify-between mt-4">
            <h1 className=" text-[#A3AED0] text-[15px] font-normal leading-[28px] font-Poppins">
              A curated collection of academic journals and research papers
            </h1>
            <div className=" flex justify-end sm:block mt-4 ">
              <button className="h-[43px] w-[131px] rounded-[5px] border border-solid border-[#221FB9/0.14]">
                Show More
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#221FB9/0.2] mt-4  flex  flex-wrap sm:py-6 sm:px-10 sm:justify-normal justify-center">
          {arr1.map((e) => (
            <div className=" w-[115px] h-[122px] sm:w-[210px] sm:h-[188px] flex flex-col border p-2 rounded-[5px] mr-2 mb-2">
              <img
                src={newimg}
                alt="cardimg"
                className=" w-[111px] sm:w-[177px] h-[67px] sm:h-[110px] "
              />
              <div className=" mt-4 flex items-center ">
                <span className="w-[73px] h-[31px] sm:w-[137px] sm:h-[37px] flex justify-center items-center border sm:text-[13px] text-[8px] text-[#1F5095] bg-[#E9E9F7] rounded-[5px]">
                  Economic Outlook
                </span>
                <img
                  src={bookmarkicon}
                  className=" ml-4  w-[32px] h-[32px]  "
                  alt="bookmark-icon"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 px-3   sm:py-6 sm:px-10 ">
          <div className=" sm:px-10">
            <h1 className=" text-[26px] leading-[39px]  font-semibold font-Poppins text-[#1F5095]">
              Recently Added{" "}
            </h1>
            <h1 className=" text-[#A3AED0] text-[15px] font-normal leading-[28px] font-Poppins">
              A curated collection of academic journals and research papers
            </h1>
            <div className=" border  sm:w-[450px] flex justify-between mt-5  items-center px-3 py-1 rounded-[8px]">
              <span className=" bg-[#1F5095] text-white rounded-[8px] p-2 text-[14px]">
                EJournals
              </span>

              <span className="text-[14px]">EBooks</span>
              <span className="text-[14px]">EVideos</span>
              <span className="text-[14px]">Other EResources</span>
            </div>
          </div>
          <div className=" hidden sm:flex justify-end">
            <button className=" h-[43px] w-[131px] rounded-[5px] border border-solid border-[#221FB9/0.14]">
              Show More
            </button>
          </div>
        </div>
        <div className="mt-5 sm:px-10 ">
          <div className="h-[423px] w-auto border py-8 sm:w-[1350px] flex overflow-scroll no-scrollbar ">
            {arr.map((e) => (
              <div className=" w-[276px] h-[358px]  border font-Poppins mr-3">
                <img src={cardimage} alt="card-view" className=" h-[143px]" />
                <div className=" m-5">
                  <p className=" text-[18px]  font-semibold leading-[26px] w-[244px]">
                    Originator and Biosimilar Biologics: For Patients and
                    Healthcare Providers
                  </p>
                  <p className=" text-[12px]  font-normal leading-[20px] text-[#000000] opacity-[50%] mt-4">
                    Published By : Stanford Life
                  </p>
                </div>
                <button
                  className=" px-[15px] py-2 text-[#F38D15] font-medium  rounded-md mx-5  bg-green-50"
                  style={{ border: "1px solid green" }}
                >
                  Ebook
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 px-3   sm:py-6 sm:px-10 ">
          <div className=" sm:px-10">
            <h1 className=" text-[26px] leading-[39px]  font-semibold font-Poppins text-[#1F5095]">
              Trending Resources
            </h1>
            <h1 className=" text-[#A3AED0] text-[15px] font-normal leading-[28px] font-Poppins">
              Discover Fresh Perspectives with Our Newly Added Resources
            </h1>
            <div className=" border  sm:w-[450px] flex justify-between mt-5  items-center px-3 py-1 rounded-[8px]">
              <span className=" bg-[#1F5095] text-white rounded-[8px] p-2 text-[14px]">
                EJournals
              </span>

              <span className="text-[14px]">EBooks</span>
              <span className="text-[14px]">EVideos</span>
              <span className="text-[14px]">Other EResources</span>
            </div>
          </div>
          <div className=" hidden sm:flex justify-end">
            <button className=" h-[43px] w-[131px] rounded-[5px] border border-solid border-[#221FB9/0.14]">
              Show More
            </button>
          </div>
        </div>
        <div className="mt-5 sm:px-10 ">
          <div className="h-[423px] w-auto border py-8 sm:w-[1350px] flex overflow-scroll no-scrollbar ">
            {arr.map((e) => (
              <div className=" w-[276px] h-[358px]  border font-Poppins mr-3">
                <img src={cardimage} alt="card-view" className=" h-[143px]" />
                <div className=" m-5">
                  <p className=" text-[18px]  font-semibold leading-[26px] w-[244px] ">
                    Originator and Biosimilar Biologics: For Patients and
                    Healthcare Providers
                  </p>
                  <p className=" text-[12px]  font-normal leading-[20px] text-[#000000] opacity-[50%] mt-4">
                    Published By : Stanford Life
                  </p>
                </div>
                <button
                  className=" px-[15px] py-2 text-[#F38D15] font-medium  rounded-md mx-5  bg-green-50"
                  style={{ border: "1px solid green" }}
                >
                  Ebook
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 px-3   sm:py-6 sm:px-10 ">
          <div className=" sm:px-10">
            <h1 className=" text-[26px] leading-[39px]  font-semibold font-Poppins text-[#1F5095]">
              Top Saved Resources throughout
            </h1>
            <h1 className=" text-[#A3AED0] text-[15px] font-normal leading-[28px] font-Poppins">
              Discover Fresh Perspectives with Our Newly Added Resources
            </h1>
          </div>
        </div>
        {/* {for web} */}
        <div className="hidden mt-5 sm:px-10 sm:flex flex-row w-auto overflow-scroll mb-4 no-scrollbar">
          <div className=" relative mr-4">
            <img
              src={firstimg}
              alt="firstimg"
              className="h-[302px]  w-[347px] sm:h-[470px] sm:w-[583px] rounded-[5px] mr-2 bg-gradient-to-b from-black to-#221FB9 "
            />
            <div className=" absolute left-4 bottom-[50px] sm:left-[90px] flex flex-col">
              <span className=" text-white  font-Poppins  font-semibold text-[18px]  w-[280px] sm:text-[22px] leading-[26px]">
                Cambridge Series on Human-Computer Interaction
              </span>
              <span className=" text-[#FFFFFF] font-Poppins text-[15px] leading-[26px] opacity-[50%]  font-normal">
                {" "}
                Published By : Stanford Life , 15/01/2005
              </span>
            </div>
          </div>
          <div className=" flex flex-col">
            <span className=" relative">
              <img
                src={secimg}
                alt="secimg"
                className="h-[302px] w-[347px] mb-2 sm:h-[231px] sm:w-[629px]"
              />
              <div className=" absolute bottom-[30px] left-4 sm:left-[90px] flex flex-col">
                <span className=" text-white  font-Poppins  font-semibold text-[18px]  w-[280px] sm:text-[22px] leading-[26px] ">
                  Boiler Control Systems Engineering{" "}
                </span>
                <span className=" text-[#FFFFFF] font-Poppins text-[15px] leading-[26px] opacity-[50%]  font-normal">
                  {" "}
                  Published By : Stanford Life , 15/01/2005
                </span>
              </div>
            </span>
            <span className=" relative">
              <img
                src={thirdimg}
                alt="thirdimg"
                className="h-[302px] w-[347px] mb-2 sm:h-[231px] sm:w-[629px]"
              />
              <div className=" absolute bottom-[30px] left-4 sm:left-[90px] flex flex-col">
                <span className=" text-white  font-Poppins  font-semibold text-[18px]  w-[280px] sm:text-[22px] leading-[26px] ">
                  Concrete Technology and its benefits
                </span>
                <span className=" text-[#FFFFFF] font-Poppins text-[15px] leading-[26px] opacity-[50%]  font-normal">
                  {" "}
                  Published By : Stanford Life , 15/01/2005
                </span>
              </div>
            </span>
          </div>
        </div>
        {/* for mobile */}
        <div className=" sm:hidden p-4">
          {arr3.map(() => (
            <div className=" relative mb-3">
              <img
                src={firstimg}
                alt="firstimg"
                className="h-auto  w-auto sm:h-[470px] sm:w-[583px] rounded-[5px] mr-2 bg-gradient-to-b from-black to-#221FB9 "
              />
              <div className=" absolute left-4 bottom-[50px] sm:left-[90px] flex flex-col">
                <span className=" text-white  font-Poppins  font-semibold text-[18px]  w-[280px] sm:text-[22px] leading-[26px]">
                  Cambridge Series on Human-Computer Interaction
                </span>
                <span className=" text-[#FFFFFF] font-Poppins text-[15px] leading-[26px] opacity-[50%]  font-normal">
                  {" "}
                  Published By : Stanford Life , 15/01/2005
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
