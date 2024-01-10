import React, { useState, useEffect } from "react";
import footer_logo from "../../images/footerLogo.png";
import facebook_icon from "../../images/facebook.svg";
import linkedin_icon from "../../images/linkedin.svg";
import twitter_icon from "../../images/Vector.svg";
import instagram_icon from "../../images/Group 427318261.svg";
import Elipse from "../../images/Ellipse 24.svg";
import btn_icon from "../../images/Group 427318227.svg";
import Button from "../uiElemnts/button";

const Footer = () => {
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
    <>
      <div className=" h-[500px] bg-[#3674CB] ">
        <div className="flex flex-shrink-0 justify-normal items-center text-white pt-[108px]  pl-[160px] ">
          <ul className="flex flex-shrink-0 items-start justify-between flex-col">
            <li>
              <div className="w-[57.16px] h-[76.68px] rounded-md bg-white p-4"></div>
            </li>
            <li className="w-[378px] text-white font-Poppins font-bold text-[18px] leading-10 uppercase pt-[35px] pb-[10px]">
              Indian Institute of Technology Bombay
            </li>
            <li className="text-white w-[395px] font-Poppins font-medium text-[16px] leading-8 ">
              Official Institute Library to access Digital material
              <div className="w-[326px] h-[2px] bg-[#FFFFFF]"></div>
            </li>
          </ul>

          <div className="flex items-start justify-between flex-col w-[272px] ml-[90px]">
            <h1 className="w-[77.714px] text-white font-Poppins font-semibold text-base uppercase">
              Address
            </h1>
            <ul className="flex flex-shrink-0 items-start justify-between flex-col">
              <li>
                <p className="whitespace-normal w-68 pt-[19px] pb-[29px] leading-5">
                  The Principal Swargiya Dadasaheb Kalmegh Smruti Dental College
                  & Hospital Wanadongari - Wadhamna Road, Hingna Nagpur - 441110
                  Maharashtra, India
                </p>
              </li>
              <li className="flex leading-5">
                9178525763
                <img className="pl-1 pr-1" src={Elipse} alt="dot icon" />
                9178525763
              </li>
              <li className="pt-[13px] leading-5">sdddhch@sdmail.com</li>
            </ul>
          </div>

          <div className="flex items-start justify-stretch flex-col  w-[100px] h-[250px] ml-[20px] ">
            <h1 className=" text-white font-Poppins font-semibold text-base uppercase">
              Quick Links
            </h1>
            <ul className="flex flex-shrink-0 items-start justify-between flex-col pt-[19px]">
              <li className="pb-[11px]">Home</li>
              <li className="pb-[11px]">About Us</li>
              <li className="pb-[11px]">Categories</li>
              <li className="pb-[11px]">Open Access</li>
              <li className="pb-[11px]">The Institute</li>
            </ul>
          </div>

          <div className="flex items-start justify-between flex-col  w-[100px] h-[250px] ml-[93px]">
            <h1 className=" text-white font-Poppins font-semibold text-base uppercase">
              Categories
            </h1>
            <ul className="flex flex-shrink-0 items-start justify-between flex-col pt-[19px]">
              <li className="pb-[11px]">Medical</li>
              <li className="pb-[11px]">Dentist </li>
              <li className="pb-[11px]">Opeodenics</li>
              <li className="pb-[11px]">Medical</li>
              <li className="pb-[11px]">Dentist </li>
              <li className="pb-[11px]">Opeodenics</li>
            </ul>
          </div>
        </div>
        <div className=" flex  justify-end mt-8 px-[200px] ">
          <Button handleBackToTop={handleBackToTop} title={"Back on Top"} />
        </div>
      </div>
      <div className=" h-[117px] bg-[#0B3775] flex flex-shrink-0 text-white justify-normal items-center fill-white">
        <div className="flex flex-shrink-0 text-white justify-between  items-center ml-[144px]">
          <img
            className="w-[95.308px] h-[59px] rounded-md white"
            src={footer_logo}
            alt=" "
          />
          <h1 className="text-white font-Poppins font-medium text-[15px] leading-5 pl-[20px]">
            Powered By Remotlink - All Rights Reserved
          </h1>
        </div>
        <div className="flex flex-shrink-0 text-white justify-between  items-center ml-[105px] ">
          <h1 className="text-white font-Poppins font-medium text-[15px] leading-5 font-feature ">
            Privacy Policy
          </h1>
          <h1 className="text-white font-Poppins font-medium text-[15px] leading-6 font-feature  pl-[28px]  ">
            Terms and Conditions
          </h1>
        </div>
        <div className="flex flex-shrink-0 text-white justify-normal items-center w-[30px] ml-[120px]">
          <img
            className="opacity-[54] w-[20.999px] h-[21px]"
            src={instagram_icon}
            alt="instagram icon "
          />
          <img
            className="opacity-[54] w-[20px] h-[20px] fill-white ml-[50px]"
            src={linkedin_icon}
            alt=" linkedin icon"
          />
          <img
            className="opacity-[54] w-[9.29px] h-[18.58px] fill-white ml-[50px] "
            src={facebook_icon}
            alt="facebook icon "
          />
          <img
            className="opacity-[54] w-[13.957px] h-[14.264px] fill-white ml-[50px]"
            src={twitter_icon}
            alt=" twitter icon"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
