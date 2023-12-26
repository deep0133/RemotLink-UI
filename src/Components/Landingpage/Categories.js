import React from 'react';
import Explorecard from "./Explorecard";

const Categories = () => {
    const btnclass=`text-gray-300  light:text-black purple:text-white py-4 px-4 m-2  font-Lusitana light:font-FiraSans purple:font-Sora rounded-[5px] text-base font-bold leading-5 capitalize rounded-5 border border-solid border-white light:border-[#0B2E784D] purple:border-secondary border-opacity-17 bg-[#18151F] light:bg-[#FFFFFF] purple:bg-secondary hover:bg-[#B17E41] light:hover:bg-[#0B2E784D] light:hover:bg-opacity-30  duration-300 purple:hover:bg-[#FEFEFE] purple:hover:text-secondary`;
  return (
    <div className="w-full h-full  border border-solid border-white light:border-[#3461FF33] border-opacity-20 bg-[#0E0D0F] light:bg-primary purple:bg-secondary flex  flex-col  justify-evenly">
    <div className="flex  flex-col items-start justify-center  rounded-5 ml-7 sm:max-lg:ml-12 lg:ml-24 mt-[42px] gap-5">
      <div className="purple:hidden">
        <button className="w-[82px] h-[26px]   rounded-5 border border-solid border-white light:border-[#0B2E781A] border-opacity-10 text-gray-300 light:text-[#0B2E78] text-right font-AnekLatin light:font-Outfit text-xs font-medium leading-5 capitalize rounded-[5px] pr-4">
          Categories
        </button>
      </div>
      <h1 className="text-gray-300 light:text-black purple:text-white font-Lusitana light:font-SourceSans purple:font-Sora text-4xl light:text-4xl light:sm:text-5xl purple:text-[32px] font-bold leading-normal tracking-wide capitalize">
        Categorical Resources
      </h1>
      <h3 className="text-[#FFFFFF99] light:text-[#00000099] purple:hidden  font-AnekLatin light:font-SourceSans text-base font-medium leading-8">
        Explore a World of Knowledge with these resources here{" "}
      </h3>
      <h3 className="hidden purple:block text-white text-opacity-60 font-Sora text-base font-medium leading-8">
        At [Institute Name], we are dedicated to fostering a rich
      </h3>
    </div>

    <div className="flex  items-center justify-between">
      <div className=" ml-7 sm:max-lg:ml-12 lg:ml-24 mb-2">
        <button className={`${btnclass}`}>
          Journals
        </button>
        <button className={`${btnclass}`}>
          Papers
        </button>
        <button className={`${btnclass}`}>
          ENews
        </button>
        <button className={`${btnclass}`}>
          More
        </button>
      </div>
      {/* <div className="flex  items-center justify-between mr-[68px] max-sm:hidden">
        <button><img src={arrow} alt="arrow icon" /></button>
        <button><img src={arrow} alt="arrow icon" className="rotate-180" /></button>
      </div> */}
    </div>

    <div className="mb-10">
      <Explorecard />
    </div>
    {/* 
    <div className="flex  items-center justify-normal mx-auto sm:hidden">
        <button><img src={arrow} alt="arrow icon" /></button>
        <button><img src={arrow} alt="arrow icon" className="rotate-180" /></button>
      </div> */}
  </div>
  )
}

export default Categories;