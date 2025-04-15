import React, { useRef } from "react";
// import home_image from "../../images/Rectangle 5.png";
import { useEffect, useState } from "react";
import newimg from "../../images/economic.png";
import cardimage from "../../images/Rectangle 25.png";
// import bookmarkicon from "../../images/Group 1000002939.png";
import firstimg from "../../images/Rectangle 33.png";
import secimg from "../../images/Rectangle 34.png";
import thirdimg from "../../images/Rectangle 35.png";

import { Link, useNavigate } from "react-router-dom";
import {
  default as Favorites_Icon,
  default as Resources_Icon,
} from "../../images/book-saved.svg";
import Home_Icon from "../../images/category-2.svg";
import help_Icon from "../../images/message-question.svg";
import question_Icon from "../../images/Question.svg";
import Search_Icon from "../../images/search-normal.svg";

import { MdBookmark, MdOutlineBookmarkBorder } from "react-icons/md";
import Slider from "react-slick";
import useFavourite from "../../hooks/useFavourite";
import useFetch from "../../hooks/useFetch";
import capitalizeLetter from "../admin/utils/capitalizeLetter";
import generateUrl from "../admin/utils/urlGenerate";
import CardSkeleton from "../Loader/CardSkeleton";
import HomeSlider from "./HomeSlider";

import { IoChevronBackOutline } from "react-icons/io5";
import Sidebar from "../uiSection/Sidebar";

