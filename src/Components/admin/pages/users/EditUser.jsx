import React, { useEffect, useState } from "react";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import {
  AvatarIcon,
  CategoryIcon,
  DeleteIcon,
  EditICon,
  EmailIcon,
  LocationIcon,
  PhoneIcon,
  ThreeDots,
} from "../../assets/constants";
import { LuLoader2 } from "react-icons/lu";
import useFetch from "../../hooks/useFetch";
import { BsGenderMale } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
export default function EditUser({
  head_title,
  data,
  updateFunctionHandler,
  updateUserLoading,
}) {
  const [user, setUser] = useState({});
  const [id, setId] = useState("");

  const [oldData, setOldData] = useState({});

  const [image, setImage] = useState("");

  useEffect(() => {
    const url = window.location.pathname.split("/");
    const last = url[url.length - 1];
    setId(last);

    const founded = data.results.find(
      (user) => String(user.id) === String(last)
    );
    if (founded) {
      setOldData(founded);
      if (founded.profile_photo) {
        setImage(founded.profile_photo);
      }
      setUser({
        first_name: founded.first_name,
        last_name: founded.last_name,
        phone_number: founded.phone_number,
        gender: founded.gender,
        description: founded.description,
        library_membership_no: founded.library_membership_no,
        batch: founded.batch,
        course: founded.course,
        city: founded.city,
        state: founded.state,
        pin_code: founded.pin_code,
        address: founded.address,
        facebook: founded.facebook,
        twitter: founded.twitter,
        linkedin: founded.linkedin,
        instagram: founded.instagram,
      });
    }
  }, [data]);

  return (
    <>
      <Header icon={<CategoryIcon />} title={head_title} subTitle={"Users"} />
      <div className='mt-8 relative mx-3 bg-white'>
        <DetailSection data={oldData} />
        <div
          style={{
            boxShadow: "0px 10px 35px 1px rgba(112, 144, 176, 0.10)",
            broder: "1px solid rgba(34, 31, 185, 0.14)",
          }}
        ></div>
        <AddSection
          updateFunctionHandler={updateFunctionHandler}
          loading={updateUserLoading}
          submitText={"Save Details"}
          user={user}
          id={id}
          setUser={setUser}
          image={image}
          setImage={setImage}
        />
      </div>
    </>
  );
}

const DetailSection = ({ data }) => {
  return (
    <div className='border p-8 grid grid-cols-3 relative gap-4 rounded-md bg-[#FBFCFF]'>
      <div className='card'>
        <p className='text-black/50 font-Poppins text-[13px] font-normal leading-6'>
          First Name
        </p>
        <div className='flex gap-2 items-center'>
          <AvatarIcon />
          <p className='text-[#103E7E] font-Poppins text-sm font-medium leading-7'>
            {data && data.first_name ? data.first_name : "---"}{" "}
            {data && data.last_name ? data.last_name : "---"}
          </p>
        </div>
      </div>
      <div className='card'>
        <p className='text-black/50 font-Poppins text-[13px] font-normal leading-6'>
          Email
        </p>
        <div className='flex gap-2 items-center'>
          <EmailIcon />
          <p className='text-[#103E7E] font-Poppins text-sm font-medium leading-7'>
            {data && data.email ? data.email : "---"}
          </p>
        </div>
      </div>
      <div className='card'>
        <p className='text-black/50 font-Poppins text-[13px] font-normal leading-6'>
          Phone Number
        </p>
        <div className='flex gap-2 items-center'>
          <PhoneIcon />
          <p className='text-[#103E7E] font-Poppins text-sm font-medium leading-7'>
            {data && data.phone_number ? data.phone_number : "---"}
          </p>
        </div>
      </div>
      <div className='card'>
        <p className='text-black/50 font-Poppins text-[13px] font-normal leading-6'>
          Gender
        </p>
        <div className='flex gap-2 items-center'>
          <BsGenderMale />
          <p className='text-[#103E7E] font-Poppins text-sm font-medium leading-7'>
            {data && data.gender ? data.gender : "---"}
          </p>
        </div>
      </div>
      <div className='card'>
        <p className='text-black/50 font-Poppins text-[13px] font-normal leading-6'>
          Category
        </p>
        <div className='flex gap-2 items-center'>
          <LocationIcon />
          <p className='text-[#103E7E] font-Poppins text-sm font-medium leading-7'>
            {data && data.category ? data.category?.name : "---"}
          </p>
        </div>
      </div>
      <div className='card'>
        <p className='text-black/50 line-clamp-1 font-Poppins text-[13px] font-normal leading-6'>
          Description
        </p>
        <div className='flex gap-2 items-center'>
          <div className='shrink-0'>
            {" "}
            <LocationIcon />
          </div>
          <p className='text-[#103E7E] line-clamp-1 font-Poppins text-sm font-medium leading-7'>
            {data && data.description ? data.description : "---"}
          </p>
        </div>
      </div>
    </div>
  );
};

