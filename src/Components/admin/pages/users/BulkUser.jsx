import {
  CloudDownloadIcon,
  CrossIcon,
  DownloadIcon,
  ThickIcon,
  UsersIcon,
} from "../../assets/constants";
import Header from "../../components/Dashboard/RightCommonComponents/Header";

export default function BulkUser() {
  return (
    <>
      <Header
        icon={<UsersIcon />}
        title={"Bulk User Details"}
        subTitle={"Users"}
      />
      <div
        style={{
          border: "0px 10px 35px 1px rgba(112, 144, 176, 0.10)",
        }}
        className='border relative p-8 mx-3 h-full my-5 rounded-md'
      >
        <HeroSection />
        <FileUpload />
        <Buttons />
      </div>
    </>
  );
}

const HeroSection = () => {
  return (
    <div className='space-y-2 '>
      <h3 className='text-black pb-2 text-sm font-medium font-Poppins leading-normal tracking-tight'>
        Download file format to add Bulk Users
      </h3>
      <button
        style={{
          border: "1px solid rgba(34, 31, 185, 0.20)",
        }}
        className='download-file-format flex gap-3 px-7 py-3 rounded-[5px] '
      >
        <CloudDownloadIcon />
        <p className='text-sm text-[#103E7E] font-medium font-Poppins leading-normal tracking-tight'>
          Download File Format here
        </p>
      </button>
    </div>
  );
};

const FileUpload = () => {
  return (
    <div className='mt-6 relative'>
      <h3 className='text-black lining-nums proportional-nums font-Poppins text-sm font-medium leading-6 '>
        File Upload
      </h3>
      <div className='card-container flex gap-8 mt-4'>
        <div
          style={{
            border: "1px dashed rgba(34, 31, 185, 0.14)",
          }}
          className='card-1 shrink-0 bg-[#FAFCFE] w-[500px] rounded-[5px] py-5 px-6 flex items-center'
        >
          {/* <div className='w-10 h-10  flex justify-center items-center rounded-full shrink-0'> */}
          <DownloadIcon />
          {/* </div> */}
          <div className='content'>
            <div>
              <span className="text-black text-base font-medium font-['Poppins'] leading-relaxed">
                Drop your
              </span>
              <span className="text-blue-900 text-base font-medium font-['Poppins'] leading-relaxed">
                {" "}
                File here
              </span>
            </div>
            <p className='text-blue-900 text-sm font-medium font-Poppins leading-relaxed'>
              or Click here to Browser from your computer
            </p>
          </div>
        </div>

        <div className='card-2 shrink-0 relative w-[500px] flex-wrap border p-5 flex items-center gap-3'>
          <div className='absolute right-3 top-3 w-fit'>
            <CrossIcon />
          </div>
          <div className='w-10 h-10 bg-yellow-600 flex justify-center items-center rounded-full shrink-0'>
            <ThickIcon />
          </div>
          <div className='content shrink-0 w-full flex-1'>
            <div className='text-black text-opacity-90 text-base font-medium font-Poppins leading-relaxed'>
              Students IIM Banglore
            </div>
            <div className=' flex justify-between items-center w-full mt-1'>
              <p className='text-black text-opacity-60 text-[13px] font-medium font-Poppins leading-tight'>
                443KB . 56 seconds left
              </p>
              <p className="text-right text-yellow-600 text-sm font-medium font-['Outfit'] leading-tight">
                4%
              </p>
            </div>
          </div>

          <div
            style={{
              background: "rgba(93, 21, 184, 0.10)",
            }}
            className='flex-1 shrink-0 w-full h-1.5 basis-full overflow-hidden rounded-full'
          >
            <div className='w-1/3 h-1.5 bg-yellow-600 rounded-full'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Buttons = () => {
  return (
    <div className='w-full bottom-20 flex justify-end absolute right-10'>
      <div className='btns flex gap-5'>
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
