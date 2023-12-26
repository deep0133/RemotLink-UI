import React from 'react'
import video_pic from "../../images/Rectangle 255.png";
import video_pic_mobile from "../../images/Rectangle 255_mobile.png";
import circle from "../../images/play-circle.svg";

const Video = () => {
  return (
    <div className="flex  items-center justify-center mt-[89px] pb-36  flex-wrap">
          <div className="flex   flex-col items-start justify-center mx-10 ">
            <div className="purple:hidden">
              <button className="flex flex-col items-center justify-center w-[82px] h-[26px] p-4  border border-solid border-white light:border-[#0B2E781A] border-opacity-10 rounded-md text-right text-[#DBDBDB] light:text-[#0B2E78] font-AnekLatin light:font-Outfit text-xs font-medium leading-5 tracking-wide uppercase">
                Video
              </button>
            </div>
            <h1 className="w-11/12 sm:w-[576px] pt-[28px] text-gray-300 light:text-black purple:text-secondary font-Lusitana light:font-SourceSans purple:font-Sora text-4xl sm:text-6xl purple:text-[32px] font-bold leading-snug tracking-tight capitalize">
              Watch this video to know more
            </h1>
            <p className="w-11/12 sm:w-[578px] text-white light:text-[#00000099] purple:text-[#696969] text-opacity-60 font-AnekLatin light:font-SourceSans purple:font-Sora text-base font-medium leading-8 pt-4">
              Embark on a journey through our Digital Library by watching our
              informative video. Dive into the world of knowledge, where you can
              explore a treasure trove of resources in various categories.
              Discover our commitment to academic excellence and research
              through this engaging visual tour. Join us in this virtual
              adventure, and get a glimpse of the extensive resources and
              exciting possibilities that await you. Watch the video to know
              more and start your exploration today!
            </p>
          </div>
          <div className="mt-5 mx-4 relative ">
            <img
              src={video_pic}
              alt="video icon"
              className="w-full h-auto hidden sm:block"
            />
            <img
              src={video_pic_mobile}
              alt="video icon mobile"
              className="w-full h-auto sm:hidden"
            />
            <img
              className="absolute bottom-[157px] left-48 sm:left-64  h-auto max-[455px]:hidden"
              src={circle}
              alt="circle icon"
            />
          </div>
        </div>
  )
}

export default Video