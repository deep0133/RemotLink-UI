import { IoArrowBackCircleOutline } from "react-icons/io5";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import messageSVG from "../../images/messageSVG.svg";
import book from "../../images/Group.png";
import bookmarkicon2 from "../../images/Vector.png";
import capitalizeLetter from "../admin/utils/capitalizeLetter";
import { useEffect, useRef, useState } from "react";
import useFetch from "../../hooks/useFetch";
import PaginationWithLibrary from "../uiElemnts/PaginationWithLibrary";
import search_logo from "../../images/search-normal.svg";
export default function AtoZResourcePage({
  logutOutHandler,
  institutionDetails,
  domain,
  notificationData,
}) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const {
    searchViewData,
    searchViewLoading,
    searchViewPageHandler,
    increaseAccessCount,

    searchViewFilterData,
    searchViewFilterationDataFetch,
  } = useFetch();

  useEffect(() => {
    searchViewFilterationDataFetch();
    searchViewPageHandler("&alphabet=A&page=1&page_size=10");
  }, []);

  const [search, setSearch] = useState("");
  const [db, setDb] = useState("");
  const [subject, setSubject] = useState("");

  const [sortByAlphabetical, setSortByAlphabetical] = useState("A");

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      alphabetSearchingHandler("A");
      isFirstRender.current = false;
      return;
    }

    let query = "";
    if (search) {
      query += search;
    }
    if (subject && subject !== "") {
      query += `&subject=${subject}`;
    }
    if (db && db !== "") {
      query += `&database=${db}`;
    }

    if (search === "" && db === "" && subject === "") return;
    searchViewPageHandler(query + "&page=1&page_size=10");
  }, [search, subject, db]);

  const alphabetSearchingHandler = (alpha = "") => {
    let query = "";
    if (alpha && alpha !== "") {
      query += `&alphabet=${alpha}`;
    }
    searchViewPageHandler(query + "&page=1&page_size=10");
  };

  const onPageChange = (pageNo) => {
    searchViewPageHandler(
      `&alphabet=${sortByAlphabetical}&subject=${subject}&database=${db}&page=${pageNo}&page_size=10`
    );
    setCurrentPage((prev) => pageNo);
  };

  return (
    <>
      <Header
        {...{ logutOutHandler, institutionDetails, domain, notificationData }}
      />
      <div className='flex'>
        <span
          className=' hidden md:block md:h-auto'
          style={{ position: "sticky", top: "0", height: "100vh" }}
        >
          <Sidebar />
        </span>
        <div className=' flex flex-col w-full md:w-[calc(100%-96px)]'>
          <div
            className='flex items-center justify-between'
            style={{
              borderBottom: "1px solid lightgray",
              height: "70px",
            }}
          >
            <div className='flex items-center w-full px-[5%] '>
              <div
                onClick={() => navigate(-1)}
                className='scale-125 flex-shrink-0 cursor-pointer rounded-full  mr-2 '
              >
                <IoArrowBackCircleOutline className='text-[#1F5095]' />
              </div>

              <span className='whitespace-nowrap text-[#1F5095] font-semibold text-[15px]'>
                Back to Resources
              </span>
            </div>
          </div>

          <div className=' px-[5%] mt-5'>
            <div className='title text-blue-900 text-[23px] font-semibold font-Poppins leading-7'>
              A To Z Databases
            </div>

            <div className=' text-slate-400 text-[15px] font-medium mt-3 font-Poppins leading-7'>
              IIT Bombay Library subscribes to a large number of databases which
              contain scholarly articles, books, videos, and more that are not
              freely available online. Browse the alphabetical list below or
              filter by subject area, database type, or coverage.
            </div>

            <div className='form'>
              <div className='mt-2 flex flex-wrap sm:mt-4 gap-3'>
                <div className='flex w-full sm:max-w-[550px] relative border rounded-lg'>
                  <input
                    type='text'
                    className='w-full grow h-[48px] flex-1 py-2 px-4 outline-none sm:mr-5 '
                    placeholder='Enter database keywords, titles etc'
                    value={search}
                    onChange={(e) => {
                      setSortByAlphabetical("");
                      setSearch(e.target.value);
                    }}
                    aria-label='Enter database keywords, titles etc'
                  />
                  <img
                    src={search_logo}
                    alt='Search logo'
                    className='w-[20px] h-[20px] shrink-0 absolute top-4 right-2'
                  />
                </div>

                <select
                  name='databases'
                  id=''
                  value={db}
                  onChange={(e) => {
                    setSortByAlphabetical("");
                    setDb(e.target.value);
                  }}
                  defaultValue={""}
                  className='outline-none h-[48px] px-2 w-[146px] line-clamp-1 bg-white rounded-[5px] shadow border border-blue-800/opacity-10'
                >
                  <option value=''>Database Type</option>
                  {searchViewFilterData &&
                    searchViewFilterData?.distinct_databases?.map((db, i) => {
                      return (
                        <option value={db} key={i}>
                          {db}
                        </option>
                      );
                    })}
                </select>
                <select
                  name='subject'
                  value={subject}
                  onChange={(e) => {
                    setSortByAlphabetical("");
                    setSubject(e.target.value);
                  }}
                  className='outline-none h-[48px] w-[146px] line-clamp-1 px-2 bg-white rounded-[5px] shadow border border-blue-800/opacity-10'
                >
                  <option value=''>Subjects Type</option>
                  {searchViewFilterData &&
                    searchViewFilterData?.distinct_subjects?.map((sbj, i) => {
                      return (
                        <option value={sbj} key={i}>
                          {sbj}
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>

            <div className=' relative mt-8 flex gap-2 items-baseline'>
              <div className='text-black text-[26px] font-semibold font-Poppins'>
                {searchViewData && searchViewData?.total_results}
              </div>
              <div className='flex gap-2'>
                <span className='text-black/30 text-[17px] font-medium font-Poppins'>
                  Results Found {search && " for "}
                </span>
                <span className='text-black capitalize text-[17px] font-medium font-Poppins'>
                  {" "}
                  {search === "" ? "" : search}
                </span>
              </div>
            </div>

            <div className='abc flex gap-3 my-5 flex-wrap'>
              {Array.from({ length: 26 }, (_, i) => {
                const alphabet = String.fromCharCode(65 + i);
                return (
                  <div
                    onClick={() => {
                      setSearch("");
                      setDb("");
                      setSubject("");
                      setSortByAlphabetical(alphabet);
                      alphabetSearchingHandler(alphabet);
                    }}
                    className={`w-[30px] ${
                      alphabet === sortByAlphabetical
                        ? "bg-blue-600 text-white"
                        : "bg-white : text-blue-600"
                    } flex flex-wrap hover:bg-blue-600 duration-200 cursor-pointer hover:text-white justify-center items-center h-[30px] rounded-md border border-blue-800/opacity-10 text-blue-600 text-lg font-medium font-Poppins leading-tight`}
                  >
                    {alphabet}
                  </div>
                );
              })}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-12 gap-5 w-auto'>
              <div className='card-container md:col-span-8 bg-white rounded-lg col-span-full'>
                {searchViewLoading
                  ? "Loading..."
                  : searchViewData && searchViewData.data.length > 0
                  ? searchViewData.data?.map((val, i) => (
                      <Card
                        key={i}
                        index={i}
                        data={val}
                        increaseAccessCount={increaseAccessCount}
                      />
                    ))
                  : "No Data Found"}
                {!searchViewLoading &&
                  searchViewData &&
                  searchViewData?.data?.length > 0 && (
                    <div className=' flex justify-center  mt-6 items-center w-full overflow-auto'>
                      <PaginationWithLibrary
                        currentPage={currentPage}
                        previousLink={currentPage > 0 ? currentPage - 1 : null}
                        nextLink={
                          currentPage <
                          (searchViewData && searchViewData?.current_page + 1)
                            ? currentPage + 1
                            : null
                        }
                        totalItems={
                          searchViewData && searchViewData.total_results
                        }
                        itemsPerPage={5}
                        onPageChange={(pageNo) => {
                          onPageChange(pageNo);
                        }}
                      />
                    </div>
                  )}
              </div>
              <div className='md:col-span-4 p-4  bg-white rounded-lg shadow'>
                <div className='sticky top-8'>
                  {" "}
                  <div className='text-blue-600 text-base font-semibold font-Poppins border-b-2 border-blue-600 pb-2'>
                    Popular Databases
                  </div>
                  <div className='grid grid-cols-3 gap-5 relative mt-5'>
                    <img
                      className='rounded-sm w-full object-cover border border-blue-800/20'
                      src='https://via.placeholder.com/89/89'
                      alt=''
                    />
                    <img
                      className='rounded-sm w-full object-cover border border-blue-800/20'
                      src='https://via.placeholder.com/89/89'
                      alt=''
                    />
                    <img
                      className='rounded-sm w-full object-cover border border-blue-800/20'
                      src='https://via.placeholder.com/89/89'
                      alt=''
                    />
                    <img
                      className='rounded-sm w-full object-cover border border-blue-800/20'
                      src='https://via.placeholder.com/89/89'
                      alt=''
                    />
                    <img
                      className='rounded-sm w-full object-cover border border-blue-800/20'
                      src='https://via.placeholder.com/89/89'
                      alt=''
                    />
                    <img
                      className='rounded-sm w-full object-cover border border-blue-800/20'
                      src='https://via.placeholder.com/89/89'
                      alt=''
                    />
                  </div>
                  <div className='p-5 bg-white rounded border border-blue-800/10 mt-5'>
                    <div className='text-blue-600 text-base font-semibold font-Poppins'>
                      Cant Find Required Resource ?
                    </div>
                    <button
                      onClick={() => navigate("/help")}
                      className='text-white flex gap-3 items-center justify-center mt-4 cursor-pointer  bg-blue-600 lg:w-fit md:w-full w-fit px-8 py-3 rounded'
                    >
                      <img src={messageSVG} alt='' />
                      <p className='text-sm font-medium font-Poppins text-nowrap line-clamp-1'>
                        Go To Help Desk
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Card = ({ index, data, increaseAccessCount }) => {
  return (
    <div
      key={index}
      onClick={() => {
        increaseAccessCount(data.id);
        window.open(data?.current_issue_url, "_blank", "noopener,noreferrer");
      }}
      className='cursor-pointer hover:shadow-md hover:shadow-blue-600/10  sm:flex rounded-xl bg-blue p-4 justify-between mt-2 bg-white'
    >
      <div className='flex gap-3'>
        <div className='flex flex-col items-center sm:block'>
          <div className='h-[87px] w-[72px] bg-[#F3F7FA] flex justify-center items-center rounded-[6px]'>
            <img
              src={book}
              className='h-[39px] w-[32px] object-cover'
              alt='bookicon'
            />
          </div>
          <div className=' sm:hidden mx-auto sm:mt-0 mt-2'>
            <Tag title={"e-" + capitalizeLetter(data?.resource_type)} />
          </div>
        </div>
        <div className=''>
          <div className='flex flex-wrap'>
            <p className=' text-[#1F5095] line-clamp-2 w-auto font-semibold'>
              {data?.title ? data.title : "---"}
            </p>
            <span className='hidden sm:block sm:mx-4'>
              <Tag title={"e-" + capitalizeLetter(data?.resource_type)} />
            </span>
            <span className='block sm:hidden ml-1'>
              <BookMarkIcon />
            </span>
          </div>
          <p className=' mt-3 text-[#1F5095]'>
            <p className='text-slate-700 line-clamp-2'>{data?.description}</p>
            <p className='text-[#1F5095] mt-1'>
              {data.publisher ? data.publisher + " " : ""}
              {data.author ? "  " + data.author : ""} {data?.publish_date}
            </p>
          </p>
          {""?.ISSN_or_ISBN && (
            <p className=' mt-2 text-[#1F5095]'>ISBN : {""?.ISSN_or_ISBN}</p>
          )}
        </div>
      </div>
      <div className=' hidden flex-row sm:flex'>
        <BookMarkIcon />
      </div>
    </div>
  );
};

const Tag = ({ title }) => {
  return (
    <div className='py-1 px-2  text-[10px] line-clamp-1 text-[#F38D15] font-medium bg-gray-50 rounded '>
      {title}
    </div>
  );
};

const BookMarkIcon = ({ clickHandler }) => {
  return (
    <div
      onClick={clickHandler}
      className=' mr-3  rounded-full border w-[35px] h-[35px] flex justify-center items-center'
    >
      <img src={bookmarkicon2} className='w-[10px] h-[12px]' alt='' />{" "}
    </div>
  );
};
