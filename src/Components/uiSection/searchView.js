import React from "react";
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import search from "../../images/search-normal.svg";
import bin from "../../images/trash.png";
import book from "../../images/Group.png";
import icon from "../../images/gr.png";
import arrow from "../../images/arrow-up.png";
import sort from "../../images/sort.png";
import arrowdown from "../../images/Vector (Stroke).png";
import bookmarkicon2 from "../../images/Vector.png";
import Pagination from "../uiElemnts/pagination";

import bookmarkicon from "../../images/Group 1000002939.png";
import linkicon from "../../images/Group 1000002938.png";

function SearchView() {
  const [Open, setOpen] = useState(false);
  const btn = ["Search type", "Resource Type", "Databases"];
  const count = [
    {
      heading: "EJournals",

      count: "100",
      btn: "EJournals",
    },
    {
      heading: "Ebooks",

      count: "400",
      btn: "Ebooks",
    },
    {
      heading: "EVideos",

      count: "200",
      btn: "EVideos",
    },
    {
      heading: "Other EResources",

      count: "100",
      btn: "English",
    },
  ];
  var i = [1, 2, 3];
  var books = [1, 2, 3, 4, 5, 6, 7];
  var page = [1, 2, 3, 4, 5];
  return (
    <>
      <Header />
      <div className=" flex">
        <span className=" hidden sm:block">
          <Sidebar />
        </span>
        <span className=" flex flex-col w-[100%]">
          <span
            className=" flex items-center  sm:px-8  px-3"
            style={{
              borderBottom: "1px solid lightgray",
              height: "70px",
              //   background: "grey",
            }}
          >
            <div
              className=" p-3 rounded-full   bg-gray-300 mr-2 "
              //   style={{ border: "1px solid grey" }}
            >
              <img src={search} className=" h-5 w-5 " />
            </div>

            <span className=" whitespace-nowrap text-[#1F5095] font-semibold texx-[15px]">
              Search Catalogue
            </span>
          </span>
          <div className="p-4 sm:p-10 sm:bg-[#f6f6f6] bg-white">
            <h1 className=" text-[#1F5095] text-[23px]  font-semibold">
              Find articles,ejournals,ebooks that are in need of from our
              E-Resources
            </h1>
            <p className=" text-[#A3AED0] mt-2">
              Find articles,ejournals, ebooks that you are in need of from our
              10000+ repo
            </p>
            <div className=" mt-2 sm:flex sm:mt-4">
              <input
                type=" text"
                style={{ border: "1px solid lightgray" }}
                className="w-full sm:w-[400px] p-[8px] sm:mr-4 rounded-lg"
                placeholder="Search anything"
              />
              <div className="flex sm:block sm:mt-0 mt-2 justify-between sm:justify-normal">
                {btn.map((e) => (
                  <button
                    className=" sm:px-[4px] w-[112px] sm:w-[137px] h-[48px] sm:p-[10px] rounded-lg sm:mr-2  bg-white  whitespace-nowrap  "
                    style={{ border: "1px solid lightgray" }}
                  >
                    <span className=" flex items-center justify-center">
                      <img src={arrowdown} className="m-2" alt="sorticon" />
                      {e}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <div className=" flex flex-wrap sm:flex-nowraps">
              <div
                className=" flex flex-col p-4 mt-4 "
                style={{
                  borderRight: "1px solid  lightgray",
                  width: "fit-content",
                }}
              >
                <span className=" text-[#033086] font-normal">
                  Total Result
                </span>
                <span className=" font-semibold">100</span>
              </div>
              {count.map((e) => (
                <div
                  className=" flex flex-col p-4 mt-4 "
                  style={{ width: "fit-content" }}
                >
                  <span className=" text-[#033086] font-normal">
                    {e?.heading}
                  </span>
                  <span className=" font-semibold">{e?.count}</span>
                </div>
              ))}
            </div>
            <div className=" flex  mt-8 ">
              <div className="sm:flex sm:items-center flex-row ">
                <div className=" text-black font-medium text-[14px] mt-2 sm:mt-0 mb-2 sm:mb-0">
                  Flter:
                </div>
                <div className=" flex flex-wrap">
                  {count.map((e) => (
                    <div className="ml-4 bg-[#033086] w-[100px] sm:w-[120px] sm:h-[40px] h-[35px] text-white flex justify-center  items-center rounded-[20px] mb-2">
                      <span className=" text-[11px] sm:text-base">
                        {e?.btn}
                      </span>
                      <span className="p-[6px] bg-red-600 sm:p-2 rounded-full ml-2">
                        <img src={bin} className=" " />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className=" flex justify-end">
              <div className="px-2 h-[43px] w-[131px] rounded-[5px] border border-solid border-[#221FB9/0.14] mr-4 flex justify-around items-center">
                <img src={sort} className=" w-[16px] h-[16px]" alt="sorticon" />
                <span>Sort By: </span>
                <img
                  src={arrowdown}
                  className=" w-[10px] h-[7px]"
                  alt="arrowdown"
                />
              </div>
            </div>
          </div>
          <div className="flex sm:p-8 p-0">
            <div
              className="sm:w-[30%] hidden sm:block"
              style={{ borderRight: "1px solid lightgray" }}
            >
              <div className={`p-4 ${Open ? " border-b " : ""}`}>
                <div className=" flex  justify-between  items-center">
                  <span>Access</span>
                  <span className="" onClick={() => setOpen(!Open)}>
                    {" "}
                    <img src={arrow} />
                  </span>
                </div>
                {Open && (
                  <div className={`mt-4 flex  items-center  `}>
                    <span className=" mr-4 flex items-center">
                      <input
                        type="checkbox"
                        checked
                        className=" mr-2 w-[18px] h-[18px]"
                      />
                      Show All
                    </span>
                    <span className=" flex items-center">
                      <input
                        type="checkbox"
                        className=" mr-2  w-[18px] h-[18px]"
                      />
                      Open Acces Only
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className=" sm:w-[70%] ">
              <div className=" bg-[#F8F9FA] p-4 rounded-lg">
                {/*web view--------------------------------------------------------- */}
                {books.map((e) => (
                  <div className="hidden h-[225px] rounded-xl sm:h-[158px]  bg-blue p-4 sm:flex justify-between  mt-2 bg-white">
                    <div className=" flex">
                      <div className=" flex flex-col  justify-center  items-center sm:block">
                        <div className=" h-[87px] w-[72px] bg-[#F3F7FA] flex justify-center items-center rounded-[6px]">
                          <img
                            src={book}
                            className="h-[39px] w-[32px] "
                            alt="bookicon"
                          />
                        </div>
                        <div
                          className=" sm:hidden
                                  px-2 py-[5px] text-[#F38D15] font-mediumsm: bg-gray-50 rounded-md ml-4
                "
                          style={{ border: "1px solid green" }}
                        >
                          Ebook
                        </div>
                      </div>
                      <div className=" ml-4">
                        <span className=" flex">
                          <p className=" text-[#1F5095]  font-semibold">
                            Journal of chemical technology and biotechnology{" "}
                          </p>
                          <span
                            className="hidden sm:px-2 sm:py-[5px] sm:text-[#F38D15] sm:font-mediumsm: bg-gray-50 sm:rounded-md sm:block sm:ml-4"
                            style={{ border: "1px solid green" }}
                          >
                            Ebook
                          </span>
                        </span>
                        <p className=" mt-6 text-[#1F5095]">
                          by Wiley InterScience (Online service); Wiley Online
                          Library; Blieberger, Johann; Strohmeier, Alfred , 2019
                        </p>
                        <p className=" mt-2 text-[#1F5095]">
                          ISBN : 8878 87888 578
                        </p>
                      </div>
                    </div>
                    <div className=" flex flex-row">
                      <div className=" mr-3  rounded-full border w-[35px] h-[35px] flex justify-center items-center">
                        <img
                          src={bookmarkicon2}
                          className=" w-[10px] h-[12px]"
                        />{" "}
                      </div>
                      <div className=" mr-3  rounded-full border w-[35px] h-[35px] flex justify-center items-center">
                        <img src={icon} className=" w-[12px] h-[10px]" />
                      </div>
                      <div className=" mr-3  rounded-full border w-[35px] h-[35px] flex justify-center items-center">
                        <img src={linkicon} className=" w-[16px] h-[12px]" />
                      </div>
                    </div>
                  </div>
                ))}
                {/* mobile view ---------------------------------------------------------------- */}
                {books.map((e) => (
                  <div className="sm:hidden h-[225px] rounded-xl bg-blue py-4 px-2 flex mt-2 bg-white  flex-col">
                    <div className="flex w-full">
                      <p className=" text-[14px] text-[#1F5095] font-semibold">
                        Journal of chemical technology and biotechnology{" "}
                      </p>

                      <div className=" flex flex-row">
                        <div className=" mr-1  rounded-full border w-[30px] h-[30px] flex justify-center items-center">
                          <img
                            src={bookmarkicon2}
                            className=" w-[10px] h-[12px]"
                          />{" "}
                        </div>
                        <div className=" mr-1  rounded-full border w-[30px] h-[30px] flex justify-center items-center">
                          <img src={icon} className=" w-[12px] h-[10px]" />
                        </div>
                        <div className=" mr-1  rounded-full border w-[30px] h-[30px] flex justify-center items-center">
                          <img src={linkicon} className=" w-[16px] h-[12px]" />
                        </div>
                      </div>
                    </div>
                    <div className=" flex mt-4 justify-between">
                      <div className="">
                        <div className=" h-[87px] w-[72px] bg-[#F3F7FA] flex justify-center items-center rounded-[6px]">
                          <img src={book} className="h-[39px] w-[32px] " />
                        </div>
                        <div
                          className="
                                 mt-4 px-2 py-1 text-[#F38D15] font-mediumsm: bg-gray-50 rounded-md flex justify-center  items-center
                "
                          style={{ border: "1px solid green" }}
                        >
                          Ebook
                        </div>
                      </div>
                      <div className=" ml-5 text-[14px] font-medium">
                        <p className="text-[#1F5095]">
                          by Wiley InterScience (Online service); Wiley Online
                          Library
                        </p>
                        <p className="text-black">
                          Blieberger, Johann; Strohmeier, Alfred , 2019
                        </p>

                        <p className=" mt-2 text-[#1F5095]">
                          ISBN : 8878 87888 578
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className=" flex justify-center  mt-6 items-center">
                <div className=" rounded-full bg-[#3674CB] ml-2 w-8 h-8 flex justify-center text-white">
                  <button>&lt;</button>
                </div>
                <Pagination pageno={page} />
                <div className=" rounded-full bg-[#3674CB] ml-2 w-8 h-8 flex justify-center text-white">
                  <button>&gt;</button>
                </div>
              </div>
            </div>
          </div>
          {/* <Content />
          <Journel /> */}
        </span>
      </div>
      <Footer />
    </>
  );
}

export default SearchView;
