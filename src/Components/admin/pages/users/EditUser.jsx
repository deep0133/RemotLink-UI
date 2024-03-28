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
import useUpdate from "../../hooks/useUpdate";
import { LuLoader2 } from "react-icons/lu";

export default function EditUser({ head_title, data }) {
  const [hide, setHide] = useState(true);

  const [user, setUser] = useState({});
  const [id, setId] = useState("");

  const { updateUserLoading, handleUpdateUser } = useUpdate();

  const [oldData, setOldData] = useState({});

  useEffect(() => {
    const url = window.location.pathname.split("/");
    const last = url[url.length - 1];
    setId(last);

    const founded = data.find((user) => String(user.id) === String(last));
    if (founded) {
      setOldData(founded);
      setUser(founded);
    }
  }, [data]);

  const updateFunctionHandler = () => {
    handleUpdateUser("api/user/update/" + id, user);
  };

  return (
    <>
      <Header icon={<CategoryIcon />} title={head_title} subTitle={"Users"} />
      <div className='mt-8 relative mx-3 bg-white'>
        <DetailSection data={oldData} />

        <div
          onClick={() => setHide(!hide)}
          className='dots cursor-pointer absolute right-2 top-6'
        >
          <ThreeDots />
          {!hide && (
            <button
              style={{
                boxShadow: "0px 3px 6px 0px rgba(112, 144, 176, 0.05)",
                border: "rgba(34, 31, 185, 0.14)",
              }}
              className='flex absolute right-8 top-4 gap-2 w-[105px] h-[51px] shrink-0 justify-center items-center bg-white rounded-[7px]'
            >
              <div className='flex px-2 py-1 bg-gray-50 rounded-sm gap-1'>
                <div className=' bg-gray-50'>
                  <DeleteIcon />
                </div>
                <p className='text-red-600 text-[13px] font-medium font-Poppins leading-7 bg-gray-50'>
                  Delete
                </p>
              </div>
            </button>
          )}
        </div>

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
          setUser={setUser}
        />
      </div>
    </>
  );
}

const DetailSection = ({ data }) => {
  return (
    <div className='border p-8 grid grid-cols-3 relative gap-4 rounded-md bg-[#FBFCFF]'>
      <div className='card-name'>
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
      <div className='card-email'>
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

      <div className='card-phone'>
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
      <div className='card-address'>
        <p className='text-black/50 font-Poppins text-[13px] font-normal leading-6'>
          Address
        </p>
        <div className='flex gap-2 items-center'>
          <LocationIcon />
          <p className='text-[#103E7E] font-Poppins text-sm font-medium leading-7'>
            {data && data.address ? data.address : "---"}
          </p>
        </div>
      </div>
    </div>
  );
};

const AddSection = ({ user, setUser, loading, updateFunctionHandler }) => {
  const onChangeHandler = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
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
        <div className='name shrink-0 space-y-2'>
          <label className='name text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Full Name
          </label>
          <input
            style={{
              border: "1px rgba(34, 31, 185, 0.14) solid",
            }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='first_name'
            value={user.first_name}
            onChange={onChangeHandler}
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
            onChange={onChangeHandler}
          />
        </div>

        <div className='shrink-0 space-y-2'>
          <label className='hone text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Email
          </label>
          <input
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='email'
            value={user.email}
            onChange={onChangeHandler}
          />
        </div>
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
            onChange={onChangeHandler}
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
            onChange={onChangeHandler}
          >
            <option value=''>---</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
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
            onChange={onChangeHandler}
          />
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
            onChange={onChangeHandler}
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
            onChange={onChangeHandler}
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
            onChange={onChangeHandler}
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
            onChange={onChangeHandler}
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
            onChange={onChangeHandler}
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
            onChange={onChangeHandler}
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
            onChange={onChangeHandler}
            className='w-[492px] h-36 px-3.5 py-2.5 focus:outline-none text-gray-900 text-sm font-medium font-Poppins leading-7 bg-white rounded-[5px]'
          ></textarea>
        </div>
      </div>

      <div className='btns flex gap-5 flex-1 justify-end'>
        <button className='w-[118px] px-[18px] py-2.5 bg-purple-100 rounded-[5px] border border-purple-100 text-violet-700 text-[13px] font-medium font-Poppins leading-normal'>
          Cancel
        </button>
        <button
          disabled={loading}
          onClick={() => {
            updateFunctionHandler();
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
