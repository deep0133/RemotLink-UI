import React from "react";
import profilepic from "../../../images/Profilepic.png";

function PersonalDetails() {
  return (
    <div className=' flex flex-col flex-1'>
      <div className=' flex items-center'>
        <img
          src={profilepic}
          alt='profilepic'
          className=' w-[73px] h-[73px] rounded-full'
        />
        <button className=' w-[139px] h-[36px] rounded-md border text-[12px] font-medium  leading-5'>
          Upload New Photo{" "}
        </button>
      </div>
      <div className='w-full'>
        <div className=' flex flex-wrap justify-between flex-row mt-4 gap-3'>
          <div className=' flex flex-col grow'>
            <h3 className=' text-[14px] font-medium  font-Poppins text-[#344054] mb-2'>
              First Name
            </h3>
            <input
              type='text'
              className=' border'
              style={{ padding: "10px 14px 10px 14px" }}
              value={"Ravi"}
            />
          </div>
          <div className=' flex flex-col grow'>
            <h3 className=' text-[14px] font-medium  font-Poppins text-[#344054] mb-2'>
              Last Name
            </h3>
            <input
              type='text'
              className=' border'
              style={{ padding: "10px 14px 10px 14px" }}
              value={"Mehra"}
            />
          </div>
        </div>
        <div className=' flex flex-col mt-6'>
          <h3 className=' text-[14px] font-medium  font-Poppins text-[#344054] mb-2'>
            Email
          </h3>
          <input
            type='text'
            className=' border  w-auto'
            style={{ padding: "10px 14px 10px 14px" }}
            value={"Ravi@gmail.com"}
          />
        </div>
        <div className=' flex flex-col mt-6'>
          <h3 className=' text-[14px] font-medium  font-Poppins text-[#344054] mb-2'>
            Phone
          </h3>
          <input
            type='text'
            className=' border  w-auto'
            style={{ padding: "10px 14px 10px 14px" }}
            value={"+912756281919"}
          />
        </div>
        <div className=' flex flex-col mt-6'>
          <h3 className=' text-[14px] font-medium  font-Poppins text-[#344054] mb-2'>
            Description
          </h3>
          <textarea
            type='text'
            className=' border  w-auto focus:outline-none'
            style={{ padding: "10px 14px 10px 14px" }}
            rows={3}
            value={
              "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit perferendis corrupti voluptatibus magnam aspernatur nemo, quis repellat cum vero sapiente?"
            }
          />
        </div>
      </div>

      <div className=' flex justify-end mt-6 items-center'>
        <div className=' p-1  bg-slate-200 mr-4 rounded-lg'>
          <button className=' border h-[36px] w-[117px] bg-[#3674CB] text-white text-[12px] font-semibold leading-5 rounded-lg '>
            Save Changes
          </button>
        </div>
        <button className=' border h-[36px] w-[117px]   text-gray-400 text-[12px] font-semibold leading-5 rounded-lg'>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default PersonalDetails;
