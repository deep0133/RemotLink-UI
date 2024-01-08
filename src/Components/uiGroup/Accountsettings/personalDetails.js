import React from "react";
import profilepic from "../../../images/Profilepic.png";

function PersonalDetails() {
  return (
    <div className=" flex flex-col">
      <div className=" flex items-center">
        <img
          src={profilepic}
          alt="profilepic"
          className=" w-[73px] h-[73px] rounded-full"
        />
        <button className=" w-[139px] h-[36px] rounded-md border ml-4 text-[12px] font-medium  leading-5">
          Upload New Photo{" "}
        </button>
      </div>
      <div className=" flex justify-between flex-row mt-4">
        <div className=" flex flex-col">
          <h3 className=" text-[14px] font-medium  font-Poppins text-[#344054]">
            First Name
          </h3>
          <input
            type="text"
            className=" border w-[298px]"
            style={{ padding: "10px 14px 10px 14px" }}
          />
        </div>
        <div className=" flex flex-col ml-4">
          <h3 className=" text-[14px] font-medium  font-Poppins text-[#344054]">
            Last Name
          </h3>
          <input
            type="text"
            className=" border w-[298px]"
            style={{ padding: "10px 14px 10px 14px" }}
          />
        </div>
      </div>
      {/* <input type="text" className=" border" />
      <input type="text" className=" border" />
      <input type="text" className=" border" />
      <div>
        <button>sdfsdfn</button>
        <button>sdgfuysdkt</button>
      </div> */}
    </div>
  );
}

export default PersonalDetails;
