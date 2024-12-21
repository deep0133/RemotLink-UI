import React, { useState, useEffect } from "react";
import footer_logo from "../../images/footerLogo.png";
import facebook_icon from "../../images/facebook.svg";
import linkedin_icon from "../../images/linkedin.svg";
import twitter_icon from "../../images/Vector.svg";
import instagram_icon from "../../images/Group 427318261.svg";
import Button from "../uiElemnts/button";
import blank from "../../images/blankimg.svg";
import { Link } from "react-router-dom";

const Footer = ({ institutionDetails, domain }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 300;

      setIsVisible(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    const cleanup = () => {
      window.removeEventListener("scroll", handleScroll);
    };

    return cleanup;
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className=' text-white overflow-hidden'>
      <div className=' h-auto bg-[#3674CB] px-[5%] py-10  '>
        <div className='grid grid-cols-4 lg:grid-cols-5 gap-3 md:gap-8 lg:gap-16'>
          <div className='col-span-2'>
            {institutionDetails.logo ? (
              <img
                src={
                  institutionDetails?.logo
                    ? domain + institutionDetails.logo
                    : ""
                }
                alt='blank'
                className='w-[57px] h-[76px]'
              />
            ) : (
              <img src={blank} alt='blank' className='w-[57px] h-[76px]' />
            )}
            <h3 className=' text-white font-Poppins font-bold text-[18px] uppercase mt-6'>
              {institutionDetails.name
                ? institutionDetails.name
                : "Swargiya Dadasaheb Kalmegh Smruti Dental College & Hospital"}
            </h3>
            <p className='mt-6 font-normal text-white font-Poppins sm:font-medium sm:text-[18px] text-[15px] sm:leading-8 leading-[25px]'>
              {institutionDetails.tagline
                ? institutionDetails.tagline
                : "Official Institute Library to access Digital material"}
              <hr className='w-4/5 h-0.5 bg-gray-50 rounded-[5px]' />
            </p>
          </div>
          <div className='flex col-span-2 lg:col-span-1 items-start flex-col'>
            <h1 className=' text-white font-Poppins font-semibold text-base uppercase'>
              Address
            </h1>
            <ul className='flex flex-col'>
              <li className='leading-6 text-wrap break-words mt-[19px] '>
                {institutionDetails.address
                  ? institutionDetails.address
                  : "The Principal Swargiya Dadasaheb Kalmegh Smruti Dental College & Hospital Wanadongari - Wadhamna Road, Hingna Nagpur - 441110 Maharashtra, India"}
              </li>
              <li className='flex leading-5 mt-[19px]'>
                {institutionDetails.phone_number
                  ? institutionDetails.phone_number
                  : "9178525763"}{" "}
                :{" "}
                {institutionDetails.second_phone_number
                  ? institutionDetails.second_phone_number
                  : "9178525763"}
              </li>
              <li className='leading-5 mt-[19px]'>
                {institutionDetails.email
                  ? institutionDetails.email
                  : "sdddhch@sdmail.com"}
              </li>
            </ul>
          </div>
          {/* for web quick link and categories line 49- 75*/}
          <div className='flex col-span-2 lg:col-span-1 flex-col mt-5 md:mt-0'>
            <h1 className=' text-white font-Poppins font-semibold text-base uppercase '>
              Quick Links
            </h1>
            <ul className='flex flex-shrink-0 items-start justify-between flex-col mt-[19px]'>
              <li className='mb-[11px]'>
                <Link
                  to={"/home"}
                  className='light:font-Outfit light:text-[#00000099] light:text-opacity-80 purple:font-Sora purple:text-opacity-50'
                >
                  Home
                </Link>
              </li>
              <li className='mb-[11px]'>
                {" "}
                <Link
                  to='/#aboutSection'
                  className=' light:font-Outfit light:text-[#00000099] light:text-opacity-80 purple:font-Sora purple:text-opacity-50'
                >
                  About Us
                </Link>
              </li>
              <li className='mb-[11px]'>
                {" "}
                <Link
                  to='/#categorySection'
                  className='light:font-Outfit light:text-[#00000099] light:text-opacity-80 purple:font-Sora purple:text-opacity-50'
                >
                  Categories
                </Link>
              </li>
              <li className='mb-[11px]'>
                {" "}
                <Link
                  to='/#statisticSection'
                  className='light:font-Outfit light:text-[#00000099] light:text-opacity-80 purple:font-Sora purple:text-opacity-50'
                >
                  Statistics
                </Link>
              </li>
              <li className='mb-[11px]'>
                {" "}
                <Link
                  to='/#featuredSection'
                  className='light:font-Outfit light:text-[#00000099] light:text-opacity-80 purple:font-Sora purple:text-opacity-50 whitespace-nowrap'
                >
                  Featured
                </Link>
              </li>
            </ul>
          </div>

          <div className='flex flex-col mt-5 md:mt-0'>
            <h1 className=' text-white font-Poppins font-semibold text-base uppercase'>
              Categories
            </h1>
            <ul className='flex flex-shrink-0 items-start justify-between flex-col pt-[19px]'>
              <li className='mb-[11px]'>Dentist </li>
              <li className='mb-[11px]'>Medical</li>
              <li className='mb-[11px]'>Opeodenics</li>
              <li className='mb-[11px]'>Medical</li>
              <li className='mb-[11px]'>Dentist </li>
              <li className='mb-[11px]'>Opeodenics</li>
            </ul>
          </div>
        </div>
        <div className=' flex  justify-end mt-8'>
          <Button handleBackToTop={handleBackToTop} title={"Back on Top"} />
        </div>
      </div>

      <div className='p-10 sm:p-0  block h-[331px]   sm:h-[117px] bg-[#0B3775] sm:flex flex-shrink-0 text-white  justify-around items-center'>
        <div className='block sm:flex  justify-between  items-center '>
          <img
            className='w-[95px] h-[59px] rounded-md white'
            src={footer_logo}
            alt=' '
          />
          <h1 className='font-Poppins font-medium text-[15px] leading-5 mt-10 min-[433px]:pl-[20px]  '>
            Powered By Remotlink - All Rights Reserved
          </h1>
        </div>
        <div className='flex   justify-between  items-center mt-10 '>
          <h1
            onClick={() =>
              window.open("https://remotlink.com/privacy-policy/", "_blank")
            }
            className=' font-Poppins font-medium text-[15px] cursor-pointer leading-5 font-feature  mr-10'
          >
            Privacy Policy
          </h1>
          <h1
            onClick={() =>
              window.open("https://remotlink.com/terms-of-use/", "_blank")
            }
            className=' font-Poppins font-medium text-[15px] cursor-pointer leading-6 font-feature  '
          >
            Terms and Conditions
          </h1>
        </div>
        <div className='flex items-center mt-10 '>
          <img
            className='opacity-[54] w-[20px] h-[21px] mr-10'
            src={instagram_icon}
            alt='instagram icon '
          />
          <img
            className='opacity-[54] w-[20px] h-[20px] fill-white mr-10'
            src={linkedin_icon}
            alt=' linkedin icon'
          />
          <img
            className='opacity-[54] w-[9px] h-[18px] fill-white mr-10 '
            src={facebook_icon}
            alt='facebook icon '
          />
          <img
            className='opacity-[54] w-[13px] h-[14px] fill-white'
            src={twitter_icon}
            alt=' twitter icon'
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
