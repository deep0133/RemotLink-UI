import { useRef, useState } from "react";
import {
  CloudDownloadIcon,
  CrossIcon,
  DownloadIcon,
  ThickIcon,
  UsersIcon,
} from "../../assets/constants";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Pagination from "../../components/Pagination";

export default function BulkUser({
  templateLoading,
  templateDownload,
  uploadUserTemplateLoading,
  templateUploadFunction,
  bulkUserTaskListLoading,
  bulkUserTaskListData,
  totalItems,
  itemsPerPage,
  onPageChange,
}) {
  const [file, setFile] = useState(null);

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
        <HeroSection
          templateLoading={templateLoading}
          templateDownload={templateDownload}
          bulkUserTaskListData={bulkUserTaskListData}
        />
        <FileUpload
          setFile={setFile}
          error={["First Error", "Second Error", "Third Error"]}
          bulkUserTaskListData={
            bulkUserTaskListData && bulkUserTaskListData?.results
          }
        />
        <Buttons
          templateUploadFunction={templateUploadFunction}
          file={file}
          uploadUserTemplateLoading={uploadUserTemplateLoading}
        />

        <div className='card-container mt-16'>
          <Card
            data={bulkUserTaskListData && bulkUserTaskListData.results}
            path={"/admin/users/detail"}
            fetchLoading={bulkUserTaskListLoading}
          />
        </div>
        <Pagination
          previousLink={
            bulkUserTaskListData && bulkUserTaskListData.previous
              ? bulkUserTaskListData.previous
              : null
          }
          nextLink={
            bulkUserTaskListData && bulkUserTaskListData?.next
              ? bulkUserTaskListData?.next
              : null
          }
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
}

const HeroSection = ({ templateDownload, templateLoading }) => {
  return (
    <div className='space-y-2 '>
      <h3 className='text-black pb-2 text-sm font-medium font-Poppins leading-normal tracking-tight'>
        Download file format to add Bulk Users
      </h3>
      <button
        onClick={templateDownload}
        style={{
          border: "1px solid rgba(34, 31, 185, 0.20)",
        }}
        className='download-file-format flex gap-3 px-7 py-3 rounded-[5px] '
      >
        <CloudDownloadIcon />
        <p
          className={`text-sm text-[#103E7E] font-medium font-Poppins leading-normal tracking-tight ${
            templateLoading ? "animate-pulse" : ""
          }`}
        >
          {!templateLoading ? "Download File Format here" : "Downloading..."}
        </p>
      </button>
    </div>
  );
};

const FileUpload = ({ setFile, bulkUserTaskListData }) => {
  const uploadRef = useRef();

  const uploadFile = () => {
    uploadRef.current.click();
  };

  const onImageChangeHandler = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const progressValue =
    Math.floor(
      Number((bulkUserTaskListData && bulkUserTaskListData[0]?.progress) || 0)
    ) || 0;

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
          <DownloadIcon />
          <div onClick={uploadFile} className='content'>
            <input
              ref={uploadRef}
              type='file'
              onChange={onImageChangeHandler}
              className='hidden'
            />
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
              {bulkUserTaskListData && bulkUserTaskListData[0]
                ? bulkUserTaskListData[0]?.task_id
                : ""}
            </div>
          </div>

          <div
            style={{
              background: "rgba(93, 21, 184, 0.10)",
            }}
            className='progress-bar flex-1 shrink-0 w-full h-1.5 basis-full overflow-hidden rounded-full'
          >
            <div
              className={` h-1.5 bg-yellow-600 rounded-full`}
              style={{ width: progressValue + "%" }}
            ></div>
          </div>
        </div>
      </div>
      {/* <div className='error-list hidden my-6'>
        <h3 className='text-black lining-nums proportional-nums font-Poppins text-sm font-medium leading-6 '>
          Errors :
        </h3>
        <ul className='list-inside list-decimal space-y-2 mt-3'>
          {error &&
            error.map((err, index) => {
              return (
                <li className='text-black opacity-50 lining-nums proportional-nums font-Poppins text-sm font-medium'>
                  {err}
                </li>
              );
            })}
        </ul>
      </div> */}
    </div>
  );
};

const Buttons = ({
  file,
  uploadUserTemplateLoading,
  templateUploadFunction,
}) => {
  return (
    <div className='w-full flex justify-end absolute right-10'>
      <div className='btns flex gap-5'>
        <button
          onClick={() => {
            templateUploadFunction(file);
          }}
          className='w-[118px] px-[18px] py-2.5 bg-violet-800 rounded-[5px] border border-violet-800 text-white text-[13px] font-medium font-Poppins leading-normal'
        >
          {uploadUserTemplateLoading ? "Uplading..." : "Save Details"}
        </button>
      </div>
    </div>
  );
};

const Card = ({ data, fetchLoading, path }) => {
  return (
    <div
      style={{
        border: "1px solid rgba(34, 31, 185, 0.14)",
        boxShadow: "0px 13px 35px 1px rgba(112, 144, 176, 0.10)",
      }}
      className={`rounded-lg relative mt-5 ml-3 ${
        fetchLoading ? "overflow-hidden" : "overflow-auto"
      }`}
    >
      <div className='row-1 grid grid-cols-10  w-full p-5 border-b gap-5'>
        <div className='text-slate-400 col-span-2 text-sm font-medium font-Poppins leading-normal'>
          Task Id
        </div>
        <div className='text-slate-400 -ml-0.5 col-span-3 text-sm font-medium font-Poppins leading-normal'>
          Excel File
        </div>
        <div className='text-slate-400 col-span-2 -ml-1 text-sm font-medium font-Poppins leading-normal'>
          Status
        </div>
        <div className='text-slate-400 col-span-2 -ml-1.5 text-sm font-medium font-Poppins leading-normal'>
          Progress
        </div>
        <div className='text-slate-400 text-sm -ml-1.5 font-medium font-Poppins leading-normal'>
          Error
        </div>
      </div>

      <div className='card-container flex-1  px-3 py-2 w-full max-h-[380px] overflow-auto'>
        {!fetchLoading ? (
          Array.isArray(data) &&
          (data.length > 0 ? (
            data.map((val, index) => {
              return (
                <div key={index} className='card list flex-1 flex p-2'>
                  <div className='grid grid-cols-10 w-full gap-5'>
                    <h3 className='text-indigo-900 col-span-2 line-clamp-1 text-sm font-medium font-Poppins leading-7'>
                      {val.task_id ? val.task_id : "---"}
                    </h3>
                    <div className='text-indigo-900 col-span-3 line-clamp-1 flex-1 text-sm font-medium font-Poppins leading-7'>
                      {val.excel_file ? val.excel_file : "---"}
                    </div>
                    <div className='text-indigo-900 col-span-2 flex-1 text-sm font-medium font-Poppins leading-7'>
                      {val.status ? val.status : "---"}
                    </div>
                    <div className='text-indigo-900 col-span-2 flex-1 text-sm font-medium font-Poppins leading-7'>
                      {val.progress ? val.progress : "---"}
                    </div>
                    <div className='action flex items-center gap-3'>
                      <Link to={`${path}/${val.id}`} className='cursor-pointer'>
                        {val.error_message
                          ? val.error_message.length > 0
                            ? "Yes"
                            : "No"
                          : "---"}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className='text-lg p-5'>No Data Found</div>
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};
