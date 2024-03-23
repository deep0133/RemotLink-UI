import { EditICon } from "../../assets/constants";

const AddSection = ({ edit, type1, type2, type3, type4, values }) => {
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
            placeholder=''
            defaultValue={values[0]}
          />
        </div>

        <div className='email shrink-0 space-y-2'>
          <label className='email text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            {type2}
          </label>
          <input
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='email'
            placeholder=''
            defaultValue={values[1]}
          />
        </div>

        <div className='phone-number shrink-0 space-y-2'>
          <label className='hone text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            {type3}
          </label>
          <input
            style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
            className='w-full focus:outline-none focus:ring-4 ring-[rgba(16,_24,_40,_0.05)] bg-white text-gray-900 rounded-[5px] border px-3 py-2 text-sm font-medium font-Poppins leading-normal'
            type='tel'
            placeholder=''
            defaultValue={values[2]}
          />
        </div>

        <div className='description shrink-0 max-w-[320px] w-full space-y-2 flex flex-col'>
          <label htmlFor='desc text-slate-700 text-sm font-medium font-Poppins leading-tight'>
            {type4}
          </label>
          <div
            style={{
              border: "1px solid rgba(34, 31, 185, 0.14)",
            }}
            className='w-[492px] h-36 px-3.5 py-2.5  text-gray-900 text-sm font-medium font-Poppins leading-7 bg-white rounded-[5px]'
          >
            {values[3]}
          </div>
        </div>
      </div>

      <div className='btns flex gap-5 flex-1 justify-end'>
        <button className='w-[118px] px-[18px] py-2.5 bg-purple-100 rounded-[5px] border border-purple-100 text-violet-700 text-[13px] font-medium font-Poppins leading-normal'>
          Cancel
        </button>
        <button className='w-[118px] px-[18px] py-2.5 bg-violet-800 rounded-[5px] border border-violet-800 text-white text-[13px] font-medium font-Poppins leading-normal'>
          Save Details
        </button>
      </div>
    </div>
  );
};

export default AddSection;
