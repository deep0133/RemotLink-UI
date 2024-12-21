import React from "react";
import { useState } from "react";
import generateUrl from "../../admin/utils/urlGenerate";

function Security() {
  const [isPasswordVisiblenew, setIsPasswordVisiblenew] = useState(false);
  const [isPasswordVisibleOld, setIsPasswordVisibleOld] = useState(false);
  const [isPasswordVisibleconfirm, setIsPasswordVisibleconfirm] =
    useState(false);

  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibilityOld = () => {
    setIsPasswordVisibleOld((prevState) => !prevState);
  };

  function togglePasswordVisibilitynew() {
    setIsPasswordVisiblenew((prevState) => !prevState);
  }
  function togglePasswordVisibilityconfirm() {
    setIsPasswordVisibleconfirm((prevState) => !prevState);
  }
  const handleSubmitPassword = async (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      setError("New passwords don't match");
      return;
    }
    try {
      const token = localStorage.getItem("access_token");
      const domain = await generateUrl();
      await fetch(domain + "api/user/change-password/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      // console.error("Error:", error.response.data);
      setError(error.response.data.message);
    }
  };

  return (
    <div className=' flex flex-col w-full'>
      <div className=' flex flex-col mt-6'>
        <h3 className=' text-[14px] font-medium  font-Poppins text-[#344054] mb-2'>
          Current Password
        </h3>
        <div className=' relative w-full'>
          <input
            type={isPasswordVisibleOld ? "text" : "password"}
            placeholder='Password'
            className=' border w-full bg-white focus:outline-none'
            style={{ padding: "10px 14px 10px 14px" }}
            value={formData.oldPassword}
            name='oldPassword'
            onChange={handleChange}
          />
          <button
            className='absolute inset-y-0 right-0 flex items-center px-4 text-gray-600'
            onClick={togglePasswordVisibilityOld}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
              />
            </svg>
          </button>
        </div>
      </div>
      <div className=' flex flex-col mt-6'>
        <h3 className=' text-[14px] font-medium  font-Poppins text-[#344054] mb-2'>
          New Password
        </h3>
        <div className=' relative w-full'>
          <input
            type={isPasswordVisiblenew ? "text" : "password"}
            placeholder='Password'
            className=' border w-full bg-white focus:outline-none'
            style={{ padding: "10px 14px 10px 14px" }}
            value={formData.newPassword}
            name='newPassword'
            onChange={handleChange}
          />
          <button
            className='absolute inset-y-0 right-0 flex items-center px-4 text-gray-600'
            onClick={togglePasswordVisibilitynew}
          >
            {isPasswordVisiblenew ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <div className=' flex flex-col mt-6'>
        <h3 className=' text-[14px] font-medium  font-Poppins text-[#344054] mb-2'>
          Confirm Password
        </h3>
        <div className=' relative w-full'>
          <input
            type={isPasswordVisibleconfirm ? "text" : "password"}
            placeholder='Password'
            className=' border w-full bg-white focus:outline-none'
            style={{ padding: "10px 14px 10px 14px" }}
            onChange={handleChange}
            value={formData.confirmPassword}
            name='confirmPassword'
          />
          <button
            className='absolute inset-y-0 right-0 flex items-center px-4 text-gray-600'
            onClick={togglePasswordVisibilityconfirm}
          >
            {isPasswordVisibleconfirm ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className=' flex justify-end mt-6 items-center'>
        <div className=' p-1  bg-slate-200 mr-4 rounded-lg'>
          <button
            className=' border h-[36px] w-[117px] bg-[#3674CB] text-white text-[12px] font-semibold leading-5 rounded-lg '
            onClick={handleSubmitPassword}
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
}

export default Security;
