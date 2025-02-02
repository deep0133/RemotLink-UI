import React, { memo, useState } from "react";
import profilepic from "../../../images/Profilepic.png";

const PersonalDetails = memo(function PersonalDetails() {
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    description: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const submitFormHandler = () => {
    console.log("-----profiel data-------:", userData);
  };
  return (
    <div className=' flex flex-col flex-1'>
      <div className='flex items-center'>
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
              name='first_name'
              value={userData?.first_name}
              onChange={changeHandler}
              style={{ padding: "10px 14px 10px 14px" }}
            />
          </div>
          <div className=' flex flex-col grow'>
            <h3 className=' text-[14px] font-medium  font-Poppins text-[#344054] mb-2'>
              Last Name
            </h3>
            <input
              type='text'
              className='border'
              name='last_name'
              value={userData?.last_name}
              onChange={changeHandler}
              style={{ padding: "10px 14px 10px 14px" }}
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
            name='email'
            value={userData?.email}
            onChange={changeHandler}
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
            name='phone_number'
            value={userData?.phone_number}
            onChange={changeHandler}
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
            name='description'
            value={userData?.description}
            onChange={changeHandler}
          />
        </div>
      </div>

      <div className=' flex justify-end mt-6 items-center'>
        <div className=' p-1  bg-slate-200 mr-4 rounded-lg'>
          <button
            onClick={submitFormHandler}
            className=' border h-[36px] w-[117px] bg-[#3674CB] text-white text-[12px] font-semibold leading-5 rounded-lg '
          >
            Save Changes
          </button>
        </div>
        <button className=' border h-[36px] w-[117px]   text-gray-400 text-[12px] font-semibold leading-5 rounded-lg'>
          Cancel
        </button>
      </div>
    </div>
  );
});

export default PersonalDetails;
