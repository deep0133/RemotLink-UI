import React, { useState, useEffect } from "react";
import footer_logo from "../../images/footerLogo.png";
import facebook_icon from "../../images/facebook.svg";
import linkedin_icon from "../../images/linkedin.svg";
import twitter_icon from "../../images/Vector.svg";
import instagram_icon from "../../images/Group 427318261.svg";
import Elipse from "../../images/Ellipse 24.svg";
import btn_icon from "../../images/Group 427318227.svg";
import Button from "../uiElemnts/button";
import blank from "../../images/blankimg.svg";
import Service from "../Webservices/http";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [institutionDetails, setInstitutionDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const services = new Service();

  const institutionDetailFetch = async () => {
    try {
      const response = await services
        .get("api/institution/detail")
        .then((res) => setInstitutionDetails(res));
    } catch (error) {
      console.error("Error fetching FAQs:", error);
      setError("Failed to fetch FAQs. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    institutionDetailFetch();
  }, []);

  // console.log(institutionDetails, ";;;");

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
    <div className=" text-white">
      <div className=" h-auto bg-[#3674CB] sm:px-[200px] px-20 py-10  ">
        <div className=" sm:flex  sm:justify-between flex-row ">
          <div>
            <img src={blank} alt="" className=" w-[57px] h-[76px]" />
            <h3 className=" text-white font-Poppins font-bold text-[18px] uppercase mt-6">
              {institutionDetails?.name}
            </h3>
            <p className="sm:mt-6 mt-6 font-normal text-white font-Poppins sm:font-medium sm:text-[18px] text-[15px] sm:leading-8 leading-[25px]  border-b p-2">
              {/* Official Institute Library to access Digital material */}
              {institutionDetails?.tagline}
            </p>
          </div>
          <div className="flex items-start flex-col  sm:ml-10 mt-10 sm:mt-0">
            <h1 className=" text-white font-Poppins font-semibold text-base uppercase">
              Address
            </h1>
            <ul className="flex  flex-col">
              <li>
                <p className="leading-6 w-[240px] mt-[19px] ">
                  {institutionDetails?.address}
                </p>
              </li>
              <li className="flex leading-5 mt-[19px]">
                {institutionDetails?.phone_number} :{" "}
                {institutionDetails?.second_phone_number}
              </li>
              <li className="leading-5 mt-[19px]">
                {institutionDetails?.email}
              </li>
            </ul>
          </div>
          {/* for web quick link and categories line 49- 75*/}
          <div className="hidden sm:flex  flex-col  ">
            <h1 className=" text-white font-Poppins font-semibold text-base uppercase ">
              Quick Links
            </h1>
            <ul className="flex flex-shrink-0 items-start justify-between flex-col mt-[19px]">
              <li className="mb-[11px]">Home</li>
              <li className="mb-[11px]">About Us</li>
              <li className="mb-[11px]">Categories</li>
              <li className="mb-[11px]">Open Access</li>
              <li className="mb-[11px]">The Institute</li>
            </ul>
          </div>

          <div className="hidden sm:flex items-start justify-between flex-col h-[250px] ">
            <h1 className=" text-white font-Poppins font-semibold text-base uppercase">
              Categories
            </h1>
            <ul className="flex flex-shrink-0 items-start justify-between flex-col pt-[19px]">
              <li className="mb-[11px]">Dentist </li>
              <li className="mb-[11px]">Medical</li>
              <li className="mb-[11px]">Opeodenics</li>
              <li className="mb-[11px]">Medical</li>
              <li className="mb-[11px]">Dentist </li>
              <li className="mb-[11px]">Opeodenics</li>
            </ul>
          </div>
          {/* for mobile quick link and categories line 49- 75 */}
          <div className=" flex sm:hidden  justify-between mt-10">
            <div className="flex  flex-col  ">
              <h1 className=" text-white font-Poppins font-semibold text-base uppercase ">
                Quick Links
              </h1>
              <ul className="flex flex-shrink-0 items-start justify-between flex-col pt-[19px]">
                <li className="mb-[11px]">Home</li>
                <li className="mb-[11px]">About Us</li>
                <li className="mb-[11px]">Categories</li>
                <li className="mb-[11px]">Open Access</li>
                <li className="mb-[11px]">The Institute</li>
              </ul>
            </div>

            <div className="flex items-start justify-between flex-col h-[250px] ">
              <h1 className=" text-white font-Poppins font-semibold text-base uppercase">
                Categories
              </h1>
              <ul className="flex flex-shrink-0 items-start justify-between flex-col pt-[19px]">
                <li className="mb-[11px]">Dentist </li>
                <li className="mb-[11px]">Medical</li>
                <li className="mb-[11px]">Opeodenics</li>
                <li className="mb-[11px]">Medical</li>
                <li className="mb-[11px]">Dentist </li>
                <li className="mb-[11px]">Opeodenics</li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" flex  justify-end mt-8  ">
          <Button handleBackToTop={handleBackToTop} title={"Back on Top"} />
        </div>
      </div>

      <div className="p-10 sm:p-0  block h-[331px]   sm:h-[117px] bg-[#0B3775] sm:flex flex-shrink-0 text-white  justify-around items-center">
        <div className="block sm:flex  justify-between  items-center ">
          <img
            className="w-[95px] h-[59px] rounded-md white"
            src={footer_logo}
            alt=" "
          />
          <h1 className="font-Poppins font-medium text-[15px] leading-5 mt-10 ">
            Powered By Remotlink - All Rights Reserved
          </h1>
        </div>
        <div className="flex   justify-between  items-center mt-10 ">
          <h1 className=" font-Poppins font-medium text-[15px] leading-5 font-feature  mr-10">
            Privacy Policy
          </h1>
          <h1 className=" font-Poppins font-medium text-[15px] leading-6 font-feature  ">
            Terms and Conditions
          </h1>
        </div>
        <div className="flex items-center mt-10 ">
          <img
            className="opacity-[54] w-[20px] h-[21px] mr-10"
            src={instagram_icon}
            alt="instagram icon "
          />
          <img
            className="opacity-[54] w-[20px] h-[20px] fill-white mr-10"
            src={linkedin_icon}
            alt=" linkedin icon"
          />
          <img
            className="opacity-[54] w-[9px] h-[18px] fill-white mr-10 "
            src={facebook_icon}
            alt="facebook icon "
          />
          <img
            className="opacity-[54] w-[13px] h-[14px] fill-white"
            src={twitter_icon}
            alt=" twitter icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
