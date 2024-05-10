import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import logo from "../../images/logo-bird.png";
import search_logo from "../../images/search-normal.svg";
import bell_icon from "../../images/Notification.svg";
import Flag_icon from "../../images/United.svg";
import down_icon from "../../images/chevron-down.svg";
import user_pic from "../../images/photo.svg";
import { Link, useLocation } from "react-router-dom";
import profileIcon from "../../images/user-square.png";
import bookIcon from "../../images/Group 1000003119.png";
import messagequestion from "../../images/message-question.png";
import teacher from "../../images/teacher.png";
import logout from "../../images/logout.png";
import whitebell from "../../images/whitenotif.png";
import menu from "../../images/menu.svg";
import cross from "../../images/Cross.svg";
import home from "../../images/Home.svg";
import book from "../../images/book.png";
import help_Icon from "../../images/message-question-white.svg";
import generateUrl from "../admin/utils/urlGenerate";

const Header = ({ logutOutHandler }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [userdetail, setUserdetail] = useState("");

  const [institutionDetails, setInstitutionDetails] = useState("");

  const [domain, setDomain] = useState("");

  useEffect(() => {
    const fetchUrl = async () => {
      const url = await generateUrl();
      setDomain(url);
    };
    fetchUrl();
  }, []);

  const institutionDetailFetch = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(`${domain}api/institution/detail`, {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setInstitutionDetails(data);
    } catch (error) {
      console.error("Error fetching FAQs:", error.message);
    }
  };

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/home") {
      institutionDetailFetch();
    }
  }, [location]);

  const href = window.location.pathname;
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const [navVisibility, setNavVisibility] = useState(false);

  const handleNavToggle = () => {
    setNavVisibility(!navVisibility);
  };

  const closeNav = () => {
    setNavVisibility(false);
  };

  useEffect(() => {
    if (navVisibility) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [navVisibility]);
  const arr = [1, 2, 3];

  const retrieveUserData = () => {
    var storedData = localStorage.getItem("userdata");
    var retrievedObject = JSON.parse(storedData);
    setUserdetail(retrievedObject);
  };
  useEffect(() => {
    retrieveUserData();
  }, []);

  useEffect(() => {
    async function fetchUrl() {
      try {
        const generatedUrl = await generateUrl();
        setDomain(generatedUrl);
      } catch (error) {
        console.error("Error fetching URL:", error);
      }
    }

    fetchUrl();
  }, []);

  return (
    <>
      <div className='hidden sm:flex w-auto h-[35px] bg-blue-900 items-center justify-evenly'>
        {arr.map((e) => (
          <p className='text-white font-inter text-[13px] font-medium  font-inter  '>
            8 positieve podcasts om je door{" "}
            <span className='underline'>2021 te slepen - Harper's …</span>
          </p>
        ))}
      </div>
      <div className='flex sm:hidden w-auto h-[35px] bg-blue-900 items-center justify-evenly'>
        <p className='text-white font-inter text-[13px] font-medium  font-inter  '>
          8 positieve podcasts om je door{" "}
          <span className='underline'>2021 te slepen - Harper's …</span>
        </p>
      </div>
      {/* larger screen header*/}
      <div className=' hidden sm:flex justify-between flex-shrink-0 items-center border-r border-solid border-blue-500 border-opacity-10 bg-white shadow-md h-[71px] w-full'>
        <div className='flex pl-[56px] pr-[12px]'>
          <img
            src={logo}
            alt='logo'
            className=' relative left-5 bottom-[4px] object-cover'
          />
        </div>
        <div
          className='text-blue-900 font-poppins line-clamp-2 text-base  font-semibold not-italic leading-normal w-[219px] pr-[]
    '
        >
          {institutionDetails.name
            ? institutionDetails.name
            : "Swargiya Dadasaheb Kalmegh Smruti Dental College & Hospital"}
        </div>
        <div className='flex items-center justify-between rounded-md border border-solid border-gray-200 w-[552px] h-auto p-[14px] px-[28px] gap-[301px] '>
          <input
            className=' flex flex-col items-center flex-shrink-0 text-blue-gray-700 font-poppins text-xs font-normal tracking-tighter w-[172px] h-[24px]'
            placeholder='Search any resources here ...'
          />
          <img
            src={search_logo}
            alt='Search logo'
            className='w-[20px] h-[20px]'
          />
        </div>
        <Link to='/notifications'>
          <div
            className={`flex justify-center items-center border rounded-full p-3
            ${href.includes("notifications") ? "bg-[#4477bf]" : ""}
             `}
          >
            {href.includes("notifications") ? (
              <img
                src={whitebell}
                alt='ciricle wrapper'
                className=' w-[20px] h-[20px]'
              />
            ) : (
              <img
                src={bell_icon}
                alt='ciricle wrapper'
                className=' w-[20px] h-[20px]'
              />
            )}
          </div>
        </Link>

        <div className='w-[121px] h-[38px] flex  flex-shrink-0 justify-evenly items-center rounded-[20px] border border-solid border-blue-500 border-opacity-10 bg-white shadow-md '>
          <img
            src={Flag_icon}
            alt='Flag icon'
            className='w-[22px] h-[22px] flex-shrink-0 '
          />
          <h3 className='text-gray-700 font-inter text-xs font-medium p-2 text-[12px]'>
            Eng (IN)
          </h3>
          <img
            src={down_icon}
            alt='down icon'
            className='w-[20px] h-[20px] flex-shrink-0'
          />
        </div>

        <div
          className='pr-[15px] pl-[25px] relative cursor-pointer '
          onClick={toggleDropdown}
        >
          <img
            src={
              userdetail.profile_photo
                ? domain + userdetail.profile_photo
                : profileIcon
            }
            alt='UserPicture'
            className='w-[38px] h-[38px] flex-shrink-0 rounded-full object-cover'
          />
          {showDropdown && (
            <div className='absolute top-[56px] left-[-30px] mt-2  z-40 border border-solid border-gray-200 rounded-md shadow-md bg-white'>
              <div className='p-4 h-[250px] w-[220px]'>
                <Link to='/profile'>
                  <div className=' flex items-center justify-start mb-6'>
                    <span className=' mr-3'>
                      {" "}
                      <img
                        src={
                          userdetail.profile_photo
                            ? domain + userdetail.profile_photo
                            : profileIcon
                        }
                        alt='icons'
                        className=' w-[22px] h-[22px] object-cover'
                      />
                    </span>
                    <span className=' text-sm font-medium  text-[#6F6C90]'>
                      My Profile
                    </span>
                  </div>
                </Link>

                <Link to='/savedresources'>
                  <div className=' flex items-center justify-start mb-6'>
                    <span className=' mr-3'>
                      {" "}
                      <img
                        src={bookIcon}
                        alt='icons'
                        className=' w-[22px] h-[22px]'
                      />
                    </span>
                    <span className=' text-sm font-medium  text-[#6F6C90]'>
                      Saved Resources
                    </span>
                  </div>
                </Link>
                <div className=' flex items-center justify-start mb-6'>
                  <span className=' mr-3'>
                    {" "}
                    <img
                      src={messagequestion}
                      alt='icons'
                      className=' w-[22px] h-[22px]'
                    />
                  </span>
                  <span className=' text-sm font-medium  text-[#6F6C90]'>
                    Help Center
                  </span>
                </div>
                <div className=' flex items-center justify-start mb-4'>
                  <span className=' mr-3'>
                    {" "}
                    <img
                      src={teacher}
                      alt='icons'
                      className=' w-[22px] h-[22px]'
                    />
                  </span>
                  <span className=' text-sm font-medium  text-[#6F6C90]'>
                    Tutorial
                  </span>
                </div>
                <hr />
                <div
                  className=' flex items-center justify-start mt-4'
                  onClick={logutOutHandler}
                >
                  <span className=' mr-3'>
                    {" "}
                    <img
                      src={logout}
                      alt='icons'
                      className=' w-[22px] h-[22px]'
                    />
                  </span>
                  <span className=' text-sm font-medium  text-[#E1735B]'>
                    Sign out
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className='pr-[80px]'>
          <h3 className='text-blue-gray-900 font-poppins text-[13px] font-semibold leading-6'>
            Hi {userdetail?.first_name || "Alex"}
          </h3>
          <h6 className='text-blue-gray-700 font-poppins text-[12px] font-normal leading-5'>
            {userdetail?.email || "alex@gmail.com"}
          </h6>
        </div>
      </div>

      {/* mobile header */}
      <div className='flex sm:hidden   items-center justify-between px-6 py-4 shadow-md'>
        <div className=' flex'>
          <div
            className=' border rounded-full flex items-center justify-center p-4 mr-2  relative'
            onClick={handleNavToggle}
          >
            <img src={`${navVisibility ? cross : menu} `} alt=' menu icon' />
          </div>
          <div className=''>
            <img src={logo} alt='logo' className='' />
          </div>
        </div>
        <div className=' flex items-center '>
          <Link to='/notifications'>
            <div
              className={`flex justify-center items-center border rounded-full p-4 mr-2
            ${href.includes("notifications") ? "bg-[#4477bf]" : ""}
             `}
            >
              {href.includes("notifications") ? (
                <img
                  src={whitebell}
                  alt='ciricle wrapper'
                  className=' w-[20px] h-[20px]'
                />
              ) : (
                <img
                  src={bell_icon}
                  alt='ciricle wrapper'
                  className=' w-[20px] h-[20px]'
                />
              )}
            </div>
          </Link>
          <div className=' border rounded-full flex items-center justify-center p-4 mr-2'>
            <img
              src={search_logo}
              alt='Search logo'
              className='w-[20px] h-[20px] '
            />
          </div>
          <div className=' relative' onClick={toggleDropdown}>
            <img
              src={user_pic}
              alt='UserPicture'
              className='w-[38px] h-[38px] flex-shrink-0 rounded-full'
            />
            {showDropdown && (
              <div className='absolute  right-0 mt-4  z-40 border border-solid border-gray-200 rounded-md shadow-md bg-white'>
                <div className='p-4 h-[250px] w-[220px]'>
                  <Link to='/profile'>
                    <div className=' flex items-center justify-start mb-6'>
                      <span className=' mr-3'>
                        {" "}
                        <img
                          src={profileIcon}
                          alt='icons'
                          className=' w-[22px] h-[22px]'
                        />
                      </span>
                      <span className=' text-sm font-medium  text-[#6F6C90]'>
                        My Profile
                      </span>
                    </div>
                  </Link>

                  <Link to='/savedresources'>
                    <div className=' flex items-center justify-start mb-6'>
                      <span className=' mr-3'>
                        {" "}
                        <img
                          src={bookIcon}
                          alt='icons'
                          className=' w-[22px] h-[22px]'
                        />
                      </span>
                      <span className=' text-sm font-medium  text-[#6F6C90]'>
                        Saved Resources
                      </span>
                    </div>
                  </Link>
                  <div className=' flex items-center justify-start mb-6'>
                    <span className=' mr-3'>
                      {" "}
                      <img
                        src={messagequestion}
                        alt='icons'
                        className=' w-[22px] h-[22px]'
                      />
                    </span>
                    <span className=' text-sm font-medium  text-[#6F6C90]'>
                      Help Center
                    </span>
                  </div>
                  <div className=' flex items-center justify-start mb-4'>
                    <span className=' mr-3'>
                      {" "}
                      <img
                        src={teacher}
                        alt='icons'
                        className=' w-[22px] h-[22px]'
                      />
                    </span>
                    <span className=' text-sm font-medium  text-[#6F6C90]'>
                      Tutorial
                    </span>
                  </div>
                  <hr />
                  <div className=' flex items-center justify-start mt-4'>
                    <span className=' mr-3'>
                      {" "}
                      <img
                        src={logout}
                        alt='icons'
                        className=' w-[22px] h-[22px]'
                      />
                    </span>
                    <span className=' text-sm font-medium  text-[#E1735B]'>
                      Sign out
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {navVisibility && (
        <div
          style={{
            position: "fixed",
            top: navVisibility ? "113px" : "-100%",
            left: 0,
            width: "100%",
            height: "100%",
            background: "white",
            boxShadow: "2px 0px 5px rgba(0, 0, 0, 0.5)",
            zIndex: 200,
            transition: "top 0.3s ease-out",
            overflow: "hidden",
          }}
          onClick={closeNav}
        >
          <div className=' w-full bg-white  z-50  py-14 px-4 '>
            {/* Your navigation links go here */}
            <div className=''>
              <Link to='/home'>
                <div
                  className={`flex items-center justify-start   rounded-lg px-[20px] py-[20px]  mb-2 ${
                    href.includes("home") ? "bg-[#3674CB] text-white" : ""
                  }`}
                >
                  <span className=' mr-3'>
                    {" "}
                    <img
                      src={home}
                      alt='icons'
                      className=' w-[22px] h-[22px]'
                    />
                  </span>
                  <span className=' text-sm font-medium '>Home</span>
                </div>
              </Link>

              <Link to='/resources'>
                <div
                  className={`flex items-center justify-start   rounded-lg px-[20px] py-[20px]  mb-2 ${
                    href.includes("resource") ? "bg-[#3674CB] text-white" : ""
                  }`}
                >
                  <span className=' mr-3'>
                    {" "}
                    <img
                      src={book}
                      alt='icons'
                      className=' w-[22px] h-[22px]   bg-white'
                    />
                  </span>
                  <span className=' text-sm font-medium  '>
                    Resources and Sites
                  </span>
                </div>
              </Link>
              <div className=' flex items-center justify-start  rounded-lg px-[20px] py-[20px] mb-2'>
                <span className=' mr-3'>
                  {" "}
                  <img
                    src={bookIcon}
                    alt='icons'
                    className=' w-[22px] h-[22px]'
                  />
                </span>
                <span className=' text-sm font-medium  '>My Favorites</span>
              </div>
              <Link to={"/searchview"}>
                <div
                  className={`flex items-center justify-start   rounded-lg px-[20px] py-[20px]  mb-2 ${
                    href.includes("searchview") ? "bg-[#3674CB] text-white" : ""
                  }`}
                >
                  <span className=' mr-3'>
                    {" "}
                    <img
                      src={search_logo}
                      alt='icons'
                      className=' w-[22px] h-[22px]'
                    />
                  </span>
                  <span className=' text-sm font-medium '>
                    Search Catalogue
                  </span>
                </div>
              </Link>
              {/* bottom part */}
              <div className=' flex  mt-[130px] bg-[#3674CB] h-[203px] rounded-lg relative'>
                <Link to='/help'>
                  <div className=' flex items-center justify-center bg-[#3674CB] font-bold w-[48px] h-[51px] border-2 rounded-full absolute top-[-25px] left-3  '>
                    <img
                      className='w-[24px] h-[24px]'
                      src={help_Icon}
                      alt='Help Icon'
                    />
                  </div>
                  <p className=' mt-10 p-4 text-white text-[12px] font-medium leading-4 font-Poppins'>
                    Having Trouble in Learning. Please contact us for more
                    questions.
                  </p>
                  <div className='mx-4 mt-[13px] b '>
                    <button className='bg-white px-6 py-2 rounded-lg font-medium  text-[#3674CB]'>
                      Go To Help Center
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
