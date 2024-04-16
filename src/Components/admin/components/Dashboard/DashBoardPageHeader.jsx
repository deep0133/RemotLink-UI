const DashBoardPageHeader = () => {
  return (
    <div className='mx-3 mt-5 metric flex justify-between items-center'>
      {/* <h2 className=' text-violet-800 text-[22px] font-semibold font-Poppins leading-[33px]'>
        Metrics
      </h2> */}
      <div className="text-violet-800 text-[19px] font-semibold font-['Poppins'] leading-7">
        Metrics
      </div>
      <select
        style={{ border: "1px rgba(34, 31, 185, 0.14) solid" }}
        className='focus:outline-none space-y-2  bg-white rounded-[5px] border border-blue-800 border-opacity-10 text-violet-800 text-[13px] font-medium px-3 py-1 font-Poppins leading-normal'
        name='month'
      >
        <option>Month</option>
      </select>
    </div>
  );
};

export default DashBoardPageHeader;
