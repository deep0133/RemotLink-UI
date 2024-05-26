import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
// import search from "../../images/search-normal.svg";
import book from "../../images/Group.png";
import sort from "../../images/sort.png";
import arrowdown from "../../images/Vector (Stroke).png";

import FilterComponent from "../uiElemnts/FilterComponent";
import useFetch from "../../hooks/useFetch";
import PaginationWithLibrary from "../uiElemnts/PaginationWithLibrary";

function SearchView({ logutOutHandler, institutionDetails, domain }) {
  const {
    searchViewData,
    searchViewLoading,
    searchViewPageHandler,
    searchViewFilterData,
    searchViewFilterLoading,
    searchViewFilterationDataFetch,
    increaseAccessCount,
  } = useFetch();

  const [sortBy, setSortBy] = useState(false);
  const [sortByValueTitle, setSortByValueTitle] = useState("Created_at");
  const [sortByValue, setSortByValue] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const [query, setQuery] = useState("");

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    searchViewPageHandler("&page=1&page_size=10");
    searchViewFilterationDataFetch();
  }, []);

  const selectedFilteration = (filteration) => {
    setQuery(filteration);
    let newquery = filteration;
    if (search !== "") {
      newquery = search + "&" + filteration;
    }
    if (sortByValue && sortByValueTitle) {
      newquery += "&sort_by=" + sortByValueTitle + "&sort_order=" + sortByValue;
    }
    newquery = `${newquery}&page=${currentPage}&page_size=10`;
    searchViewPageHandler(newquery);
  };

  const submitSearchQuery = (pageNo) => {
    let newquery = "";
    if (search && search !== "") {
      if (query && query !== "") {
        newquery = search + "&" + query;
      } else newquery = search;
    } else {
      if (query && query !== "") {
        newquery = query;
      }
    }
    if (sortByValue && sortByValueTitle) {
      newquery += "&sort_by=" + sortByValueTitle + "&sort_order=" + sortByValue;
    }
    newquery += `&page=${pageNo}&page_size=10`;
    searchViewPageHandler(decodeURIComponent(newquery));
    setCurrentPage((prev) => pageNo);
  };

  useEffect(() => {
    if (search === "") {
      submitSearchQuery(1);
    }
  }, [search]);

  useEffect(() => {
    if (sortByValue && sortByValueTitle) {
      let newquery = "";
      if (search && search !== "") {
        if (query && query !== "") {
          newquery = search + "&" + query;
        } else newquery = search;
      } else {
        if (query && query !== "") {
          newquery = query;
        }
        newquery +=
          "&sort_by=" + sortByValueTitle + "&sort_order=" + sortByValue;
        newquery += `&page=${currentPage}&page_size=10`;
        searchViewPageHandler(decodeURIComponent(newquery));
      }
    }
  }, [sortByValue, sortByValueTitle]);

  return (
    <>
      <Header {...{ logutOutHandler, institutionDetails, domain }} />
      <div className=' flex flex-1 border-2 border-green-500'>
        <span
          className=' hidden sm:block'
          style={{ position: "sticky", top: "0", height: "100vh" }}
        >
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
              <div className='flex w-full sm:max-w-[550px]'>
                <input
                  type=' text'
                  style={{ border: "1px solid lightgray" }}
                  className='w-full grow h-[48px]   flex-1 py-2 px-4 sm:mr-4 rounded-lg'
                  placeholder='Search anything'
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  aria-label='Search anything'
                />
              </div>
              <div className='flex gap-2 max-[1051px]:mt-2 flex-wrap'>
                <button
                  disabled={search?.length === 0}
                  onClick={() => {
                    submitSearchQuery(1);
                  }}
                  className='px-5 h-[48px] rounded-lg sm:mr-2  bg-white  whitespace-nowrap  '
                  style={{
                    border: "1px solid lightgray",
                    cursor: search?.length === 0 ? "not-allowed" : "pointer",
                  }}
                >
                  <span className=' flex items-center justify-center'>
                    Search
                  </span>
                </button>
              </div>
            </div>
            {/* -------------Count of Data-------------- */}
            <div className=' flex flex-wrap sm:flex-nowraps'>
              <div
                className=' flex flex-col p-4 mt-4 '
                style={{
                  borderRight: "1searchViewPageHandlerpx solid  lightgray",
                  width: "fit-content",
                }}
              >
                <span className=' text-[#033086] font-normal'>
                  Total Result
                </span>
                <span className=' font-semibold'>
                  {" "}
                  {searchViewData?.total_results}
                </span>
              </div>
              <div
                className=' flex flex-col p-4 mt-4 '
                style={{
                  borderRight: "1px solid  lightgray",
                  width: "fit-content",
                }}
              >
                <span className=' text-[#033086] font-normal'>EJournals</span>
                <span className=' font-semibold'>
                  {" "}
                  {searchViewData?.EJournals}
                </span>
              </div>

              <div
                className=' flex flex-col p-4 mt-4 '
                style={{
                  borderRight: "1px solid  lightgray",
                  width: "fit-content",
                }}
              >
                <span className=' text-[#033086] font-normal'>EBooks</span>
                <span className=' font-semibold'>
                  {" "}
                  {searchViewData?.EBooks}
                </span>
              </div>

              <div
                className=' flex flex-col p-4 mt-4 '
                style={{
                  borderRight: "1px solid  lightgray",
                  width: "fit-content",
                }}
              >
                <span className=' text-[#033086] font-normal'>EVideos</span>
                <span className=' font-semibold'>
                  {" "}
                  {searchViewData?.EVideos}
                </span>
              </div>

              <div
                className=' flex flex-col p-4 mt-4 '
                style={{
                  borderRight: "1px solid  lightgray",
                  width: "fit-content",
                }}
              >
                <span className=' text-[#033086] font-normal'>
                  Other EResources
                </span>
                <span className=' font-semibold'>
                  {" "}
                  {searchViewData?.other_EResources}
                </span>
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
                  <div className='absolute shadow-lg flex flex-col w-full top-11 right-0 bg-white rounded-[5px]'>
                    <p
                      onClick={() => {
                        setSortByValue("");
                        setSortByValueTitle("");
                        let newquery = "";
                        if (search && search !== "") {
                          if (query && query !== "") {
                            newquery = search + "&" + query;
                          } else newquery = search;
                        } else {
                          if (query && query !== "") {
                            newquery = query;
                          }
                          newquery += `&page=${currentPage}&page_size=10`;
                          searchViewPageHandler(decodeURIComponent(newquery));
                        }
                      }}
                      style={{
                        background: sortByValue === "" ? "#c7c7c7" : "",
                      }}
                      className='px-3 border-b pb-2 cursor-pointer'
                    >
                      Default
                    </p>
                    <p
                      style={{
                        background:
                          sortByValue === "asc" && sortByValueTitle === "title"
                            ? "#c7c7c7"
                            : "",
                      }}
                      onClick={() => {
                        setSortByValue("asc");
                        setSortByValueTitle("title");
                      }}
                      className='border-b px-3 py-2 cursor-pointer'
                    >
                      Title : Asc
                    </p>
                    <p
                      style={{
                        background:
                          sortByValue === "desc" && sortByValueTitle === "title"
                            ? "#c7c7c7"
                            : "",
                      }}
                      onClick={() => {
                        setSortByValue("desc");
                        setSortByValueTitle("title");
                      }}
                      className='px-3 border-b pb-2 cursor-pointer'
                    >
                      Title : Desc
                    </p>

                    <p
                      style={{
                        background:
                          sortByValue === "asc" &&
                          sortByValueTitle === "description"
                            ? "#c7c7c7"
                            : "",
                      }}
                      onClick={() => {
                        setSortByValue("asc");
                        setSortByValueTitle("description");
                      }}
                      className='px-3 border-b pb-2 cursor-pointer'
                    >
                      Description : Asc
                    </p>
                    <p
                      style={{
                        background:
                          sortByValue === "desc" &&
                          sortByValueTitle === "description"
                            ? "#c7c7c7"
                            : "",
                      }}
                      onClick={() => {
                        setSortByValue("desc");
                        setSortByValueTitle("description");
                      }}
                      className='px-3 border-b pb-2 cursor-pointer'
                    >
                      Description : Desc
                    </p>
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
                  <div className='left md:hidden text-nowrap absolute  right-0 top-12 bg-white p-3 shadow-md z-50'>
                    <FilterComponent
                      setCurrentPage={setCurrentPage}
                      selectedFilteration={selectedFilteration}
                      searchViewFilterData={searchViewFilterData}
                      searchViewFilterLoading={searchViewFilterLoading}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='flex sm:p-8 p-0 bg-[#F8F9FA]'>
            <div
              className='left hidden  mt-5 md:block w-[30%] shrink-0'
              style={{ borderRight: "1px solid lightgray" }}
            >
              <FilterComponent
                setCurrentPage={setCurrentPage}
                selectedFilteration={selectedFilteration}
                searchViewFilterData={searchViewFilterData}
                searchViewFilterLoading={searchViewFilterLoading}
              />
            </div>
            <div className='right w-full md:w-[70%]'>
              <div className=' bg-[#F8F9FA] p-4 rounded-lg'>
                {searchViewLoading
                  ? "Loading..."
                  : searchViewData && searchViewData.data.length
                  ? searchViewData.data?.map((val, i) => (
                      <BookCard
                        key={i}
                        data={val}
                        increaseAccessCount={increaseAccessCount}
                      />
                    ))
                  : "No Data Found"}
              </div>
              {searchViewData && searchViewData.data?.length > 0 && (
                <div className=' flex justify-center  mt-6 items-center'>
                  <PaginationWithLibrary
                    currentPage={currentPage}
                    previousLink={currentPage > 0 ? currentPage - 1 : null}
                    nextLink={
                      currentPage <
                      (searchViewData && searchViewData.total_results)
                        ? currentPage + 1
                        : null
                    }
                    totalItems={searchViewData && searchViewData.total_results}
                    itemsPerPage={10}
                    onPageChange={(pageNo) => {
                      submitSearchQuery(pageNo);
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </span>
      </div>
      <Footer {...{ institutionDetails, domain }} />
    </>
  );
}

const BookCard = ({ data, increaseAccessCount }) => {
  return (
    <div
      onClick={() => {
        increaseAccessCount(data.id);
        window.open(data?.current_issue_url, "_blank");
      }}
      className='rounded-xl bg-blue p-4 sm:flex cursor-pointer hover:shadow-lg duration-200 justify-between  mt-2 bg-white'
    >
      <div className=' flex'>
        <div className=' flex flex-col justify-center  items-center sm:block'>
          <div className=' h-[87px] w-[72px] bg-[#F3F7FA] flex justify-center items-center rounded-[6px]'>
            <img src={book} className='h-[39px] w-[32px] ' alt='bookicon' />
          </div>
          <div
            className=' sm:hidden px-2 py-[5px] text-[#F38D15] font-mediumsm: bg-gray-50 rounded-md ml-4'
            style={{ border: "1px solid green" }}
          >
            {data.resource_type || "---"}
          </div>
        </div>
        <div className='ml-4'>
          <span className=' flex'>
            <p className=' text-[#1F5095]  font-semibold'>
              {/* Journal of chemical technology and biotechnology{" "} */}
              {data.title || "---"}
            </p>
            <div>
              <div
                className='mx-4 px-2 py-1 text-[#F38D15] font-medium sm:bg-gray-50 rounded-md flex justify-center  items-center'
                style={{ border: "1px solid green" }}
              >
                {data.resource_type || "---"}
              </div>
            </div>
          </span>
          <p className=' mt-6 text-[#1F5095] line-clamp-2'>
            {/* by Wiley InterScience (Online service); Wiley Online Library;
            Blieberger, Johann; Strohmeier, Alfred , 2019 */}
            {data.description || "---"}
          </p>
          {data.ISSN_or_ISBN ? (
            <p className=' mt-2 text-[#1F5095]'>ISBN : {data.ISSN_or_ISBN}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SearchView;
