import { useParams } from "react-router-dom";
import { InstitutiionIcon, LinkIcon, UsersIcon } from "../../assets/constants";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import Hero from "../../components/category/Hero";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import { formatDate } from "../../utils/formateData";

import { GiProgression } from "react-icons/gi";
import { CiTimer } from "react-icons/ci";
import { MdSignalWifiStatusbarNotConnected } from "react-icons/md";
import Loader from "../../components/Loader/Loader";

export default function UserTaskDetail() {
  const {
    bulkUserTaskListDetailsLoading,
    bulkUserTaskListDetailsData,
    handleFetchBulkUserDetails,
  } = useFetch();

  const { id } = useParams();

  useEffect(() => {
    const apiUrl = `api/institution/tasks/${id}`;
    handleFetchBulkUserDetails(apiUrl);
  }, []);

  return (
    <>
      <Header
        icon={<UsersIcon />}
        title={"User Task Detail"}
        subTitle={"User"}
      />

      <Hero name={"User Status"} description={`User Task Detail.`} />
      <DetailSection
        data={bulkUserTaskListDetailsData}
        loading={bulkUserTaskListDetailsLoading}
      />
    </>
  );
}

const DetailSection = ({ data, loading }) => {
  if (loading) {
    return (
      <div className='flex w-full min-h-[60lvh] jujstify-center items-center'>
        <Loader />
      </div>
    );
  }
  return (
    <>
      <div className=' my-6 border rounded-md bg-[#FBFCFF]'>
        <div className=' px-8 relative py-3 flex gap-6 items-center'>
          <div className='w-1/3'>
            <p className='text-black text-opacity-50 text-[13px] font-normal font-Poppins leading-normal'>
              Institution
            </p>
            <div className='flex gap-3 items-baseline'>
              <div className='shrink-0 mt-1.5'>
                <InstitutiionIcon />
              </div>
              <h3 className=' text-violet-800 text-[19px] font-semibold font-Poppins leading-7'>
                {data.institution ? data.institution : "---"}
              </h3>
            </div>
          </div>
          <div>
            <p className='text-black text-opacity-50 text-[13px] font-normal font-Poppins leading-normal'>
              Task Id
            </p>
            <h3 className=' text-violet-800 text-[19px] font-semibold font-Poppins leading-7'>
              {data.task_id ? data.task_id : "---"}
            </h3>
          </div>
        </div>
        <div className=' p-8 grid grid-cols-4 relative gap-4'>
          <div className='card col-span-2'>
            <p className='text-black text-opacity-50 text-[13px] font-normal font-Poppins leading-normal'>
              Excel File Link
            </p>
            <div className='flex gap-2 items-center'>
              <div className='shrink-0 mt-1.5'>
                <LinkIcon />
              </div>
              <p className='text-blue-900  line-clamp-1 text-sm font-medium font-Poppins leading-7'>
                {data && data.excel_file ? data.excel_file : "---"}
              </p>
            </div>
          </div>
          <div className='card'>
            <p className='text-black text-opacity-50 text-[13px] font-normal font-Poppins leading-normal'>
              Status
            </p>
            <div className='flex gap-2 items-center'>
              <MdSignalWifiStatusbarNotConnected />
              <p className='text-blue-900 line-clamp-1 text-sm font-medium font-Poppins leading-7'>
                {data && data.status ? data.status : "---"}
              </p>
            </div>
          </div>

          <div className='card'>
            <p className='text-black text-opacity-50 text-[13px] font-normal font-Poppins leading-normal'>
              Progress
            </p>
            <div className='flex gap-2 items-center'>
              <GiProgression className='text-blue-900' />
              <p className='text-blue-900 line-clamp-1 text-sm font-medium font-Poppins leading-7'>
                {data && data.progress ? data.progress : "---"}
              </p>
            </div>
          </div>
          <div className='card'>
            <p className='text-black text-opacity-50 text-[13px] font-normal font-Poppins leading-normal'>
              Created At
            </p>
            <div className='flex gap-2 items-start'>
              <div className='shrink-0 mt-1.5'>
                <CiTimer />
              </div>
              <p className='text-blue-900 text-sm font-medium font-Poppins leading-7'>
                {data && data.created_at ? formatDate(data.created_at) : "---"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {data && data.error_message && data.error_message.length > 0 ? (
        <div className='p-8 my-6 border rounded-md bg-[#FBFCFF]'>
          <h3 className='text-red-800 text-2xl font-medium font-Poppins leading-7'>
            Errors:
          </h3>
          <ul className=' text-[19px] list-disc space-y-3 list-inside mt-4 font-Poppins leading-6'>
            {data.error_message.map((err, index) => {
              return <li key={index}>{err} </li>;
            })}
          </ul>
        </div>
      ) : null}
    </>
  );
};
