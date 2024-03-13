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
  const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
  const arr3 = [1, 2, 3];

  const services = new Service();
  const [notificationdata, setNotificationdata] = useState("");

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

  console.log(notificationdata);

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
              <div className="w-[250px] sm:w-[420px]">
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
                    notificationdata.announcement.map((e) => (
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
              <div className="w-[250px] sm:w-[420px] sm:h-[450px] sm:mt-0 mt-6">
                <h1 className="font-bold text-[14px] leading-5 flex items-center py-2 pl-2 pr-6 border-b-[3px] border-[#1F5095] w-fit">
                  <img
                    src={news}
                    alt="announcement"
                    className="mr-2 w-[15px] h-[15px]"
                  />
                  <span className="text-[#1F5095]">Latest News</span>{" "}
                </h1>
                <div className="mt-4 overflow-y-scroll notif sm:h-[400px]">
                  {arr3.map((e) => (
                    <div
                      key={e.id}
                      className="h-[34px] bg-[#F6F6F6] mb-2 px-4 flex items-center justify-between rounded-[9px]"
                    >
                      <div>The Hindu</div>
                      <img
                        src={arrowcircle}
                        alt="arrow-circle"
                        className="w-4 h-4"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-[250px] sm:w-[420px] h-[450px]">
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
                        <span className="ml-2">{e?.body}</span>
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
