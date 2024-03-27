import React, { useEffect, useState } from "react";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import {
  AvatarIcon,
  DeleteIcon,
  FileIcon,
  LinkIcon,
  SitesIcon,
  ThreeDots,
} from "../../assets/constants";
import AddSection from "../../components/RightCommonComponents/AddSection";

export default function EditUser({ siteData }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const url = window.location.pathname.split("/");
    const id = url[url.length - 1];

    if (siteData && siteData.length > 0) {
      const founded = siteData.find((item) => String(item.id) === String(id));
      if (founded) {
        console.log("Founded :", founded);

        setData(founded);
      } else {
        setData({});
      }
    } else {
      setData({});
    }
  }, []);

  return (
    <>
      <Header icon={<SitesIcon />} title={"Site Details"} subTitle={"Sites"} />
      {data ? (
        <div className='mt-8 relative mx-3 bg-white'>
          <DetailSection />

          <div className='dots absolute right-8 top-6'>
            <ThreeDots />
          </div>

          <button
            style={{
              boxShadow: "0px 3px 6px 0px rgba(112, 144, 176, 0.05)",
              border: "rgba(34, 31, 185, 0.14)",
            }}
            className='flex absolute right-10 top-14 gap-2 w-[105px] h-[51px] shrink-0 justify-center items-center bg-white rounded-[7px]'
          >
            <div className='flex px-2 py-1 bg-gray-50 rounded-sm gap-1'>
              <div className=' bg-gray-50'>
                <DeleteIcon />
              </div>
              <p className='text-red-600 text-[13px] font-medium font-Poppins leading-7 bg-gray-50'>
                Delete
              </p>
            </div>
          </button>
          <div
            style={{
              boxShadow: "0px 10px 35px 1px rgba(112, 144, 176, 0.10);",
              broder: "1px solid rgba(34, 31, 185, 0.14)",
            }}
          >
            {data && (
              <AddSection
                edit={"Edit Site Details"}
                type1={"Site Name"}
                type2={"Site URL"}
                type3={"Category"}
                type4={"Description"}
                submitText={"Save Details"}
                siteData={data}
              />
            )}
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
}

const DetailSection = () => {
  return (
    <div className='border p-8 grid grid-cols-4 relative gap-6 rounded-md bg-[#FBFCFF]'>
      <div className='card-name col-span-1'>
        <p className='text-black/50 font-Poppins text-[13px] font-normal leading-6'>
          Site Name
        </p>
        <div className='flex gap-2 items-center'>
          <SitesIcon />
          <p className='text-[#103E7E] font-Poppins text-sm font-medium leading-7'>
            Steve Rogers
          </p>
        </div>
      </div>
      <div className='card-email col-span-2'>
        <p className='text-black/50 font-Poppins text-[13px] font-normal leading-6'>
          Site URL
        </p>
        <div className='flex gap-2 items-center'>
          <LinkIcon />
          <p className='text-[#103E7E] font-Poppins text-sm font-medium leading-7'>
            https://iridescent-zuccutto-b82237.netlify.app
          </p>
        </div>
      </div>

      <div className='card-phone col-span-1'>
        <p className='text-black/50 font-Poppins text-[13px] font-normal leading-6'>
          Category
        </p>
        <div className='flex gap-2 items-center'>
          <AvatarIcon />
          <p className='text-[#103E7E] font-Poppins text-sm font-medium leading-7'>
            Entertainment
          </p>
        </div>
      </div>

      <div className='card-address col-span-full'>
        <p className='text-black/50 font-Poppins text-[13px] font-normal leading-6'>
          Description
        </p>
        <div className='flex gap-2 items-center'>
          <div className='shrink-0'>
            <FileIcon />
          </div>
          <p className='text-[#103E7E]  font-Poppins text-sm font-medium leading-7'>
            Netflix is a global streaming platform offering a vast library of
            movies, TV shows, documentaries, and original content.
          </p>
        </div>
      </div>
    </div>
  );
};
