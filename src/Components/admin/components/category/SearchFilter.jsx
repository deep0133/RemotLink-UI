import { useState } from "react";
import {
  ChevlonIcon,
  FilterIcon,
  SearchIcon,
  SortIcon,
} from "../../assets/constants";
const SearchFilter = ({ searchHandler, setSort, filterHandler }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filterDate, setFilterDate] = useState("");
  const [filterType, setFilterType] = useState("");

  const [selectedItem, setSelectedItem] = useState("");

  const handleFilterToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterChange = (e) => {
    e.stopPropagation();
    setFilterDate(e.target.value);
  };

  const handleFilterTypeChange = (type) => {
    setFilterType(type);
    setSelectedItem(type);
  };

  const applyFilter = () => {
    filterHandler(filterDate, filterType);

    setFilterDate("");
    setFilterType("");
  };

  return (
    <div className='flex justify-between flex-1 ml-3'>
      <div
        style={{ border: "1px solid rgba(34, 31, 185, 0.14)" }}
        className='InputWithLabel w-80 h-11 pl-3 justify-start items-center  inline-flex bg-white rounded-[5px] border-opacity-100'
      >
        <SearchIcon />
        <input
          className=' flex-1 focus:outline-none px-2 text-gray-500 text-[13px] font-normal font-Poppins leading-normal '
          placeholder='Search'
          onChange={(e) => {
            searchHandler("?search=" + e.target.value);
          }}
        />
      </div>
      <div className='filters flex gap-3'>
        <button
          onClick={() => {
            setSort((prev) => (prev === "-" ? "" : "-"));
          }}
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
          onClick={handleFilterToggle}
          className='bg-white gap-2 relative flex flex-row shrink-0 items-center rounded-[5px] px-3 py-2'
        >
          <FilterIcon />
          <p className='font-Poppins text-[13px] font-medium leading-6'>
            Filter By
          </p>
          <div className='mt-0.5'>
            <ChevlonIcon />
          </div>
          {isOpen && (
            <DropDown
              handleFilterChange={handleFilterChange}
              filterDate={filterDate}
              handleFilterTypeChange={handleFilterTypeChange}
              applyFilter={applyFilter}
              selectedItem={selectedItem}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;

const DropDown = ({
  handleFilterChange,
  filterDate,
  handleFilterTypeChange,
  applyFilter,
  selectedItem,
}) => {
  return (
    <div className='origin-top-right top-12 absolute right-0 mt-2 w-56 rounded-md z-50 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
      <div className='py-1' role='menu'>
        <div className='px-4 py-2'>
          <input
            type='date'
            value={filterDate}
            onChange={(e) => {
              e.stopPropagation();
              handleFilterChange(e);
            }}
            onClick={(e) => e.stopPropagation()}
            className='border border-gray-300 rounded px-3 py-2 mb-2 w-full'
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleFilterTypeChange("gte");
            }}
            className={`block w-full text-left px-4 py-2 mb-2 rounded-sm text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 ${
              selectedItem === "gte" ? "bg-gray-50" : ""
            }`}
            role='menuitem'
          >
            Greater Than
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleFilterTypeChange("lte");
            }}
            className={`block w-full text-left px-4 py-2 rounded-sm text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 ${
              selectedItem === "lte" ? "bg-gray-50" : ""
            }`}
            role='menuitem'
          >
            Less Than
          </button>
        </div>
        <div className='px-4 py-2'>
          <button
            onClick={applyFilter}
            className='block w-full text-left px-4 py-2 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-md'
            role='menuitem'
          >
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
};
