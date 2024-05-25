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
import Pagination from "../admin/components/Pagination";

function SearchView({ logutOutHandler, institutionDetails, domain }) {
  // /api/sites/search/?query=&
  // access_type=Full Text &
  // resource_type=&
  // database=DVL DENTAL &
  // language=&
  // publish_date_start=24-05-2023&
  // publish_date_end=24-05-2023&
  // database=HERD: HEALTH ENVIRONMENTS RESEARCH %26 DESIGN JOURNAL&
  // sort_order=acs&
  // page=1&page_size=10

  const {
    searchViewData,
    searchViewLoading,
    searchViewPageHandler,
    searchViewFilterData,
    searchViewFilterLoading,
    searchViewFilterationDataFetch,
  } = useFetch();

  const [sortBy, setSortBy] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const [query, setQuery] = useState("");

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    searchViewPageHandler("page=1&page_size=10");
    searchViewFilterationDataFetch();
  }, []);

  const selectedFilteration = (filteration) => {
    setQuery(filteration);
    let newquery = filteration;
    if (search !== "") {
      newquery = search + "&" + filteration;
    }
    newquery += `&page=${currentPage}&page_size=10`;
    searchViewPageHandler(JSON.stringify(newquery));
  };

  const submitSearchQuery = () => {
    let newquery = "";
    console.log("----------Search ----------", search);
    if (search !== "") {
      newquery = search + "&" + query;
    }
    newquery += `&page=${currentPage}&page_size=10`;
    searchViewPageHandler(newquery);
  };

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
              <div className='flex w-full sm:max-w-[550px]'>
                <input
                  type=' text'
                  style={{ border: "1px solid lightgray" }}
                  className='w-full grow h-[48px]   flex-1 py-2 px-4 sm:mr-4 rounded-lg'
                  placeholder='Search anything'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className='flex gap-2 max-[1051px]:mt-2 flex-wrap'>
                <button
                  onClick={submitSearchQuery}
                  className='px-5 h-[48px] rounded-lg sm:mr-2  bg-white  whitespace-nowrap  '
                  style={{ border: "1px solid lightgray" }}
                >
                  <span className=' flex items-center justify-center'>
                    Search
                  </span>
                </button>
                {/* {btn.map((e) => (
                  <button
                    className='px-5 h-[48px] rounded-lg sm:mr-2  bg-white  whitespace-nowrap  '
                    style={{ border: "1px solid lightgray" }}
                  >
                    <span className=' flex items-center justify-center'>
                      <img src={arrowdown} className='m-2' alt='sorticon' />
                      {e}
                    </span>
                  </button>
                ))} */}
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
            {/* <div className=' flex border-4 border-yellow-500  mt-8 '>
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
            </div> */}
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
                  <div className='left md:hidden text-nowrap absolute  right-0 top-12 bg-white p-3 shadow-md z-50'>
                    <FilterComponent
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
                selectedFilteration={selectedFilteration}
                searchViewFilterData={searchViewFilterData}
                searchViewFilterLoading={searchViewFilterLoading}
              />
            </div>
            <div className='right w-full md:w-[70%]'>
              <div className=' bg-[#F8F9FA] p-4 rounded-lg'>
                {/*web view--------------------------------------------------------- */}
                {searchViewLoading
                  ? "Loading..."
                  : searchViewData && searchViewData.data.length
                  ? searchViewData.data?.map((val, i) => (
                      <BookCard key={i} data={val} />
                    ))
                  : "No Data Found"}
              </div>
              {searchViewData && searchViewData.data?.length > 0 && (
                <div className=' flex justify-center  mt-6 items-center'>
                  <Pagination
                    previousLink={currentPage > 0 ? currentPage - 1 : null}
                    nextLink={
                      currentPage <
                      (searchViewData && searchViewData.total_results)
                        ? currentPage + 1
                        : null
                    }
                    totalItems={searchViewData && searchViewData.total_results}
                    itemsPerPage={10}
                    onPageChange={(e) => {}}
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

const BookCard = ({ data }) => {
  return (
    <div className='rounded-xl bg-blue p-4 sm:flex justify-between  mt-2 bg-white'>
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
