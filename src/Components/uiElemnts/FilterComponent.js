import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
const FilterComponent = () => {
  const [accessDropdownOpen, setAccessDropdownOpen] = useState(false);
  const [sourceTypeDropdownOpen, setSourceTypeDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [dateDropdownOpen, setDateDropdownOpen] = useState(false);

  const [showAll, setShowAll] = useState(true);
  const [openAccessOnly, setOpenAccessOnly] = useState(false);
  const [sourceTypes, setSourceTypes] = useState({
    eJournals: true,
    otherEResources: true,
    eBooks: false,
    eVideos: false,
  });
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [dateRange, setDateRange] = useState({
    from: "4/01/01",
    to: "4/02/02",
  });

  const handleLanguageChange = (language) => {
    setSelectedLanguages((prev) =>
      prev.includes(language)
        ? prev.filter((lang) => lang !== language)
        : [...prev, language]
    );
  };

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
                onChange={() => setShowAll(!showAll)}
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
                onChange={() => setOpenAccessOnly(!openAccessOnly)}
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
                checked={sourceTypes.eJournals}
                onChange={() =>
                  setSourceTypes({
                    ...sourceTypes,
                    eJournals: !sourceTypes.eJournals,
                  })
                }
                className='form-checkbox  accent-blue-500'
              />
              <span className='text-zinc-600 text-[13px] font-normal font-Poppins capitalize tracking-tight'>
                EJournals
              </span>
            </label>
            <label className='flex items-center space-x-2 mt-2'>
              <input
                type='checkbox'
                checked={sourceTypes.otherEResources}
                onChange={() =>
                  setSourceTypes({
                    ...sourceTypes,
                    otherEResources: !sourceTypes.otherEResources,
                  })
                }
                className='form-checkbox  accent-blue-500'
              />
              <span className='text-zinc-600 text-[13px] font-normal font-Poppins capitalize tracking-tight'>
                Other EResources
              </span>
            </label>
            <label className='flex items-center space-x-2 mt-2'>
              <input
                type='checkbox'
                checked={sourceTypes.eBooks}
                onChange={() =>
                  setSourceTypes({
                    ...sourceTypes,
                    eBooks: !sourceTypes.eBooks,
                  })
                }
                className='form-checkbox  accent-blue-500'
              />
              <span className='text-zinc-600 text-[13px] font-normal font-Poppins capitalize tracking-tight'>
                EBooks
              </span>
            </label>
            <label className='flex items-center space-x-2 mt-2'>
              <input
                type='checkbox'
                checked={sourceTypes.eVideos}
                onChange={() =>
                  setSourceTypes({
                    ...sourceTypes,
                    eVideos: !sourceTypes.eVideos,
                  })
                }
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
          <div className='mt-2'>
            <label className='flex items-center space-x-2'>
              <input
                type='checkbox'
                checked={selectedLanguages.includes("English(US)")}
                onChange={() => handleLanguageChange("English(US)")}
                className='form-checkbox  accent-blue-500'
              />
              <span className='text-zinc-600 text-[13px] font-normal font-Poppins capitalize tracking-tight'>
                English(US)
              </span>
            </label>
          </div>
        )}
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
          <div className='flex space-x-2'>
            <input
              type='text'
              value={dateRange.from}
              onChange={(e) =>
                setDateRange({ ...dateRange, from: e.target.value })
              }
              className='w-1/2 p-2  bg-inherit border rounded-md'
              placeholder='From : '
            />
            <input
              type='text'
              value={dateRange.to}
              onChange={(e) =>
                setDateRange({ ...dateRange, to: e.target.value })
              }
              className='w-1/2 p-2 rounded-md border bg-inherit'
              placeholder='To : '
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterComponent;