const AddSection = ({
  user,
  setUser,
  id,
  loading,
  updateFunctionHandler,
  image,
  setImage,
}) => {
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const { userCategoryData, handleFetctUserCategoryData } = useFetch();

  useEffect(() => {
    handleFetctUserCategoryData("api/user/category/");
  }, []);

  const onImageChangeHandler = (event) => {
    const file = event.target.files[0];
    setUser({ ...user, profile_photo: file });
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{
        border: "boxShadow: '0px 10px 35px 1px rgba(112, 144, 176, 0.10)",
      }}
      className='border relative px-6 mt-5 bg-white rounded-lg shadow pb-12'
    >
      <div className='flex gap-2 py-4 border-b px-1'>
        <EditICon />
        <h3 className='text-[#631AC0] font-Poppins text-[17px] font-semibold leading-[27px]'>
          Edit User Details
        </h3>
      </div>
      <div className='form my-6 grid grid-cols-3 gap-8 '>
        <div className='shrink-0 space-y-2'>
          <label className='email text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Site Url
          </label>
          <div className='flex gap-2'>
            <div className='img w-10 h-10 overflow-hidden rounded-full border-red-100 p-0.5 flex justify-center items-center border shrink-0'>
              <img src={image} className='object-cover' alt='' />
            </div>
            <input
              style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
              className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
              type='file'
              name='profile_photo'
              accept='image/*'
              onChange={onImageChangeHandler}
            />
          </div>
        </div>
        <div className=' shrink-0 space-y-2'>
          <label className=' text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            First Name
          </label>
          <input
            style={{
              border: "1px rgba(34, 31, 185, 0.14) solid",
            }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='first_name'
            value={user.first_name}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />
        </div>

        <div className=' shrink-0 space-y-2'>
          <label className=' text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Last Name
          </label>
          <input
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='last_name'
            value={user.last_name}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />
        </div>

        {/* <div className='shrink-0 space-y-2'>
          <label className='hone text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Email
          </label>
          <input
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='email'
            value={user.email}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />
        </div> */}

        <div className='shrink-0 space-y-2'>
          <label className='hone text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Phone Number
          </label>
          <input
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='phone_number'
            value={user.phone_number}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />
        </div>

        <div className='shrink-0 space-y-2'>
          <label className='hone text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Gender
          </label>
          <select
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            name='gender'
            value={user.gender}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          >
            <option value=''>---</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Other'>Other</option>
            <option value='Rather Not to Say'>Rather Not to Say</option>
          </select>
        </div>

        <div className='shrink-0 space-y-2'>
          <label className='hone text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Description
          </label>
          <input
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='description'
            value={user.description}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />
        </div>

        <div className='shrink-0 space-y-2'>
          <label className='hone text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Category
          </label>
          <select
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none space-y-2 focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            name='category'
            onChange={onChangeHandler}
          >
            <option value={null}>---</option>
            {userCategoryData &&
              userCategoryData.results &&
              userCategoryData.results.map((catg, index) => (
                <option key={index} value={catg.name}>
                  {catg.name}
                </option>
              ))}
          </select>
        </div>
        <div className='shrink-0 space-y-2'>
          <label className='hone text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            library Membership No
          </label>
          <input
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='library_membership_no'
            value={user.library_membership_no}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />
        </div>

        <div className=' shrink-0 space-y-2'>
          <label className='hone text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Batch
          </label>
          <input
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='batch'
            value={user.batch}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />
        </div>

        <div className=' shrink-0 space-y-2'>
          <label className='hone text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Course
          </label>
          <input
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='course'
            value={user.course}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />
        </div>

        <div className=' shrink-0 space-y-2'>
          <label className='hone text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            City
          </label>
          <input
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='city'
            value={user.city}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />
        </div>
        <div className='shrink-0 space-y-2'>
          <label className='hone text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            State
          </label>
          <input
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='state'
            value={user.state}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />
        </div>
        <div className='shrink-0 space-y-2'>
          <label className='hone text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Pin Code
          </label>
          <input
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='pin_code'
            value={user.pin_code}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />
        </div>

        <div className=' shrink-0 max-w-[320px] w-full space-y-2 flex flex-col'>
          <label htmlFor=' text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Address
          </label>
          <textarea
            rows={"auto"}
            style={{
              border: "1px solid rgba(34, 31, 185, 0.14)",
            }}
            value={user.address}
            name='address'
            onChange={(e) => {
              onChangeHandler(e);
            }}
            className=' px-3.5 py-2.5 focus:outline-none text-gray-900 text-sm font-medium font-Poppins leading-7 bg-white rounded-[5px]'
          ></textarea>
        </div>

        <div className='shrink-0 space-y-2'>
          <label className='hone text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Facebook
          </label>
          <input
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='facebook'
            value={user.facebook}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />
        </div>
        <div className='shrink-0 space-y-2'>
          <label className='hone text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            twitter
          </label>
          <input
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='twitter'
            value={user.twitter}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />
        </div>
        <div className='shrink-0 space-y-2'>
          <label className='hone text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            linkedin
          </label>
          <input
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='linkedin'
            value={user.linkedin}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />
        </div>
        <div className='shrink-0 space-y-2'>
          <label className='hone text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            instagram
          </label>
          <input
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='instagram'
            value={user.instagram}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />
        </div>
      </div>

      <div className='btns flex gap-5 flex-1 justify-end'>
        <button
          onClick={() => navigate(-1)}
          className='w-[118px] px-[18px] py-2.5 bg-purple-100 rounded-[5px] border border-purple-100 text-violet-700 text-[13px] font-medium font-Poppins leading-normal'
        >
          Cancel
        </button>
        <button
          disabled={loading}
          onClick={() => {
            updateFunctionHandler(id, user);
          }}
          className='min-w-[118px] w-max shrink-0 px-[18px] py-2.5 bg-violet-800 rounded-[5px] border border-violet-800 text-white text-[13px] font-medium font-Poppins leading-normal'
        >
          {loading ? (
            <div className='animate-spin w-fit mx-auto'>
              <LuLoader2 />
            </div>
          ) : (
            "Add New User"
          )}
        </button>
      </div>
    </div>
  );
};
