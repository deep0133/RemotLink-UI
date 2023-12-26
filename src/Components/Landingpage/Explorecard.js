import React,{useState,useEffect} from "react";
import card_img from "../../images/Rectangle 517.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import { tw } from 'twind';
import arrow from "../../images/bi_arrow-left-short.svg";

function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
   // Check if the light theme is active
   //const isLightTheme = tw`text-white bg-black`;

   // Choose the appropriate arrow image based on the light theme
   //const arrowImage = isLightTheme ? arrowLight : arrowDark;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundImage: `url(${arrow})`,

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "50px",
        width: "50px",
      }}
      onClick={onClick}
    />
  );
}
function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "hidden",
        backgroundImage: `url(${arrow})`,

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "50px",
        width: "50px",
        transform: 'rotate(180deg)',

      }}
      onClick={onClick}
    />
  );
}




const Explorecard = (props) => {

 
  


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    draggable: true,
    nextArrow: <CustomNextArrow  />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 2600,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 2550,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 2190,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1435,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 715,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const classes = ` w-[312px] max-w-[312px] h-[417px]   rounded-5 border border-solid border-blue-700 border-opacity-10  shadow-lg flex  flex-col items-start justify-normal bg-[#23222A] `;
  const classes1 = `w-[288px] h-[98px] pt-5 pl-4  text-[#F9F9FF] font-Lusitana  font-bold leading-7 tracking-wider capitalize`;
  const classes2 = `w-[253px] h-[66px] p-4  text-white font-AnekLatin text-base font-medium leading-7`;
  const classes3 = `text-[#DBDBDB] mt-4 ml-4 font-AnekLatin  font-medium leading-5 capitalize flex items-center justify-center w-[86px] h-[34px]  gap-2  rounded-[5px] border border-solid border-white border-opacity-11 px-6 py-4`;
  return (
    <div className="w-11/12 m-auto items-center max-md:mb-12  ">
      <Slider {...settings}>
        {Array(12)
          .fill("")
          .map((e, index) => (
            <div
              className={`${classes}  light:bg-[#FFFFFF] purple:bg-[#FFFFFF]  hover:scale-105`}
            >
              <img
                className="w-[301px] h-[161px] mt-[6px] purple:mt-0 ml-1 purple:ml-0  rounded-5 border border-solid  border-black border-opacity-10 bg-cover bg-center relative"
                src={card_img}
                alt=" card banner"
              />

              <h1
                className={`${classes1} light:text-black purple:text-secondary light:font-FiraSans purple:font-Sora  text-xl tracking-tighter light:tracking-tight purple:tracking-tight`}
              >
                The Influence on Medical Activities by Mobile Medical
                Application
              </h1>
              <h1
                className={`${classes2} light:text-black purple:text-black light:font-SourceSans purple:font-Sora text-base purple:text-[13px] light:text-sm purple:text-sm`}
              >
                Year: 2018 | Conference Paper | Publisher: IEEE
              </h1>
              <button
                className={`${classes3} purple:mt-6 purple:border-opacity-20 light:text-black purple:text-black light:font-FiraSans  purple:font-Sora light:border-black  purple:border-black light:text-sm purple:text-sm`}
              >
                Explore
              </button>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Explorecard;
