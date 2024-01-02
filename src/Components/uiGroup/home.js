import React from "react";
import home_image from "../../images/Rectangle 5.png";
import Button from "../uiElemnts/button";
import get_started from "../../images/black button.png";
import { useState } from "react";
import cardimage from "../../images/Rectangle 25.png";
import newimg from "../../images/Rectangle 550.png";
import bookmarkicon from "../../images/Group 1000002939.png";

import firstimg from "../../images/Rectangle 33.png";
import secimg from "../../images/Rectangle 34.png";
import thirdimg from "../../images/Rectangle 35.png";

function Home() {
  const [active, setActive] = useState("week");
  const arr = [1, 2, 3, 4, 5];
  const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13];

  const box = {
    one: ["Anesthasia", "Health", "Anatomy", "Anesthasia"],
    two: [
      "Life Science",
      "Health",
      "Anatomy",
      "Anesthasia",
      "Life Science",
      "Health",
    ],
    three: ["Dermatalogy", "  Neurology", "  Dermatalogy", "Neurology"],
  };

  return (
    <div className=" w-full">
      <div className=" bg-[#3A424D] w-full h-[334px] mt-[62px] relative">
        <div className="flex items-start justify-between flex-col w-[272px] p-10">
          <ul className="flex flex-shrink-0 items-start justify-between flex-col mb-2 ">
            <li>
              <p className="font-poppins font-semibold text-2xl leading-relaxed text-white mb-2 ">
                Hello Sushant <br /> Welcome Back to Library
              </p>
              {/* <p className="font-poppins font-semibold text-2xl leading-relaxed text-white ">
              Welcome Back to Library
            </p> */}
            </li>
            <li className="flex text-white font-poppins  font-normal text-[15px] leading-relaxed w-[323px]">
              Strong people don’t put others down. they lift them up.
            </li>
            <li className=" ">
              <button className=" rounded-md mt-6 h-[53px] w-[131px] bg-[#36201B] text-white ">
                Get Started
              </button>
            </li>
          </ul>
        </div>

        <div className="absolute  bottom-0  right-[2%]">
          <img src={home_image} alt="" className=" h-[363px]" />
        </div>
      </div>
      <div className="  mt-10">
        <p className=" text-[26px] text-[#1F5095] font-semibold ml-[50px]">
          Discover Your Recent Readings
        </p>
        <p className=" text-[14px] text-[#A3AED0]  ml-[50px] leading-[26px] font-medium">
          Explore Your Recent Reads and Gain Fresh Perspectives
        </p>
        <div className=" flex justify-end px-10">
          <button
            className={`w-[131px] h-[41px] rounded-md  border text-[14px] ${
              active == "week" ? " bg-black text-white" : ""
            }`}
            onClick={() => setActive("week")}
          >
            This Week
          </button>
          <button
            className={`w-[131px] h-[41px] rounded-md  border text-[14px] ml-2 ${
              active == "days" ? " bg-black text-white" : ""
            }`}
            onClick={() => setActive("days")}
          >
            {" "}
            Last 30 days
          </button>
        </div>
      </div>
      <div className="mt-5 px-10 ">
        <div className="h-[423px] border p-8 w-[1272px] flex overflow-scroll">
          {arr.map((e) => (
            <div className=" w-[276px] h-[358px]  border font-Poppins mr-3">
              <img src={cardimage} alt="card-view" className=" h-[143px]" />
              <div className=" m-5">
                <p className=" text-[18px]  font-semibold leading-[26px] w-[244px] ">
                  Originator and Biosimilar Biologics: For Patients and
                  Healthcare Providers
                </p>
                <p className=" text-[12px]  font-normal leading-[20px] text-[#000000] opacity-[50%] mt-4">
                  Published By : Stanford Life
                </p>
              </div>
              <button
                className=" px-[15px] py-2 text-[#F38D15] font-medium  rounded-md mx-5  bg-green-50"
                style={{ border: "1px solid green" }}
              >
                Ebook
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 px-[120px] py-[50px] flex ">
        <div>
          <div className="text-[26px] font-semibold font-Poppins text-[#1F5095] my-4 whitespace-nowrap">
            Embark on a Quest for Knowledge
          </div>
          <p className=" w-[414px] text-[14px]  font-Poppins text-[#5C78D0] leading-[26px] mt-8">
            Our extensive catalog spans a diverse spectrum of subjects, from the
            foundational to the advanced, from arts to sciences. Immerse
            yourself in the world of knowledge, with subjects meticulously
            curated to inspire and empower. Each subject offers a gateway to a
            treasure trove of e-journals, ebooks, newspapers, videos, and a
            wealth of educational resources, waiting for your exploration
          </p>
        </div>
        <div className=" flex  justify-between flex-row w-[100%] mt-8 px-[65px] ">
          <div className=" flex flex-col mt-[80px]">
            {box.one.map((e, index) => (
              <span
                key={index}
                className={`w-[161px] h-[55px] border rounded-[5px] mb-3 flex justify-center items-center text-[#1F5095] text-[17px] leading-[26px] font-medium ${
                  index === 0 ? " text-white bg-[#1F5095] " : ""
                }`}
              >
                {e}
              </span>
            ))}
          </div>
          <div className=" flex flex-col">
            {box.two.map((e) => (
              <span className=" w-[161px] h-[55px] border  rounded-[5px] mb-3  flex justify-center items-center text-[#1F5095] text-[17px] leading-[26px] font-medium">
                {e}
              </span>
            ))}
          </div>{" "}
          <div className=" flex flex-col mt-[40px]">
            {box.three.map((e) => (
              <span className=" w-[161px] h-[55px] border  rounded-[5px] mb-3  flex justify-center items-center text-[#1F5095] text-[17px] leading-[26px] font-medium">
                {e}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-5   py-6 px-10">
        <h1 className=" text-[23px] leading-[28px] font-semibold font-Poppins text-[#1F5095]">
          Popular Databases to cater you work research needs{" "}
        </h1>
        <div className=" flex justify-between mt-4">
          <h1 className=" text-[#A3AED0] text-[15px] font-normal leading-[28px] font-Poppins">
            A curated collection of academic journals and research papers
          </h1>
          <button className=" h-[43px] w-[131px] rounded-[5px] border border-solid border-[#221FB9/0.14]">
            Show More
          </button>
        </div>
        <div className="bg-[#221FB9/0.2] mt-4  flex  flex-wrap">
          {arr1.map((e) => (
            <div className=" w-[196px] h-[188px] flex flex-col border p-2 rounded-[5px] mr-[15px] mb-2">
              <img
                src={newimg}
                alt="cardimg"
                className=" w-[177px] h-[110px] "
              />
              <div className=" mt-4 flex items-center ">
                <span className=" w-[137px] h-[37px] flex justify-center items-center border text-[13px] text-[#1F5095] bg-[#E9E9F7] rounded-[5px]">
                  Economic Outlook
                </span>
                <img
                  src={bookmarkicon}
                  className=" ml-4  w-[32px] h-[32px]  "
                  alt="bookmark-icon"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10   py-6 px-10 ">
        <div className=" px-10">
          <h1 className=" text-[26px] leading-[39px]  font-semibold font-Poppins text-[#1F5095]">
            Recently Added{" "}
          </h1>
          <h1 className=" text-[#A3AED0] text-[15px] font-normal leading-[28px] font-Poppins">
            A curated collection of academic journals and research papers
          </h1>
          <div className=" border  w-[450px] flex justify-between mt-5  items-center px-3 py-1 rounded-[8px]">
            <span className=" bg-[#1F5095] text-white rounded-[8px] p-2 text-[14px]">
              EJournals
            </span>

            <span className="text-[14px]">EBooks</span>
            <span className="text-[14px]">EVideos</span>
            <span className="text-[14px]">Other EResources</span>
          </div>
        </div>
        <div className=" flex justify-end">
          <button className=" h-[43px] w-[131px] rounded-[5px] border border-solid border-[#221FB9/0.14]">
            Show More
          </button>
        </div>
        <div className="mt-5 ">
          <div className="h-[423px] border p-8 w-[1272px] flex overflow-scroll">
            {arr.map((e) => (
              <div className=" w-[276px] h-[358px]  border font-Poppins mr-3">
                <img src={cardimage} alt="card-view" className=" h-[143px]" />
                <div className=" m-5">
                  <p className=" text-[18px]  font-semibold leading-[26px] w-[244px] ">
                    Originator and Biosimilar Biologics: For Patients and
                    Healthcare Providers
                  </p>
                  <p className=" text-[12px]  font-normal leading-[20px] text-[#000000] opacity-[50%] mt-4">
                    Published By : Stanford Life
                  </p>
                </div>
                <button
                  className=" px-[15px] py-2 text-[#F38D15] font-medium  rounded-md mx-5  bg-green-50"
                  style={{ border: "1px solid green" }}
                >
                  Ebook
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 py-6 px-10 ">
        <div className=" px-10">
          <h1 className=" text-[26px] leading-[39px]  font-semibold font-Poppins text-[#1F5095]">
            Trending Resources
          </h1>
          <h1 className=" text-[#A3AED0] text-[15px] font-normal leading-[28px] font-Poppins">
            Discover Fresh Perspectives with Our Newly Added Resources
          </h1>
          <div className=" border  w-[550px] flex justify-between mt-5  items-center px-2 py-1 rounded-[8px]">
            <span className=" bg-[#1F5095] text-white rounded-[8px] p-2 text-[14px]">
              EBooks
            </span>
            <span className="text-[14px]">Journals</span>

            <span className="text-[14px]">Research Paper</span>
            <span className="text-[14px]">Newsletter</span>
            <span className="text-[14px]">Newsletter</span>
          </div>
        </div>

        <div className="mt-5 ">
          <div className="h-[423px] border p-8 w-[1272px] flex overflow-scroll">
            {arr.map((e) => (
              <div className=" w-[276px] h-[358px]  border font-Poppins mr-3">
                <img src={cardimage} alt="card-view" className=" h-[143px]" />
                <div className=" m-5">
                  <p className=" text-[18px]  font-semibold leading-[26px] w-[244px] ">
                    Originator and Biosimilar Biologics: For Patients and
                    Healthcare Providers
                  </p>
                  <p className=" text-[12px]  font-normal leading-[20px] text-[#000000] opacity-[50%] mt-4">
                    Published By : Stanford Life
                  </p>
                </div>
                <button
                  className=" px-[15px] py-2 text-[#F38D15] font-medium  rounded-md mx-5  bg-green-50"
                  style={{ border: "1px solid green" }}
                >
                  Ebook
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 py-6 px-10 ">
        <div className=" px-10">
          <h1 className=" text-[26px] leading-[39px]  font-semibold font-Poppins text-[#1F5095]">
            Top Saved Resources throughout
          </h1>
          <h1 className=" text-[#A3AED0] text-[15px] font-normal leading-[28px] font-Poppins mt-4">
            Discover Fresh Perspectives with Our Newly Added Resources
          </h1>
        </div>

        <div className="mt-5  flex flex-row w-[1272px] overflow-scroll mb-4">
          <div className=" relative">
            <img
              src={firstimg}
              alt="firstimg"
              className=" h-[470px] w-[583px] rounded-[5px] mr-2 bg-gradient-to-b from-black to-#221FB9 "
            />
            <div className=" absolute bottom-[50px] left-[90px] flex flex-col">
              <span className=" text-white  font-Poppins  font-semibold text-[22px] leading-[26px]">
                Cambridge Series on Human-Computer Interaction
              </span>
              <span className=" text-[#FFFFFF] font-Poppins text-[15px] leading-[26px] opacity-[50%]  font-normal">
                {" "}
                Published By : Stanford Life , 15/01/2005
              </span>
            </div>
          </div>
          <div className=" flex flex-col">
            <span className=" relative">
              <img
                src={secimg}
                alt="secimg"
                className=" mb-2 h-[231px] w-[629px]"
              />
              <div className=" absolute bottom-[30px] left-[90px] flex flex-col">
                <span className=" text-white  font-Poppins  font-semibold text-[22px] leading-[26px] ">
                  Boiler Control Systems Engineering{" "}
                </span>
                <span className=" text-[#FFFFFF] font-Poppins text-[15px] leading-[26px] opacity-[50%]  font-normal">
                  {" "}
                  Published By : Stanford Life , 15/01/2005
                </span>
              </div>
            </span>
            <span className=" relative">
              <img
                src={thirdimg}
                alt="thirdimg"
                className=" mb-2 h-[231px] w-[629px]"
              />
              <div className=" absolute bottom-[30px] left-[90px] flex flex-col">
                <span className=" text-white  font-Poppins  font-semibold text-[22px] leading-[26px] ">
                  Concrete Technology and its benefits
                </span>
                <span className=" text-[#FFFFFF] font-Poppins text-[15px] leading-[26px] opacity-[50%]  font-normal">
                  {" "}
                  Published By : Stanford Life , 15/01/2005
                </span>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
