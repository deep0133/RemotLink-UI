import React from "react";
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import help_Icon from "../../images/message-question.svg";
import uparrow from "../../images/uparrow.svg";
import downarrow from "../../images/downarrow.svg";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function HelpAndSupport() {
  const [expandedBoxes, setExpandedBoxes] = useState([
    false,
    false,
    false,
    false,
  ]);

  const toggleBox = (index) => {
    const newExpandedBoxes = [...expandedBoxes];
    newExpandedBoxes[index] = !newExpandedBoxes[index];
    setExpandedBoxes(newExpandedBoxes);
  };

  return (
    <div>
      <>
        <Header />
        <div className=" flex">
          <Sidebar />
          <span className=" flex flex-col w-[100%] ">
            <span
              className=" flex items-center  sm:px-8  px-3 justify-between"
              style={{
                borderBottom: "1px solid lightgray",
                height: "70px",
                //   background: "grey",
              }}
            >
              <div className=" flex items-center">
                <div
                  className=" p-3 rounded-full   bg-[#3674CB] mr-2 "
                  //   style={{ border: "1px solid grey" }}
                >
                  <img src={help_Icon} className=" h-5 w-5 " alt="book-icon" />
                </div>

                <span className=" whitespace-nowrap text-[#1F5095] font-semibold text-[15px]">
                  Explore the Resources Catalogue
                </span>
              </div>
            </span>
            <div className="mt-8 px-6 ">
              <h1 className=" text-[#1F5095] text-[23px]  font-semibold  leading-[48px]">
                Frequently Asked Questions by fellow students
              </h1>
              <div className=" flex justify-between ">
                <p className=" text-[#A3AED0] text-[16px]  font-normal">
                  Description to write here
                </p>
              </div>
            </div>
            <section className="py-6 px-10  bg-gray-50 mt-12">
              <div className="accordion">
                <div className="flex flex-wrap">
                  {[0, 1, 2, 3, 4].map((index) => (
                    <div key={index} className="w-[570px] p-3 ">
                      <div className=" bg-white ">
                        <div
                          className={`flex items-center px-8 min-h-[105px] py-2 `}
                          onClick={() => toggleBox(index)}
                        >
                          {expandedBoxes[index] ? (
                            <img src={uparrow} className=" mr-4" />
                          ) : (
                            <img src={downarrow} className=" mr-4" />
                          )}
                          <div>
                            <div className=" text-[#111928] text-[18px]  font-semibold font-Poppins leading-[26px] mb-4 mt-4 ">
                              {" "}
                              How long we deliver your first blog post?
                            </div>
                            {expandedBoxes[index] && (
                              <div className="accordion-content">
                                <div className=" rounded-md text-[#637381] font-normal ">
                                  It takes 2-3 weeks to get your first blog post
                                  ready. That includes the in-depth research &
                                  creation of your monthly content marketing
                                  strategy that we do before writing your first
                                  blog post, Ipsum available .
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <div className="py-6 px-10  bg-gray-50 ">
              <div className="flex "></div>
            </div>
          </span>
        </div>
        <Footer />
      </>
    </div>
  );
}

export default HelpAndSupport;
