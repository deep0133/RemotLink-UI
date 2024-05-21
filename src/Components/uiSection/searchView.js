import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import search from "../../images/search-normal.svg";
import bin from "../../images/trash.png";
import book from "../../images/Group.png";
import icon from "../../images/gr.png";
import sort from "../../images/sort.png";
import arrowdown from "../../images/Vector (Stroke).png";
import bookmarkicon2 from "../../images/Vector.png";
import Pagination from "../uiElemnts/pagination";

import linkicon from "../../images/Group 1000002938.png";
import FilterComponent from "../uiElemnts/FilterComponent";

function SearchView({ logutOutHandler, institutionDetails, domain }) {
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
  var books = [1, 2, 3, 4, 5, 6, 7];
  var page = [1, 2, 3];
  const [sortBy, setSortBy] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  return (
    <>
      <Header {...{ logutOutHandler, institutionDetails, domain }} />
      <div className=' flex flex-1 border-2 border-green-500'>
        <span className=' hidden sm:block'>
          <Sidebar />
        </span>
        <span className=' flex flex-col w-full sm:w-[calc(100%-96px)]'>
          <span
            className=' flex items-center sm:px-8  px-3'
            style={{
              borderBottom: "1px solid lightgray",
              height: "70px",
            }}
          >
            <div className=' p-3 rounded-full   bg-gray-300 mr-2 '>
              <img src={search} className=' h-5 w-5 ' alt='search' />
            </div>

            <span className=' whitespace-nowrap text-[#1F5095] font-semibold texx-[15px]'>
              Search Catalogue
            </span>
          </span>
          <div className='p-4 sm:p-10 sm:bg-[#f6f6f6] bg-white '>
            <h1 className=' text-[#1F5095] text-[23px]  font-semibold'>
              Find articles,ejournals,ebooks that are in need of from our
              E-Resources
            </h1>
            <p className=' text-[#A3AED0] mt-2'>
              Find articles,ejournals, ebooks that you are in need of from our
              10000+ repo
            </p>
            <div className='mt-2 sm:flex flex-wrap sm:mt-4'>
              <div className='flex flex-1'>
                <input
                  type=' text'
                  style={{ border: "1px solid lightgray" }}
                  className='w-full h-[48px] sm:min-w-[350px] flex-1 py-2 px-4 sm:mr-4 rounded-lg'
                  placeholder='Search anything'
                />
              </div>
              <div className='flex gap-2 max-[1051px]:mt-2 flex-wrap'>
                {btn.map((e) => (
                  <button
                    className='px-5 h-[48px] rounded-lg sm:mr-2  bg-white  whitespace-nowrap  '
                    style={{ border: "1px solid lightgray" }}
                  >
                    <span className=' flex items-center justify-center'>
                      <img src={arrowdown} className='m-2' alt='sorticon' />
                      {e}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <div className=' flex flex-wrap sm:flex-nowraps'>
              <div
                className=' flex flex-col p-4 mt-4 '
                style={{
                  borderRight: "1px solid  lightgray",
                  width: "fit-content",
                }}
              >
                <span className=' text-[#033086] font-normal'>
                  Total Result
                </span>
                <span className=' font-semibold'>100</span>
              </div>
              {count.map((e) => (
                <div
                  className=' flex flex-col p-4 mt-4 '
                  style={{ width: "fit-content" }}
                >
                  <span className=' text-[#033086] font-normal'>
                    {e?.heading}
                  </span>
                  <span className=' font-semibold'>{e?.count}</span>
                </div>
              ))}
            </div>
            <div className=' flex  mt-8 '>
              <div className='sm:flex sm:items-center flex-row '>
                <div className=' text-black font-medium text-[14px] mt-2 sm:mt-0 mb-2 sm:mb-0'>
                  Filter:
                </div>
                <div className=' flex flex-wrap'>
                  {count.map((e) => (
                    <div className='ml-4 bg-[#033086] w-[100px] sm:w-[120px] sm:h-[40px] h-[35px] text-white flex justify-center  items-center rounded-[20px] mb-2'>
                      <span className=' text-[11px] sm:text-base'>
                        {e?.btn}
                      </span>
                      <span className='p-[6px] bg-red-600 sm:p-2 rounded-full ml-2'>
                        <img src={bin} className=' ' alt='' />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className=' flex justify-end'>
              <div
                onClick={() => setSortBy(!sortBy)}
                className='relative px-2 h-[43px] w-[131px] cursor-pointer rounded-[5px] border border-solid border-[#221FB9/0.14] mr-4 flex justify-around items-center'
              >
                <img src={sort} className=' w-[16px] h-[16px]' alt='sorticon' />
                <span>Sort By: </span>
                <img
                  src={arrowdown}
                  className=' w-[10px] h-[7px]'
                  alt='arrowdown'
                />
                {sortBy && (
                  <div className='absolute flex flex-col space-y-2 w-full top-11 right-0 bg-white rounded-[5px]'>
                    <p className='border-b px-3 py-2 cursor-pointer'>Asc</p>
                    <p className='px-3 pb-2 cursor-pointer'>Desc</p>
                  </div>
                )}
              </div>
              <div className=' md:hidden   relative '>
                <div
                  onClick={() => {
                    setShowFilter(!showFilter);
                  }}
                  className='px-2 h-[43px] cursor-pointer w-[131px] rounded-[5px] border border-solid border-[#221FB9/0.14] flex justify-around items-center'
                >
                  <img
                    src={sort}
                    className='w-[16px] h-[16px]'
                    alt='sorticon'
                  />
                  <span>Filter By: </span>
                  <img
                    src={arrowdown}
                    className=' w-[10px] h-[7px]'
                    alt='arrowdown'
                  />
                </div>
                {showFilter && (
                  <div className='md:hidden text-nowrap absolute  right-0 top-12 bg-white p-3 shadow-md z-50'>
                    <FilterComponent />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='flex sm:p-8 p-0 bg-[#F8F9FA]'>
            <div
              className=' hidden  mt-5 md:block w-[30%] shrink-0'
              style={{ borderRight: "1px solid lightgray" }}
            >
              <FilterComponent />
            </div>
            <div className='w-full md:w-[70%]'>
              <div className=' bg-[#F8F9FA] p-4 rounded-lg'>
                {/*web view--------------------------------------------------------- */}
                {books.map((e) => (
                  <div className='hidden  rounded-xl bg-blue p-4 sm:flex justify-between  mt-2 bg-white'>
                    <div className=' flex'>
                      <div className=' flex flex-col justify-center  items-center sm:block'>
                        <div className=' h-[87px] w-[72px] bg-[#F3F7FA] flex justify-center items-center rounded-[6px]'>
                          <img
                            src={book}
                            className='h-[39px] w-[32px] '
                            alt='bookicon'
                          />
                        </div>
                        <div
                          className=' sm:hidden px-2 py-[5px] text-[#F38D15] font-mediumsm: bg-gray-50 rounded-md ml-4'
                          style={{ border: "1px solid green" }}
                        >
                          Ebook
                        </div>
                      </div>
                      <div className='ml-4'>
                        <span className=' flex'>
                          <p className=' text-[#1F5095]  font-semibold'>
                            Journal of chemical technology and biotechnology{" "}
                          </p>
                          <div>
                            <div
                              className='mx-4 px-2 py-1 text-[#F38D15] font-medium sm:bg-gray-50 rounded-md flex justify-center  items-center'
                              style={{ border: "1px solid green" }}
                            >
                              Ebook
                            </div>
                          </div>
                        </span>
                        <p className=' mt-6 text-[#1F5095]'>
                          by Wiley InterScience (Online service); Wiley Online
                          Library; Blieberger, Johann; Strohmeier, Alfred , 2019
                        </p>
                        <p className=' mt-2 text-[#1F5095]'>
                          ISBN : 8878 87888 578
                        </p>
                      </div>
                    </div>
                    <div className=' hidden lg:flex flex-row '>
                      <div className='mr-3  rounded-full border w-[35px] h-[35px] flex justify-center items-center'>
                        <img
                          src={bookmarkicon2}
                          className=' w-[10px] h-[12px]'
                          alt=''
                        />{" "}
                      </div>
                      <div className=' mr-3  rounded-full border w-[35px] h-[35px] flex justify-center items-center'>
                        <img src={icon} alt='' className=' w-[12px] h-[10px]' />
                      </div>
                      <div className=' mr-3  rounded-full border w-[35px] h-[35px] flex justify-center items-center'>
                        <img
                          src={linkicon}
                          alt=''
                          className=' w-[16px] h-[12px]'
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
                        <div>
                          <div
                            className='mt-4 px-2 h-fit py-1 text-[#F38D15] font-medium sm:bg-gray-50 rounded-md flex justify-center  items-center'
                            style={{ border: "1px solid green" }}
                          >
                            Ebook
                          </div>
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
              <div className=' flex justify-center  mt-6 items-center'>
                <div className=' rounded-full bg-[#3674CB] ml-2 w-8 h-8 flex justify-center text-white'>
                  <button>&lt;</button>
                </div>
                <Pagination pageno={page} />
                <div className=' rounded-full bg-[#3674CB] ml-2 w-8 h-8 flex justify-center text-white'>
                  <button>&gt;</button>
                </div>
              </div>
            </div>
          </div>
          {/* <Content />
          <Journel /> */}
        </span>
      </div>
      <Footer {...{ institutionDetails, domain }} />
    </>
  );
}

export default SearchView;
