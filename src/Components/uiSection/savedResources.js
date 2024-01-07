import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import bookIcon from "../../images/Group 1000003119.png";
import cardimg from "../../images/economic.png";
import bookmarkicon from "../../images/Group 1000002939.png";
import book from "../../images/Group.png";
import icon from "../../images/gr.png";
import arrow from "../../images/arrow-up.png";
import linkicon from "../../images/Group 1000002938.png";
import bookmarkicon2 from "../../images/Vector.png";
import sort from "../../images/sort.png";
import candel from "../../images/candle.png";
import arrowdown from "../../images/Vector (Stroke).png";
import doubleprev from "../../images/First.png";
import singleprev from "../../images/Prev.png";
import doublenext from "../../images/Last.png";
import singlenext from "../../images/Next.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Table from "../uiElemnts/table";
import repeat from "../../images/repeat.png";
import favIcon from "../../images/book.png";

function SavedResources() {
  const href = window.location.pathname;
  const [activeTab, setActiveTab] = useState("Resources");

  const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13];
  var i = [1, 2, 3];
  var books = [1, 2, 3, 4, 5, 6, 7];
  var page = [1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      <Header />
      <div className=" flex">
        <Sidebar />

        <span className=" flex flex-col w-[100%] ">
          <span
            className=" flex items-center  sm:px-8  px-3 justify-between"
            style={{
              borderBottom: "1px solid lightgray",
              height: "70px",
              //   background: "grey",
            }}
          >
            <div className=" flex items-center">
              {activeTab === "Resources" ? (
                <>
                  <div
                    className=" p-3 rounded-full   bg-gray-100 mr-2 "
                    //   style={{ border: "1px solid grey" }}
                  >
                    <img src={bookIcon} className=" h-5 w-5 " alt="book-icon" />
                  </div>

                  <span className=" whitespace-nowrap text-[#1F5095] font-semibold text-[15px]">
                    Saved Resources
                  </span>
                </>
              ) : (
                <>
                  <div
                    className=" p-3 rounded-full   bg-gray-100 mr-2 "
                    //   style={{ border: "1px solid grey" }}
                  >
                    <img src={favIcon} className=" h-5 w-5 " alt="book-icon" />
                  </div>

                  <span className=" whitespace-nowrap text-[#1F5095] font-semibold text-[15px]">
                    My Favorites
                  </span>
                </>
              )}
            </div>
          </span>
          <div className="   px-[60px]  border-b">
            <div className=" flex w-[25%]  justify-around ">
              <div
                onClick={() => setActiveTab("Resources")}
                className={` ${
                  activeTab == "Resources"
                    ? "border-b-2 border-[#1F5095]"
                    : "text-[#454545] text-[14px] font-Poppins font-semibold opacity-[40%]"
                } pt-8 pb-3 pl-3 pr-3  text-[#1F5095] text-[14px] font-Poppins font-semibold cursor-pointer`}
              >
                Resources
              </div>

              <div
                className={` ${
                  activeTab == "Databases"
                    ? "border-b-2 border-[#1F5095]"
                    : "text-[#454545] text-[14px] font-Poppins font-semibold opacity-[40%]"
                } pt-8 pb-3 pl-3 pr-3  text-[#1F5095] text-[14px] font-Poppins font-semibold cursor-pointer`}
                onClick={() => setActiveTab("Databases")}
              >
                Databases
              </div>
            </div>
          </div>

          {activeTab === "Resources" && (
            <>
              <span className="sm:px-8  px-3 mt-8">
                <div className=" text-[12px] text-[#B3B3B3] font-medium leading-[20px] mb-2">
                  Select Type
                </div>
                <div className=" border  w-[550px] flex justify-between  items-center px-2 py-1 rounded-[8px]">
                  <span className=" bg-[#1F5095] text-white rounded-[8px] p-2 text-[14px]">
                    EJournals
                  </span>
                  <span className="text-[14px]"> EBooks</span>

                  <span className="text-[14px]">Research Paper</span>
                  <span className="text-[14px]">Newsletter</span>
                  <span className="text-[14px]">Newsletter</span>
                </div>
              </span>
              <div className="p-4 sm:p-10  bg-white">
                <div className=" flex justify-between mt-4">
                  <p className=" text-[#A3AED0] mt-2 text-[18px] font-semibold leading-[28px]">
                    Total saved resources :{" "}
                    <span className=" text-[#1F5095] font-semibold text-[20px]">
                      70
                    </span>
                  </p>
                  <div className=" flex">
                    <div className="px-2 h-[43px] w-[131px] rounded-[5px] border border-solid border-[#221FB9/0.14] mr-4 flex justify-around items-center">
                      <img
                        src={sort}
                        className=" w-[16px] h-[16px]"
                        alt="sorticon"
                      />
                      <span>Sort By: </span>
                      <img
                        src={arrowdown}
                        className=" w-[10px] h-[7px]"
                        alt="arrowdown"
                      />
                    </div>
                    <div className="px-2 h-[43px] w-[131px] rounded-[5px] border border-solid border-[#221FB9/0.14] flex justify-around items-center">
                      <img
                        src={candel}
                        className=" w-[16px] h-[16px]"
                        alt="candel"
                      />
                      <span>Filter</span>
                      <img
                        src={arrowdown}
                        className=" w-[10px] h-[7px]"
                        alt="arrowdown"
                      />
                    </div>
                  </div>
                </div>
                <div className=" mt-10 bg-[#F8F9FA] p-4 rounded-lg">
                  {books.map((e) => (
                    <div className=" h-[225px] rounded-xl sm:h-[158px]  bg-blue p-4 flex justify-between  mt-2 bg-white">
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
                            <span>
                              Journal of chemical technology and biotechnology{" "}
                            </span>
                            <span
                              className="hidden sm:px-2 sm:py-[5px] sm:text-[#F38D15] sm:font-mediumsm: bg-gray-50 sm:rounded-md sm:block sm:ml-4"
                              style={{ border: "1px solid green" }}
                            >
                              Ebook
                            </span>
                          </span>
                          <p className=" mt-6 text-[#1F5095]">
                            by Wiley InterScience (Online service); Wiley Online
                            Library; Blieberger, Johann; Strohmeier, Alfred ,
                            2019
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
                </div>
              </div>
              {/* pagination part to be rendered dinimically  */}
              {/* <div className=" flex justify-center  mt-6">
                <div className=" rounded-full  ml-2 flex justify-center text-white  border p-[12px]">
                  <img src={doubleprev} alt="doubleprev" />
                </div>
                <div className=" rounded-full  ml-2  flex justify-center text-white border p-[12px]">
                  <img src={singleprev} alt="singleprev" />
                </div>
                {page.map((e) => (
                  <div className=" rounded-full  ml-2 flex justify-center border  ">
                    <button className="p-[10px] ">{e}</button>
                  </div>
                ))}
                <div className=" rounded-full  ml-2 flex justify-center text-white  border p-[12px]">
                  <img src={singlenext} alt="doubleprev" />
                </div>
                <div className=" rounded-full  ml-2  flex justify-center text-white border p-[12px]">
                  <img src={doublenext} alt="singleprev" />
                </div>
              </div> */}
            </>
          )}
          {activeTab == "Databases" && (
            <>
              <div className=" flex justify-between mt-4 px-8">
                <p className=" text-[#A3AED0] mt-2 text-[18px] font-semibold leading-[28px]">
                  Total saved resources :{" "}
                  <span className=" text-[#1F5095] font-semibold text-[20px]">
                    70
                  </span>
                </p>
              </div>
              <div className="p-4 sm:p-10  bg-white flex flex-row justify-between">
                <div>
                  <h1 className=" text-[#1F5095] text-[23px]  font-semibold">
                    Check your saved databases
                  </h1>
                  <div className=" flex justify-between mt-2">
                    <p className=" text-[#A3AED0] mt-2 text-[14px]">
                      A curated collection of academic journals and research
                      papers
                    </p>
                  </div>
                </div>
                <div className="  flex justify-between mt-6">
                  <div className=" flex ">
                    <div>
                      <input
                        type="text"
                        className=" w-[367px] h-[43px] border mr-4  rounded-[5px] px-4 placeholder:text-[14px] opacity-[70%]"
                        placeholder="Search any title"
                      />
                    </div>
                    <div className="px-2 h-[43px] w-[105px] rounded-[5px] border border-solid border-[#221FB9/0.14] mr-4 flex  justify-center items-center bg-[#3674CB]">
                      <img
                        src={repeat}
                        className=" w-[18px] h-[18px] mr-2"
                        alt="arrowdown"
                      />
                      <span className=" text-white">Basic</span>
                    </div>
                    <div className="px-2 h-[43px] w-[131px] rounded-[5px] border border-solid border-[#221FB9/0.14] mr-4 flex justify-around items-center">
                      <img
                        src={sort}
                        className=" w-[16px] h-[16px]"
                        alt="sorticon"
                      />
                      <span>Sort By: </span>
                      <img
                        src={arrowdown}
                        className=" w-[10px] h-[7px]"
                        alt="arrowdown"
                      />
                    </div>
                    <div className="px-2 h-[43px] w-[131px] rounded-[5px] border border-solid border-[#221FB9/0.14] flex justify-around items-center">
                      <img
                        src={candel}
                        className=" w-[16px] h-[16px]"
                        alt="candel"
                      />
                      <span>Filter</span>
                      <img
                        src={arrowdown}
                        className=" w-[10px] h-[7px]"
                        alt="arrowdown"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" px-[35px] mb-6">
                <div className="bg-[#221FB9/0.2] mt-4  flex  flex-wrap ">
                  {arr1.map((e) => (
                    <div className=" w-[196px] h-[188px] flex flex-col border p-2 rounded-[5px] mr-[15px] mb-2">
                      <img
                        src={cardimg}
                        alt="cardimg"
                        className=" w-[177px] h-[110px] "
                      />
                      <div className=" mt-4 flex items-center ">
                        <span className=" w-[137px] h-[37px] flex justify-center items-center border text-[13px] text-[#1F5095] bg-[#E9E9F7] rounded-[5px]">
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
              </div>
            </>
          )}
        </span>
      </div>
      <Footer />
    </>
  );
}

export default SavedResources;
