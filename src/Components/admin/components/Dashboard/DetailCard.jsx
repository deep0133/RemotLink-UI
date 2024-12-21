import { DownRedArrow, UpGreenArrow } from "../../assets/constants";

const DetailCard = ({
  progress = false,
  progressColor,
  name,
  weekMonth,
  icon,
  data1,
  data2,
  data3,
  data4,
}) => {
  const classes = "text-green-600 text-red-600";
  return (
    <div className=''>
      <div className='flex flex-col gap-3'>
        <div className='flex gap-3 items-center'>
          {/* Logo */}
          <div className='w-[50px] h-[50px] bg-opacity-10 flex justify-center items-center bg-blue-600 rounded-[3px]'>
            {icon}
          </div>
          {/* Name */}
          <div className=' h-11 flex-col justify-start items-start inline-flex'>
            <div className='text-gray-900 text-sm font-medium font-Poppins leading-snug'>
              {name}
            </div>
            <div className='text-gray-500 text-sm font-medium font-Poppins leading-snug'>
              This {weekMonth}
            </div>
          </div>
        </div>

        {/* Numbers */}
        <div className=' h-[22px] justify-start items-baseline gap-3 inline-flex'>
          <div className='text-gray-900 text-2xl font-semibold font-Poppins leading-snug'>
            {data1}
          </div>
          <div className='justify-start items-center gap-1 flex'>
            <div
              className={`${
                data4 >= 0 ? "text-green-600" : "text-red-600"
              } text-sm font-medium font-Poppins leading-snug`}
            >
              {data4}%
            </div>
            {data4 >= 0 ? (
              <UpGreenArrow />
            ) : (
              <span className='rotate-180'>
                {" "}
                <DownRedArrow />
              </span>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        {progress && (
          <div>
            <span
              role='progressbar'
              className='block rounded-full w-full bg-gray-200'
            >
              <span
                className='block h-1.5  rounded-full'
                style={{
                  width: data4 >= 0 ? data4 + "%" : -data4 + "%",
                  background: progressColor,
                }}
              ></span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailCard;
