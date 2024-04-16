const DetailCard = ({ progress = false }) => {
  return (
    <div className=''>
      <div className='flex flex-col gap-3'>
        <div className='flex gap-3 items-center'>
          {/* Logo */}
          <div className='w-[50px] h-[50px] opacity-10 bg-blue-600 rounded-[3px]' />
          {/* Name */}
          <div className='w-[78px] h-11 flex-col justify-start items-start inline-flex'>
            <div className='text-gray-900 text-sm font-medium font-Poppins leading-snug'>
              Total Users
            </div>
            <div className='text-gray-500 text-sm font-medium font-Poppins leading-snug'>
              This week
            </div>
          </div>
        </div>

        {/* Numbers */}
        <div className='w-[154px] h-[22px] justify-start items-center gap-3 inline-flex'>
          <div className='text-gray-900 text-2xl font-semibold font-Poppins leading-snug'>
            100000
          </div>
          <div className='justify-start items-center gap-1 flex'>
            <div className='text-green-600 text-sm font-medium font-Poppins leading-snug'>
              0.39%
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        {progress && (
          <div>
            <span className='sr-only'>Loading</span>

            <span role='progressbar' className='block rounded-full bg-gray-200'>
              <span
                className='block h-1.5  rounded-full bg-indigo-600'
                style={{ width: "75%" }}
              ></span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailCard;
