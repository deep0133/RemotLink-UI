import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import announce from "../../images/announce.png";
import news from "../../images/news.png";
import links from "../../images/imp links.png";
import youtubeicon from "../../images/youtube.svg";
import arrowcircle from "../../images/arrow-circle-left.svg";
import Service from "../Webservices/http";

function Notifications() {
  const services = new Service();
  const [notificationdata, setNotificationdata] = useState("");
  const [expanded, setExpanded] = useState({});

  const toggleAccordion = (id) => {
    setExpanded({ ...expanded, [id]: !expanded[id] });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await services.get("api/announcement");
        // const data = await response.json();
        console.log(response);
        setNotificationdata(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  // console.log(notificationdata);

  return (
    <div>
      <>
        <Header />
        <div className=" flex">
          <span className=" md:block hidden">
            <Sidebar />
          </span>
          <div className="flex justify-center py-10 items-center w-full">
            <div className="h-auto sm:h-[518px] flex justify-between p-4 sm:border rounded-xl flex-col sm:flex-row">
              <div className="w-[325px] sm:w-[420px]">
                <h1 className="font-bold text-[14px] leading-5 flex items-center p-2 border-b-[3px] border-[#1F5095] w-fit">
                  <img
                    src={announce}
                    alt="announcement"
                    className="mr-2 w-[15px] h-[15px]"
                  />
                  <span className="text-[#1F5095]">Announcements</span>{" "}
                </h1>

                <ul className="list-disc ml-4 mr-4 pl-6 mt-4 overflow-y-scroll h-[400px]">
                  {notificationdata &&
                    notificationdata?.announcement?.map((e) => (
                      <li
                        key={e.id}
                        className="text-red-500 text-[22px] p-2 border-b "
                      >
                        <span className="text-[#4B4B4B] text-[14px] font-medium">
                          {e?.title} : {e?.body}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="w-[325px] sm:w-[420px] sm:h-[450px] sm:mt-0 mt-6">
                <h1 className="font-bold text-[14px] leading-5 flex items-center py-2 pl-2 pr-6 border-b-[3px] border-[#1F5095] w-fit">
                  <img
                    src={news}
                    alt="announcement"
                    className="mr-2 w-[15px] h-[15px]"
                  />
                  <span className="text-[#1F5095]">Latest News</span>{" "}
                </h1>
                <div className="mt-4 overflow-y-scroll notif ">
                  {notificationdata &&
                    notificationdata?.news?.map((e, index) => (
                      <React.Fragment key={e.id}>
                        <div
                          className="flex items-center justify-between w-full p-2 font-medium border-b cursor-pointer"
                          onClick={() => toggleAccordion(`news-${index}`)}
                        >
                          <span>{e?.title}</span>
                          <img
                            src={arrowcircle}
                            alt="arrow-circle"
                            className={`w-4 h-4 transform ${
                              expanded[`news-${index}`] ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                        <div
                          className={`p-5 border-b cursor-pointer ${
                            expanded[`news-${index}`] ? "" : "hidden"
                          }`}
                        >
                          <span>{e?.body}</span>
                        </div>
                      </React.Fragment>
                    ))}
                </div>
              </div>
              <div className="w-[325px] sm:w-[420px] h-[450px]">
                <h1 className="font-bold text-[14px] leading-5 flex items-center p-2 border-b-[3px] border-[#1F5095] w-fit">
                  <img
                    src={links}
                    alt="announcement"
                    className="mr-2 w-[15px] h-[15px]"
                  />
                  <span className="text-[#1F5095]">Important Links</span>{" "}
                </h1>
                <div className="mt-4 overflow-y-scroll notif h-[400px]">
                  {notificationdata &&
                    notificationdata?.links?.map((e) => (
                      <div
                        key={e.id}
                        className="flex  ml-4 p-[10px] border-b cursor-pointer"
                      >
                        <img src={youtubeicon} alt="youtube-icon" />
                        <a
                          href={e?.link}
                          className="ml-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Link to {e?.title || "resource"}
                        </a>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    </div>
  );
}

export default Notifications;
