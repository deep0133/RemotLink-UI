import { useState } from "react";
import { CalenderIcon, ChevlonIcon, FilterIcon } from "../../assets/constants";

const Buttons = ({ fromTo, filterHandler, type1, type2 }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month is zero-based, so add 1
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const sortByDate = () => {
    fromTo(formatDate(startDate), formatDate(endDate));
  };

  return (
    <div className='flex justify-end gap-5'>
      <button
        style={{ border: "1px solid rgba(34, 31, 185, 0.14)" }}
        className='bg-white gap-2 flex flex-row items-center rounded-[5px] px-3 py-2'
      >
        <CalenderIcon />
        <div className='text-[13px] font-medium font-Poppins leading-normal'>
          <span className='text-black text-opacity-25'>From : </span>
          <input
            type='date'
            value={startDate}
            onChange={handleStartDateChange}
            className='focus:outline-none'
          />
        </div>
        <div className='w-1 border-l h-4'></div>
        <div className='text-[13px] font-medium font-Poppins leading-normal'>
          <span className='text-black text-opacity-25'>To : </span>
          <input
            type='date'
            value={endDate}
            onChange={handleEndDateChange}
            className='focus:outline-none'
          />
        </div>

        <div onClick={sortByDate} className='btn pl-3'>
          Sort
        </div>
      </button>

      <button
        onClick={() => {
          setShowDropDown((prev) => !prev);
        }}
        style={{ border: "1px solid rgba(34, 31, 185, 0.14)" }}
        className='bg-white relative gap-2 flex flex-row shrink-0 items-center rounded-[5px] px-3 py-2'
      >
        <FilterIcon />
        <p className='font-Poppins text-[13px] font-medium leading-6'>
          Filter By
        </p>
        <div
          className={`${
            showDropDown ? "rotate-180" : "rotate-0"
          } mt-0.5 duration-200`}
        >
          <ChevlonIcon />
        </div>
        {showDropDown && (
          <DropDown filterHandler={filterHandler} type1={type1} type2={type2} />
        )}
      </button>
    </div>
  );
};

export default Buttons;

const DropDown = ({ filterHandler, type1, type2 }) => {
  return (
    <div className='top-12 absolute right-0 rounded-md z-50 shadow-sm bg-white ring-black ring-opacity-5 focus:outline-none'>
      <div className=' border text-start text-nowrap'>
        <h3
          onClick={() => {
            filterHandler("", type1);
          }}
          className='w-full text-[13px] font-medium font-Poppins leading-normal py-3 pl-4 pr-8 hover:cursor-pointer hover:bg-gray-50'
        >
          A to Z
        </h3>
        <h3
          onClick={() => {
            filterHandler("-", type1);
          }}
          className='w-full text-[13px] font-medium font-Poppins leading-normal py-3 pl-4 pr-8 hover:cursor-pointer hover:bg-gray-50'
        >
          Z to A
        </h3>
        <h3
          onClick={() => {
            filterHandler("", type2);
          }}
          className='w-full text-[13px] font-medium font-Poppins leading-normal py-3 pl-4 pr-8 hover:cursor-pointer hover:bg-gray-50'
        >
          Newest to Oldest
        </h3>
        <h3
          onClick={() => {
            filterHandler("-", type2);
          }}
          className='w-full text-[13px] font-medium font-Poppins leading-normal py-3 pl-4 pr-8 hover:cursor-pointer hover:bg-gray-50'
        >
          Oldest to Newest
        </h3>
      </div>
    </div>
  );
};
