import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import help_Icon from "../../images/message-question.svg";
import uparrow from "../../images/uparrow.svg";
import downarrow from "../../images/downarrow.svg";
import mailIcon from "../../images/mail.svg";
import userIcon from "../../images/user-octagon.svg";
import messageIcon from "../../images/envelope.svg";
import phoneIcon from "../../images/phone-ring.svg";
import generateUrl from "../admin/utils/urlGenerate";
function HelpAndSupport({ logutOutHandler, institutionDetails, domain }) {
  const [expandedBoxes, setExpandedBoxes] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [labDetails, setLabDetails] = useState("");

  const fetchFaqs = async () => {
    setLoading(true);
    try {
      const domain = await generateUrl();

      const response = await fetch(`${domain}api/faq/`);
      if (!response.ok) {
        throw new Error("Failed to fetch FAQs");
      }
      const data = await response.json();
      setFaqs(data.results);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
      setError("Failed to fetch FAQs. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  const labDetailsFetch = async () => {
    setLoading(true);
    try {
      const domain = await generateUrl();
      const token = localStorage.getItem("access_token");

      const response = await fetch(domain + "api/institution/library/1/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await response.json();
      setLabDetails(json);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
      setError("Failed to fetch FAQs. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    labDetailsFetch();
  }, []);

  const toggleBox = (index) => {
    const newExpandedBoxes = [...expandedBoxes];
    newExpandedBoxes[index] = !newExpandedBoxes[index];
    setExpandedBoxes(newExpandedBoxes);
  };

  return (
    <div>
      <>
        <Header {...{ logutOutHandler, institutionDetails, domain }} />
        <div className=' flex'>
          <span className=' hidden sm:block'>
            <Sidebar />
          </span>
          <span className=' flex flex-col w-full sm:w-[calc(100%-96px)]'>
            <span
              className=' flex items-center  sm:px-8  px-3 justify-between'
              style={{
                borderBottom: "1px solid lightgray",
                height: "70px",
                //   background: "grey",
              }}
            >
              <div className=' flex items-center'>
                <div
                  className=' p-3 rounded-full   bg-[#3674CB] mr-2 '
                  //   style={{ border: "1px solid grey" }}
                >
                  <img src={help_Icon} className=' h-5 w-5 ' alt='book-icon' />
                </div>

                <span className=' whitespace-nowrap text-[#1F5095] font-semibold text-[15px]'>
                  Help and Support
                </span>
              </div>
            </span>
            <div className='mt-8 px-6 '>
              <h1 className=' text-[#1F5095] text-[23px]  font-semibold  leading-[48px]'>
                Frequently Asked Questions by fellow students
              </h1>
              <div className=' flex justify-between '>
                <p className=' text-[#A3AED0] text-[16px]  font-normal'>
                  Description to write here
                </p>
              </div>
            </div>
            <section className='py-6 sm:px-10  bg-gray-50 mt-12'>
              <div className='accordion'>
                <div className='grid md:grid-cols-2'>
                  {loading ? (
                    <p className='text-[#A3AED0] text-[16px] font-normal'>
                      Loading...
                    </p>
                  ) : (
                    faqs.map((faq, index) => (
                      <div key={faq.id} className=' p-3 '>
                        <div className=' bg-white '>
                          <div
                            className={`flex items-center px-8 min-h-[105px] py-2 `}
                            onClick={() => toggleBox(index)}
                          >
                            {expandedBoxes[index] ? (
                              <img src={uparrow} alt='' className=' mr-4' />
                            ) : (
                              <img src={downarrow} alt='' className=' mr-4' />
                            )}
                            <div>
                              <div className=' text-[#111928] text-[18px]  font-semibold font-Poppins leading-[26px] mb-4 mt-4 '>
                                {faq.question}
                              </div>
                              {expandedBoxes[index] && (
                                <div className='accordion-content'>
                                  <div className=' rounded-md text-[#637381] font-normal '>
                                    {/* It takes 2-3 weeks to get your first blog post
                                  ready. That includes the in-depth research &
                                  creation of your monthly content marketing
                                  strategy that we do before writing your first
                                  blog post, Ipsum available . */}
                                    {faq.answer}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </section>

            <div className='flex  justify-between px-4 py-10 flex-col sm:flex-row '>
              {loading ? (
                <p className='text-[#A3AED0] text-[16px] font-normal'>
                  Loading...
                </p>
              ) : (
                <div className='sm:w-[50%] p-4 sm:p-8'>
                  <div>
                    <h1 className=' text-[28px] font-semibold leading-[48px] text-[#1F5095]'>
                      Library Details
                    </h1>
                    <p className=' text-[15px] font-normal leading-[24px] text-[#A3AED0] mt-6'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eius tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim adiqua minim veniam quis nostrud
                      exercitation ullamco
                    </p>
                  </div>
                  <div className=' mt-10'>
                    <div className='flex items-center mb-4'>
                      <div className=' p-4 bg-gray-50 flex justify-center items-center mr-4'>
                        <img
                          src={userIcon}
                          alt='user-icon'
                          className='w-[29px] h-[29px]'
                        />
                      </div>
                      <div className='flex flex-col'>
                        <span className=' text-[#111928] text-[18px] font-semibold font-Poppins leading-[26px]'>
                          Librarian{" "}
                        </span>
                        <span className=' text-[#637381] text-[16px] font-normal '>
                          {labDetails?.librarian_name}
                        </span>
                      </div>
                    </div>
                    <div className='flex items-center mb-4'>
                      <div className=' p-4 bg-gray-50 flex justify-center items-center mr-4'>
                        <img
                          src={phoneIcon}
                          alt='user-icon'
                          className='w-[29px] h-[29px]'
                        />
                      </div>
                      <div className='flex flex-col'>
                        <span className=' text-[#111928] text-[18px] font-semibold font-Poppins leading-[26px]'>
                          Phone Number
                        </span>
                        <span className=' text-[#637381] text-[16px] font-normal '>
                          {labDetails?.librarian_phone_number}
                        </span>
                      </div>
                    </div>
                    <div className='flex items-center mb-4'>
                      <div className=' p-4 bg-gray-50 flex justify-center items-center mr-4'>
                        <img
                          src={messageIcon}
                          alt='user-icon'
                          className='w-[29px] h-[29px]'
                        />
                      </div>
                      <div className='flex flex-col'>
                        <span className=' text-[#111928] text-[18px] font-semibold font-Poppins leading-[26px]'>
                          Email Address
                        </span>
                        <span className=' text-[#637381] text-[16px] font-normal '>
                          {labDetails?.librarian_email}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className=' sm:w-[50%] p-4 sm:p-8'>
                <div className=' flex flex-col mt-6'>
                  <h3 className=' text-[14px] font-medium  font-Poppins text-[#344054] mb-2'>
                    Email
                  </h3>
                  <div className=' relative'>
                    <input
                      type='text'
                      className=' border  w-full placeholder:text-[#667085] placeholder:text-[15px] placeholder: font-normal focus:outline-none'
                      style={{ padding: "10px 40px" }}
                      placeholder='olivia@untitledui.com'
                    />
                    <img
                      src={mailIcon}
                      alt='mail-icon'
                      className=' absolute top-[15px] left-[10px]'
                    />
                  </div>
                </div>
                <div className=' flex flex-col mt-6'>
                  <h3 className=' text-[14px] font-medium  font-Poppins text-[#344054] mb-2'>
                    Subject
                  </h3>
                  <input
                    type='text'
                    className=' border  w-auto placeholder:text-[#667085] placeholder:text-[15px] placeholder: font-normal focus:outline-none'
                    style={{ padding: "10px 14px 10px 14px" }}
                    placeholder='Regarding ebook access'
                  />
                </div>
                <div className=' flex flex-col mt-6'>
                  <h3 className=' text-[14px] font-medium  font-Poppins text-[#344054] mb-2'>
                    Write your query here
                  </h3>
                  <textarea
                    type='text'
                    className=' border  w-auto focus:outline-none'
                    style={{ padding: "10px 14px 10px 14px" }}
                    rows={5}
                  />
                </div>
                <div className=' flex mt-6 items-center'>
                  <input
                    type='checkbox'
                    className=' border  w-auto mr-2'
                    style={{ padding: "10px 14px 10px 14px" }}
                    rows={5}
                  />
                  <p className=' text-[14px] font-medium  font-Poppins text-[##667085] '>
                    By clicking this box you agree to share your details
                  </p>
                </div>
                <button className=' bg-[#3674CB] w-full h-[48px] rounded-md mt-8 font-semibold text-[13px] font-Poppins leading-5  text-white'>
                  Send Query
                </button>
              </div>
            </div>
          </span>
        </div>
        <Footer {...{ institutionDetails, domain }} />
      </>
    </div>
  );
}

export default HelpAndSupport;
