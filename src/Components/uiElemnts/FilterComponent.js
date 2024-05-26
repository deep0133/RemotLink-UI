import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
// import { SortIcon } from "../admin/assets/constants";

const FilterComponent = ({
  setCurrentPage,
  selectedFilteration,
  searchViewFilterLoading,
  searchViewFilterData,
}) => {
  const [accessDropdownOpen, setAccessDropdownOpen] = useState(false);
  const [sourceTypeDropdownOpen, setSourceTypeDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [dateDropdownOpen, setDateDropdownOpen] = useState(false);
  const [databaseDropdownOpen, setDatabaseDropdownOpen] = useState(false);

  const [showAll, setShowAll] = useState(false);
  const [openAccessOnly, setOpenAccessOnly] = useState(false);
  const [sourceTypes, setSourceTypes] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedDatabases, setSelectedDatabases] = useState([]);
  const [dateRange, setDateRange] = useState({
    from: "",
    to: "",
  });

  const handleLanguageChange = (value, type) => {
    if (type === "lang")
      setSelectedLanguages((prev) =>
        prev.includes(value)
          ? prev.filter((lang) => lang !== value)
          : [...prev, value]
      );
    else {
      setSelectedDatabases((prev) =>
        prev.includes(value)
          ? prev.filter((db) => db !== value)
          : [...prev, value]
      );
    }
  };

  const handleKeys = () => {
    if (searchViewFilterData) {
      const keys = Object.keys(searchViewFilterData);

      // Filter out the unwanted keys with detailed logging
      const wantedKeys = [
        "total_journals",
        "total_books",
        "total_videos",
        "total_other_resources",
      ];

      const filteredKeys = keys.filter((val) => {
        if (wantedKeys.includes(val)) return true;
        return false;
      });

      const acc = [];

      for (let i = 0; i < filteredKeys.length; i++) {
        switch (filteredKeys[i]) {
          case "total_journals":
            acc.push("journal");
            break;
          case "total_books":
            acc.push("book");
            break;
          case "total_videos":
            acc.push("video");
            break;
          case "total_other_resources":
            acc.push("other_resource");
            break;
          default:
            break;
        }
      }

      // Create a new object with the remaining keys set to false
      const newSourceTypes = acc.reduce((my, key) => {
        my[key] = false;
        return my;
      }, {});

      // Update the state with the new source types
      setSourceTypes(newSourceTypes);
    }
  };

  useEffect(() => {
    handleKeys();
  }, [searchViewFilterData]);

  const createQuery = () => {
    let newQuery = "";
    if (showAll) {
      newQuery += "&access_type=Full Text";
    }
    // else {
    //   newQuery.replace("&access_type=Full Text", "");
    // }
    if (openAccessOnly) {
      newQuery += "&access_type=Open access";
    }
    // else {
    //   newQuery.replace("&access_type=Open access", "");
    // }

    if (sourceTypes) {
      const k = Object.keys(sourceTypes).filter(
        (key) => sourceTypes[key] === true
      );
      const stype = k.map((val) => "&resource_type=" + val).join(",");
      newQuery += stype;
    }

    if (selectedLanguages.length > 0) {
      const lang = selectedLanguages.map((val) => "&language=" + val).join(",");
      newQuery += lang;
    }

    if (selectedDatabases.length > 0) {
      const db = selectedDatabases.map((val) => "&database=" + val).join(",");
      newQuery += db;
    }

    if (dateRange && dateRange.from) {
      newQuery += "&publish_date_start=" + dateRange.from;
    }
    if (dateRange && dateRange.to) {
      newQuery += "&publish_date_end=" + dateRange.to;
    }
    selectedFilteration(newQuery);
  };

  useEffect(() => {
    createQuery();
  }, [
    showAll,
    openAccessOnly,
    sourceTypes,
    selectedLanguages,
    selectedDatabases,
    dateRange,
  ]);

  return (
    <div className='p-4 max-w-md mx-auto rounded-lg sticky top-0'>
      {/* Access */}
      <div className='mb-4 border-b-2 pb-4'>
        <button
          onClick={() => setAccessDropdownOpen(!accessDropdownOpen)}
          className='w-full flex justify-between items-center text-left py-2 rounded-md '
        >
          <p className='text-black text-[15px] font-medium font-Poppins leading-tight'>
            Access
          </p>
          <p style={{ rotate: accessDropdownOpen ? "180deg" : "0deg" }}>
            <FaChevronDown />
          </p>
        </button>
        {accessDropdownOpen && (
          <div className='mt-2'>
            <label className='flex items-center space-x-2'>
              <input
                type='checkbox'
                checked={showAll}
                onChange={() => {
                  setShowAll(!showAll);
                  setCurrentPage(1);
                }}
                className='form-checkbox  accent-blue-500'
              />
              <span className='text-zinc-600 text-[13px] font-normal font-Poppins capitalize tracking-tight'>
                Show All
              </span>
            </label>
            <label className='flex items-center space-x-2 mt-2'>
              <input
                type='checkbox'
                checked={openAccessOnly}
                onChange={() => {
                  setOpenAccessOnly(!openAccessOnly);
                  setCurrentPage(1);
                }}
                className='form-checkbox  accent-blue-500'
              />
              <span className='text-zinc-600 text-[13px] font-normal font-Poppins capitalize tracking-tight'>
                Open Access Only
              </span>
            </label>
          </div>
        )}
      </div>

      {/* Source Type */}
      <div className='mb-4 border-b-2 pb-4'>
        <button
          onClick={() => setSourceTypeDropdownOpen(!sourceTypeDropdownOpen)}
          className='w-full flex justify-between items-center text-left py-2 rounded-md'
        >
          <p className='text-black text-[15px] font-medium font-Poppins leading-tight'>
            Source Type
          </p>
          <p style={{ rotate: sourceTypeDropdownOpen ? "180deg" : "0deg" }}>
            <FaChevronDown />
          </p>
        </button>
        {sourceTypeDropdownOpen && (
          <div className='mt-2'>
            <label className='flex items-center space-x-2'>
              <input
                type='checkbox'
                checked={sourceTypes.journal}
                onChange={() => {
                  setSourceTypes((prev) => ({
                    ...prev,
                    journal: !prev.journal,
                  }));
                  setCurrentPage(1);
                }}
                className='form-checkbox  accent-blue-500'
              />
              <span className='text-zinc-600 text-[13px] font-normal font-Poppins capitalize tracking-tight'>
                EJournals
              </span>
            </label>
            <label className='flex items-center space-x-2 mt-2'>
              <input
                type='checkbox'
                checked={sourceTypes.other_resource}
                onChange={() => {
                  setSourceTypes((prev) => ({
                    ...prev,
                    other_resource: !prev.other_resource,
                  }));
                  setCurrentPage(1);
                }}
                className='form-checkbox  accent-blue-500'
              />
              <span className='text-zinc-600 text-[13px] font-normal font-Poppins capitalize tracking-tight'>
                Other EResources
              </span>
            </label>
            <label className='flex items-center space-x-2 mt-2'>
              <input
                type='checkbox'
                checked={sourceTypes.book}
                onChange={() => {
                  setSourceTypes((prev) => ({
                    ...prev,
                    book: !prev.book,
                  }));
                  setCurrentPage(1);
                }}
                className='form-checkbox  accent-blue-500'
              />
              <span className='text-zinc-600 text-[13px] font-normal font-Poppins capitalize tracking-tight'>
                EBooks
              </span>
            </label>
            <label className='flex items-center space-x-2 mt-2'>
              <input
                type='checkbox'
                checked={sourceTypes.video}
                onChange={() => {
                  setSourceTypes((prev) => ({
                    ...prev,
                    video: !prev.video,
                  }));
                  setCurrentPage(1);
                }}
                className='form-checkbox  accent-blue-500'
              />
              <span className='text-zinc-600 text-[13px] font-normal font-Poppins capitalize tracking-tight'>
                EVideos
              </span>
            </label>
          </div>
        )}
      </div>

      {/* Language */}
      <div className='mb-4 border-b-2 pb-4'>
        <button
          onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
          className='w-full text-left py-2 rounded-md flex justify-between items-center'
        >
          <p className='text-black text-[15px] font-medium font-Poppins leading-tight'>
            Language
          </p>
          <p style={{ rotate: languageDropdownOpen ? "180deg" : "0deg" }}>
            <FaChevronDown />
          </p>
        </button>
        {languageDropdownOpen && (
          <div className='mt-2 w-full'>
            <select
              onChange={(e) => {
                handleLanguageChange(e.target.value, "lang");
                setCurrentPage(1);
              }}
              value={"Selected Language"}
              className='w-full right-0 border border-gray-50 p-2 outline-none rounded-md'
            >
              <option value='Selected Lang' selected>
                Selected Language
              </option>

              {searchViewFilterData &&
                searchViewFilterData.distinct_languages?.map((lang, i) => {
                  return (
                    <option key={i} value={lang}>
                      {lang}
                    </option>
                  );
                })}
            </select>
          </div>
        )}
        <div className=' w-full flex gap-3 flex-wrap mt-3'>
          {selectedLanguages.map((ln, i) => {
            return (
              <p key={i} className='bg-gray-200 py-1 px-3 rounded-md'>
                {ln}
              </p>
            );
          })}
        </div>
      </div>

      {/* DataBases */}
      <div className='mb-4 border-b-2 pb-4'>
        <button
          onClick={() => setDatabaseDropdownOpen(!databaseDropdownOpen)}
          className='w-full text-left py-2 rounded-md flex justify-between items-center'
        >
          <p className='text-black text-[15px] font-medium font-Poppins leading-tight'>
            DataBases
          </p>
          <p style={{ rotate: databaseDropdownOpen ? "180deg" : "0deg" }}>
            <FaChevronDown />
          </p>
        </button>
        {databaseDropdownOpen && (
          <div className='mt-2 w-full'>
            <select
              onChange={(e) => {
                handleLanguageChange(e.target.value, "db");
                setCurrentPage(1);
              }}
              className='w-full right-0 border border-gray-50 p-2 outline-none rounded-md'
              value={"Selected Database"}
            >
              <option value='Selected Database' selected>
                Selected Database
              </option>
              {searchViewFilterData &&
                searchViewFilterData.distinct_databases?.map((db, i) => {
                  return (
                    <option key={i} value={db}>
                      {db}
                    </option>
                  );
                })}
            </select>
          </div>
        )}
        <div className=' w-full flex gap-3 flex-wrap mt-3'>
          {selectedDatabases.map((db, i) => {
            return (
              <p key={i} className='bg-gray-200 py-1 px-3 rounded-md'>
                {db}
              </p>
            );
          })}
        </div>
      </div>

      {/* Date */}
      <div className='mb-4 border-b-2 pb-4'>
        <button
          onClick={() => setDateDropdownOpen(!dateDropdownOpen)}
          className='w-full font-semibold mb-2 flex justify-between items-center'
        >
          <p className='text-black text-[15px] font-medium font-Poppins leading-tight'>
            Date
          </p>
          <p style={{ rotate: dateDropdownOpen ? "180deg" : "0deg" }}>
            <FaChevronDown />
          </p>
        </button>
        {dateDropdownOpen && (
          <div className='flex flex-wrap gap-2'>
            <input
              type='date'
              onChange={(e) => {
                if (e.target.value === "")
                  return setDateRange({ ...dateRange, from: "" });
                const toDate = new Date(e.target.value);
                const day = toDate.getDate().toString().padStart(2, "0");
                const month = (toDate.getMonth() + 1)
                  .toString()
                  .padStart(2, "0");
                const year = toDate.getFullYear();
                const formattedDate = `${day}-${month}-${year}`;
                setDateRange({ ...dateRange, from: formattedDate });
                setCurrentPage(1);
              }}
              className=' p-2 bg-inherit border rounded-md w-[-webkit-fill-available]'
              placeholder='From : '
            />
            <input
              type='date'
              onChange={(e) => {
                if (e.target.value === "")
                  return setDateRange({ ...dateRange, to: "" });
                const toDate = new Date(e.target.value);
                const day = toDate.getDate().toString().padStart(2, "0");
                const month = (toDate.getMonth() + 1)
                  .toString()
                  .padStart(2, "0");
                const year = toDate.getFullYear();
                const formattedDate = `${day}-${month}-${year}`;
                setDateRange({ ...dateRange, to: formattedDate });
                setCurrentPage(1);
              }}
              className='p-2 rounded-md border bg-inherit w-[-webkit-fill-available]'
              placeholder='To : '
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterComponent;
