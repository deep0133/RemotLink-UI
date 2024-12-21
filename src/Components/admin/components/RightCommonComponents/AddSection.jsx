import { useEffect, useState } from "react";
import { EditICon } from "../../assets/constants";
import { LuLoader2 } from "react-icons/lu";

const AddSection = ({
  edit,
  type1,
  type2,
  type3,
  type4,
  siteData,
  addFunctionHandler,
  loading = false,
  submitText,
}) => {
  const [type_1, setType1] = useState("");
  const [type_2, setType2] = useState("");
  const [type_3, setType3] = useState();
  const [type_4, setType4] = useState();

  useEffect(() => {
    setType1(siteData ? siteData?.name : "");
    setType2(siteData ? siteData?.base_url : "");
    setType3(siteData ? siteData?.category?.name : "");
    setType4(siteData ? siteData?.description : "");
  }, [siteData]);

  return (
    <div
      style={{
        border: "boxShadow: '0px 10px 35px 1px rgba(112, 144, 176, 0.10)",
      }}
      className='border relative px-8 mt-5 bg-white rounded-lg shadow pb-12'
    >
      {edit && (
        <div className='flex gap-2 py-4 border-b px-1'>
          <EditICon />
          <h3 className='text-[#631AC0] font-Poppins text-[17px] font-semibold leading-[27px]'>
            {edit}
          </h3>
        </div>
      )}
      <div className='form my-6 grid grid-cols-3 gap-8 '>
        <div className='name shrink-0 space-y-2'>
          <label className='name text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            {type1}
          </label>
          <input
            style={{
              border: "1px rgba(34, 31, 185, 0.14) solid",
            }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            value={type_1}
            onChange={(e) => {
              setType1(e.target.value);
            }}
          />
        </div>

        <div className='email shrink-0 space-y-2'>
          <label className='email text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            {type2}
          </label>
          <input
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            value={type_2}
            onChange={(e) => {
              setType2(e.target.value);
            }}
          />
        </div>

        <div className='phone-number shrink-0 space-y-2'>
          <label className='hone text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            {type3}
          </label>
          <input
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='text'
            value={type_3}
            onChange={(e) => {
              setType3(e.target.value);
            }}
          />
        </div>

        <div className='description shrink-0 max-w-[320px] w-full space-y-2 flex flex-col'>
          <label htmlFor='desc text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            {type4}
          </label>
          <textarea
            rows={"auto"}
            style={{
              border: "1px solid rgba(34, 31, 185, 0.14)",
            }}
            value={type_4}
            onChange={(e) => {
              setType4(e.target.value);
            }}
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
            addFunctionHandler(type_1, type_2, type_3, type_4);
          }}
          className='min-w-[118px] w-max shrink-0 px-[18px] py-2.5 bg-violet-800 rounded-[5px] border border-violet-800 text-white text-[13px] font-medium font-Poppins leading-normal'
        >
          {loading ? (
            <div className='animate-spin w-fit mx-auto'>
              <LuLoader2 />
            </div>
          ) : (
            submitText
          )}
        </button>
      </div>
    </div>
  );
};

export default AddSection;
