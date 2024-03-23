import {
  ChevlonIcon,
  FilterIcon,
  SearchIcon,
  SortIcon,
} from "../../assets/constants";
const SearchFilter = () => {
  return (
    <div className='flex justify-between ml-3'>
      <div
        style={{ border: "1px solid rgba(34, 31, 185, 0.14)" }}
        className='InputWithLabel w-80 h-11 pl-3 justify-start items-center  inline-flex bg-white rounded-[5px] border-opacity-100'
      >
        <SearchIcon />
        <input
          className=' flex-1 focus:outline-none px-2 text-gray-500 text-[13px] font-normal font-Poppins leading-normal '
          placeholder='Search'
        />
      </div>
      <div className='filters flex gap-3'>
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
    </div>
  );
};

export default SearchFilter;
