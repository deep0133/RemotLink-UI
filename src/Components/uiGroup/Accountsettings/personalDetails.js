import React, { memo, useState } from "react";
import profilepic from "../../../images/Profilepic.png";
import generateUrl from "../../admin/utils/urlGenerate";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PersonalDetails = memo(function PersonalDetails({ userDetails }) {
  const [userData, setUserData] = useState({
    first_name: userDetails?.first_name,
    last_name: userDetails?.last_name,
    email: userDetails?.email,
    phone_number: userDetails?.phone_number,
    description: userDetails?.description,
  });

  const navigate = useNavigate();

  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUserData({
        ...userData,
        profile_photo: file,
      });
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const udpateUserProfile = async () => {
    try {
      const domain = await generateUrl();
      const token = localStorage.getItem("access_token");
      const formData = new FormData();

      formData.append("first_name", userData?.first_name);
      formData.append("last_name", userData?.last_name);
      formData.append("email", userData?.email);
      formData.append("phone_number", userData?.phone_number);
      formData.append("description", userData?.description);
      formData.append("profile_photo", userData?.profile_photo);

      const response = await fetch(domain + "api/user/current-user/", {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.detail || `HTTP error! Status: ${response.status}`
        );
      }

      const json = await response.json();

      navigate(-1);
      localStorage.setItem("userdata", JSON.stringify(json));
    } catch (error) {
      // console.error("Error fetching user details:", error);
    }
  };

  const submitFormHandler = () => {
    udpateUserProfile();
  };
  return (
    <div className=' flex flex-col flex-1'>
      <div className='flex items-center'>
        {/* <img
          src={profilepic}
          alt='profilepic'
          className='w-[73px] h-[73px] rounded-full'
        />
        <button className=' w-[139px] h-[36px] rounded-md border text-[12px] font-medium  leading-5'>
          Upload New Photo{" "}
        </button> */}
        <div className='flex gap-2 items-center justify-center'>
          {image ? (
            <img
              src={image}
              alt='Preview'
              className='size-[73px] object-cover rounded-full'
            />
          ) : (
            <img
              src={profilepic}
              alt='profilepic'
              className='w-[73px] h-[73px] rounded-full'
            />
          )}{" "}
          <button className=' w-[139px] relative h-[36px] bg-white rounded-md border text-[12px] font-medium  leading-5'>
            <input
              type='file'
              accept='image/*'
              className='absolute inset-0 z-50 opacity-0 appearance-none'
              onChange={handleImageChange}
            />

            <span className='z-40'> Upload New Photo</span>
          </button>
        </div>
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
        <div className='p-1 mr-4 rounded-lg'>
          <button
            onClick={submitFormHandler}
            className=' h-[36px] w-[117px] bg-[#3674CB] text-white text-[12px] font-semibold leading-5 rounded-lg '
          >
            Save Changes
          </button>
        </div>
        {/* <button className=' border h-[36px] w-[117px]   text-gray-400 text-[12px] font-semibold leading-5 rounded-lg'>
          Cancel
        </button> */}
      </div>
    </div>
  );
});

export default PersonalDetails;
