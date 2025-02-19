import React, { useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import bookIcon from "../../images/book.png";
import book from "../../images/Group.png";
import icon from "../../images/gr.png";
import linkicon from "../../images/Group 1000002938.png";
import bookmarkicon2 from "../../images/Vector.png";
import sort from "../../images/sort.png";
import candel from "../../images/candle.png";
import arrowdown from "../../images/Vector (Stroke).png";
import firstimg from "../../images/Group 1000003079.png";
import secondimg from "../../images/Group 1000003080.png";
import thirdimg from "../../images/Group 1000003081.png";
import fourthimg from "../../images/Group 1000003082.png";
import defaultImage from "../../images/defaultImage.jpg";
import { useState } from "react";
import Table from "../uiElemnts/table";
import MobileTable from "../mobile/mobileTable";
import { MdBookmark, MdOutlineBookmarkBorder } from "react-icons/md";

import useFetch from "../../hooks/useFetch";
import useFavourite from "../../hooks/useFavourite";
import CardSkeleton from "../Loader/CardSkeleton";
import capitalizeLetter from "../admin/utils/capitalizeLetter";
import { useNavigate } from "react-router-dom";

function Resources({
  logutOutHandler,
  institutionDetails,
  domain,
  notificationData,
}) {
  const [activeTab, setActiveTab] = useState("catalogue");

  const [isAscending, setIsAscending] = useState(true);
  const navigate = useNavigate();
  const [seletTreandingType, setSeletTreandingType] = useState("");

  const {
    fetchLoading,
    resources,
    allSites,
    setAllSites,
    handleFetchResources,
    createProxyAPI,
    handleFetchAllSites,
    searchSite,
    setSearchSite,
    favLoading,
    favData,
    handleFetchLikes,

    treandingResourceData,
    treandingResourceLoading,
    homePageTrendingResourceFetch,
  } = useFetch();

  const { message, handleAddToFavourite, handleRemoveToFavourite } =
    useFavourite();

  useEffect(() => {
    handleFetchResources();
    handleFetchAllSites();
    homePageTrendingResourceFetch("access_count");
  }, []);

  useEffect(() => {
    if (seletTreandingType === "" && treandingResourceData) {
      const keys = Object.keys(treandingResourceData);
      setSeletTreandingType(keys[0]);
    }
  }, [treandingResourceData, seletTreandingType]);

  useEffect(() => {
    async function fetchAgain() {
      await handleFetchLikes();
    }
    fetchAgain();
  }, [message]);

  const sortByDate = () => {
    const sortedSites = [...allSites].sort((a, b) => {
      const dateA = new Date(a.created_at);
      const dateB = new Date(b.created_at);

      // Compare year
      if (dateA.getFullYear() !== dateB.getFullYear()) {
        return isAscending
          ? dateA.getFullYear() - dateB.getFullYear()
          : dateB.getFullYear() - dateA.getFullYear();
      }

      // Compare month
      if (dateA.getMonth() !== dateB.getMonth()) {
        return isAscending
          ? dateA.getMonth() - dateB.getMonth()
          : dateB.getMonth() - dateA.getMonth();
      }

      // Compare day
      return isAscending
        ? dateA.getDate() - dateB.getDate()
        : dateB.getDate() - dateA.getDate();
    });

    setAllSites(sortedSites);
    setIsAscending(!isAscending);
  };

  const [isReversed, setIsReversed] = useState(false);

  const toggleSortOrder = () => {
    setIsReversed(!isReversed);
  };

  const data =
    treandingResourceData && treandingResourceData[seletTreandingType]
      ? treandingResourceData[seletTreandingType]
      : [];
  const sortedData = isReversed ? [...data].reverse() : data;

  return (
    <>
      <Header
        {...{ logutOutHandler, institutionDetails, domain }}
        notificationData={notificationData}
      />
      <div className='flex'>
        <span
          className=' hidden sm:block sm:h-auto'
          style={{ position: "sticky", top: "0", height: "100vh" }}
        >
          <Sidebar />
        </span>
        <div className=' flex flex-col px-[5%] w-full sm:w-[calc(100%-96px)]'>
          <div
            className='flex sm:items-center sm:flex-row flex-col sm:justify-between'
            style={{
              borderBottom: "1px solid lightgray",
              height: "70px",
            }}
          >
            <div className='flex items-center'>
              <div className='p-2 flex-shrink-0 rounded-full bg-gray-100 mr-2 '>
                <img
                  src={bookIcon}
                  className='h-5 w-5 object-cover shrink-0'
                  alt='book-icon'
                />
              </div>

              <span className='whitespace-nowrap text-[#1F5095] font-semibold text-[15px]'>
                Explore the Resources Catalogue
              </span>
            </div>
            <div className='block sm:ml-0 ml-2 '>
              <span
                onClick={() => navigate("/all/resources")}
                className='cursor-pointer whitespace-nowrap text-xs sm:text-sm text-[#1F5095]  text-[14px] border-b border-[#1F5095] mr-4'
              >
                Show A to Z Resources
              </span>
              {/* <span className=' whitespace-nowrap text-[#BEBEBE]  text-[12px]'>
                Show A to Z Resources
              </span> */}
            </div>
          </div>
          <div className='w-full overflow-auto no-scrollbar flex-nowrap max-w-[500px] justify-between flex gap-8'>
            <div className=' flex text-nowrap'>
              <div
                onClick={() => setActiveTab("catalogue")}
                className={` ${
                  activeTab === "catalogue"
                    ? "border-b-2 border-[#1F5095]"
                    : "text-[#454545] text-[14px] font-Poppins font-semibold opacity-[40%]"
                } pt-8 pb-3 px-3 text-[#1F5095] text-[14px] font-Poppins font-semibold cursor-pointer`}
              >
                Catalogue
              </div>

              <div
                className={` ${
                  activeTab === "site"
                    ? "border-b-2 border-[#1F5095]"
                    : "text-[#454545] text-[14px] font-Poppins font-semibold opacity-[40%]"
                } pt-8 pb-3 pl-3 pr-3  text-[#1F5095] text-[14px] font-Poppins font-semibold cursor-pointer`}
                onClick={() => setActiveTab("site")}
              >
                Sites / Databases
              </div>

              <div className=' pt-8 pb-3 pl-3 pr-3  text-[#454545] text-[14px] font-Poppins font-semibold opacity-[40%] cursor-pointer'>
                Library / OPAC
              </div>
            </div>
          </div>
          <div className='pt-5 bg-white'>
            <h1 className=' text-[#1F5095] text-[23px]  font-semibold'>
              Popular Databases to cater you work research needs
            </h1>
            <p className=' text-[#A3AED0] mt-2 text-[14px]'>
              A curated collection of academic journals and research papers
            </p>
          </div>
          {activeTab === "catalogue" && (
            <>
              <div className='bg-[#221FB9/0.2] mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:py-6'>
                {fetchLoading
                  ? Array.from([1, 2, 3, 4]).map((val, i) => <CardSkeleton key={i} />)
                  : resources?.map((resource, index) => {
                      return (
                        <div
                          key={"resources_"+index}
                          onClick={() => {
                            if (resource?.site__base_url) {
                              let url = resource.site__base_url;
                              if (
                                !url.startsWith("http://") &&
                                !url.startsWith("https://")
                              ) {
                                url = "https://" + url;
                              }
                              window.open(url, "_target");
                            }
                            
                          }}
                          className='flex flex-col p-2 rounded-[5px]'
                        >
                          <img
                            src={resource?.site__image || defaultImage}
                            alt={resource?.site__category__name}
                            className='w-full h-[110px]  object-cover hover:scale-105 duration-300 cursor-pointer'
                          />
                          <div className=' mt-4 flex items-center '>
                            <p className='p-1 grow cursor-pointer flex justify-center items-center border sm:text-[13px] text-[8px] text-[#1F5095] bg-[#E9E9F7] rounded-[5px]'>
                              {resource?.site__name}
                            </p>
                            <div className='p-2 ml-2 scale-125 cursor-pointer'>
                              {!favData?.includes(resource?.site) ? (
                                <MdOutlineBookmarkBorder
                                  onClick={() =>
                                    handleAddToFavourite(resource.site)
                                  }
                                />
                              ) : (
                                <MdBookmark
                                  onClick={() =>
                                    handleRemoveToFavourite(resource.site)
                                  }
                                  className='text-blue-600'
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
              </div>
              <div className='mt-5 bg-white'>
                <h1 className=' text-[#1F5095] text-[23px]  font-semibold sm:w-auto '>
                  Trending Resources throughout
                </h1>
                <div className=' flex sm:justify-between flex-col sm:flex-row mt-4 w-full'>
                  <p className=' text-[#A3AED0]  mt-2 text-[14px] sm:w-auto'>
                    A curated collection of academic journals and research
                    papers
                  </p>
                </div>
                <div className=' flex justify-end flex-wrap mt-5 gap-5'>
                  <select
                    onChange={(e) => {
                      setSeletTreandingType(e.target.value);
                    }}
                    className='px-2 h-[43px] cursor-pointer rounded-[5px] border border-solid border-[#221FB9/0.14] flex justify-around items-center'
                  >
                    {treandingResourceData &&
                      Object.keys(treandingResourceData)?.map((key, index) => (
                        <option value={index}>e-{key.replace(/_/g, " ")}</option>
                      ))}
                  </select>
                  <div
                    onClick={() => toggleSortOrder()}
                    className='px-2 h-[43px] w-[131px] cursor-pointer rounded-[5px] border border-solid border-[#221FB9/0.14] flex justify-around items-center'
                  >
                    <img
                      src={sort}
                      className=' w-[16px] h-[16px]'
                      alt='sorticon'
                    />
                    <span>Sort By: </span>
                    <img
                      src={arrowdown}
                      className=' w-[10px] h-[7px]'
                      style={{
                        rotate: isReversed ? "180deg" : "0deg",
                      }}
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
                <div className='mt-10 bg-[#F8F9FA] p-4 rounded-lg'>
                  {/*web view--------------------------------------------------------- */}
                  {sortedData?.length > 0 ? (
                    sortedData.map((val, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          if (val?.current_issue_url) {
                            let url = val?.current_issue_url
                            if (
                              !url.startsWith("http://") &&
                              !url.startsWith("https://")
                            ) {
                              url = "https://" + url;
                            }
                            window.open(
                              url,
                              "_blank",
                              "noopener,noreferrer"
                            );
                          }
                        }}
                        className='hidden cursor-pointer sm:flex rounded-xl bg-blue p-4 justify-between mt-2 bg-white'
                      >
                        <div className='flex'>
                          <div className=' flex-col items-center sm:block'>
                            <div className='h-[87px] w-[72px] bg-[#F3F7FA] flex justify-center items-center rounded-[6px]'>
                              <img
                                src={book}
                                className='h-[39px] w-[32px] object-cover'
                                alt='bookicon'
                              />
                            </div>
                            <div className=' sm:hidden ml-4'>
                              <p
                                style={{ border: "1px solid green" }}
                                className='px-2 text-[#F38D15] line-clamp-1 font-medium sm:bg-gray-50 rounded-md '
                              >
                                e-{capitalizeLetter(val?.resource_type)}
                              </p>
                            </div>
                          </div>
                          <div className='ml-4'>
                            <div className='flex'>
                              <p className=' text-[#1F5095] line-clamp-2  font-semibold'>
                                {val.title ? val.title : "---"}
                              </p>
                              <span className='hidden sm:block sm:mx-4'>
                                <p
                                  style={{ border: "1px solid green" }}
                                  className='px-3 py-1 line-clamp-1 text-[#F38D15] font-medium sm:bg-gray-50 rounded-md '
                                >
                                  e-{capitalizeLetter(val?.resource_type)}
                                </p>
                              </span>
                            </div>
                            <p className=' mt-5 text-[#1F5095]'>
                              <p className='text-slate-700 line-clamp-2'>
                                {val?.description}
                              </p>
                              <p className='text-[#1F5095] mt-1'>
                                {val.publisher ? val.publisher + " " : ""}
                                {val.author ? "  " + val.author : ""}{" "}
                                {val?.publish_date}
                              </p>
                            </p>
                            {val?.ISSN_or_ISBN && (
                              <p className=' mt-2 text-[#1F5095]'>
                                ISBN : {val?.ISSN_or_ISBN}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className=' flex flex-row'>
                          <div className=' mr-3  rounded-full border w-[35px] h-[35px] flex justify-center items-center'>
                            <img
                              src={bookmarkicon2}
                              className='w-[10px] h-[12px]'
                              alt=''
                            />{" "}
                          </div>
                          <div className=' mr-3  rounded-full border w-[35px] h-[35px] flex justify-center items-center'>
                            <img
                              src={icon}
                              alt=''
                              className=' w-[12px] h-[10px]'
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
                    ))
                  ) : (
                    <div className='hidden sm:flex'>No Data Found</div>
                  )}
                  {/* mobile view ---------------------------------------------------------------- */}
                  {treandingResourceData &&
                  treandingResourceData[seletTreandingType]?.length > 0 ? (
                    treandingResourceData[seletTreandingType]?.map(
                      (val, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            if (val?.current_issue_url) {
                              let url = val?.current_issue_url
                              if (
                                !url.startsWith("http://") &&
                                !url.startsWith("https://")
                              ) {
                                url = "https://" + url;
                              }
                              window.open(
                                url,
                                "_blank",
                                "noopener,noreferrer"
                              );
                            }
                           
                          }}
                          className='sm:hidden cursor-pointer rounded-xl bg-blue py-4 px-2 flex mt-2 bg-white flex-col'
                        >
                          <div className='flex w-full justify-between'>
                            <p className=' text-[14px] line-clamp-2  text-[#1F5095] font-semibold'>
                              {val.title ? val.title : "---"}
                            </p>

                            <div className=' hidden min-[350px]:flex flex-row '>
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
                          <div className=' flex mt-4 '>
                            <div className=''>
                              <div className=' h-[87px] w-[72px] bg-[#F3F7FA] flex justify-center items-center rounded-[6px]'>
                                <img
                                  src={book}
                                  className='h-[39px] w-[32px]'
                                  alt=''
                                />
                              </div>
                              <div
                                className='mt-4 px-2 py-1 line-clamp-1 text-nowrap text-[#F38D15] font-medium sm:bg-gray-50 rounded-md flex justify-center  items-center'
                                style={{ border: "1px solid green" }}
                              >
                                e-{capitalizeLetter(val?.resource_type)}
                              </div>
                            </div>
                            <div className=' ml-5 text-[14px] font-medium'>
                              <p className='text-slate-700 line-clamp-2'>
                                {val?.description}
                              </p>
                              <p className='text-[#1F5095] mt-1'>
                                {val?.publisher + " "}
                              </p>
                              <p className='text-black'>
                                {val?.author}
                                {"  "} {val?.publish_date}
                              </p>

                              {val?.ISSN_or_ISBN && (
                                <p className=' mt-2 text-[#1F5095]'>
                                  ISBN : {val?.ISSN_or_ISBN}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      )
                    )
                  ) : (
                    <div className='sm:hidden'>No Data Found</div>
                  )}
                </div>
                {/* <div className=" mt-4">
                  <Pagination pageno={page} />
                </div> */}
                <div className='mt-6'>
                  <div className='p-4 sm:p-10  bg-white'>
                    <h1 className=' text-[#1F5095] text-[23px]  font-semibold'>
                      E-NEWSPAPERS AND MAGAZINES
                    </h1>
                    <p className=' text-[#A3AED0] mt-2 text-[14px]'>
                      A curated collection of academic journals and research
                      papers
                    </p>
                  </div>
                  <div className=' flex flex-col'>
                    <img src={firstimg} alt='firstimg' className='h-[150px]' />
                    <img
                      src={secondimg}
                      alt='secindimg'
                      className='h-[150px]'
                    />
                    <img src={thirdimg} alt='thirdimg' className='h-[150px]' />
                    <img
                      src={fourthimg}
                      alt='fourthimg'
                      className='h-[150px]'
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "site" && (
            <>
              <div className='bg-[#221FB9/0.2] mt-4  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:py-6 '>
                {fetchLoading
                  ? Array.from([1, 2, 3, 4]).map((val, i) => {
                      return (
                        <div key={i} className='p-4 space-y-4 animate-pulse'>
                          <div className='w-full h-32 bg-gray-300 rounded'></div>
                          <div className='space-y-2'>
                            <div className='h-4 bg-gray-200 rounded w-3/4'></div>
                            <div className='h-4 bg-gray-200 rounded w-1/2'></div>
                          </div>
                        </div>
                      );
                    })
                  : resources.map((resource, index) => (
                      <div
                        onClick={() => {
                          if (resource?.site__base_url) {
                            let url = resource.site__base_url;
                            if (
                              !url.startsWith("http://") &&
                              !url.startsWith("https://")
                            ) {
                              url = "https://" + url;
                            }
                            window.open(url, "_target");
                          }
                        }}
                        key={index}
                        className='flex flex-col border p-2 rounded-[5px] mr-2 mb-2'
                      >
                        <img
                          src={resource?.site__image || defaultImage}
                          alt={resource?.site__category__name}
                          className='w-full h-[110px] object-cover hover:scale-105 duration-300 cursor-pointer'
                        />
                        <div className='mt-4 flex items-center'>
                          <span className='p-1 grow cursor-pointer flex justify-center items-center border sm:text-[13px] text-[8px] text-[#1F5095] bg-[#E9E9F7] rounded-[5px]'>
                            {resource?.site__name}
                          </span>
                          <div className='p-2 ml-2 scale-125 cursor-pointer'>
                            {!favData?.includes(resource?.site) ? (
                              <MdOutlineBookmarkBorder
                                onClick={() =>
                                  handleAddToFavourite(resource?.site)
                                }
                              />
                            ) : (
                              <MdBookmark
                                onClick={() =>
                                  handleRemoveToFavourite(resource?.site)
                                }
                                className='text-blue-600'
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
              </div>

              <div className='p-4 sm:p-10  bg-white'>
                <h1 className=' text-[#1F5095] text-[23px]  font-semibold'>
                  Get the acces to all databases here
                </h1>
                <div className=' flex justify-between mt-2'>
                  <p className=' text-[#A3AED0] mt-2 text-[14px]'>
                    A curated collection of academic journals and research
                    papers
                  </p>
                </div>
                {/* web view filter  */}
                <div className=' hidden sm:flex justify-end mt-6 gap-4'>
                  <div className='flex '>
                    <div>
                      <input
                        type='text'
                        value={searchSite}
                        onChange={(e) => setSearchSite(e.target.value)}
                        className=' max-w-[367px] h-[43px] border rounded-[5px] px-4 placeholder:text-[14px] opacity-[70%]'
                        placeholder='Search any title'
                      />
                    </div>
                    <div
                      onClick={sortByDate}
                      className='px-2 cursor-pointer h-[43px] w-[131px] rounded-[5px] border border-solid border-[#221FB9/0.14] flex justify-around items-center'
                    >
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
                    {/* <div className='px-2 h-[43px] w-[131px] rounded-[5px] border border-solid border-[#221FB9/0.14] flex justify-around items-center'>
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
                    </div> */}
                  </div>
                </div>
                {/* mobile view filter*/}
                <div className=' sm:hidden flex justify-between mt-6'>
                  {/* <div className='px-2 h-[43px] w-[120px]  rounded-[5px] border border-solid border-[#221FB9/0.14] mr-4 flex justify-around items-center'>
                    <span>Category</span>
                    <img
                      src={arrowdown}
                      className=' w-[10px] h-[7px]'
                      alt='arrowdown'
                    />
                  </div> */}

                  <div className=' flex justify-end w-full'>
                    <div></div>
                    <div
                      onClick={sortByDate}
                      className='px-2 h-[43px] w-[115px] rounded-[5px] border border-solid border-[#221FB9/0.14] mr-1 flex justify-around items-center'
                    >
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
                    {/* <div className='px-2 h-[43px] w-[115px] rounded-[5px] border border-solid border-[#221FB9/0.14] flex justify-around items-center'>
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
                    </div> */}
                  </div>
                </div>
              </div>
              {/* for web view ----------------------------- */}
              <div className='sm:block hidden px-10 mb-6'>
                <Table
                  allSites={allSites}
                  favData={favData}
                  {...{ handleAddToFavourite, handleRemoveToFavourite }}
                />
                {/* <Pagination pageno={page} /> */}
              </div>
              {/* for mobile view --------------------------- */}
              <div className='block sm:hidden px-4 mb-6'>
                <MobileTable allSites={allSites} favData={favData} />
                {/* <Pagination pageno={page} /> */}
              </div>
            </>
          )}
        </div>
      </div>
      <Footer {...{ institutionDetails, domain }} />
    </>
  );
}

export default Resources;
