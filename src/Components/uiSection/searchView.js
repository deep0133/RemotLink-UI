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

function SearchView() {
  const [Open, setOpen] = useState(false);
  const btn = [1, 2, 3];
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
  var page = [1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      <Header />
      <div className=" flex">
        <Sidebar />
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
            <div className=" mt-2 sm:flex">
              <input
                type=" text"
                style={{ border: "1px solid lightgray" }}
                className="w-[307px] sm:w-[400px] p-[10px] mr-4 rounded-lg"
                placeholder="Search anything"
              />
              <div className="flex sm:block mt-2">
                {btn.map((e) => (
                  <button
                    className=" px-[4px] py-2 sm:p-[10px] rounded-lg mr-2  bg-white "
                    style={{ border: "1px solid lightgray" }}
                  >
                    Search Type
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
                    T{e?.heading}
                  </span>
                  <span className=" font-semibold">{e?.count}</span>
                </div>
              ))}
            </div>
            <div className=" flex  mt-8 sm:flex-row sm:justify-between flex-col">
              <div className="sm:flex sm:items-center   flex-row ">
                <span>Flter:</span>
                <div className=" flex flex-wrap sm:flex-nowrap  ">
                  {count.map((e) => (
                    <div className="mt-4 ml-4 bg-[#033086] w-[100px] sm:w-[120px] sm:h-[40px] h-[35px] text-white flex justify-center  items-center rounded-[20px] ">
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
              <div className=" flex mt-[100px] justify-end sm:block">
                <div
                  className="px-6 py-2"
                  style={{ border: "1px solid lightgray" }}
                >
                  Sort By
                </div>
                <div
                  className="sm:hidden px-6 py-2 ml-2"
                  style={{ border: "1px solid lightgray" }}
                >
                  Filter By
                </div>
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
              {books.map((e) => (
                <div className=" h-[225px] rounded-xl sm:h-[158px] sm:ml-4 bg-blue p-4 flex justify-between bg-[#faf8f8] mt-2">
                  <div className=" flex">
                    <div className=" flex flex-col  justify-center  items-center sm:block">
                      <div className=" h-[87px] w-[72px] bg-[#F3F7FA] flex justify-center items-center rounded-[6px]">
                        <img src={book} className="h-[39px] w-[32px] " />
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
                        Library; Blieberger, Johann; Strohmeier, Alfred , 2019
                      </p>
                      <p className=" mt-2 text-[#1F5095]">
                        ISBN : 8878 87888 578
                      </p>
                    </div>
                  </div>
                  <div className=" flex flex-row">
                    {i.map((e) => (
                      <div className=" mr-3 ">
                        <img src={icon} className=" w-[9px] h-[12px]" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className=" flex justify-center  mt-6">
                <div className=" rounded-full bg-[#3674CB] ml-2 w-8 h-8 flex justify-center text-white">
                  <button>&lt;</button>
                </div>
                {page.map((e) => (
                  <div className=" rounded-full bg-[#3674CB] ml-2 w-8 h-8 flex justify-center text-white">
                    <button>{e}</button>
                  </div>
                ))}
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
