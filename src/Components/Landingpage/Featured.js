import React, { useEffect, useState } from "react";
import Explorecard from "./Explorecard";

const Featured = ({
  setUnauthorizedUserSourcelink,
  featureResourceLoading,
  featureResourceData,
}) => {
  const [keys, setKeys] = useState([]);
  const [active, setActive] = useState("");

  const [data, setData] = useState(null);

  useEffect(() => {
    if (featureResourceData) {
      const key = Object.keys(featureResourceData);
      setKeys(key);
      setActive(key[0]);
    }
  }, [featureResourceData]);

  useEffect(() => {
    if (active) {
      setData(featureResourceData[active]);
    }
  }, [active, featureResourceData]);

  const changeSubjects = (val) => {
    setActive(val);
  };
  const classes =
    "light:bg-[#0B2E784D] bg-[#0B2E784D]  purple:bg-[#FEFEFE] purple:text-secondary";
  const btnclass = `text-gray-300 light:text-black purple:text-white py-4 px-4 m-2  font-Lusitana light:font-FiraSans purple:font-Sora rounded-[5px] text-base font-bold leading-5 capitalize rounded-5 border border-solid border-white light:border-[#0B2E784D] purple:border-secondary border-opacity-17 hover:bg-[#B17E41] light:hover:bg-[#0B2E784D] light:hover:bg-opacity-30  duration-300 purple:hover:bg-[#FEFEFE] purple:hover:text-secondary`;
  return (
    <div
      id='featuredSection'
      className='w-full h-full   border border-solid border-blue-500 border-opacity-20 bg-[#0E0D0F] light:bg-primary  purple:bg-secondary flex  flex-col  justify-evenly mt-[42px] max-md:mt-0 purple:mt-0'
    >
      <div className='flex  flex-col items-start justify-center  rounded-5 ml-7 sm:max-lg:ml-12 lg:ml-24 mt-[42px] gap-5'>
        <div className='purple:hidden'>
          <button className='w-[82px] h-[26px]   rounded-5 border border-solid border-white light:border-[#0B2E781A] border-opacity-10 text-gray-300 light:text-[#0B2E78] text-right font-AnekLatin light:font-Outfit text-xs font-medium leading-5 capitalize rounded-[5px] pr-4'>
            Featured
          </button>
        </div>
        <h1 className='text-gray-300 light:text-black purple:text-white  font-Lusitana light:font-SourceSans purple:font-Sora text-4xl light:text-4xl light:sm:text-5xl purple:text-[32px] font-bold leading-normal tracking-wide capitalize'>
          Featured Resources
        </h1>
        <h3 className='text-[#FFFFFF99] light:text-[#00000099] font-AnekLatin light:font-SourceSans text-base font-medium leading-8 purple:hidden'>
          Explore a World of Knowledge with these resources here
        </h3>
        <h3 className='hidden purple:block text-white text-opacity-60 font-Sora text-base font-medium leading-8'>
          At [Institute Name], we are dedicated to fostering a rich
        </h3>
      </div>

      <div className='flex  items-center justify-between  sm:w-3/4'>
        <div className=' ml-7 mb-2 sm:max-lg:ml-12 lg:ml-24'>
          {keys &&
            keys.map((key, index) => (
              <button
                key={index}
                onClick={() => {
                  changeSubjects(key);
                }}
                className={`${btnclass} ${
                  active === key
                    ? "light:bg-[#0B2E784D]  purple:bg-[#FEFEFE] purple:text-secondary"
                    : ""
                } ${
                  featureResourceData && featureResourceData[key]?.length === 0
                    ? "cursor-not-allowed"
                    : "cursor-pointer"
                }`}
              >
                {key}
              </button>
            ))}
        </div>
        {/* <div className="flex  items-center justify-between mr-[68px]">
              <img src={arrow} alt="arrow icon" />
              <img src={arrow} alt="arrow icon" className="rotate-180" />
            </div> */}
      </div>

      <div className='mb-10'>
        <Explorecard
          data={data && data}
          setUnauthorizedUserSourcelink={setUnauthorizedUserSourcelink}
        />
      </div>
    </div>
  );
};

export default Featured;
