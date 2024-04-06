import {
  EducationIcon,
  EmailIcon,
  InstitutiionIcon,
  LocationIcon,
  PhoneIcon,
} from "../../assets/constants";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import { InstitutionLogo } from "../../assets/images";
import { useNavigate } from "react-router-dom";
export default function Details({ data }) {
  return (
    <>
      <Header icon={<InstitutiionIcon />} title={"Institution Details"} />
      <DetailSection data={data} />
      <OtherDetails />
    </>
  );
}

const DetailSection = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className=' my-6 border rounded-md bg-[#FBFCFF]'>
      <div className=' px-8 relative py-3 flex gap-6 items-center'>
        <div className='w-20 '>
          <InstitutionLogo />
        </div>
        <div>
          <h3 className=' text-violet-800 text-[19px] font-semibold font-Poppins leading-7'>
            {data.name ? data.name : "---"}
          </h3>
          <p className='text-blue-900 text-sm font-medium font-Poppins leading-7'>
            The Master of Public Health (MPH) program offered by Indian
            Institute of Public Health .
          </p>
        </div>
        <div className='edit-btn absolute right-5 top-5 bg-violet-800 rounded border border-violet-800 border-opacity-10 justify-center items-center'>
          <button
            onClick={() => navigate("/admin/institution/edit/" + data?.id)}
            className='px-5 py-2 text-center text-white text-sm font-medium font-Poppins leading-normal tracking-tight'
          >
            Edit Details
          </button>
        </div>
      </div>
      <div className=' p-8 grid grid-cols-4 relative gap-4'>
        <div className='card'>
          <p className='text-black text-opacity-50 text-[13px] font-normal font-Poppins leading-normal'>
            Email
          </p>
          <div className='flex gap-2 items-center'>
            <EmailIcon />
            <p className='text-blue-900 line-clamp-1 text-sm font-medium font-Poppins leading-7'>
              {data && data.email ? data.email : "---"}
            </p>
          </div>
        </div>
        <div className='card'>
          <p className='text-black text-opacity-50 text-[13px] font-normal font-Poppins leading-normal'>
            Phone Number 1
          </p>
          <div className='flex gap-2 items-center'>
            <PhoneIcon />
            <p className='text-blue-900 line-clamp-1 text-sm font-medium font-Poppins leading-7'>
              {data && data.phone_number ? data.phone_number : "---"}
            </p>
          </div>
        </div>

        <div className='card'>
          <p className='text-black text-opacity-50 text-[13px] font-normal font-Poppins leading-normal'>
            Phone Number 2
          </p>
          <div className='flex gap-2 items-center'>
            <PhoneIcon />
            <p className='text-blue-900 line-clamp-1 text-sm font-medium font-Poppins leading-7'>
              {data && data.second_phone_number
                ? data.second_phone_number
                : "---"}
            </p>
          </div>
        </div>
        <div className='card'>
          <p className='text-black text-opacity-50 text-[13px] font-normal font-Poppins leading-normal'>
            Industry
          </p>
          <div className='flex gap-2 items-center'>
            <EducationIcon />
            <p className='text-blue-900 line-clamp-1 text-sm font-medium font-Poppins leading-7'>
              {data && data.industry ? data.industry : "---"}
            </p>
          </div>
        </div>
        <div className='card'>
          <p className='text-black text-opacity-50 text-[13px] font-normal font-Poppins leading-normal'>
            Address
          </p>
          <div className='flex gap-2 items-start'>
            <div className='shrink-0 mt-1.5'>
              <LocationIcon />
            </div>
            <p className='text-blue-900 text-sm font-medium font-Poppins leading-7'>
              {data && data.address ? data.address : "---"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const OtherDetails = () => {
  return (
    <div className='border rounded-md p-3 bg-[rgb(251,252,255)]'>
      <div className='text-violet-800 border-b border-black pb-2 border-opacity-10 text-[17px] font-semibold font-Poppins leading-[27px]'>
        Other Details
      </div>
      {/* <div className='w-full opacity-10 mt-2 border border-black'></div> */}

      <div className='card-contaner mt-5 grid grid-cols-8 w-full gap-5'>
        <div className='col-span-2 '>
          <h3 className='text-blue-900 mb-4 mx-1 text-sm font-semibold font-Poppins leading-7'>
            Landing Page{" "}
          </h3>
          <ImageCard title={"Home Background Image"} />
        </div>
        <div className='line flex justify-center'>
          <div className='h-full border'></div>
        </div>

        <div className=' col-span-5 grid grid-cols-3 gap-3'>
          <div className='text-blue-900 col-span-full mb-4 mx-1 text-sm font-semibold font-Poppins leading-7'>
            User Login Page{" "}
          </div>
          <div className=''>
            <ImageCard url={""} title={"Login Page 1"} />
          </div>
          <div className=''>
            <ImageCard url={""} title={"Login Page "} />
          </div>
          <div className=''>
            <ImageCard url={""} title={"Login Page 3"} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageCard = ({ url, title }) => {
  return (
    <>
      <img
        className='object-cover w-full rounded-[5px]'
        src='https://via.placeholder.com/189x99'
        alt='landing_pape'
      />
      <div className='opacity-80 my-2 ml-1 text-slate-900 text-opacity-90 text-[13px] font-medium font-Poppins leading-normal'>
        {title}
      </div>
    </>
  );
};
