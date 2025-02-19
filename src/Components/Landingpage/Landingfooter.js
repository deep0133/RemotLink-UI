import React, { useState, useEffect } from "react";
import footer_logo from "../../images/d725dac3fdc6eba7ecd06d67942e90e8.png";
import facebook_icon from "../../images/facebook.svg";
import linkedin_icon from "../../images/linkedin.svg";
import twitter_icon from "../../images/Vector.svg";
import instagram_icon from "../../images/Group 427318261.svg";
import facebook_icon2 from "../../images/facebook-_llight.svg";
import linkedin_icon2 from "../../images/linkedin_light.svg";
import twitter_icon2 from "../../images/Vector_light.svg";
import instagram_icon2 from "../../images/Group 427318261_light.svg";
import Elipse from "../../images/Ellipse 24.svg";
import btn_icon from "../../images/Group 427318227.svg";
import btn_icon2 from "../../images/Group 427318227_light.svg";
import banr2 from "../../images/Group 2326.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import instituteDefaultLogo from "../../images/instituteDefaultLogo.png";
const Landingfooter = ({ domain, institutionDetails }) => {

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!institutionDetails) return "No Data found";

  return (
    <>
      <div className='w-full h-full bg-[#26222E] light:bg-primary  purple:bg-secondary overflow-y-scroll no-scrollbar '>
        <div className='h-full my-32'>
          <div className='flex justify-start md:justify-center  items-start text-white mt-[108px] ml-8 sm:ml-24 flex-wrap'>
            <div>
              <ul className='flex  items-start justify-between flex-col'>
                <li className=''>
                  <div className=' rounded-md bg-white purple:bg-secondary '>
                    {institutionDetails.logo ? (
                      <img
                        className='w-[57.161px] h-[76.68px]'
                        src={domain + institutionDetails.logo}
                        alt='instituet'
                      />
                    ) : (
                      <img
                        className='w-[57.161px] h-[76.68px] object-contain'
                        src={instituteDefaultLogo}
                        alt='banner-logo'
                      />
                    )}
                    <img
                      className='w-[67.288px] h-[73.94px] hidden '
                      src={banr2}
                      alt='alt'
                    />
                  </div>
                </li>
                <li className='purple:hidden max-w-[378px] text-white light:text-black font-Lusitana light:font-SourceSans font-bold text-[18px] leading-10 uppercase pt-[35px] pb-[10px]  mr-1'>
                  {institutionDetails.name
                    ? institutionDetails.name
                    : "Institution Name"}
                </li>
                <li className='hidden purple:block max-w-[408px] text-white font-Sora font-bold text-[18px] leading-10 uppercase pt-[35px] pb-[10px]'>
                  Indian Institute of Medical Sciences
                </li>
                <li className='text-white light:text-black font-AnekLatin light:font-SourceSans purple:font-Sora font-medium text-[16px] leading-8 mr-1 '>
                  {institutionDetails?.tagline ||
                    " Official Institute Library to access Digital material"}
                  <div className='w-11/12 h-[2px] bg-[#AE9F0F] light:bg-[#B1CAFF] purple:bg-[#B1CAFF]'></div>
                </li>
              </ul>
            </div>

            <div className='flex items-start justify-between flex-col w-[272px] ml-[90px] max-[835px]:mt-14 max-[835px]:ml-2 '>
              <h1 className='w-[77.714px] text-white light:text-black font-AnekLatin light:font-Outfit purple:font-Sora purple:text-opacity-80  font-semibold text-base uppercase'>
                Address
              </h1>
              <ul className='flex  items-start justify-between flex-col'>
                <li>
                  <p className='whitespace-normal w-64 pt-[19px] pb-[29px] light:font-Outfit light:text-[#00000099]  light:text-opacity-80 purple:font-Sora purple:text-opacity-50 '>
                    {institutionDetails?.address || "Address"}
                  </p>
                </li>
                <li className='flex light:font-Outfit light:text-[#00000099] light:text-opacity-80 purple:font-Sora purple:text-opacity-50 '>
                  {" "}
                  {institutionDetails?.phone_number || "No contact available"}
                  <img className='pl-1 pr-1' src={Elipse} alt='dot icon' />
                  {institutionDetails?.second_phone_number ||
                    "No other contact available"}
                </li>
                <li className='pt-[13px] light:font-Outfit light:text-[#00000099] light:text-opacity-80 purple:font-Sora purple:text-opacity-50 '>
                  {institutionDetails?.email || "sdddhch@sdmail.com"}
                </li>
              </ul>
            </div>

            <div className=' flex items-center justify-start sm:justify-between mr-3 max-[1160px]:mt-16 max-[1160px]:w-3/5 '>
              <div className='flex items-start justify-start flex-col  w-[100px] purple:w-[114px] h-full ml-[20px] mb-12  '>
                <h1 className=' text-white light:text-black font-AnekLatin light:font-Outfit purple:font-Sora purple:text-opacity-80 font-semibold text-base uppercase whitespace-nowrap '>
                  Quick Links
                </h1>
                <ul className='flex space-y-[11px] items-start justify-stretch flex-col pt-3 '>
                  <li>
                    <Link
                      to={"/home"}
                      className='light:font-Outfit light:text-[#00000099] light:text-opacity-80 purple:font-Sora purple:text-opacity-50'
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <a
                      href='#aboutSection'
                      className=' light:font-Outfit light:text-[#00000099] light:text-opacity-80 purple:font-Sora purple:text-opacity-50'
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href='#statisticSection'
                      className='light:font-Outfit light:text-[#00000099] light:text-opacity-80 purple:font-Sora purple:text-opacity-50'
                    >
                      Statistics
                    </a>
                  </li>
                  <a
                    href='#categorySection'
                    className='light:font-Outfit light:text-[#00000099] light:text-opacity-80 purple:font-Sora purple:text-opacity-50'
                  >
                    Categories
                  </a>
                  <a
                    href='#featuredSection'
                    className='light:font-Outfit light:text-[#00000099] light:text-opacity-80 purple:font-Sora purple:text-opacity-50 whitespace-nowrap'
                  >
                    Featured
                  </a>
                </ul>
              </div>

              <div className='flex items-start justify-between flex-col  w-[100px] h-full max-[375px]:ml-10 ml-24'>
                <h1 className=' text-white light:text-black font-AnekLatin light:font-Outfit purple:font-Sora purple:text-opacity-80  font-semibold text-base uppercase'>
                  Categories
                </h1>
                <ul className='flex  items-start justify-between flex-col pt-[19px]'>
                  <li className='pb-[11px] light:font-Outfit light:text-[#00000099] light:text-opacity-80  purple:font-Sora purple:text-opacity-50'>
                    Medical
                  </li>
                  <li className='pb-[11px] light:font-Outfit light:text-[#00000099] light:text-opacity-80 purple:font-Sora purple:text-opacity-50'>
                    Dentist{" "}
                  </li>
                  <li className='pb-[11px] light:font-Outfit light:text-[#00000099] light:text-opacity-80 purple:font-Sora purple:text-opacity-50'>
                    Opeodenics
                  </li>
                  <li className='pb-[11px] light:font-Outfit light:text-[#00000099] light:text-opacity-80 purple:font-Sora purple:text-opacity-50'>
                    Medical
                  </li>
                  <li className='pb-[11px] light:font-Outfit light:text-[#00000099] light:text-opacity-80 purple:font-Sora purple:text-opacity-50'>
                    Dentist{" "}
                  </li>
                  <li className='pb-[11px] light:font-Outfit light:text-[#00000099] light:text-opacity-80 purple:font-Sora purple:text-opacity-50'>
                    Opeodenics
                  </li>
                </ul>
              </div>
            </div>

            <button className='relative top-[220px] left-0 xl:top-[200px] xl:right-[40px] max-[336px]:top-24 max-[336px]:left-36  '>
              <img
                src={btn_icon}
                alt='Back top icon'
                className='light:hidden '
              />
              <img
                src={btn_icon2}
                alt='Back top icon'
                className='hidden light:block'
              />
              <h1
                className='text-white light:text-black font-AnekLatin light:font-Outfit purple:font-Sora text-base purple:text-[14px] relative bottom-[33px] '
                onClick={handleBackToTop}
              >
                {" "}
                Back to Top
              </h1>
            </button>
          </div>
        </div>

        <div className='w-full h-full min-h-[117px] bg-[#1F1B25] light:bg-primary  purple:bg-brand flex  text-white justify-start sm:justify-center min-[994px]:justify-between 2xl:justify-center items-center fill-white flex-wrap max-sm:pl-6 max-[970px]:py-6'>
          <div className='flex  text-white justify-between  items-center sm:ml-10 lg:ml-16 xl:ml-24 mr-4 flex-wrap '>
            <div className='flex items-center justify-center '>
              <div>
                <img
                  className='w-[95.308px] h-[59px] rounded-md white'
                  src={footer_logo}
                  alt=' '
                />
              </div>
            </div>
            <div>
              <h1 className='text-[#DBDBDB] font-AnekLatin purple:font-Sora font-medium text-[15px] purple:text-[13px] leading-5 min-[433px]:pl-[20px] light:font-Outfit light:text-[#00000099] purple:text-white light:text-opacity-60 purple:text-opacity-60 whitespace-nowrap max-[413px]:mt-4 '>
                {" "}
                Powered By Remotlink - All Rights Reserved
              </h1>
            </div>
          </div>
          <div className='flex  text-[#DBDBDB] justify-between  items-center gap-0 min-[994px]:gap-6 mr-4 max-[545px]:my-6 '>
            <h1
              onClick={() =>
                window.open("https://remotlink.com/privacy-policy/", "_blank")
              }
              className='text-[#DBDBDB] font-AnekLatin cursor-pointer purple:font-Sora font-medium text-[15px] leading-5 font-feature light:font-Outfit light:text-[#00000099]  light:text-opacity-60 purple:text-white purple:text-opacity-60 '
            >
              Privacy Policy
            </h1>
            <h1
              onClick={() =>
                window.open("https://remotlink.com/terms-of-use/", "_blank")
              }
              className='text-[#DBDBDB] font-AnekLatin cursor-pointer purple:font-Sora font-medium text-[15px] leading-6 font-feature  pl-[28px] light:font-Outfit light:text-[#00000099] light:text-opacity-60 purple:text-white purple:text-opacity-60'
            >
              Terms and Conditions
            </h1>
          </div>
          <div className='flex  justify-normal items-center mr-10 min-[1042px]:mr-16 '>
            <img
              className='opacity-[54] w-[20.999px] h-[21px] light:hidden'
              src={instagram_icon}
              alt='instagram icon '
            />

            <img
              className='opacity-[54] w-[20px] h-[20px] ml-[50px]  light:hidden'
              src={linkedin_icon}
              alt=' linkedin icon'
            />

            <img
              className='opacity-[54] w-[9.29px] h-[18.58px] ml-[50px]  light:hidden '
              src={facebook_icon}
              alt='facebook icon '
            />

            <img
              className='opacity-[54] w-[13.957px] h-[14.264px]  ml-[50px]  light:hidden'
              src={twitter_icon}
              alt=' twitter icon'
            />

            <img
              className='opacity-[54] w-[20.999px] h-[21px] hidden light:block'
              src={instagram_icon2}
              alt='instagram icon '
            />

            <img
              className='opacity-[54] w-[20px] h-[20px] ml-[50px] hidden light:block'
              src={linkedin_icon2}
              alt=' linkedin icon'
            />

            <img
              className='opacity-[54] w-[9.29px] h-[18.58px] ml-[50px] hidden light:block '
              src={facebook_icon2}
              alt='facebook icon '
            />

            <img
              className='opacity-[54] w-[13.957px] h-[14.264px]  ml-[50px] hidden light:block'
              src={twitter_icon2}
              alt=' twitter icon'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landingfooter;
