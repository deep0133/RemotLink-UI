import React, { useEffect, useState } from "react";
import menu_icn from "../../images/menu-04.svg";
import menu_icn2 from "../../images/menu-04-light.svg";
import menu_icn3 from "../../images/menu-04-purple.svg";
import books from "../../images/book.svg";
import generateUrl from "../admin/utils/urlGenerate";
import { Link } from "react-router-dom";
import instituteDefaultLogo from "../../images/instituteDefaultLogo.png";
const Banner = ({ institutionDetails }) => {
  const navheading = `text-white light:text-[#0B2E78] purple:text-black font-AnekLatin light:font-Outfit purple:font-Sora text-base font-medium leading-normal pr-[35px] hover:underline light:hover:text-[#0B2E78] light:hover:underline purple:hover:text-[#6F1AB6] purple:hover:underline   `;

  const [menu, setMenu] = useState(false);

  const [url, setUrl] = useState("");
  useEffect(() => {
    const fetchUrl = async () => {
      const domain = await generateUrl();
      setUrl(domain);
    };

    fetchUrl();
  }, []);

  return (
    <>
      <div className='w-full border-b border-solid border-white border-opacity-20 bg-opacity-33 bg-[#16131E54] light:bg-brand light:bg-opacity-[68] purple:bg-primary shadow-md backdrop-blur-[8px] flex  items-center justify-between relative z-30'>
        <div className='flex  ml-6  md:max-xl:ml-16 xl:ml-32 items-center justify-center '>
          {institutionDetails?.logo ? (
            <img
              className='w-[43px] h-[57.683px] object-contain'
              src={url + institutionDetails?.logo}
              alt='banner'
            />
          ) : (
            <img
              src={instituteDefaultLogo}
              className='object-contain w-[43px] h-[57.683px]'
              alt='logo'
            />
          )}
          <div className='mr-4'>
            <h1 className='text-white light:text-black purple:hidden font-Lusitana light:font-SourceSans text-base font-bold leading-6 max-[360px]:leading-4 w-44 min-[360px]:w-60 sm:w-72 lg:w-96 pl-3 md:pl-6 '>
              {institutionDetails?.name
                ? institutionDetails?.name
                : "Institution Name"}
            </h1>
          </div>
          <h1 className='hidden purple:block text-[#6F1AB6]  text-base font-Sora font-bold leading-6 w-40 min-[360px]:w-56 sm:w-72 lg:w-96 pl-3 md:pl-6'>
            Indian Institute of Medical Sciences
          </h1>
        </div>
        <div className='hidden lg:block'>
          <ul className='flex '>
            <li className={`${navheading}`}>
              {" "}
              <Link to={"/home"}>Home</Link>
            </li>
            <li className={`${navheading}`}>
              {" "}
              <a href='#aboutSection'> About Us</a>
            </li>
            <li className={`${navheading}`}>
              {" "}
              <a href='#categorySection'>Categories</a>{" "}
            </li>
            <li className={`${navheading}`}>
              {" "}
              <a href='#featuredSection'> Featured</a>{" "}
            </li>
          </ul>
        </div>
        <div
          onClick={() => {
            setMenu(!menu);
          }}
          className='lg:hidden mr-6 md:mr-20 relative'
        >
          <img
            src={menu_icn}
            alt='menu'
            className='light:hidden purple:hidden'
          />
          <img src={menu_icn2} alt='menu' className='hidden light:block' />
          <img src={menu_icn3} alt='menu' className='hidden purple:block' />

          {menu && (
            <ul className='flex flex-col lg:hidden p-5 space-y-3 rounded-md bg-white absolute top-12 right-0 z-50'>
              <li className={`${navheading}`}> Home</li>
              <li className={`${navheading}`}>About Us</li>
              <li className={`${navheading}`}> Categories</li>
              <li className={`${navheading}`}> Featured</li>
            </ul>
          )}
        </div>
      </div>
      <div className=''>
        <div className='hidden purple:block w-11/12 min-[1180px]:w-2/3 h-[820px] min-[341px]:h-[750px] min-[430px]:h-[650px] min-[673px]:h-[600px] lg:h-[517px] xl:h-[455px] bg-[#3D1766] bg-opacity-50 absolute inset-0 top-56'></div>
        <div className='pt-12  sm:pt-32 lg:pt-36 purple:pt-28 purple:sm:pt-32 purple:lg:pt-36 flex mx-auto items-center justify-normal ml-6  min-[480px]:ml-12 md:ml-24 min-w-[258px]  '>
          {/* <img src={library_cover} alt="library cover" className="light" /> */}
          <div className='bg-pic light:bg-pic-light purple:bg-pic-purple purple:ellipse '></div>
          <div className='flex   items-center justify-between relative max-[410px]:w-full right-56'>
            <div className='hidden purple:min-[500px]:block  ellipse-icon w-[43px] h-[43px] absolute right-[159px]'></div>
            <img src={books} alt='books icon' className='max-[420px]:hidden' />
            <h2 className='text-white font-AnekLatin light:font-SourceSans text-base font-normal leading-8 pl-3 whitespace-nowrap'>
              Institute Digital Library
            </h2>
          </div>
        </div>
        <div className='z-10 relative ml-6 min-[480px]:ml-12 md:ml-24  '>
          <h1 className='w-11/12 sm:w-3/4 xl:w-[992px]  purple:w-11/12 purple:sm:w-2/3 purple:xl:w-[725px] text-white font-Lusitana  light:font-SourceSans purple:font-Sora text-5xl max-[445px]:text-[40px] purple:text-[35px] font-bold leading-[68px] capitalize  mt-3 '>
            {/* Swargiya Dadasaheb Kalmegh Smruti Dental College & Hospital */}
            {institutionDetails?.name
              ? institutionDetails?.name
              : "Institution Name"}
          </h1>
          <h1 className='w-3/4 lg:w-[992px] purple:w-3/4 purple:xl:w-[692px]  mt-3 purple:mt-5 text-white font-Lusitana purple:font-Sora  light:font-SourceSans light:italic text-[21px] purple:text-[18px] font-bold leading-20 capitalize '>
            {institutionDetails?.tagline
              ? institutionDetails?.tagline
              : "Your gateway to a world of Dental information and research resources."}
          </h1>
          <div className=' mt-[66px] flex  items-start gap-6 justify-normal w-4/5 sm:w-[420px] min-[840px]:w-[661px] px-[18px] py-4 rounded-md border border-solid border-white border-opacity-45 opacity-60 purple:opacity-100 bg-gray-900 purple:bg-white  '>
            {/* <img src={search_icn} alt="search icon" /> */}
            <div className='search-icon  purple:search-icon-purple w-[21px] h-[21px] '></div>
            <input
              className='text-white purple:text-[#3D1766]   bg-gray-900 purple:bg-white font-AnekLatin light:font-SourceSans purple:font-Sora text-base purple:text-[13px] font-medium leading-125 capitalize w-52 h-6'
              placeholder='Search ebooks,journals,papers'
            ></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
