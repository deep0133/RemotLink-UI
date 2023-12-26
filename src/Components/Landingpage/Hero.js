import React from 'react'
import abt_us1 from "../../images/Rectangle 522.png";
import abt_us2 from "../../images/Rectangle 523.png";
import Showcard from "./Showcard";

import scenery from "../../images/Rectangle 550.png";

const Hero = () => {
  return (
    <>
    <div className="hidden purple:block">
          <div className=" flex    items-center justify-center bg-[#3D1766] w-full h-full flex-wrap gap-10 max-[955px]:pt-10">
            <div className="ml-6">
              <h1 className="text-white w-11/12 sm:w-[408px] min-[1211px]:w-[664px] font-feature-settings-[clig-off liga-off] font-Sora max-[410px]:text-[28px]  text-[32px]  font-bold leading-56 capitalize">
                Our Commitment to Academic Excellence
              </h1>
              <p className="text-white  w-11/12 sm:w-[408px] min-[1211px]:w-[539px] font-feature-settings-[clig-off liga-off] font-Sora text-[16px] opacity-60  font-light leading-32 capitalize pt-8">
                At [Institute Name], we are dedicated to fostering a rich
                learning environment through our comprehensive digital library.
                Our mission is to provide a diverse collection of resources,
                including journals, research papers, and educational materials,
                to support the academic pursuits of our students and faculty.{" "}
              </p>
            </div>
            <div className="flex flex-col items-center justify-between mx-6 max-[520px]:w-11/12 ">
              <img
                className="w-[459px] h-[401px]"
                src={scenery}
                alt="scenery"
              />
              <div className=" w-full max-w-[459px] h-[39px] bg-[#B096FA] mt-3"></div>
            </div>
          </div>
        </div>
        <div className="purple:hidden flex items-center   justify-center flex-col  pt-[72px] ">
          <div className="">
            <button className="flex items-center justify-center  h-[26px] p-4 gap-2  border rounded-[5px] border-solid border-white light:border-[#0B2E781A] border-opacity-10 text-[#AE9F0F] light:text-[#0B2E78] text-right font-AnekLatin  light:font-Outfit text-xs font-medium leading-5 capitalize">
              About Us
            </button>
          </div>
          <div className="flex  items-center justify-center min-[1331px]:justify-between mt-[28px] mx-2 flex-wrap gap-5">
            <h1 className="w-11/12 sm:w-[576px] min-w-[305px] text-[#DBDBDB] light:text-[#000000] font-Lusitana light:font-SourceSans purple:font-Sora  uppercasetext-gray-300 text-4xl   sm:text-5xl  font-bold leading-normal tracking-tight max-[1263px]:text-center ">
              Quality Practical Medical Education
            </h1>
            <p className="w-11/12 md:w-[651px] text-white light:text-[#00000099] light:text-opacity-60 font-AnekLatin  light:font-S text-base font-medium leading-8 min-xl:text-center">
              Dvirtual Library (DVL) is a leading digital resource hub dedicated
              to empowering excellence in medical education and research. With a
              rich history of serving the community, DVL provides access to a
              comprehensive database of over 25,000 records from 1,000+
              publishers, spanning diverse subjects in medicine, clinical
              sciences, engineering, management, and more .
            </p>
          </div>
          <div className="flex  items-center justify-center min-[1331px]:justify-between min-[1238px]:mt-24 flex-wrap mt-12">
            <img
              className="w-3/4 md:w-[465px]  h-[284px] rounded-[5px] pr-3 "
              src={abt_us1}
              alt="syringe pic"
            />
            <img
              className="w-3/4 md:w-[774px] h-[284px] rounded-[5px] max-[1238px]:mt-4 max-lg:m-7"
              src={abt_us2}
              alt="dental checkup"
            />
          </div>
        </div>
        <div className="flex  flex-col items-center justify-center mt-[39px]">
          <div className="purple:hidden">
            <button className="flex items-center justify-center w-[82px] h-[26px] p-4 gap-2  border rounded-[5px] border-solid border-white light:border-[#0B2E781A] border-opacity-10 text-[#AE9F0F] light:text-[#0B2E78] text-right font-AnekLatin light:font-Outfit text-xs font-medium leading-5 capitalize">
              Statistis
            </button>
          </div>
          <div className="flex  flex-col items-center justify-center mt-[28px] gap-5">
            <h1 className="w-11/12 sm:w-[679px] text-center  text-gray-300 light:text-black purple:text-secondary font-Lusitana light:font-SourceSans purple:font-Sora max-[440px]:text-[40px] text-5xl purple:text-4xl font-bold  leading-normal tracking-tight capitalize  ">
              Access to Various resources
            </h1>
            <p className="w-11/12 sm:w-[320px] sm:max-lg:w-[540px] lg:w-[808px] text-white light:text-[#00000099] purple:text-[#696969] text-opacity-60 text-center font-AnekLatin light:font-SourceSans purple:font-Sora text-base font-medium leading-8 ">
              Dvirtual Library (DVL) is a leading digital resource hub dedicated
              to empowering excellence in medical education and research. With a
              rich history of serving the{" "}
            </p>
          </div>
          <div className="flex  items-center flex-wrap mt-[12px] mb-[24px] justify-center">
            <Showcard
              heading="500+ Journals"
              borderclr="border-white light:border-[#00000024] purple:border-[#DBDBDB] "
              bgcolor="bg-[#18151F] light:bg-[#FFFFFF] purple:bg-[#FFFFFF]"
              headingfont="font-Lusitana light:font-SourceSans purple:font-Sora"
              subheadingfont="font-AnekLatin light:font-SourceSans purple:font-Sora"
              headingtxtclr="text-[#DFDFDF] light:text-[#303030] purple:text-black"
              subheadingtxtclr="text-white light:text-[#00000099] purple:text-black"
            />
            <Showcard
              heading="250+ ebooks"
              borderclr="border-white light:border-[#00000024] purple:border-[#DBDBDB]"
              bgcolor="bg-[#18151F]  light:bg-[#FFFFFF] purple:bg-[#FFFFFF]"
              headingfont="font-Lusitana light:font-SourceSans purple:font-Sora"
              subheadingfont="font-AnekLatin light:font-SourceSans purple:font-Sora"
              headingtxtclr="text-[#DFDFDF] light:text-[#303030] purple:text-black"
              subheadingtxtclr="text-white light:text-[#00000099] purple:text-black"
            />
            <Showcard
              heading="80+ Videos"
              borderclr="border-white light:border-[#00000024] purple:border-[#DBDBDB]"
              bgcolor="bg-[#18151F]  light:bg-[#FFFFFF] purple:bg-[#FFFFFF] "
              headingfont="font-Lusitana light:font-SourceSans purple:font-Sora"
              subheadingfont="font-AnekLatin light:font-SourceSans purple:font-Sora"
              headingtxtclr="text-[#DFDFDF] light:text-[#303030] purple:text-black"
              subheadingtxtclr="text-white light:text-[#00000099] purple:text-black"
            />
            <Showcard
              heading="50+ Subjects"
              borderclr="border-white light:border-[#00000024] purple:border-[#DBDBDB]"
              bgcolor="bg-[#18151F] light:bg-[#FFFFFF] purple:bg-[#FFFFFF]"
              headingfont="font-Lusitana light:font-SourceSans purple:font-Sora"
              subheadingfont="font-AnekLatin light:font-SourceSans purple:font-Sora"
              headingtxtclr="text-[#DFDFDF] light:text-[#303030] purple:text-black"
              subheadingtxtclr="text-white light:text-[#00000099] purple:text-black"
            />
            <Showcard
              heading="200 Databases"
              borderclr="border-white light:border-[#00000024] purple:border-[#DBDBDB]"
              bgcolor="bg-[#18151F] light:bg-[#FFFFFF] purple:bg-[#FFFFFF]"
              headingfont="font-Lusitana light:font-SourceSans purple:font-Sora"
              subheadingfont="font-AnekLatin light:font-SourceSans purple:font-Sora"
              headingtxtclr="text-[#DFDFDF] light:text-[#303030] purple:text-black"
              subheadingtxtclr="text-white light:text-[#00000099] purple:text-black"
            />
            <Showcard
              heading="100 E-Resource"
              borderclr="border-white light:border-[#00000024] purple:border-[#DBDBDB]"
              bgcolor="bg-[#18151F] light:bg-[#FFFFFF] purple:bg-[#FFFFFF]"
              headingfont="font-Lusitana light:font-SourceSans purple:font-Sora"
              subheadingfont="font-AnekLatin light:font-SourceSans purple:font-Sora"
              headingtxtclr="text-[#DFDFDF] light:text-[#303030] purple:text-black"
              subheadingtxtclr="text-white light:text-[#00000099] purple:text-black"
            />
          </div>
        </div>
        </>
    
       
  )
}

export default Hero;