import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import bookIcon from "../../images/book.png";
import cardimg from "../../images/economic.png";
import book from "../../images/Group.png";
import arrow from "../../images/arrow-up.png";
import icon from "../../images/gr.png";
import bookmarkicon from "../../images/Group 1000002939.png";
import linkicon from "../../images/Group 1000002938.png";
import bookmarkicon2 from "../../images/Vector.png";
import sort from "../../images/sort.png";
import candel from "../../images/candle.png";
import arrowdown from "../../images/Vector (Stroke).png";
import firstimg from "../../images/Group 1000003079.png";
import secondimg from "../../images/Group 1000003080.png";
import thirdimg from "../../images/Group 1000003081.png";
import fourthimg from "../../images/Group 1000003082.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Table from "../uiElemnts/table";
import MobileTable from "../mobile/mobileTable";
import Pagination from "../uiElemnts/pagination";

function Resources() {
  const href = window.location.pathname;
  const [activeTab, setActiveTab] = useState("catalogue");

  const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13];
  var i = [1, 2, 3];
  var books = [1, 2, 3, 4, 5, 6, 7];
  var page = [1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      <Header />
      <div className=" flex">
        <span className=" hidden sm:block sm:h-auto">
          <Sidebar />
        </span>
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
              <div
                className=" p-3 rounded-full   bg-gray-100 mr-2 "
                //   style={{ border: "1px solid grey" }}
              >
                <img src={bookIcon} className=" h-5 w-5 " alt="book-icon" />
              </div>

              <span className=" whitespace-nowrap text-[#1F5095] font-semibold text-[15px]">
                Explore the Resources Catalogue
              </span>
            </div>
            <div className="hidden sm:block">
              <span className=" whitespace-nowrap text-[#1F5095]  text-[14px] border-b border-[#1F5095] mr-4">
                Show A to Z Resources
              </span>
              <span className=" whitespace-nowrap text-[#BEBEBE]  text-[12px]">
                Show A to Z Resources
              </span>
            </div>
          </span>
          <div className="   px-[60px]  border-b">
            <div className=" flex sm:w-[35%]  whitespace-nowrap justify-around ">
              <div
                onClick={() => setActiveTab("catalogue")}
                className={` ${
                  activeTab == "catalogue"
                    ? "border-b-2 border-[#1F5095]"
                    : "text-[#454545] text-[14px] font-Poppins font-semibold opacity-[40%]"
                } pt-8 pb-3 pl-3 pr-3  text-[#1F5095] text-[14px] font-Poppins font-semibold cursor-pointer`}
              >
                Catalogue
              </div>

              <div
                className={` ${
                  activeTab == "site"
                    ? "border-b-2 border-[#1F5095]"
                    : "text-[#454545] text-[14px] font-Poppins font-semibold opacity-[40%]"
                } pt-8 pb-3 pl-3 pr-3  text-[#1F5095] text-[14px] font-Poppins font-semibold cursor-pointer`}
                onClick={() => setActiveTab("site")}
              >
                Sites / Databases
              </div>

              <div className=" pt-8 pb-3 pl-3 pr-3  text-[#454545] text-[14px] font-Poppins font-semibold opacity-[40%] cursor-pointer">
                Library / OPAC
              </div>
            </div>
          </div>
          <div className="p-4 sm:p-10  bg-white">
            <h1 className=" text-[#1F5095] text-[23px]  font-semibold">
              Popular Databases to cater you work research needs
            </h1>
            <p className=" text-[#A3AED0] mt-2 text-[14px]">
              A curated collection of academic journals and research papers
            </p>
          </div>
          {activeTab === "catalogue" && (
            <>
              <div className="bg-[#221FB9/0.2] mt-4  flex  flex-wrap sm:py-6 sm:px-10 sm:justify-normal justify-center">
                {arr1.map((e) => (
                  <div className=" w-[115px] h-[122px] sm:w-[210px] sm:h-[188px] flex flex-col border p-2 rounded-[5px] mr-2 mb-2">
                    <img
                      src={cardimg}
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
              <div className="p-4 sm:p-10  bg-white">
                <h1 className=" text-[#1F5095] text-[23px]  font-semibold sm:w-auto pr-10 sm:p-0">
                  Trending Resources throughout
                </h1>
                <div className=" flex sm:justify-between flex-col sm:flex-row mt-4">
                  <p className=" text-[#A3AED0] mt-2 text-[14px] sm:w-auto pr-10 sm:p-0">
                    A curated collection of academic journals and research
                    papers
                  </p>
                  <div className=" flex justify-end sm:justify-normal   mt-10 sm:mt-0">
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
                            <img
                              src={linkicon}
                              className=" w-[16px] h-[12px]"
                            />
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
                {/* <div className=" mt-4">
                  <Pagination pageno={page} />
                </div> */}
                <div className="  mt-6">
                  <div className="p-4 sm:p-10  bg-white">
                    <h1 className=" text-[#1F5095] text-[23px]  font-semibold">
                      E-NEWSPAPERS AND MAGAZINES
                    </h1>
                    <p className=" text-[#A3AED0] mt-2 text-[14px]">
                      A curated collection of academic journals and research
                      papers
                    </p>
                  </div>
                  <div className=" flex flex-col">
                    <img src={firstimg} alt="firstimg" className="h-[150px]" />
                    <img
                      src={secondimg}
                      alt="secindimg"
                      className="h-[150px]"
                    />
                    <img src={thirdimg} alt="thirdimg" className="h-[150px]" />
                    <img
                      src={fourthimg}
                      alt="fourthimg"
                      className="h-[150px]"
                    />
                  </div>
                </div>
              </div>
            </>
          )}
          {activeTab == "site" && (
            <>
              <div className="bg-[#221FB9/0.2] mt-4  flex  flex-wrap sm:py-6 sm:px-10 sm:justify-normal justify-center">
                {arr2.map((e) => (
                  <div className=" w-[115px] h-[122px] sm:w-[210px] sm:h-[188px] flex flex-col border p-2 rounded-[5px] mr-2 mb-2">
                    <img
                      src={cardimg}
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

              <div className="p-4 sm:p-10  bg-white">
                <h1 className=" text-[#1F5095] text-[23px]  font-semibold">
                  Get the acces to all databases here
                </h1>
                <div className=" flex justify-between mt-2">
                  <p className=" text-[#A3AED0] mt-2 text-[14px]">
                    A curated collection of academic journals and research
                    papers
                  </p>
                </div>
                {/* web view filter  */}
                <div className=" hidden sm:flex justify-between mt-6">
                  <div className="px-2 h-[43px] w-[156px] rounded-[5px] border border-solid border-[#221FB9/0.14] mr-4 flex justify-around items-center">
                    <span>New Category</span>
                    <img
                      src={arrowdown}
                      className=" w-[10px] h-[7px]"
                      alt="arrowdown"
                    />
                  </div>

                  <div className=" flex ">
                    <div>
                      <input
                        type="text"
                        className=" w-[367px] h-[43px] border mr-4  rounded-[5px] px-4 placeholder:text-[14px] opacity-[70%]"
                        placeholder="Search any title"
                      />
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
                {/* mobile view filter*/}
                <div className=" sm:hidden flex justify-between mt-6">
                  <div className="px-2 h-[43px] w-[120px]  rounded-[5px] border border-solid border-[#221FB9/0.14] mr-4 flex justify-around items-center">
                    <span>Category</span>
                    <img
                      src={arrowdown}
                      className=" w-[10px] h-[7px]"
                      alt="arrowdown"
                    />
                  </div>

                  <div className=" flex ">
                    <div></div>
                    <div className="px-2 h-[43px] w-[115px] rounded-[5px] border border-solid border-[#221FB9/0.14] mr-1 flex justify-around items-center">
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
                    <div className="px-2 h-[43px] w-[115px] rounded-[5px] border border-solid border-[#221FB9/0.14] flex justify-around items-center">
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
              {/* for web view ----------------------------- */}
              <div className="sm:block hidden px-10 mb-6">
                <Table />
                <Pagination pageno={page} />
              </div>
              {/* for mobile view --------------------------- */}
              <div className="block sm:hidden px-4 mb-6">
                <MobileTable />
                <Pagination pageno={page} />
              </div>
            </>
          )}
        </span>
      </div>
      <Footer />
    </>
  );
}

export default Resources;
