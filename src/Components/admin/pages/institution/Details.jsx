import { useEffect } from "react";
import {
  EducationIcon,
  EmailIcon,
  InstitutiionIcon,
  LocationIcon,
  PhoneIcon,
} from "../../assets/constants";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import useAdd from "../../hooks/useAdd";
import useDelete from "../../hooks/useDelete";
import useFetch from "../../hooks/useFetch";
import useUpdate from "../../hooks/useUpdate";
import { InstitutionLogo } from "../../assets/images";

export default function Details() {
  const { institutionData, handleFetctInstitution } = useFetch();

  const { addMessage } = useAdd();

  const { deleteMessage, deleteLoading, handleDelete } = useDelete();
  const { updateMessage } = useUpdate();

  useEffect(() => {
    handleFetctInstitution("api/institution/detail");
  }, [deleteMessage, updateMessage, addMessage]);

  return (
    <>
      <Header icon={<InstitutiionIcon />} title={"Institution Details"} />
      <DetailSection data={institutionData} />
      <OtherDetails />
    </>
  );
}

const DetailSection = ({ data }) => {
  return (
    <div className=' my-6 border rounded-md bg-[#FBFCFF]'>
      <div className=' px-8 relative py-3 flex gap-6 items-center'>
        <div className='w-20 '>
          <InstitutionLogo />
        </div>
        <div>
          <h3 className=' text-violet-800 text-[19px] font-semibold font-Poppins leading-7'>
            All India Institute of Medical Sciences , Delhi
          </h3>
          <p className="text-blue-900 text-sm font-medium font-['Poppins'] leading-7">
            The Master of Public Health (MPH) program offered by Indian
            Institute of Public Health .
          </p>
        </div>
        <div className='edit-btn absolute right-5 top-5 bg-violet-800 rounded border border-violet-800 border-opacity-10 justify-center items-center'>
          <button className='px-5 py-2 text-center text-white text-sm font-medium font-Poppins leading-normal tracking-tight'>
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
          <div className='flex gap-2 items-center'>
            <LocationIcon />
            <p className='text-blue-900 line-clamp-1 text-sm font-medium font-Poppins leading-7'>
              {data && data.address ? data.address : "---"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const OtherDetails = () => {
  return <div className='border rounded-md bg-[#FBFCFF]'>Other Details</div>;
};
