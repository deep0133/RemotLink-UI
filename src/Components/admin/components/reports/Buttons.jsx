import { useState } from "react";
import {
  CalenderIcon,
  ChevlonIcon,
  FilterIcon,
  SortIcon,
} from "../../assets/constants";

const Buttons = () => {
  const [startDate, setStartDate] = useState("08/05/2023");
  const [endDate, setEndDate] = useState("08/05/2023");

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
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
      </button>
      <button
        style={{ border: "1px solid rgba(34, 31, 185, 0.14)" }}
        className='bg-white gap-2 flex flex-row shrink-0 items-center rounded-[5px] px-3 py-2'
      >
        <SortIcon />
        <p className='font-Poppins text-[13px] font-medium leading-6'>
          Sort By
        </p>
        <div className='mt-0.5'>
          <ChevlonIcon />
        </div>
      </button>

      <button
        style={{ border: "1px solid rgba(34, 31, 185, 0.14)" }}
        className='bg-white gap-2 flex flex-row shrink-0 items-center rounded-[5px] px-3 py-2'
      >
        <FilterIcon />
        <p className='font-Poppins text-[13px] font-medium leading-6'>
          Filter By
        </p>
        <div className='mt-0.5'>
          <ChevlonIcon />
        </div>
      </button>
    </div>
  );
};

export default Buttons;
