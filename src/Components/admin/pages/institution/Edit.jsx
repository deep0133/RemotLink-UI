import { useEffect, useState } from "react";
import { InstitutiionIcon } from "../../assets/constants";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import Hero from "../../components/category/Hero";
import { LuLoader2 } from "react-icons/lu";

export default function Edit({ data, updateHandler, loading }) {
  return (
    <>
      <Header
        icon={<InstitutiionIcon />}
        title={"Edit Details"}
        subTitle={"Institution"}
      />
      <Hero
        name={`Edit Detail`}
        description={`Update The details for your institute`}
      />
      <EditDetail data={data} updateHandler={updateHandler} loading={loading} />
    </>
  );
}

const EditDetail = ({ data, updateHandler, loading }) => {
  const [currentDetail, setCurrentDetail] = useState({});

  const [imagesPreview, setImagesPreview] = useState({
    logo: "",
    slider1: "",
    slider2: "",
    slider3: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setCurrentDetail({ ...currentDetail, [name]: value });
  };

  useEffect(() => {
    resetAllField();
  }, []);

  const resetAllField = () => {
    if (data) {
      setCurrentDetail({
        name: data.name,
        tagline: data.tagline,
        email: data.email,
        phone_number: data.phone_number,
        second_phone_number: data.second_phone_number,
        address: data.address,
      });
      setImagesPreview({
        logo: data?.logo && "https://stage1.remotlink.com" + data.logo,
        slider1: data?.slider1 && "https://stage1.remotlink.com" + data.slider1,
        slider2: data?.slider2 && "https://stage1.remotlink.com" + data.slider2,
        slider3: data?.slider3 && "https://stage1.remotlink.com" + data.slider3,
        landing_page_image:
          data?.landing_page_image &&
          "https://stage1.remotlink.com" + data.landing_page_image,
      });
    }
  };

  const onImageChangeHandler = (event) => {
    const file = event.target.files[0];
    setCurrentDetail({ ...currentDetail, [event.target.name]: file });
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagesPreview({
          ...imagesPreview,
          [event.target.name]: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div
      style={{
        border: "boxShadow: '0px 10px 35px 1px rgba(112, 144, 176, 0.10)",
      }}
      className='border relative px-8 mx-3 mt-5 bg-white overflow-auto rounded-lg shadow pb-12'
    >
      <div className='form my-6 grid grid-cols-3 gap-8 '>
        <div className='name shrink-0 space-y-2'>
          <label className='name text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Select Theme
          </label>
          {/* <input
            style={{
              border: "1px rgba(34, 31, 185, 0.14) solid",
            }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='name'
            value={currentDetail?.name}
            onChange={onChangeHandler}
          /> */}
          <select
            name='landing_page_theme'
            onChange={onChangeHandler}
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none space-y-2 focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
          >
            <option value={null}>---landing_page_theme---</option>
            <option value={"light"}>Light</option>
            <option value={"dark"}>Dark</option>
            <option value={"purple"}>Purple</option>
          </select>
        </div>
        <div className='name shrink-0 space-y-2'>
          <label className='name text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Institute Name
          </label>
          <input
            style={{
              border: "1px rgba(34, 31, 185, 0.14) solid",
            }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='name'
            value={currentDetail?.name}
            onChange={onChangeHandler}
          />
        </div>

        <div className='email shrink-0 space-y-2'>
          <label className='email text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Tag Line
          </label>
          <input
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='tagline'
            value={currentDetail.tagline}
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
            value={currentDetail.email}
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
            value={currentDetail.phone_number}
            onChange={onChangeHandler}
          />
        </div>
        <div className='shrink-0 space-y-2'>
          <label className='hone text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Phone Number 2
          </label>
          <input
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='second_phone_number'
            value={currentDetail.second_phone_number}
            onChange={onChangeHandler}
          />
        </div>

        <div className='shrink-0 space-y-2'>
          <label className='hone text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Industry
          </label>
          <input
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='industry'
            value={currentDetail.industry}
            onChange={onChangeHandler}
          />
        </div>

        <div className='shrink-0 space-y-2'>
          <label className='hone text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Address
          </label>
          <textarea
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            name='address'
            value={currentDetail.address}
            onChange={onChangeHandler}
          ></textarea>
        </div>

        <div className='shrink-0 space-y-2'>
          <label className='hone text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Add New Logo
          </label>

          <div className='flex gap-2'>
            <div className='img w-10 h-10 overflow-hidden rounded-full border-red-100 p-0.5 flex justify-center items-center border shrink-0'>
              <img
                src={imagesPreview?.logo}
                className='object-cover'
                alt='logo'
              />
            </div>
            <input
              style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
              className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
              type='file'
              name='logo'
              accept='image/*'
              onChange={onImageChangeHandler}
            />
          </div>
        </div>

        <div className='shrink-0 space-y-2'>
          <label className='hone text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Landing Page Image
          </label>

          <div className='flex gap-2'>
            <div className='img w-10 h-10 overflow-hidden rounded-full border-red-100 p-0.5 flex justify-center items-center border shrink-0'>
              <img
                src={imagesPreview?.landing_page_image}
                className='object-cover'
                alt='landing_page_image'
              />
            </div>
            <input
              style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
              className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
              type='file'
              name='landing_page_image'
              accept='image/*'
              onChange={onImageChangeHandler}
            />
          </div>
        </div>

        <div className='shrink-0 space-y-2'>
          <label className='hone text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Slider 1
          </label>

          <div className='flex gap-2'>
            <div className='img w-10 h-10 overflow-hidden rounded-full border-red-100 p-0.5 flex justify-center items-center border shrink-0'>
              <img
                src={imagesPreview?.slider1}
                className='object-cover'
                alt='slider1'
              />
            </div>
            <input
              style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
              className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
              type='file'
              name='slider1'
              accept='image/*'
              onChange={onImageChangeHandler}
            />
          </div>
        </div>

        <div className='shrink-0 space-y-2'>
          <label className='hone text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Slider 2
          </label>

          <div className='flex gap-2'>
            <div className='img w-10 h-10 overflow-hidden rounded-full border-red-100 p-0.5 flex justify-center items-center border shrink-0'>
              <img
                src={imagesPreview?.slider2}
                className='object-cover'
                alt='slider2'
              />
            </div>
            <input
              style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
              className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
              type='file'
              name='slider2'
              accept='image/*'
              onChange={onImageChangeHandler}
            />
          </div>
        </div>

        <div className='shrink-0 space-y-2'>
          <label className='hone text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Slider 3
          </label>

          <div className='flex gap-2'>
            <div className='img w-10 h-10 overflow-hidden rounded-full border-red-100 p-0.5 flex justify-center items-center border shrink-0'>
              <img
                src={imagesPreview?.slider3}
                className='object-cover'
                alt='slider3'
              />
            </div>
            <input
              style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
              className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
              type='file'
              name='slider3'
              accept='image/*'
              onChange={onImageChangeHandler}
            />
          </div>
        </div>
      </div>
      <div className='btns flex gap-5 flex-1 justify-end'>
        <button
          onClick={resetAllField}
          className='w-[118px] px-[18px] py-2.5 bg-purple-100 rounded-[5px] border border-purple-100 text-violet-700 text-[13px] font-medium font-Poppins leading-normal'
        >
          Cancel
        </button>
        <button
          disabled={loading}
          onClick={() => {
            updateHandler(data.id, currentDetail);
          }}
          className='min-w-[118px] w-max shrink-0 px-[18px] py-2.5 bg-violet-800 rounded-[5px] border border-violet-800 text-white text-[13px] font-medium font-Poppins leading-normal'
        >
          {loading ? (
            <div className='animate-spin w-fit mx-auto'>
              <LuLoader2 />
            </div>
          ) : (
            "Add New currentDetail"
          )}
        </button>
      </div>
    </div>
  );
};
