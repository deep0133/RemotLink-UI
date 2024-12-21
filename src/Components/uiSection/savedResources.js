import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import bookIcon from "../../images/Group 1000003119.png";
import cardimg from "../../images/economic.png";
import bookmarkicon from "../../images/Group 1000002939.png";
import book from "../../images/Group.png";
import icon from "../../images/gr.png";
import linkicon from "../../images/Group 1000002938.png";
import bookmarkicon2 from "../../images/Vector.png";
import sort from "../../images/sort.png";
import candel from "../../images/candle.png";
import arrowdown from "../../images/Vector (Stroke).png";
import { useState } from "react";
import Table from "../uiElemnts/table";
import repeat from "../../images/repeat.png";
import favIcon from "../../images/book.png";
import MobileTable from "../mobile/mobileTable";
import Pagination from "../uiElemnts/pagination";

function SavedResources({
  logutOutHandler,
  institutionDetails,
  domain,
  notificationData,
}) {
  const [activeTab, setActiveTab] = useState("Resources");
  const [tabular, setTabular] = useState(false);

  const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  var books = [1, 2, 3, 4, 5, 6, 7];
  var page = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      <Header
        {...{ logutOutHandler, institutionDetails, domain, notificationData }}
      />
      <div className=' flex'>
        <span
          className=' md:block hidden'
          style={{ position: "sticky", top: "0", height: "100vh" }}
        >
          {" "}
          <Sidebar />{" "}
        </span>

        <span className=' flex flex-col w-[100%] px-[5%]'>
          <span
            className=' flex items-center justify-between'
            style={{
              borderBottom: "1px solid lightgray",
              height: "70px",
            }}
          >
            <div className=' flex items-center'>
              {activeTab === "Resources" ? (
                <>
                  <div className=' rounded-full   bg-gray-100 mr-2 '>
                    <img src={bookIcon} className=' h-5 w-5 ' alt='book-icon' />
                  </div>

                  <span className=' whitespace-nowrap text-[#1F5095] font-semibold text-[15px]'>
                    Saved Resources
                  </span>
                </>
              ) : (
                <>
                  <div className=' p-3 rounded-full   bg-gray-100 mr-2 '>
                    <img src={favIcon} className=' h-5 w-5 ' alt='book-icon' />
                  </div>

                  <span className=' whitespace-nowrap text-[#1F5095] font-semibold text-[15px]'>
                    My Favorites
                  </span>
                </>
              )}
            </div>
          </span>
          <div className='border-b'>
            <div className=' flex w-[25%]  justify-around '>
              <div
                onClick={() => setActiveTab("Resources")}
                className={` ${
                  activeTab === "Resources"
                    ? "border-b-2 border-[#1F5095]"
                    : "text-[#454545] text-[14px] font-Poppins font-semibold opacity-[40%]"
                } pt-8 pb-3 pl-3 pr-3  text-[#1F5095] text-[14px] font-Poppins font-semibold cursor-pointer`}
              >
                Resources
              </div>

              <div
                className={` ${
                  activeTab === "Databases"
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
              <span className=' mt-8'>
                <div className=' text-[12px] text-[#B3B3B3] font-medium leading-[20px] mb-2'>
                  Select Type
                </div>
                <div className=' border w-auto overflow-auto no-scrollbar gap-5 flex-nowrap sm:w-[450px] flex justify-between  items-center px-2 py-1 rounded-[8px]'>
                  <span className=' bg-[#1F5095] text-white rounded-[8px] p-2 text-[14px]'>
                    EJournals
                  </span>
                  <span className='text-[14px]'> EBooks</span>
                  <span className='text-[14px]'>EVideos</span>
                  <span className='text-[14px] text-nowrap'>
                    Other EResources
                  </span>
                </div>
              </span>
              <div className='py-4 sm:py-10  bg-white'>
                <div className=' flex sm:justify-between flex-col sm:flex-row mt-4'>
                  <p className=' text-[#A3AED0] mt-2 text-[18px] sm:w-auto pr-10 sm:p-0'>
                    Total saved resources :{" "}
                    <span className=' text-[#1F5095] font-semibold text-[23px] leading-[28px]'>
                      70
                    </span>
                  </p>
                  <div className=' flex  sm:justify-normal   mt-10 sm:mt-0'>
                    <div className='px-2 h-[43px] w-[131px] rounded-[5px] border border-solid border-[#221FB9/0.14] mr-4 flex justify-around items-center'>
                      <img
                        src={sort}
                        className=' w-[16px] h-[16px]'
                        alt='sorticon'
                      />
                      <span>Sort By: </span>
                      <img
                        src={arrowdown}
                        className=' w-[10px] h-[7px]'
                        alt='arrowdown'
                      />
                    </div>
                    <div className='px-2 h-[43px] w-[131px] rounded-[5px] border border-solid border-[#221FB9/0.14] flex justify-around items-center'>
                      <img
                        src={candel}
                        className=' w-[16px] h-[16px]'
                        alt='candel'
                      />
                      <span>Filter</span>
                      <img
                        src={arrowdown}
                        className=' w-[10px] h-[7px]'
                        alt='arrowdown'
                      />
                    </div>
                  </div>
                </div>
                <div className=' mt-10 bg-[#F8F9FA] p-4 rounded-lg'>
                  {/*web view--------------------------------------------------------- */}
                  {books.map((e) => (
                    <div className='hidden rounded-xl bg-blue p-4 sm:flex justify-between  mt-2 bg-white'>
                      <div className=' flex'>
                        <div className=' flex flex-col  justify-center  items-center sm:block'>
                          <div className=' h-[87px] w-[72px] bg-[#F3F7FA] flex justify-center items-center rounded-[6px]'>
                            <img
                              src={book}
                              className='h-[39px] w-[32px] '
                              alt='bookicon'
                            />
                          </div>
                        </div>
                        <div className=' ml-4'>
                          <span className=' flex'>
                            <p className=' text-[#1F5095]  font-semibold'>
                              Journal of chemical technology and biotechnology{" "}
                            </p>
                            <div className=''>
                              <div
                                className='mx-4 px-2 py-1 text-[#F38D15] font-mediumsm: bg-gray-50 rounded-md flex justify-center  items-center'
                                style={{ border: "1px solid green" }}
                              >
                                Ebook
                              </div>
                            </div>
                          </span>
                          <p className=' mt-6 text-[#1F5095]'>
                            by Wiley InterScience (Online service); Wiley Online
                            Library; Blieberger, Johann; Strohmeier, Alfred ,
                            2019
                          </p>
                          <p className=' mt-2 text-[#1F5095]'>
                            ISBN : 8878 87888 578
                          </p>
                        </div>
                      </div>
                      <div className=' flex flex-row'>
                        <div className=' mr-3  rounded-full border w-[35px] h-[35px] flex justify-center items-center'>
                          <img
                            src={bookmarkicon2}
                            className=' w-[10px] h-[12px]'
                            alt=''
                          />{" "}
                        </div>
                        <div className=' mr-3  rounded-full border w-[35px] h-[35px] flex justify-center items-center'>
                          <img
                            src={icon}
                            className=' w-[12px] h-[10px]'
                            alt=''
                          />
                        </div>
                        <div className=' mr-3  rounded-full border w-[35px] h-[35px] flex justify-center items-center'>
                          <img
                            src={linkicon}
                            className=' w-[16px] h-[12px]'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* mobile view ---------------------------------------------------------------- */}
                  {books.map((e) => (
                    <div className='sm:hidden rounded-xl bg-blue py-4 px-2 flex mt-2 bg-white  flex-col'>
                      <div className='flex w-full justify-between'>
                        <p className=' text-[14px] text-[#1F5095] font-semibold'>
                          Journal of chemical technology and biotechnology{" "}
                        </p>

                        <div className=' flex flex-row'>
                          <div className=' mr-1  rounded-full border w-[30px] h-[30px] flex justify-center items-center'>
                            <img
                              src={bookmarkicon2}
                              className=' w-[10px] h-[12px]'
                              alt=''
                            />{" "}
                          </div>
                          <div className=' mr-1  rounded-full border w-[30px] h-[30px] flex justify-center items-center'>
                            <img
                              src={icon}
                              className=' w-[12px] h-[10px]'
                              alt=''
                            />
                          </div>
                          <div className=' mr-1  rounded-full border w-[30px] h-[30px] flex justify-center items-center'>
                            <img
                              src={linkicon}
                              className=' w-[16px] h-[12px]'
                              alt=''
                            />
                          </div>
                        </div>
                      </div>
                      <div className=' flex mt-4'>
                        <div className=''>
                          <div className=' h-[87px] w-[72px] bg-[#F3F7FA] flex justify-center items-center rounded-[6px]'>
                            <img
                              src={book}
                              className='h-[39px] w-[32px] '
                              alt=''
                            />
                          </div>
                          <div
                            className='mt-4 px-2 py-1 text-[#F38D15] font-mediumsm: bg-gray-50 rounded-md flex justify-center  items-center'
                            style={{ border: "1px solid green" }}
                          >
                            Ebook
                          </div>
                        </div>
                        <div className=' ml-5 text-[14px] font-medium'>
                          <p className='text-[#1F5095]'>
                            by Wiley InterScience (Online service); Wiley Online
                            Library
                          </p>
                          <p className='text-black'>
                            Blieberger, Johann; Strohmeier, Alfred , 2019
                          </p>

                          <p className=' mt-2 text-[#1F5095]'>
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
          {activeTab === "Databases" && (
            <>
              <div className=' flex justify-between mt-4'>
                <p className=' text-[#A3AED0] mt-2 text-[18px] font-semibold leading-[28px]'>
                  Total saved resources :{" "}
                  <span className=' text-[#1F5095] font-semibold text-[20px]'>
                    70
                  </span>
                </p>
              </div>
              <div className='py-4 sm:py-10  bg-white flex flex-wrap flex-col sm:flex-row items-baseline gap-3 justify-between'>
                <div className='md:w-1/2 w-full'>
                  <h1 className=' text-[#1F5095] text-[23px]  font-semibold'>
                    Check your saved databases
                  </h1>
                  <div className=' flex justify-between mt-2'>
                    <p className=' text-[#A3AED0] mt-2 text-[14px]'>
                      A curated collection of academic journals and research
                      papers
                    </p>
                  </div>
                </div>
                <div className='w-autoflex flex-wrap justify-between'>
                  <div className=' flex w-atuo  flex-col sm:flex-row'>
                    <div className=' flex '>
                      <input
                        type='text'
                        className='h-[43px] border mr-4 grow rounded-[5px] px-4 placeholder:text-[14px] opacity-[70%]'
                        placeholder='Search any title'
                      />
                    </div>
                    <span className=' flex mt-6 sm:mt-0 flex-wrap gap-3'>
                      <div
                        className=' h-[43px] rounded-[5px] px-4 border border-solid border-[#221FB9/0.14] flex  justify-center items-center bg-[#3674CB] cursor-pointer  '
                        onClick={() => setTabular(!tabular)}
                      >
                        <img
                          src={repeat}
                          className=' w-[18px] h-[18px]'
                          alt='arrowdown'
                        />
                        <span className=' text-white'>{`${
                          !tabular ? "Basic" : "Tabular"
                        }`}</span>
                      </div>
                      <div className='h-[43px] px-4 rounded-[5px] border border-solid border-[#221FB9/0.14] gap-1 flex justify-around items-center cursor-pointer '>
                        <img
                          src={sort}
                          className=' w-[16px] h-[16px]'
                          alt='sorticon'
                        />
                        <span>Sort By: </span>
                        <img
                          src={arrowdown}
                          className=' w-[10px] h-[7px]'
                          alt='arrowdown'
                        />
                      </div>
                      <div className='h-[43px] px-4 rounded-[5px] gap-1 border border-solid border-[#221FB9/0.14] flex justify-around items-center cursor-pointer'>
                        <img
                          src={candel}
                          className=' w-[16px] h-[16px]'
                          alt='candel'
                        />
                        <span>Filter</span>
                        <img
                          src={arrowdown}
                          className=' w-[10px] h-[7px]'
                          alt='arrowdown'
                        />
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              {tabular ? (
                <>
                  {/* for web view ----------------------------- */}
                  <div className='sm:block hidden px-10 mb-6'>
                    <Table />
                    <Pagination pageno={page} />
                  </div>
                  {/* for mobile view --------------------------- */}
                  <div className='block sm:hidden px-4 mb-6'>
                    <MobileTable />
                    <Pagination pageno={page} />
                  </div>
                </>
              ) : (
                <div className='bg-[#221FB9/0.2] mt-4 grid  md:grid-cols-3 grid-cols-2 gap-5 lg:grid-cols-4'>
                  {arr1.map((e) => (
                    <div className=' flex flex-col border p-2 rounded-[5px] mr-2 mb-2'>
                      <img
                        src={cardimg}
                        alt='cardimg'
                        className=' h-[110px] object-cover w-full '
                      />
                      <div className=' mt-4 flex items-center '>
                        <span className='grow py-1 flex justify-center items-center border sm:text-[13px] text-[8px] text-[#1F5095] bg-[#E9E9F7] rounded-[5px]'>
                          Economic Outlook
                        </span>
                        <img
                          src={bookmarkicon}
                          className=' ml-4  w-[32px] h-[32px]  '
                          alt='bookmark-icon'
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </span>
      </div>
      <Footer {...{ institutionDetails, domain }} />
    </>
  );
}

export default SavedResources;