function Home({ institutionDetails }) {
  const [active, setActive] = useState("week");

  const myBox = [
    "Anesthasia",
    "Health",
    "Anatomy",
    "Anesthasia",
    "Life Science",
    "Health",
    "Anatomy",
    "Anesthasia",
    "Life Science",
    "Health",
    "Dermatalogy",
    "Neurology",
    "Dermatalogy",
    "Neurology",
  ];

  const [userName, setUserName] = useState("");

  const [randomMessage, setRandomMessage] = useState("");

  const {
    handleFetchMessages,
    discoverReadingData,
    discoverReadingLoading,
    homePageDiscoverRecentReadingFetch,
    increaseAccessCount,
    resources,
    handleFetchResources,

    landingPageCategorialResourceFetch,
    catgorialResource,
    catgorialResourceLoading,

    treandingResourceData,
    treandingResourceLoading,
    homePageTrendingResourceFetch,

    topSavedResourcesData,
    topSavedResourcesLoading,
    homePageTopSavedResourcesFetch,

    fetchLoading,

    favLoading,
    favData,
    handleFetchLikes,

    createProxyAPI,
  } = useFetch();

  const { message, handleRemoveToFavourite, handleAddToFavourite } =
    useFavourite();

  const [messageLoading, setMessageLoading] = useState(false);

  // Random Message Getting
  useEffect(() => {
    const callingRandomMesg = async () => {
      setMessageLoading(true);
      try {
        const randomMsg = await handleFetchMessages();
        setRandomMessage(randomMsg);
      } catch (error) {
        // console.error("error :", error);
      }
      setMessageLoading(false);
    };

    const userData = localStorage.getItem("userdata");
    if (userData) {
      const parseData = JSON.parse(userData);
      setUserName(parseData.first_name);
    }
    callingRandomMesg();
  }, []);

  useEffect(() => {
    async function fetchAgain() {
      await handleFetchLikes();
    }
    fetchAgain();
  }, [message]);

  useEffect(() => {
    if (active === "week") homePageDiscoverRecentReadingFetch(active);
    if (active === "days") homePageDiscoverRecentReadingFetch("month");
  }, [active]);

  useEffect(() => {
    handleFetchResources();
    landingPageCategorialResourceFetch("created_at");
    homePageTrendingResourceFetch("access_count");
    homePageTopSavedResourcesFetch();
  }, []);

  const [keys, setKeys] = useState([]);
  const [treandingKeys, setTreandingKeys] = useState([]);

  const [selectedRecent, setSelectedRecent] = useState("");
  const [selectedTreanding, setSelectedTreanding] = useState("");

  const [data, setData] = useState(null);
  const [treandingData, setTreandingData] = useState(null);

  const navigate = useNavigate();

  // --------------Recently Added--------------
  useEffect(() => {
    if (catgorialResource) {
      const key = Object.keys(catgorialResource);
      setKeys(key);
      setSelectedRecent(key[0]);
    }
  }, [catgorialResource]);

  useEffect(() => {
    if (selectedRecent) {
      const updatedData = catgorialResource[selectedRecent];
      if (updatedData && updatedData.length > 0) {
        setData(updatedData);
      }
    }
  }, [selectedRecent, catgorialResource]);

  const changeSubjects = (val, type) => {
    if (type === "treanding") {
      const updatedData = treandingResourceData[val];
      if (updatedData && updatedData.length > 0) setSelectedTreanding(val);
    } else {
      const updatedData = catgorialResource[val];
      if (updatedData && updatedData.length > 0) {
        setSelectedRecent(val);
      }
    }
  };

  // ----Treanding-----
  useEffect(() => {
    if (treandingResourceData) {
      const key = Object.keys(treandingResourceData);
      setTreandingKeys(key);
      setSelectedTreanding(key[0]);
    }
  }, [treandingResourceData]);

  useEffect(() => {
    if (selectedTreanding) {
      setTreandingData(treandingResourceData[selectedTreanding]);
    }
  }, [selectedTreanding, treandingResourceData]);

  const [url, setUrl] = useState("");

  useEffect(() => {
    const fetchUrl = async () => {
      const domain = await generateUrl();
      setUrl(domain);
    };

    fetchUrl();
  }, []);

  const classes =
    "bg-[#1F5095] text-white bg-white text-black rounded-[8px] p-2 text-[14px]";

  return (
    <div className='sm:flex w-full'>
      {/* sidenav bar */}
      {/* <div
        style={{ position: "sticky", top: "0", height: "100vh" }}
        className='hidden md:flex w-[96px] flex-shrink-0 flex-col items-center p-4 border border-solid border-color-p3 shadow-md no-scrollbar '
      >
        <Link to='/Home'>
          <div className='w-[42px] h-[42px] flex items-center justify-center flex-col mt-[22px]  '>
            <img className='pb-[7px]' src={Home_Icon} alt='Home Icon' />
            <h1 className='text-blue-500 text-center font-poppins text-[10px] font-semibold'>
              Home
            </h1>
          </div>
        </Link>
        <Link to='/resources'>
          <div className='w-[42px] h-[42px] flex items-center justify-center flex-col mt-[22px]'>
            <img
              className='pb-[7px]'
              src={Resources_Icon}
              alt='Resources Icon'
            />
            <h1 className='text-gray-600 text-center font-poppins text-xs font-medium'>
              Resources
            </h1>
          </div>
        </Link>

        <Link
          to='/savedresources'
          className='w-[42px] cursor-pointer h-[42px] flex items-center justify-center flex-col  mt-[22px]'
        >
          <img className='pb-[7px]' src={Favorites_Icon} alt='Favorites Icon' />
          <h1 className='text-gray-600 text-center font-poppins text-xs font-medium'>
            My Favorites
          </h1>
        </Link>
        <Link to='/searchview'>
          <div className='w-[42px] h-[42px] flex items-center justify-center flex-col  mt-[29px]'>
            <img className='pb-[7px]' src={Search_Icon} alt='Search Icon' />
            <h1 className='text-gray-600 text-center font-poppins text-xs font-medium'>
              Search
            </h1>
          </div>
        </Link>
        <Link to='/help'>
          <div className=' flex items-center justify-normal flex-col mt-[160px] '>
            <img
              className='w-[60px] h-[60px]'
              src={question_Icon}
              alt='Help Icon'
            />
            <img
              className='relative bottom-[35px] w-[18px] h-[18px] flex justify-normal items-center flex-shrink-0'
              src={help_Icon}
              alt='Help Icon'
            />
            <h1 className='text-blue-500 font-poppins text-center text-xs font-medium w-[56px] h-[18px] relative bottom-5'>
              Help
            </h1>
          </div>
        </Link>
      </div> */}
      <Sidebar />
      <div className=' w-full md:w-[calc(100%-96px)]'>
        {/* ---------Hero----------------- */}
        <div className='flex md:flex-row flex-col justify-between bg-[#3A424D] border-2 min-h-[334px] md:mt-[62px] w-full relative'>
          <div className='flex items-start md:w-[400px] lg:w-[450px] shrink-0 justify-between flex-col p-5 sm:p-10'>
            <ul className='flex flex-shrink-0 items-start justify-between flex-col mb-2 '>
              <li>
                <p className='font-poppins font-semibold text-2xl leading-relaxed text-white mb-2 '>
                  Hello {userName} <br /> Welcome Back to Library
                </p>
              </li>
              <li className='flex text-white font-poppins w-full font-normal text-[15px] leading-relaxed max-w-[323px]'>
                {messageLoading ? (
                  <div className='flex flex-col space-y-2 w-full'>
                    <div class='w-[80%] h-3 bg-gray-600 animate-pulse rounded'></div>
                    <div class='w-[65%] h-3 bg-gray-600 animate-pulse rounded'></div>
                    <div class='w-[50%] h-3 bg-gray-600 animate-pulse rounded'></div>
                  </div>
                ) : (
                  randomMessage
                )}
              </li>
              <li className=' '>
                <button
                  onClick={() => navigate("/searchview")}
                  className=' rounded-md mt-6 h-[53px] w-[131px] bg-[#36201B] text-white '
                >
                  Get Started
                </button>
              </li>
            </ul>
          </div>

          <div className='h-auto relative order-first md:order-last overflow-hidden'>
            {/* <img
              src={home_image}
              alt=''
              className=' md:h-[110%] relative -top-[10%] rounded-t-[5px] object-cover'
            /> */}
            <HomeSlider url={url} institutionDetails={institutionDetails} />
          </div>
        </div>

        {/* -----------Discover Reading Title--------------- */}
        <div className='mt-10'>
          <p className=' text-[26px] text-[#1F5095] font-semibold ml-3 sm:ml-[50px]'>
            Discover Your Recent Readings
          </p>
          <p className='text-[14px] text-[#A3AED0] ml-3 sm:ml-[50px] leading-[26px] font-medium'>
            Explore Your Recent Reads and Gain Fresh Perspectives
          </p>
          <div className=' flex justify-end sm:px-10 px-4 mt-4 sm:mt-0'>
            <button
              className={`w-[92px] h-[34px] sm:w-[131px] sm:h-[41px] rounded-md  border text-[11px] sm:text-[14px] ${
                active === "week" ? " bg-black text-white" : ""
              }`}
              onClick={() => setActive("week")}
            >
              This Week
            </button>
            <button
              className={`w-[92px] h-[34px] sm:w-[131px] sm:h-[41px] rounded-md  border text-[11px] sm:text-[14px] ml-2 ${
                active === "days" ? " bg-black text-white" : ""
              }`}
              onClick={() => setActive("days")}
            >
              {" "}
              Last 30 days
            </button>
          </div>
        </div>

        {/* -------Discover Reading Card--------------- */}
        <div className='mt-5 sm:px-10 overflow-hidden '>
          <div className='max-h-[423px] w-auto py-8 flex overflow-scroll no-scrollbar '>
            {discoverReadingLoading ? (
              <div className='bg-[#221FB9/0.2] w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                {Array.from([1, 2, 3, 4]).map((val, i) => {
                  return <CardSkeleton key={val} />;
                })}
              </div>
            ) : discoverReadingData &&
              Array.isArray(discoverReadingData) &&
              discoverReadingData.length === 0 ? (
              "No Data Found"
            ) : (
              <SlickCard
                increaseAccessCount={increaseAccessCount}
                discoverReadingData={discoverReadingData}
                discoverReadingLoading={discoverReadingLoading}
              />
            )}
          </div>
        </div>

        {/* ---------Embark--------------- */}
        <div className='mt-5 sm:py-[50px] px-[5%] flex md:flex-row flex-col w-full p-6'>
          <div className='basis-full md:basis-1/2 flex flex-col justify-center'>
            <div className='text-[26px] text-start font-semibold font-Poppins text-[#1F5095] my-4 '>
              Embark on a Quest for Knowledge
            </div>
            <p className=' text-[14px]  font-Poppins md:pr-24 lg:pr-44 text-[#5C78D0] leading-[26px] mt-6'>
              Our extensive catalog spans a diverse spectrum of subjects, from
              the foundational to the advanced, from arts to sciences. Immerse
              yourself in the world of knowledge, with subjects meticulously
              curated to inspire and empower. Each subject offers a gateway to a
              treasure trove of e-journals, ebooks, newspapers, videos, and a
              wealth of educational resources, waiting for your exploration
            </p>
          </div>

          <div className='basis-1/2 box-container grid grid-cols-2 lg:grid-cols-3 justify-between flex-row gap-5 md:mt-0 mt-8'>
            {myBox?.map((val, index, arr) => {
              return index === 0 ? (
                <div key={index}>
                  <div className='lg:block hidden'></div>
                  <div className='min-w-[135px] relative group border w-full h-[55px] rounded-[5px]  flex justify-center items-center text-[#1F5095] hover:text-white hover:bg-[#1F5095] duration-300 text-[17px] leading-[26px] font-medium'>
                    {val}
                    <div className='absolute group-hover:rotate-[-4.426deg] rounded-[5px] duration-300 min-w-[135px] w-full  h-[55px] rotate-0 origin-bottom-left inset-0 group-hover:bg-[#1F5095] opacity-10 z-0'></div>
                  </div>
                  <div className='lg:block hidden'></div>
                </div>
              ) : (
                <>
                  {index === arr.length - 1 ? (
                    <>
                      <div className='lg:block hidden'></div>
                      <div className='min-w-[135px] relative group border w-full h-[55px] rounded-[5px]  flex justify-center items-center text-[#1F5095] hover:text-white hover:bg-[#1F5095] duration-300 text-[17px] leading-[26px] font-medium'>
                        {val}
                        <div className='absolute group-hover:rotate-[-4.426deg] rounded-[5px] duration-300 min-w-[135px] w-full  h-[55px] rotate-0 origin-bottom-left inset-0 group-hover:bg-[#1F5095] opacity-10 z-0'></div>
                      </div>
                      <div className='lg:block hidden'></div>
                    </>
                  ) : (
                    <div className='min-w-[135px] group relative border w-full bg-white h-[55px] rounded-[5px]  flex justify-center items-center text-[#1F5095] hover:text-white hover:bg-[#1F5095] duration-300 text-[17px] leading-[26px] font-medium'>
                      {val}
                      <div className='absolute group-hover:rotate-[-4.426deg] rounded-[5px] duration-300 min-w-[135px] w-full  h-[55px] rotate-0 origin-bottom-left inset-0 group-hover:bg-[#1F5095] opacity-10 z-0'></div>
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>

        {/* ---------Popular Database Title------------- */}
        <div className='mt-2 sm:mt-5 py-6 px-10'>
          <h1 className=' text-[23px] leading-[28px] font-semibold font-Poppins text-[#1F5095]'>
            Popular Databases to cater you work research needs{" "}
          </h1>
          <div className=' sm:flex justify-between mt-4'>
            <h1 className=' text-[#A3AED0] text-[15px] font-normal leading-[28px] font-Poppins'>
              A curated collection of academic journals and research papers
            </h1>
            {/* <div className=' flex justify-end sm:block mt-4 '>
              <button className='h-[43px] w-[131px] rounded-[5px] border border-solid border-[#221FB9/0.14]'>
                Show More
              </button>
            </div> */}
          </div>
        </div>

        {/* ---------Popular Database Card-------------- */}
        <div className='bg-[#221FB9/0.2] w-full grow mt-4 px-10 grid-cols-2 grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>
          {fetchLoading
            ? Array.from([1, 2, 3, 4, 5]).map((val) => {
                return <CardSkeleton key={val} />;
              })
            : resources && resources.length > 0
            ? resources?.map((val, i) => (
                <div
                  key={i}
                  className='min-h-[122px] flex flex-col border p-2 rounded-[5px] '
                >
                  <img
                    src={val.site__image ? val.site__image : newimg}
                    alt='cardimg'
                    className=' object-cover h-[120px]'
                  />
                  <div className='mt-4 flex gap-1 min-[400px]:gap-2 items-center justify-between flex-1'>
                    <p
                      onClick={() => {
                        createProxyAPI(val?.site);
                      }}
                      className='line-clamp-1 cursor-pointer border-black inline-block pl-2 pr-1 w-full items-center border py-2 sm:text-[13px] text-[8px] text-[#1F5095] bg-[#E9E9F7] rounded-[5px]'
                      style={{ maxWidth: "100%" }} // Ensure the element does not exceed its container width
                    >
                      {val.site__name ? val.site__name : "---"}
                    </p>
                    <div className='p-2 ml-2 scale-125 cursor-pointer'>
                      {!favData?.includes(val.site) ? (
                        <MdOutlineBookmarkBorder
                          onClick={() => handleAddToFavourite(val.site)}
                        />
                      ) : (
                        <MdBookmark
                          onClick={() => handleRemoveToFavourite(val.site)}
                          className='text-blue-600'
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))
            : "No Data Found"}
        </div>

        {/* ---------------Recently Added Title------------- */}
        <div className='mt-5 px-3 sm:py-6 sm:px-10 '>
          <div className=''>
            <h1 className=' text-[26px] leading-[39px] font-semibold font-Poppins text-[#1F5095]'>
              Recently Added{" "}
            </h1>
            <h1 className=' text-[#A3AED0] text-[15px] font-normal leading-[28px] font-Poppins'>
              A curated collection of academic journals and research papers
            </h1>
            <div className=' border flex-wrap sm:w-[450px] flex justify-between mt-5  items-center px-3 py-1 rounded-[8px]'>
              {keys &&
                keys?.map((key, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      changeSubjects(key, "recent");
                    }}
                    className={`text-[14px] ${
                      selectedRecent === key
                        ? "bg-[#1F5095] text-white"
                        : "bg-white text-black "
                    } rounded-[8px] p-2 text-[14px]
                    ${
                      catgorialResource && catgorialResource[key]?.length === 0
                        ? "cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                  >
                    {key.replace(/_/g, " ")}
                  </button>
                ))}
            </div>
          </div>
          {/* <div className=' hidden sm:flex justify-end'>
            <button className=' h-[43px] w-[131px] rounded-[5px] border border-solid border-[#221FB9/0.14]'>
              Show More
            </button>
          </div> */}
        </div>
        {/* ---------------Recently Added Card------------- */}
        <div className='mt-5 sm:px-10 overflow-hidden'>
          <div className='max-h-[423px] w-auto flex overflow-scroll no-scrollbar '>
            {data && data?.length > 0 ? (
              <SlickCard
                increaseAccessCount={increaseAccessCount}
                discoverReadingData={data}
              />
            ) : (
              "No Data Found..."
            )}
          </div>
        </div>

        {/*  -------------------Trending Resources------------------- */}
        <div className='mt-5 px-3   sm:py-6 sm:px-10 '>
          <div className=''>
            <h1 className=' text-[26px] leading-[39px] font-semibold font-Poppins text-[#1F5095]'>
              Trending Resources
            </h1>
            <h1 className=' text-[#A3AED0] text-[15px] font-normal leading-[28px] font-Poppins'>
              Discover Fresh Perspectives with Our Newly Added Resources
            </h1>
            <div className=' border flex-wrap sm:w-[450px] flex justify-between mt-5  items-center px-3 py-1 rounded-[8px]'>
              {treandingKeys &&
                treandingKeys?.map((key, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      changeSubjects(key, "treanding");
                    }}
                    className={`text-[14px] ${
                      selectedTreanding === key
                        ? "bg-[#1F5095] text-white"
                        : "bg-white text-black "
                    } rounded-[8px] p-2 text-[14px]  ${
                      treandingResourceData &&
                      treandingResourceData[key]?.length === 0
                        ? "cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                  >
                    {key.replace(/_/g, " ")}
                  </button>
                ))}
            </div>
          </div>
          {/* <div className=' hidden sm:flex justify-end'>
            <button className=' h-[43px] w-[131px] rounded-[5px] border border-solid border-[#221FB9/0.14]'>
              Show More
            </button>
          </div> */}
        </div>
        <div className='mt-5 sm:px-10 overflow-hidden'>
          <div className='max-h-[423px] w-auto flex overflow-scroll no-scrollbar '>
            {treandingData && treandingData?.length > 0 ? (
              <SlickCard
                increaseAccessCount={increaseAccessCount}
                discoverReadingData={treandingData}
              />
            ) : (
              "No Data Found"
            )}{" "}
          </div>
        </div>

        {/*  -------------------Top Saved Resources------------------- */}
        <div className='mt-10 px-3 sm:py-6 sm:px-10 '>
          <div className=''>
            <h1 className=' text-[26px] leading-[39px]  font-semibold font-Poppins text-[#1F5095]'>
              Top Saved Resources throughout
            </h1>
            <h1 className=' text-[#A3AED0] text-[15px] font-normal leading-[28px] font-Poppins'>
              Discover Fresh Perspectives with Our Newly Added Resources
            </h1>
          </div>
        </div>
        <div className='mt-5 px-3 sm:px-10 sm:flex flex-row w-auto overflow-scroll mb-4 no-scrollbar'>
          <div className=' relative mb-2 sm:mb-0'>
            <img
              src={firstimg}
              alt='firstimg'
              className=' w-full sm:h-[470px] rounded-[5px] mr-2 bg-gradient-to-b from-black to-#221FB9 '
            />
            <div className=' absolute left-4 bottom-[50px] flex flex-col'>
              <span
                onClick={() => {
                  const id =
                    topSavedResourcesData && topSavedResourcesData?.data[0]?.id;
                  const link =
                    topSavedResourcesData &&
                    topSavedResourcesData?.data[0]?.current_issue_url;
                  increaseAccessCount(id);
                  window.open(link, "_blank");
                }}
                className=' text-white cursor-pointer font-Poppins  font-semibold text-[18px] sm:text-[22px] leading-[26px]'
              >
                {/* Cambridge Series on Human-Computer Interaction */}
                {topSavedResourcesData && topSavedResourcesData?.data[0]?.title}
              </span>
              <span className=' text-[#FFFFFF] font-Poppins text-[15px] leading-[26px] opacity-[50%]  font-normal'>
                {" "}
                Published By :{" "}
                {(topSavedResourcesData &&
                  topSavedResourcesData?.data[0]?.author) ||
                  "Unknown"}{" "}
                {topSavedResourcesData &&
                topSavedResourcesData?.data[0]?.publish_date
                  ? ", " + topSavedResourcesData?.data[0]?.publish_date
                  : ""}
              </span>
            </div>
          </div>
          <div className=' flex flex-col sm:ml-2 '>
            <span className=' relative'>
              <img
                src={secimg}
                alt='secimg'
                className='h-[302px] mb-2 sm:h-[231px] '
              />
              <div className=' absolute bottom-[30px] left-4 flex flex-col'>
                <span
                  onClick={() => {
                    const id =
                      topSavedResourcesData &&
                      topSavedResourcesData?.data[1]?.id;
                    const link =
                      topSavedResourcesData &&
                      topSavedResourcesData?.data[1]?.current_issue_url;
                    increaseAccessCount(id);
                    window.open(link, "_blank");
                  }}
                  className=' text-white cursor-pointer font-Poppins  font-semibold text-[18px]  w-[280px] sm:text-[22px] leading-[26px] '
                >
                  {topSavedResourcesData &&
                    topSavedResourcesData?.data[1]?.title}
                </span>
                <span className=' text-[#FFFFFF] font-Poppins text-[15px] leading-[26px] opacity-[50%]  font-normal'>
                  {" "}
                  Published By :{" "}
                  {(topSavedResourcesData &&
                    topSavedResourcesData.data[1]?.author) ||
                    "Unknown"}{" "}
                  {topSavedResourcesData &&
                  topSavedResourcesData?.data[1]?.publish_date
                    ? ", " + topSavedResourcesData?.data[1]?.publish_date
                    : ""}
                </span>
              </div>
            </span>
            <span className=' relative'>
              <img
                src={thirdimg}
                alt='thirdimg'
                className='h-[302px] mb-2 sm:h-[231px]'
              />
              <div className=' absolute bottom-[30px] left-4 flex flex-col'>
                <span
                  onClick={() => {
                    const id =
                      topSavedResourcesData &&
                      topSavedResourcesData?.data[2]?.id;
                    const link =
                      topSavedResourcesData &&
                      topSavedResourcesData?.data[2]?.current_issue_url;
                    increaseAccessCount(id);
                    window.open(link, "_blank");
                  }}
                  className=' text-white cursor-pointer font-Poppins  font-semibold text-[18px]  w-[280px] sm:text-[22px] leading-[26px] '
                >
                  {topSavedResourcesData &&
                    topSavedResourcesData?.data[2]?.title}
                </span>
                <span className=' text-[#FFFFFF] font-Poppins text-[15px] leading-[26px] opacity-[50%]  font-normal'>
                  {" "}
                  Published By :{" "}
                  {(topSavedResourcesData &&
                    topSavedResourcesData?.data[2]?.author) ||
                    "Unknown"}{" "}
                  {topSavedResourcesData &&
                  topSavedResourcesData?.data[2]?.publish_date
                    ? ", " + topSavedResourcesData?.data[2]?.publish_date
                    : ""}
                </span>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

const SlickCard = ({ increaseAccessCount, discoverReadingData }) => {
  let sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024, // lg breakpoint
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // md breakpoint
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // sm breakpoint
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 440, // sm breakpoint
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  return (
    <div className='relative w-full'>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {discoverReadingData &&
          discoverReadingData?.length > 0 &&
          discoverReadingData?.map((val, i) => (
            <div
              key={i}
              onClick={() => {
                increaseAccessCount(val.id);
                window.open(val?.current_issue_url, "_blank");
              }}
              className='cursor-pointer group max-w-[276px] h-[358px] border rounded-[5px] font-Poppins mr-3'
            >
              <img src={cardimage} alt='card-view' className=' h-[143px]' />
              <div className=' m-5'>
                <p className=' text-[18px] line-clamp-2 h-[60px] font-semibold leading-normal max-w-[244px] '>
                  {val.title ? val.title : "---"}
                </p>
                <p className=' text-[12px]  font-normal leading-[20px] text-[#000000] opacity-[50%] mt-4'>
                  Published By : {val.author ? val.author : "Unknown"}
                </p>
              </div>
              <div
                className='w-fit px-[15px] py-2 text-[#F38D15] group-hover:bg-[#0B2E78] group-hover:text-white group-hover:light:text-white font-medium  rounded-md mx-5  bg-green-50'
                style={{ border: "1px solid green" }}
              >
                e-
                {capitalizeLetter(val?.resource_type)}
              </div>
            </div>
          ))}
      </Slider>
      <div className='absolute inset-y-1/2 flex w-full justify-between'>
        <button
          className='button w-8 h-8 border rounded-full bg-gray-100 flex items-center justify-center shrink-0'
          onClick={previous}
        >
          <IoChevronBackOutline />
        </button>
        <button
          className='button rotate-180 flex items-center justify-center shrink-0  w-8 h-8 border rounded-full bg-gray-100'
          onClick={next}
        >
          <IoChevronBackOutline />
        </button>
      </div>
    </div>
  );
};
