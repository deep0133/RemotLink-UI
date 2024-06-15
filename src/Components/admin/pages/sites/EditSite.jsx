import React, { useEffect, useState } from "react";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import {
  AvatarIcon,
  DeleteIcon,
  EditICon,
  FileIcon,
  LinkIcon,
  SitesIcon,
  ThreeDots,
} from "../../assets/constants";
import { LuLoader2 } from "react-icons/lu";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export default function EditUser({ siteData, loading, updateFunctionHandler }) {
  const [data, setData] = useState({});
  const [oldData, setOldData] = useState({});
  const [myId, setMyId] = useState("");

  useEffect(() => {
    const url = window.location.pathname.split("/");
    const id = url[url.length - 1];
    setMyId(id);

    if (siteData && siteData.length > 0) {
      const founded = siteData.find((item) => String(item.id) === String(id));
      if (founded) {
        setOldData(founded);
        setData(founded);
      } else {
        setData({});
      }
    } else {
      setData({});
    }
  }, [siteData]);

  return (
    <>
      <Header icon={<SitesIcon />} title={"Site Details"} subTitle={"Sites"} />
      {data ? (
        <div className='mt-8 relative mx-3 bg-white'>
          <DetailSection oldData={oldData} />

          <div
            style={{
              boxShadow: "0px 10px 35px 1px rgba(112, 144, 176, 0.10)",
              broder: "1px solid rgba(34, 31, 185, 0.14)",
            }}
          >
            {data && (
              <AddSection
                siteData={data}
                updateFunctionHandler={updateFunctionHandler}
                loading={loading}
                id={myId}
              />
            )}
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
}

const DetailSection = ({ oldData }) => {
  return (
    <div className='border p-8 grid grid-cols-4 relative gap-6 rounded-md bg-[#FBFCFF]'>
      <div className='card-name col-span-1'>
        <p className='text-black/50 font-Poppins text-[13px] font-normal leading-6'>
          Site Name
        </p>
        <div className='flex gap-2 items-center'>
          <SitesIcon />
          <p className='text-[#103E7E] font-Poppins text-sm font-medium leading-7'>
            {oldData && oldData.name ? oldData.name : "---"}
          </p>
        </div>
      </div>
      <div className='card-email col-span-2'>
        <p className='text-black/50 font-Poppins text-[13px] font-normal leading-6'>
          Site URL
        </p>
        <div className='flex gap-2 items-center'>
          <LinkIcon />
          <p className='text-[#103E7E] font-Poppins text-sm font-medium leading-7'>
            {oldData && oldData.base_url ? oldData.base_url : "---"}
          </p>
        </div>
      </div>

      <div className='card-phone col-span-1'>
        <p className='text-black/50 font-Poppins text-[13px] font-normal leading-6'>
          Category
        </p>
        <div className='flex gap-2 items-center'>
          <AvatarIcon />
          <p className='text-[#103E7E] font-Poppins text-sm font-medium leading-7'>
            {oldData &&
            typeof oldData.category === "object" &&
            oldData.category &&
            oldData.category.name
              ? oldData.category.name
              : "---"}
          </p>
        </div>
      </div>

      <div className='card-address col-span-full'>
        <p className='text-black/50 font-Poppins text-[13px] font-normal leading-6'>
          Description
        </p>
        <div className='flex gap-2 items-center'>
          <div className='shrink-0'>
            <FileIcon />
          </div>
          <p className='text-[#103E7E]  font-Poppins text-sm font-medium leading-7'>
            {oldData && oldData.description ? oldData.description : "---"}
          </p>
        </div>
      </div>
    </div>
  );
};

const AddSection = ({
  siteData,
  updateFunctionHandler,
  loading = false,
  id,
}) => {
  const [currentData, setCurrentData] = useState({});
  const [preview, setPreview] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    setCurrentData((prev) => {
      return {
        name: siteData.name,
        url: siteData.base_url,
        description: siteData.description,
        category:
          siteData &&
          typeof siteData.category === "object" &&
          siteData.category &&
          siteData.category.name
            ? siteData.category.name
            : "",
      };
    });
    if (siteData && siteData.image) {
      setPreview(siteData.image);
    }
  }, [siteData]);

  const onImageChangeHandler = (event) => {
    const file = event.target.files[0];
    setCurrentData({ ...currentData, image: file });
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log("----Category Edited ---- :", name, value);
    const updatedValue = name === "category" ? parseInt(value, 10) : value;
    console.log("=---Updated value----- :", updatedValue);
    setCurrentData((prev) => {
      return { ...prev, [name]: updatedValue };
    });
  };

  const { categoryData, handleFetctData } = useFetch();

  useEffect(() => {
    handleFetctData("api/sites/categories");
  }, []);

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
          Edit Site Details
        </h3>
      </div>
      <div className='form my-6 grid grid-cols-3 gap-8 '>
        <div className='name shrink-0 space-y-2'>
          <label className='name text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Name
          </label>
          <input
            style={{
              border: "1px rgba(34, 31, 185, 0.14) solid",
            }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='name'
            value={currentData.name}
            onChange={onChangeHandler}
          />
        </div>

        <div className='shrink-0 space-y-2'>
          <label className='email text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Site Url
          </label>
          <input
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            name='url'
            value={currentData.url}
            onChange={onChangeHandler}
          />
        </div>

        <div className='shrink-0 space-y-2'>
          <label className='email text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Site Image
          </label>
          <div className='flex gap-2'>
            <div className='img w-10 h-10 overflow-hidden rounded-full border-red-100 p-0.5 flex justify-center items-center border shrink-0'>
              <img src={preview} className='object-cover' alt='' />
            </div>
            <input
              style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
              className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
              type='file'
              name='image'
              onChange={onImageChangeHandler}
            />
          </div>
        </div>

        <div className='shrink-0 space-y-2'>
          <label className='hone text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Category
          </label>
          <select
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none space-y-2 focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            name='category'
            onChange={(e) => {
              onChangeHandler(e);
            }}
          >
            <option value={null}>---</option>
            {categoryData &&
              categoryData.results &&
              categoryData.results.map((catg, index) => (
                <option key={index} value={Number(catg.id)}>
                  {catg.name}
                </option>
              ))}
          </select>
        </div>

        <div className='description shrink-0 max-w-[320px] w-full space-y-2 flex flex-col'>
          <label htmlFor='desc text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            Description
          </label>
          <textarea
            rows={"auto"}
            style={{
              border: "1px solid rgba(34, 31, 185, 0.14)",
            }}
            name='description'
            value={currentData.description}
            onChange={onChangeHandler}
            className='w-[492px] h-36 px-3.5 py-2.5 focus:outline-none text-gray-900 text-sm font-medium font-Poppins leading-7 bg-white rounded-[5px]'
          ></textarea>
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
            updateFunctionHandler(id, currentData);
          }}
          className='min-w-[118px] w-max shrink-0 px-[18px] py-2.5 bg-violet-800 rounded-[5px] border border-violet-800 text-white text-[13px] font-medium font-Poppins leading-normal'
        >
          {loading ? (
            <div className='animate-spin w-fit mx-auto'>
              <LuLoader2 />
            </div>
          ) : (
            "Save Details"
          )}
        </button>
      </div>
    </div>
  );
};
